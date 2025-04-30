export default function Header() {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <img src="/apolloo-logo.png" alt="Apollo 247" className="h-8" />
            <h1 className="text-3xl font-bold ml-4 text-black">Health Care </h1>
          </div>
          <nav className="hidden md:flex space-x-8">
            <a href="#" className="text-gray-600 hover:text-gray-900">Doctors</a>

          </nav>
        </div>
      </div>
    </header>
  );
}