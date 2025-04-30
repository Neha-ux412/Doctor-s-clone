'use client';

import { useState, useEffect } from 'react';
import Header from '@/components/Header';
import DoctorCard from '@/components/DoctorCard';
import Filters from '@/components/Filters';

interface Doctor {
  _id: string;
  name: string;
  specialization: string;
  experience: number;
  location: string;
  qualification: string;
  consultationFee: number;
  rating: number;
  imageUrl?: string;
}

export default function DoctorsListing() {
  const [doctors, setDoctors] = useState<Doctor[]>([]);
  const [filters, setFilters] = useState({
    specialization: 'general-physician',
    location: '',
    experience: '',
    page: 1
  });

  useEffect(() => {
    fetchDoctors();
    
    console.log('Doctors data:', doctors);
  }, [filters]);

  const fetchDoctors = async () => {
    try {
      const queryParams = new URLSearchParams({
        ...filters,
        page: filters.page.toString()
      });
      
      const response = await fetch(`/api/doctors/list-doctors?${queryParams}`);
      const data = await response.json();
      setDoctors(data.doctors);
    } catch (error) {
      console.error('Error fetching doctors:', error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8 text-black">General Physicians & Internal Medicine</h1>
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-3">
            <Filters filters={filters} setFilters={setFilters} />
          </div>
          <div className="col-span-9">
            <div className="grid grid-cols-1 gap-6">
              {doctors.map((doctor) => (
                <DoctorCard key={doctor._id} doctor={doctor} />
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}