"use client";
import Link from "next/link";
import courceData from "../utils/cources.json";
import { BackgroundGradient } from "./ui/background-gradient";
interface Course {
  id: number;
  title: string;
  slug: string;
  description: string;
  price: number;
  instructor: string;
  isFeatured: boolean;
}
function FeaturedCourse() {
  const featuredCourses = courceData.courses.filter(
    (course: Course) => course.isFeatured
  );
  return (
    <div className="w-full bg-gray-900 py-12  flex-col flex items-center">
      <div>
        <h1 className="text-center tracking-wide text-teal-600 uppercase text-lg md:text-xl">
          FEATURED COURSES
        </h1>
        <p className="text-center tracking-tight text-3xl text-white md:text-5xl ">
          Learn With The Best
        </p>
      </div>
      <div className="mt-10 px-4 sm:px-0 md:px-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
        {featuredCourses.map((course: Course) => (
          <div key={course.id}>
            <BackgroundGradient>
              <div className="flex gap-1 min-h-56 justify-center sm:gap-3 text-black dark:text-white flex-col rounded-[22px] items-center text-center px-3 sm:px-12 py-8 bg-white dark:bg-zinc-900 overflow-hidden h-full max-w-sm">
                <h1 className="font-bold text-lg sm:text-xl">{course.title}</h1>
                <p className="text-sm">{course.description}</p>
                <Link href={`${course.slug}`}>Learn More</Link>
              </div>
            </BackgroundGradient>
          </div>
        ))}
      </div>
        <div className="mt-20 text-center">
            <Link
            href="/courses"
            className="px-4 py-2 bg-white text-neutral-900 font-bold rounded-sm "
            >
            View All Courses
            </Link>
        </div>
    </div>
  );
}

export default FeaturedCourse;
