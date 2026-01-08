'use client';

import React, { useState } from 'react';

export const Default = () => {
  const [selectedYear, setSelectedYear] = useState('');
  const [selectedMake, setSelectedMake] = useState('');
  const [selectedModel, setSelectedModel] = useState('');

  const years = Array.from({ length: 25 }, (_, i) => 2024 - i);
  const makes = ['Chevrolet', 'Ford', 'Dodge', 'GMC', 'Ram', 'Peterbilt', 'Kenworth', 'Freightliner', 'Volvo', 'Mack'];
  const models = ['Silverado', 'F-150', 'F-250', 'F-350', 'F-450', 'F-550', 'F-650', 'F-750'];

  return (
    <div className="trp-home w-full">
      {/* Vehicle Selection Component */}
      <section className="bg-gradient-to-b from-[#1a1a1a] to-[#2d2d2d] py-12 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">Find Parts for Your Vehicle</h2>
            <p className="text-gray-300 text-lg">Select your vehicle to see compatible parts</p>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* Year Selector */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Year</label>
                <select
                  value={selectedYear}
                  onChange={(e) => setSelectedYear(e.target.value)}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-md focus:border-[#e30613] focus:outline-none text-gray-800 bg-white"
                >
                  <option value="">Select Year</option>
                  {years.map((year) => (
                    <option key={year} value={year}>
                      {year}
                    </option>
                  ))}
                </select>
              </div>

              {/* Make Selector */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Make</label>
                <select
                  value={selectedMake}
                  onChange={(e) => setSelectedMake(e.target.value)}
                  disabled={!selectedYear}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-md focus:border-[#e30613] focus:outline-none text-gray-800 bg-white disabled:bg-gray-100 disabled:cursor-not-allowed"
                >
                  <option value="">Select Make</option>
                  {makes.map((make) => (
                    <option key={make} value={make}>
                      {make}
                    </option>
                  ))}
                </select>
              </div>

              {/* Model Selector */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Model</label>
                <select
                  value={selectedModel}
                  onChange={(e) => setSelectedModel(e.target.value)}
                  disabled={!selectedMake}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-md focus:border-[#e30613] focus:outline-none text-gray-800 bg-white disabled:bg-gray-100 disabled:cursor-not-allowed"
                >
                  <option value="">Select Model</option>
                  {models.map((model) => (
                    <option key={model} value={model}>
                      {model}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="mt-6 text-center">
              <button
                disabled={!selectedYear || !selectedMake || !selectedModel}
                className="bg-[#e30613] hover:bg-[#c10510] text-white font-bold py-3 px-8 rounded-md transition-colors duration-200 disabled:bg-gray-400 disabled:cursor-not-allowed text-lg"
              >
                Find Parts
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Browse Parts Section */}
      <section className="bg-white py-16 px-4">
        <div className="container mx-auto max-w-7xl">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">Browse Parts by Category</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {[
              { name: 'Engine', icon: '🔧' },
              { name: 'Transmission', icon: '⚙️' },
              { name: 'Brakes', icon: '🛑' },
              { name: 'Suspension', icon: '🚗' },
              { name: 'Electrical', icon: '⚡' },
              { name: 'Filters', icon: '🔍' },
              { name: 'Exhaust', icon: '💨' },
              { name: 'Cooling', icon: '❄️' },
              { name: 'Fuel System', icon: '⛽' },
              { name: 'Body Parts', icon: '🚙' },
              { name: 'Interior', icon: '🪑' },
              { name: 'Lighting', icon: '💡' },
            ].map((category, index) => (
              <div
                key={index}
                className="bg-gray-50 hover:bg-[#e30613] hover:text-white rounded-lg p-6 text-center cursor-pointer transition-all duration-200 transform hover:scale-105 shadow-md"
              >
                <div className="text-4xl mb-3">{category.icon}</div>
                <h3 className="font-semibold text-sm md:text-base">{category.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="bg-gray-100 py-16 px-4">
        <div className="container mx-auto max-w-7xl">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-4">Featured Products</h2>
          <p className="text-center text-gray-600 mb-12">Top-rated parts for your vehicle</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: 'Heavy Duty Brake Pads', price: '$89.99', image: '🔧', rating: 4.8 },
              { name: 'Premium Air Filter', price: '$24.99', image: '🔍', rating: 4.9 },
              { name: 'Performance Exhaust System', price: '$349.99', image: '💨', rating: 4.7 },
              { name: 'Heavy Duty Battery', price: '$179.99', image: '⚡', rating: 4.8 },
            ].map((product, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-200"
              >
                <div className="bg-gray-200 h-48 flex items-center justify-center text-6xl">
                  {product.image}
                </div>
                <div className="p-5">
                  <div className="flex items-center mb-2">
                    <span className="text-yellow-400 text-sm">★★★★★</span>
                    <span className="text-gray-600 text-sm ml-2">({product.rating})</span>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">{product.name}</h3>
                  <p className="text-2xl font-bold text-[#e30613] mb-4">{product.price}</p>
                  <button className="w-full bg-[#e30613] hover:bg-[#c10510] text-white font-semibold py-2 px-4 rounded-md transition-colors duration-200">
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Videos Section */}
      <section className="bg-white py-16 px-4">
        <div className="container mx-auto max-w-7xl">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-4">Featured Videos</h2>
          <p className="text-center text-gray-600 mb-12">Learn how to install and maintain your parts</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'How to Replace Brake Pads', duration: '5:32', thumbnail: '🎥' },
              { title: 'Installing a New Air Filter', duration: '3:15', thumbnail: '🎥' },
              { title: 'Battery Maintenance Tips', duration: '4:48', thumbnail: '🎥' },
            ].map((video, index) => (
              <div
                key={index}
                className="bg-gray-900 rounded-lg overflow-hidden cursor-pointer hover:opacity-90 transition-opacity duration-200"
              >
                <div className="relative h-48 bg-gray-800 flex items-center justify-center text-6xl">
                  {video.thumbnail}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-black bg-opacity-50 rounded-full p-4">
                      <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                      </svg>
                    </div>
                  </div>
                  <div className="absolute bottom-2 right-2 bg-black bg-opacity-75 text-white px-2 py-1 rounded text-sm">
                    {video.duration}
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="text-white font-semibold">{video.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sign Up and Save Section */}
      <section className="bg-gradient-to-r from-[#e30613] to-[#c10510] py-16 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Sign Up and Save</h2>
          <p className="text-white text-lg mb-8 opacity-90">
            Join our loyalty program and get exclusive discounts, early access to sales, and free shipping on orders over $100
          </p>
          <div className="flex flex-col md:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-md text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <button className="bg-white text-[#e30613] font-bold py-3 px-8 rounded-md hover:bg-gray-100 transition-colors duration-200">
              Sign Up
            </button>
          </div>
          <p className="text-white text-sm mt-4 opacity-75">
            By signing up, you agree to receive marketing emails. Unsubscribe at any time.
          </p>
        </div>
      </section>

      {/* Why Choose TRP Section */}
      <section className="bg-white py-16 px-4">
        <div className="container mx-auto max-w-7xl">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">Why Choose TRP Parts?</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: '🚚',
                title: 'Free Shipping',
                description: 'Free shipping on orders over $100. Fast and reliable delivery to your door.',
              },
              {
                icon: '✅',
                title: 'Quality Guaranteed',
                description: 'All parts are tested and guaranteed to meet or exceed OEM specifications.',
              },
              {
                icon: '💳',
                title: 'Easy Returns',
                description: '30-day return policy. If you\'re not satisfied, return it for a full refund.',
              },
            ].map((feature, index) => (
              <div key={index} className="text-center">
                <div className="text-5xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Customer Reviews Section */}
      <section className="bg-gray-100 py-16 px-4">
        <div className="container mx-auto max-w-7xl">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">What Our Customers Say</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: 'John D.',
                rating: 5,
                review: 'Great quality parts and fast shipping. My truck runs like new!',
                location: 'Texas',
              },
              {
                name: 'Sarah M.',
                rating: 5,
                review: 'Excellent customer service. They helped me find exactly what I needed.',
                location: 'California',
              },
              {
                name: 'Mike R.',
                rating: 5,
                review: 'Best prices I\'ve found online. Will definitely order again.',
                location: 'Florida',
              },
            ].map((review, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6">
                <div className="flex items-center mb-4">
                  <div className="text-yellow-400 text-lg">
                    {'★'.repeat(review.rating)}
                  </div>
                </div>
                <p className="text-gray-700 mb-4 italic">"{review.review}"</p>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-semibold text-gray-900">{review.name}</p>
                    <p className="text-sm text-gray-600">{review.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

