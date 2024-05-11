"use client"
import React from 'react'
import { InfiniteMovingCards } from './ui/infinite-moving-cards';

const devSchoolTestimonials = [
    {
      quote:
        'Enrolling in the development courses here transformed my understanding of software engineering and helped me to truly discover my potential. The instructors are exceptional!',
      name: 'Alex Johnson',
      title: 'Software Engineering Student',
    },
    {
      quote:
        "The community and support at this school are unparalleled. I've grown not just as a coder, but also as a problem solver, thanks to their comprehensive approach.",
      name: 'Samantha Lee',
      title: 'Web Development Student',
    },
    {
      quote:
        "This school offered me the tools and confidence to take my programming skills to the next level. I'm endlessly grateful for the personalized coaching.",
      name: 'Michael Chen',
      title: 'Software Development Student',
    },
    {
      quote:
        'As a budding developer, finding the right mentor can be challenging, but this school matched me with instructors who truly understand my goals and challenges.',
      name: 'Emily Taylor',
      title: 'Programming Student',
    },
    {
      quote:
        'The courses here opened my eyes to the intricacies of software development. Highly recommend for any aspiring developers!',
      name: 'Chris Morales',
      title: 'Full Stack Developer Student',
    },
  ];
  

function TestimonialCards() {
  return (
    <div className="h-[40rem] w-full dark:bg-black dark:bg-dot-white/[0.2] bg-dot-black/[0.2] relative flex flex-col items-center justify-center overflow-hidden">
        <h2 className="text-3xl font-bold text-center mb-8 z-10">Success Stories: The Path of Software Development</h2>
        <div className="flex justify-center w-full overflow-hidden px-4 sm:px-6 lg:px-8">
        <div className='w-full max-w-6xl'>
            <InfiniteMovingCards 
            items={devSchoolTestimonials}
            direction='right'
            speed='slow'
            />
        </div>
        </div>
    </div>
  )
}

export default TestimonialCards