'use client';

import React, { FormEvent, useState } from 'react';
import { Button } from "@/components/ui/moving-border";
import { BackgroundBeams } from '@/components/ui/background-beams';

function ContactUs() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log('Submitted:', { email, message });
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-black py-12 pt-36 relative">
      <div className="max-w-2xl mx-auto p-4 relative z-10">

        <h1 className="mt-20 md:mt-0 text-2xl md:text-7xl 
            font-bold bg-clip-text text-transparent 
            bg-gradient-to-b from-neutral-50 to-neutral-400 text-center">
          Contact Us
        </h1>
        <p className="mt-4 font-normal text-base md:text-lg text-neutral-300 max-w-lg mx-auto">
          We&apos;re here to help with any questions about our courses,
          programs, or events. Reach out and let us know how we can assist you
          in your development journey.
        </p>
        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your email address"
            className="rounded-lg border border-neutral-800 focus:ring-2 focus:ring-blue-400 w-full p-4 bg-neutral-950 placeholder:text-neutral-700"
            required
          />
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Your message"
            className="rounded-lg border border-neutral-800 focus:ring-2 focus:ring-blue-400 w-full p-4 bg-neutral-950 placeholder:text-neutral-700"
            rows={5}
            required
          ></textarea>
          <Button
            type="submit"
            className="px-6 py-2 rounded-lg bg-black text-white font-medium hover:text-blue-400 focus:outline-none focus:ring-2 focus:ring-offset-2"
          >
            Send Message
          </Button>
        </form>
      </div>
      <BackgroundBeams />
    </div>
  );
}

export default ContactUs;