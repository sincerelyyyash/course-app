"use client"
import React from 'react'
import { StickyScroll } from './ui/sticky-scroll-reveal'

const schoolContent = [
    {
      title: 'Unlock Your Potential: A Journey to Mastery in Development',
      description:
        'Embark on a journey tailored to your aspirations in software development. Our personalized instruction adapts to your individual needs, guiding you through mastering complex concepts and techniques. At our school, your goals meet our dedicated support, creating a harmonious path to mastery in development.',
    },
    {
      title: 'Cutting-Edge Curriculum',
      description:
        'Our curriculum evolves with the latest trends and technologies, ensuring you are always learning with the most current and effective methods in software development. Say goodbye to outdated materials and welcome an education that keeps pace with the industry.',
    },
    {
      title: 'Community Collaboration',
      description:
        'Join a vibrant community of learners and professionals where collaboration fuels creativity and innovation in software development projects. Our supportive community amplifies your learning experience, fostering connections and inspiring breakthroughs in your development journey.',
    },
  ];
  
function ChooseUs() {
  return (
    <div>
        <div>
        <StickyScroll content={schoolContent} />
    </div>
    </div>
  )
}

export default ChooseUs