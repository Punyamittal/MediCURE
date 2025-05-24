export default function ArtistsPage() {
  return (
    <div className="space-y-8">
      <section className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Local Artists
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Discover talented artists in your community
        </p>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Example artist cards - these would be populated from an API */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="aspect-square bg-gray-200 rounded-lg mb-4"></div>
          <h3 className="text-xl font-semibold mb-2 text-primary">Sarah Johnson</h3>
          <p className="text-gray-600 mb-4">Contemporary painter specializing in abstract landscapes</p>
          <div className="flex items-center text-sm text-gray-500">
            <span>🎨 Painting</span>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="aspect-square bg-gray-200 rounded-lg mb-4"></div>
          <h3 className="text-xl font-semibold mb-2 text-primary">Michael Chen</h3>
          <p className="text-gray-600 mb-4">Digital artist creating immersive installations</p>
          <div className="flex items-center text-sm text-gray-500">
            <span>💻 Digital Art</span>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="aspect-square bg-gray-200 rounded-lg mb-4"></div>
          <h3 className="text-xl font-semibold mb-2 text-primary">Emma Rodriguez</h3>
          <p className="text-gray-600 mb-4">Sculptor working with recycled materials</p>
          <div className="flex items-center text-sm text-gray-500">
            <span>🗿 Sculpture</span>
          </div>
        </div>
      </section>
    </div>
  );
} 