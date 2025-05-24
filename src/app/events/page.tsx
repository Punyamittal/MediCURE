export default function EventsPage() {
  return (
    <div className="space-y-8">
      <section className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Upcoming Cultural Events
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Discover and join cultural events happening in your area
        </p>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Example event cards - these would be populated from an API */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="text-sm text-gray-500 mb-2">June 15, 2024</div>
          <h3 className="text-xl font-semibold mb-2 text-primary">Storytelling Night</h3>
          <p className="text-gray-600 mb-4">Join us for an evening of captivating stories from local storytellers.</p>
          <div className="flex items-center text-sm text-gray-500">
            <span>📍 Community Center</span>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="text-sm text-gray-500 mb-2">June 20, 2024</div>
          <h3 className="text-xl font-semibold mb-2 text-primary">Art Exhibition Opening</h3>
          <p className="text-gray-600 mb-4">Experience the latest works from emerging local artists.</p>
          <div className="flex items-center text-sm text-gray-500">
            <span>📍 City Gallery</span>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="text-sm text-gray-500 mb-2">June 25, 2024</div>
          <h3 className="text-xl font-semibold mb-2 text-primary">Cultural Festival</h3>
          <p className="text-gray-600 mb-4">A celebration of diverse cultures through music, dance, and food.</p>
          <div className="flex items-center text-sm text-gray-500">
            <span>📍 Central Park</span>
          </div>
        </div>
      </section>
    </div>
  );
} 