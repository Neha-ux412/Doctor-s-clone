import Image from "next/image";

export default function Home() {
  return (
    <main
      className="flex min-h-screen flex-col items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: "url('/background.png')" }}
    >
      <div className="text-center bg-grey-900 bg-opacity-60 p-5 rounded-xl ">
        <h1 className="text-4xl font-bold mb-4">Health Care Mini Project</h1>
        <a 
          href="/specialties/general-physician-internal-medicine" 
          className="text-blue-600 hover:text-green-800 p-20 underline"
        >
          View General Physicians
        </a>
      </div>
    </main>
  );
}
