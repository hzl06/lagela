export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8">
      <div className="text-center space-y-8 max-w-3xl">
        <h2 className="text-3xl font-serif italic text-gray-900">
          Page Not Found
        </h2>
        <p className="text-lg text-gray-600">
          The page you are looking for does not exist.
        </p>
        <a
          href="/"
          className="inline-block mt-8 px-8 py-4 text-lg border border-gray-300 rounded-full hover:bg-white hover:bg-opacity-20 transition-all duration-300 hover:scale-105"
        >
          Return Home
        </a>
      </div>
    </div>
  );
} 