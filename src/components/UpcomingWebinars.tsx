"use client";

import Link from "next/link";
import { HoverEffect } from "./ui/card-hover-effect";
function UpcomingWebinars() {
  const featuredWebinars = [
    {
      title: "Understanding Music Theory",
      description:
        "Dive deep into the fundamentals of music theory and enhance your musical skills.",
      slug: "understanding-music-theory",
      isFeatured: true,
    },
    {
      title: "The Art of Songwriting",
      description:
        "Learn the craft of songwriting from experienced musicians and songwriters.",
      slug: "the-art-of-songwriting",
      isFeatured: true,
    },
    {
      title: "Mastering Your Instrument",
      description:
        "Advanced techniques to master your musical instrument of choice.",
      slug: "mastering-your-instrument",
      isFeatured: true,
    },
    {
      title: "Music Production Essentials",
      description:
        "Get started with music production with this comprehensive overview.",
      slug: "music-production-essentials",
      isFeatured: true,
    },
    // Added two more webinars
    {
      title: "Live Performance Techniques",
      description:
        "Enhance your live performance skills with expert tips and strategies.",
      slug: "live-performance-techniques",
      isFeatured: true,
    },
    {
      title: "Digital Music Marketing",
      description:
        "Learn how to promote your music effectively in the digital age.",
      slug: "digital-music-marketing",
      isFeatured: true,
    },
  ];
  return (
    <div className="w-full">
      <div className="text-center w-full py-20">
        <h2 className="uppercase text-lg sm:text-xl text-teal-600 tracking-wide">
          Featured Webinars
        </h2>
        <p className="tracking-tight text-3xl sm:text-4xl">
          Join our upcoming webinars to learn Best
        </p>
      </div>
      <div className="w-full sm:px-12">
        <HoverEffect
          items={featuredWebinars.map((webinar) => ({
            title: webinar.title,
            description: webinar.description,
            link: "/",
          }))}
        />
      </div>
      <div className="mt-12 flex justify-center">
        <Link
          href="/"
          className="px-4 py-2 bg-white text-neutral-900 font-bold rounded-sm "
        >
          View All Courses
        </Link>
      </div>
    </div>
  );
}

export default UpcomingWebinars;
