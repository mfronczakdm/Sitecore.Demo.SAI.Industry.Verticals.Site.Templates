'use client';

import React, { useState } from 'react';

export const Default = () => {
  const [selectedYear, setSelectedYear] = useState('');
  const [selectedMake, setSelectedMake] = useState('');
  const [selectedModel, setSelectedModel] = useState('');

  const years = Array.from({ length: 25 }, (_, i) => 2024 - i);
  const makes = [
    'Chevrolet',
    'Ford',
    'Dodge',
    'GMC',
    'Ram',
    'Peterbilt',
    'Kenworth',
    'Freightliner',
    'Volvo',
    'Mack',
  ];
  const models = ['Silverado', 'F-150', 'F-250', 'F-350', 'F-450', 'F-550', 'F-650', 'F-750'];

  return (
    <div className="trp-home w-full bg-[#06539c]">
      {/* Vehicle Selection Component */}
      <section className="bg-gradient-to-b from-[#1a1a1a] to-[#2d2d2d] px-4 py-12">
        <div className="container mx-auto max-w-7xl">
          <div className="mb-8 text-center">
            <h2 className="mb-2 text-3xl font-bold text-white md:text-4xl">
              Find Parts for Your Vehicle
            </h2>
            <p className="text-lg text-gray-300">Select your vehicle to see compatible parts</p>
          </div>

          <div className="mx-auto max-w-4xl rounded-lg bg-white p-6 shadow-lg md:p-8">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
              {/* Year Selector */}
              <div>
                <label className="mb-2 block text-sm font-semibold text-gray-700">Year</label>
                <select
                  value={selectedYear}
                  onChange={(e) => setSelectedYear(e.target.value)}
                  className="w-full rounded-md border-2 border-gray-300 bg-white px-4 py-3 text-gray-800 focus:border-[#e01e26] focus:outline-none"
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
                <label className="mb-2 block text-sm font-semibold text-gray-700">Make</label>
                <select
                  value={selectedMake}
                  onChange={(e) => setSelectedMake(e.target.value)}
                  disabled={!selectedYear}
                  className="w-full rounded-md border-2 border-gray-300 bg-white px-4 py-3 text-gray-800 focus:border-[#e01e26] focus:outline-none disabled:cursor-not-allowed disabled:bg-gray-100"
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
                <label className="mb-2 block text-sm font-semibold text-gray-700">Model</label>
                <select
                  value={selectedModel}
                  onChange={(e) => setSelectedModel(e.target.value)}
                  disabled={!selectedMake}
                  className="w-full rounded-md border-2 border-gray-300 bg-white px-4 py-3 text-gray-800 focus:border-[#e01e26] focus:outline-none disabled:cursor-not-allowed disabled:bg-gray-100"
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
                className="rounded-md bg-[#e01e26] px-8 py-3 text-lg font-bold text-white transition-colors duration-200 hover:bg-[#c01a20] disabled:cursor-not-allowed disabled:bg-gray-400"
              >
                Find Parts
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Browse Parts Section */}
      <section className="bg-white px-4 py-16">
        <div className="container mx-auto max-w-7xl">
          <h2 className="mb-12 text-center text-3xl font-bold text-gray-900 md:text-4xl">
            Browse Parts by Category
          </h2>

          <div className="grid grid-cols-2 gap-6 md:grid-cols-4 lg:grid-cols-6">
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
                className="transform cursor-pointer rounded-lg bg-gray-50 p-6 text-center shadow-md transition-all duration-200 hover:scale-105 hover:bg-[#e01e26] hover:text-white"
              >
                <div className="mb-3 text-4xl">{category.icon}</div>
                <h3 className="text-sm font-semibold md:text-base">{category.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="bg-gray-100 px-4 py-16">
        <div className="container mx-auto max-w-7xl">
          <h2 className="mb-4 text-center text-3xl font-bold text-gray-900 md:text-4xl">
            Featured Products
          </h2>
          <p className="mb-12 text-center text-gray-600">Top-rated parts for your vehicle</p>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              { name: 'Heavy Duty Brake Pads', price: '$89.99', image: '🔧', rating: 4.8 },
              { name: 'Premium Air Filter', price: '$24.99', image: '🔍', rating: 4.9 },
              { name: 'Performance Exhaust System', price: '$349.99', image: '💨', rating: 4.7 },
              { name: 'Heavy Duty Battery', price: '$179.99', image: '⚡', rating: 4.8 },
            ].map((product, index) => (
              <div
                key={index}
                className="overflow-hidden rounded-lg bg-white shadow-md transition-shadow duration-200 hover:shadow-xl"
              >
                <div className="flex h-48 items-center justify-center bg-gray-200 text-6xl">
                  {product.image}
                </div>
                <div className="p-5">
                  <div className="mb-2 flex items-center">
                    <span className="text-sm text-yellow-400">★★★★★</span>
                    <span className="ml-2 text-sm text-gray-600">({product.rating})</span>
                  </div>
                  <h3 className="mb-2 font-semibold text-gray-900">{product.name}</h3>
                  <p className="mb-4 text-2xl font-bold text-[#e01e26]">{product.price}</p>
                  <button className="w-full rounded-md bg-[#e01e26] px-4 py-2 font-semibold text-white transition-colors duration-200 hover:bg-[#c01a20]">
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Videos Section */}
      <section className="bg-white px-4 py-16">
        <div className="container mx-auto max-w-7xl">
          <h2 className="mb-4 text-center text-3xl font-bold text-gray-900 md:text-4xl">
            Featured Videos
          </h2>
          <p className="mb-12 text-center text-gray-600">
            Learn how to install and maintain your parts
          </p>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {[
              { title: 'How to Replace Brake Pads', duration: '5:32', thumbnail: '🎥' },
              { title: 'Installing a New Air Filter', duration: '3:15', thumbnail: '🎥' },
              { title: 'Battery Maintenance Tips', duration: '4:48', thumbnail: '🎥' },
            ].map((video, index) => (
              <div
                key={index}
                className="cursor-pointer overflow-hidden rounded-lg bg-gray-900 transition-opacity duration-200 hover:opacity-90"
              >
                <div className="relative flex h-48 items-center justify-center bg-gray-800 text-6xl">
                  {video.thumbnail}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-opacity-50 rounded-full bg-black p-4">
                      <svg className="h-12 w-12 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                      </svg>
                    </div>
                  </div>
                  <div className="bg-opacity-75 absolute right-2 bottom-2 rounded bg-black px-2 py-1 text-sm text-white">
                    {video.duration}
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-white">{video.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sign Up and Save Section */}
      <section className="bg-gradient-to-r from-[#e01e26] to-[#c01a20] px-4 py-16">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">Sign Up and Save</h2>
          <p className="mb-8 text-lg text-white opacity-90">
            Join our loyalty program and get exclusive discounts, early access to sales, and free
            shipping on orders over $100
          </p>
          <div className="mx-auto flex max-w-md flex-col gap-4 md:flex-row">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 rounded-md px-4 py-3 text-gray-900 focus:ring-2 focus:ring-white focus:outline-none"
            />
            <button className="rounded-md bg-white px-8 py-3 font-bold text-[#e01e26] transition-colors duration-200 hover:bg-gray-100">
              Sign Up
            </button>
          </div>
          <p className="mt-4 text-sm text-white opacity-75">
            By signing up, you agree to receive marketing emails. Unsubscribe at any time.
          </p>
        </div>
      </section>

      {/* Why Choose TRP Section */}
      <section className="bg-white px-4 py-16">
        <div className="container mx-auto max-w-7xl">
          <h2 className="mb-12 text-center text-3xl font-bold text-gray-900 md:text-4xl">
            Why Choose TRP Parts?
          </h2>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {[
              {
                icon: '🚚',
                title: 'Free Shipping',
                description:
                  'Free shipping on orders over $100. Fast and reliable delivery to your door.',
              },
              {
                icon: '✅',
                title: 'Quality Guaranteed',
                description:
                  'All parts are tested and guaranteed to meet or exceed OEM specifications.',
              },
              {
                icon: '💳',
                title: 'Easy Returns',
                description:
                  "30-day return policy. If you're not satisfied, return it for a full refund.",
              },
            ].map((feature, index) => (
              <div key={index} className="text-center">
                <div className="mb-4 text-5xl">{feature.icon}</div>
                <h3 className="mb-3 text-xl font-bold text-gray-900">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Customer Reviews Section */}
      <section className="bg-gray-100 px-4 py-16">
        <div className="container mx-auto max-w-7xl">
          <h2 className="mb-12 text-center text-3xl font-bold text-gray-900 md:text-4xl">
            What Our Customers Say
          </h2>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
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
                review: "Best prices I've found online. Will definitely order again.",
                location: 'Florida',
              },
            ].map((review, index) => (
              <div key={index} className="rounded-lg bg-white p-6 shadow-md">
                <div className="mb-4 flex items-center">
                  <div className="text-lg text-yellow-400">{'★'.repeat(review.rating)}</div>
                </div>
                <p className="mb-4 text-gray-700 italic">&quot;{review.review}&quot;</p>
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
