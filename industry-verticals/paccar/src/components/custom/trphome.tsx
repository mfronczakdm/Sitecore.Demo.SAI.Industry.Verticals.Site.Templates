'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ComponentProps } from 'lib/component-props';

interface TRPHomeProps extends ComponentProps {
  fields?: Record<string, unknown>;
}

export const Default = (props: TRPHomeProps) => {
  const { styles, RenderingIdentifier: id } = props.params || {};
  const [keyword, setKeyword] = useState('');
  const [crossReference, setCrossReference] = useState('');
  const [selectedMake, setSelectedMake] = useState('');
  const [vin, setVin] = useState('');

  const makes = [
    'Select Make',
    'Autocar',
    'CATERPILLAR',
    'Freightliner',
    'International',
    'ISUZU',
    'Kenworth',
    'Mack',
    'NA',
    'Peterbilt',
    'Sterling',
    'Volvo',
    'Western Star',
  ];

  return (
    <div className={`component trphome ${styles || ''}`.trim()} id={id}>
      {/* Vehicle Selection Component */}
      <section className="bg-linear-to-b from-[#06539c] to-[#06539c] px-4 py-8">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
            {/* Keyword, Part Number or VMRS code */}
            <div>
              <label className="mb-2 block text-sm font-semibold text-white">
                Keyword, or Part Number
              </label>
              <div className="relative">
                <input
                  type="text"
                  value={keyword}
                  onChange={(e) => setKeyword(e.target.value)}
                  placeholder="Keyword, or Part Number"
                  className="w-full rounded-md border-2 border-gray-300 bg-white px-4 py-3 pr-10 text-gray-800 focus:border-[#e01e26] focus:outline-none"
                />
                <svg
                  className="absolute top-1/2 right-3 h-5 w-5 -translate-y-1/2 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>
            </div>

            {/* Cross Reference */}
            <div>
              <label className="mb-2 block text-sm font-semibold text-white">Cross Reference</label>
              <div className="relative">
                <input
                  type="text"
                  value={crossReference}
                  onChange={(e) => setCrossReference(e.target.value)}
                  placeholder="Cross Reference"
                  className="w-full rounded-md border-2 border-gray-300 bg-white px-4 py-3 pr-10 text-gray-800 focus:border-[#e01e26] focus:outline-none"
                />
                <svg
                  className="absolute top-1/2 right-3 h-5 w-5 -translate-y-1/2 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>
            </div>

            {/* Make/Model */}
            <div>
              <label className="mb-2 block text-sm font-semibold text-white">Make/Model</label>
              <select
                value={selectedMake}
                onChange={(e) => setSelectedMake(e.target.value)}
                className="w-full rounded-md border-2 border-gray-300 bg-white px-4 py-3 text-gray-800 focus:border-[#e01e26] focus:outline-none"
              >
                {makes.map((make) => (
                  <option key={make} value={make === 'Select Make' ? '' : make}>
                    {make}
                  </option>
                ))}
              </select>
            </div>

            {/* VIN */}
            <div>
              <label className="mb-2 block text-sm font-semibold text-white">VIN</label>
              <div className="relative">
                <input
                  type="text"
                  value={vin}
                  onChange={(e) => setVin(e.target.value)}
                  placeholder="Enter VIN"
                  className="w-full rounded-md border-2 border-gray-300 bg-white px-4 py-3 pr-10 text-gray-800 focus:border-[#e01e26] focus:outline-none"
                />
                <svg
                  className="absolute top-1/2 right-3 h-5 w-5 -translate-y-1/2 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>
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
              {
                name: 'Heavy Duty Brake Pads',
                price: '$89.99',
                imageUrl:
                  'https://retail-verticals.sitecoresandbox.cloud/api/public/content/b51a0d1c650e456ea990644171e61c4c?v=c7faf6f4',
                rating: 4.8,
              },
              {
                name: 'Premium Air Filter',
                price: '$24.99',
                imageUrl:
                  'https://retail-verticals.sitecoresandbox.cloud/api/public/content/952f997256ce4cbbb4777c9288b7ed14?v=a5049569',
                rating: 4.9,
              },
              {
                name: 'Performance Exhaust',
                price: '$349.99',
                imageUrl:
                  'https://retail-verticals.sitecoresandbox.cloud/api/public/content/9f7034647fa04972816503da8ef46c77?v=2dbfd0ed',
                rating: 4.7,
              },
              {
                name: 'Heavy Duty Battery',
                price: '$179.99',
                imageUrl:
                  'https://retail-verticals.sitecoresandbox.cloud/api/public/content/5487f0b1dd504a7693caab8a486f8027?v=55098426',
                rating: 4.8,
              },
            ].map((product, index) => (
              <div
                key={index}
                className="overflow-hidden rounded-lg bg-white shadow-md transition-shadow duration-200 hover:shadow-xl"
              >
                <div className="relative h-48 w-full bg-gray-200">
                  <Image
                    src={product.imageUrl}
                    alt={product.name}
                    fill
                    className="object-cover"
                    unoptimized
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  />
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
      <section className="bg-linear-to-r from-[#e01e26] to-[#c01a20] px-4 py-16">
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

export const Personalized = (props: TRPHomeProps) => {
  const { styles, RenderingIdentifier: id } = props.params || {};
  const [keyword, setKeyword] = useState('');
  const [crossReference, setCrossReference] = useState('');
  const [selectedMake, setSelectedMake] = useState('Kenworth');
  const [vin, setVin] = useState('1XKAD49X8DJ123456');

  const makes = [
    'Select Make',
    'Autocar',
    'CATERPILLAR',
    'Freightliner',
    'International',
    'ISUZU',
    'Kenworth',
    'Mack',
    'NA',
    'Peterbilt',
    'Sterling',
    'Volvo',
    'Western Star',
  ];

  return (
    <div className={`component trphome ${styles || ''}`.trim()} id={id}>
      {/* Vehicle Selection Component */}
      <section className="bg-linear-to-b from-[#06539c] to-[#06539c] px-4 py-8">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
            {/* Keyword, Part Number or VMRS code */}
            <div>
              <label className="mb-2 block text-sm font-semibold text-white">
                Keyword, Part Number or VIN
              </label>
              <div className="relative">
                <input
                  type="text"
                  value={keyword}
                  onChange={(e) => setKeyword(e.target.value)}
                  placeholder="Keyword, part number or VIN"
                  className="w-full rounded-md border-2 border-gray-300 bg-white px-4 py-3 pr-10 text-gray-800 focus:border-[#e01e26] focus:outline-none"
                />
                <svg
                  className="absolute top-1/2 right-3 h-5 w-5 -translate-y-1/2 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>
            </div>

            {/* Cross Reference */}
            <div>
              <label className="mb-2 block text-sm font-semibold text-white">Cross Reference</label>
              <div className="relative">
                <input
                  type="text"
                  value={crossReference}
                  onChange={(e) => setCrossReference(e.target.value)}
                  placeholder="Cross Reference"
                  className="w-full rounded-md border-2 border-gray-300 bg-white px-4 py-3 pr-10 text-gray-800 focus:border-[#e01e26] focus:outline-none"
                />
                <svg
                  className="absolute top-1/2 right-3 h-5 w-5 -translate-y-1/2 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>
            </div>

            {/* Make/Model */}
            <div>
              <label className="mb-2 block text-sm font-semibold text-white">Make/Model</label>
              <select
                value={selectedMake}
                onChange={(e) => setSelectedMake(e.target.value)}
                className="w-full rounded-md border-2 border-gray-300 bg-white px-4 py-3 text-gray-800 focus:border-[#e01e26] focus:outline-none"
              >
                {makes.map((make) => (
                  <option key={make} value={make === 'Select Make' ? '' : make}>
                    {make}
                  </option>
                ))}
              </select>
            </div>

            {/* VIN */}
            <div>
              <label className="mb-2 block text-sm font-semibold text-white">VIN</label>
              <div className="relative">
                <input
                  type="text"
                  value={vin}
                  onChange={(e) => setVin(e.target.value)}
                  placeholder="Enter VIN"
                  className="w-full rounded-md border-2 border-gray-300 bg-white px-4 py-3 pr-10 text-gray-800 focus:border-[#e01e26] focus:outline-none"
                />
                <svg
                  className="absolute top-1/2 right-3 h-5 w-5 -translate-y-1/2 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Survey CTA Section */}
      <section className="bg-[#e01e26] px-4 py-8">
        <div className="container mx-auto max-w-7xl">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <div className="text-center md:text-left">
              <h2 className="text-2xl font-bold text-white md:text-3xl">
                You had service recently, tell us how we did
              </h2>
            </div>
            <Link
              href="/survey"
              className="rounded-md bg-white px-8 py-3 font-bold text-[#e01e26] transition-colors duration-200 hover:bg-gray-100"
            >
              Take Survey
            </Link>
          </div>
        </div>
      </section>

      {/* Browse Parts Section */}
      <section className="bg-white px-4 py-16">
        <div className="container mx-auto max-w-7xl">
          <h2 className="mb-12 text-center text-3xl font-bold text-gray-900 md:text-4xl">
            Browse parts for your W900
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
              {
                name: 'Heavy Duty Brake Pads',
                price: '$89.99',
                imageUrl:
                  'https://retail-verticals.sitecoresandbox.cloud/api/public/content/b51a0d1c650e456ea990644171e61c4c?v=c7faf6f4',
                rating: 4.8,
              },
              {
                name: 'Premium Air Filter',
                price: '$24.99',
                imageUrl:
                  'https://retail-verticals.sitecoresandbox.cloud/api/public/content/952f997256ce4cbbb4777c9288b7ed14?v=a5049569',
                rating: 4.9,
              },
              {
                name: 'Performance Exhaust',
                price: '$349.99',
                imageUrl:
                  'https://retail-verticals.sitecoresandbox.cloud/api/public/content/9f7034647fa04972816503da8ef46c77?v=2dbfd0ed',
                rating: 4.7,
              },
              {
                name: 'Heavy Duty Battery',
                price: '$179.99',
                imageUrl:
                  'https://retail-verticals.sitecoresandbox.cloud/api/public/content/5487f0b1dd504a7693caab8a486f8027?v=55098426',
                rating: 4.8,
              },
            ].map((product, index) => (
              <div
                key={index}
                className="overflow-hidden rounded-lg bg-white shadow-md transition-shadow duration-200 hover:shadow-xl"
              >
                <div className="relative h-48 w-full bg-gray-200">
                  <Image
                    src={product.imageUrl}
                    alt={product.name}
                    fill
                    className="object-cover"
                    unoptimized
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  />
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
