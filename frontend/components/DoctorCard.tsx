interface DoctorCardProps {
    doctor: {
      name: string;
      specialization: string;
      experience: number;
      location: string;
      qualification: string;
      consultationFee: number;
      rating: number;
      imageUrl?: string;
    }
  }
  
  export default function DoctorCard({ doctor }: DoctorCardProps) {
    return (
      <div className="bg-white p-6 rounded-lg shadow-md">
        <div className="flex items-start space-x-4">
          <img
            src='/default-doctor.jpeg'
            alt={doctor.name}
            className="w-24 h-24 rounded-full object-cover"
          />
          <div className="flex-1">
            <h3 className="text-xl font-semibold text-gray-900">{doctor.name}</h3>
            <p className="text-gray-900">{doctor.specialization}</p>
            <p className="text-gray-900">{doctor.experience} years experience</p>
            <p className="text-gray-900">{doctor.qualification}</p>
            <div className="mt-4">
              <span className="text-green-600 font-semibold">₹{doctor.consultationFee}</span>
              <span className="text-gray-900"> per consultation</span>
            </div>
          </div>
        </div>
      </div>
    );
  }