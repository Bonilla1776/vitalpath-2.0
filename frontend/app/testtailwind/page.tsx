export default function TestTailwind() {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="bg-white p-8 rounded shadow-md text-center">
          <h1 className="text-2xl font-bold text-purple-600">Tailwind CSS is Working!</h1>
          <p className="mt-4 text-gray-700">This is a test page using Tailwind utility classes.</p>
          <button className="mt-6 px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700 transition">
            Click Me
          </button>
        </div>
      </div>
    );
  }
  