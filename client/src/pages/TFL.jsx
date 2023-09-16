import React from 'react';

const TFL = () => {
  return (
    <section
        className="grid grid-cols-1 md:grid-cols-2 w-full"
        id="home"
      >
    <div className='h-screen bg-darkBg text-lightModeTextColor'>
      <div className="container mx-auto py-8">
        <div className="flex space-x-4">
          {/* Card 1 */}
          <div className="flex-shrink-0 bg-white rounded-lg shadow-md p-4">
            <h2 className="text-xl font-semibold mb-2">Card 1</h2>
            <p className="text-gray-600">Total Users</p>
          </div>

          {/* Card 2 */}
          <div className="flex-shrink-0 bg-white rounded-lg shadow-md p-4">
            <h2 className="text-xl font-semibold mb-2">Card 2</h2>
            <p className="text-gray-600">Total Funds L</p>
          </div>

          {/* Card 3 */}
          <div className="flex-shrink-0 bg-white rounded-lg shadow-md p-4">
            <h2 className="text-xl font-semibold mb-2">Card 3</h2>
            <p className="text-gray-600">Total People Secured</p> 
          </div>
        </div>
      </div>
    </div>
    </section>
  );
}

export default TFL;



