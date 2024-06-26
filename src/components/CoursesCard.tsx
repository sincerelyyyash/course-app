"use client"
import React, { Key } from 'react'
import courseData from "../data/courses.json"
import Link from 'next/link'
import { Button } from './ui/moving-border'
import { BackgroundGradient } from './ui/background-gradient'


interface Course {
        id: Number,
        title: String,
        slug: String,
        description: String,
        price: Number,
        instructor: String,
        isFeatured: Boolean,
        image: String 
}


function CoursesCard() {
    const courses = courseData.courses.filter((course: Course) => course.isFeatured)

  return (
    <div className='py-12'>
        <div>
            <div className="text-center">
                <h2 className="text-base text-blue-800 
                font-semibold tracking-wide uppercase">Featured Courses</h2>
                <p
                className="mt-2 text-3xl leading-8 
                font-extrabold tracking-tight text-white 
                sm:text-4xl"
                >Learn with the Best</p>
            </div>
        </div>
        <div className='mt-10'>
            <div className='grid grid-cols-1 sm:grid-cols-2
            lg:grid-cols-3 gap-8 justify-center'>
                {courses.map((course:Course)=> (
                    <div key={course.id as Key} className='flex justify-center'>
                        <BackgroundGradient className="flex flex-col rounded-[22px] p-4 sm:p-10 bg-black dark:bg-black overflow-hidden h-full max-w-sm">
                        <div className="p-4 sm:p-6 flex flex-col items-center text-center flex-grow">
                            <p className="text-lg sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">{course.title}</p>
                            <p className="text-sm text-neutral-600 dark:text-neutral-400 flex-grow">{course.description}</p>
                            <Link href={`/courses/${course.slug}`}>
                                Learn More
                            </Link>
                        </div>
                        </BackgroundGradient>
                    </div>
                ))}
            </div>
        </div>
        <div className='mt-20 text-center'>
            <Link href={"/courses"}
            >
            <Button borderRadius='1.75rem'
                    className=" dark:bg-black text-black dark:text-white border-neutral-200 dark:border-slate-800"
                    >
                        View All Courses
                    </Button>
            </Link>
        </div>
    </div>
  )
}

export default CoursesCard