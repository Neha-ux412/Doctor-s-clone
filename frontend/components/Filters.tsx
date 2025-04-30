interface FiltersProps {
    filters: {
      specialization: string;
      location: string;
      experience: string;
      page: number;
    };
    setFilters: (filters: any) => void;
  }
  
  export default function Filters({ filters, setFilters }: FiltersProps) {
    return (
      <div className="bg-white p-4 rounded-lg shadow">
        <h2 className="text-lg font-semibold mb-4 text-black">Filters</h2>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-black">Location</label>
            <select
              value={filters.location}
              onChange={(e) => setFilters({ ...filters, location: e.target.value })}
              className="mt-1 block w-full rounded-md border border-black text-black shadow-sm focus:border-black focus:ring-black"
            >
              <option value="">All Locations</option>
              <option value="Mumbai">Mumbai</option>
              <option value="Delhi">Delhi</option>
              <option value="Bangalore">Bangalore</option>
              <option value="Hyderabad">Hyderabad</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-black">Experience</label>
            <select
              value={filters.experience}
              onChange={(e) => setFilters({ ...filters, experience: e.target.value })}
              className="mt-1 block w-full rounded-md border border-black text-black shadow-sm focus:border-black focus:ring-black"
            >
              <option value="">Any Experience</option>
              <option value="5">5+ Years</option>
              <option value="10">10+ Years</option>
              <option value="15">15+ Years</option>
            </select>
          </div>
        </div>
      </div>
    );
  }
  