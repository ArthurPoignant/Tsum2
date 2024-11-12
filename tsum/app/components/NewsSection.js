'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import dynamic from 'next/dynamic';

const Slider = dynamic(() => import('react-slick'), { ssr: false });

const newsItems = [
  {
    id: 1,
    title: "New Album Release: 'Depresión Vampírica' by pink satan",
    excerpt: "Tsum Records is proud to announce the release of 'Depresión Vampírica', the latest album from our top artist...",
    date: "2023-05-15",
    image: "/PINKSATANcover.jpeg",
  },
  {
    id: 2,
    title: "Upcoming Event: Tsum III feat. Aexhy",
    excerpt: "Join us for Tsum III, featuring performances from all your favorite Tsum Records artists...",
    date: "2023-06-01",
    image: "/TSUMIII.jpeg",
  },
  {
    id: 3,
    title: "Upcoming Event: Tsum x GIB",
    excerpt: "Join us for Tsum x GIB, featuring performances from all your favorite Tsum Records artists...",
    date: "2023-05-22",
    image: "/GIBxTSUM.jpeg",
  },
];

export default function NewsSection() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    arrows: false,
  };

  return (
    <section className="backdrop-blur-2xl py-12 min-h-[50vh] sm:w-5/6 md:w-2/3 mx-auto rounded-lg border border-white/15 mb-24">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-white">Latest News</h2>
        {isClient && (
          <Slider {...settings}>
            {newsItems.map((item) => (
              <div key={item.id} className="px-2">
                <div className="bg-black rounded-lg shadow-md overflow-hidden h-full border border-white/30">
                  <div className="p-6 flex flex-col md:flex-row items-center">
                    <div className="md:w-1/3 mb-4 md:mb-0 md:mr-6">
                      <Image
                        src={item.image}
                        alt={item.title}
                        width={300}
                        height={200}
                        className="rounded-lg object-cover w-full h-48"
                      />
                    </div>
                    <div className="md:w-2/3">
                      <h3 className="text-xl text-white font-semibold mb-2">{item.title}</h3>
                      <p className="text-gray-400 mb-4">{item.excerpt}</p>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-500">{item.date}</span>
                        <Link href={`/news/${item.id}`} className="text-white bg-purple hover:bg-white px-4 py-2 rounded-md hover:underline hover:text-black">
                          Read more
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        )}
      </div>
    </section>
  );
}
