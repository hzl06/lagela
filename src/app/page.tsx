import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-8">
      <div className="text-center space-y-8 max-w-3xl">
        <h1 className="text-5xl md:text-7xl font-serif italic tracking-tight text-gray-900">
          La Gela Innovation
        </h1>
        <p className="text-xl md:text-2xl text-gray-700 font-light">
          We shape emotion through technology, art, and silence.
        </p>
        <p className="text-lg md:text-xl text-gray-600 italic">
          A poetic future, born from dreams.
        </p>
        <a
          href="#"
          className="inline-block mt-8 px-8 py-4 text-lg border border-gray-300 rounded-full hover:bg-white hover:bg-opacity-20 transition-all duration-300 hover:scale-105"
        >
          Enter the Dream
        </a>
      </div>
    </main>
  );
}
