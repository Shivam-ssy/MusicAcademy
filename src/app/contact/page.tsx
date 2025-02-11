'use client';

import { BackgroundBeams } from "@/components/ui/background-beams";
import { FormEvent, useState } from "react";

function Contact() {
    const [email, setEmail] = useState<string>('');
    const [message, setMessage] = useState<string>('');
    const handleSubmit = (event:FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log('Submitted:', { email, message });
    }
  return (
    <div className='min-h-screen w-full flex flex-col items-center'>
        <div className="max-w-xl">
      <h1 className='mt-32 text-center font-bold text-3xl sm:text-4xl'>Contact Us</h1>
      <p className="text-center text-sm px-5 mt-4">We're here to help with any questions about our courses, programs, or events. Reach out and let us know how we can assist you in your musical journey.</p>
        </div>
        <form onSubmit={handleSubmit} className='flex w-full max-w-xl flex-col items-center px-5 mt-8'>
            <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type='email'
                placeholder='Email'
                className='border-2 border-gray-300 bg-black/20 rounded-md p-2 w-full focus:outline-none focus:ring-2 focus:shadow-lg focus:shadow-teal-400 focus:ring-teal-500 focus:border-transparent'
            />
            <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder='Message'
                className='border border-gray-300 bg-black/20 rounded-md p-2 focus:shadow-lg focus:shadow-teal-400 w-full h-40 mt-8 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent'
            />
            <button
                type='submit'
                className='bg-teal-500 text-white hover:shadow-lg hover:shadow-teal-400 px-4 py-2 rounded-md mt-8 hover:bg-teal-600 transition-colors duration-300'
            >
                Submit
            </button>
        </form>
        <BackgroundBeams/>
    </div>
  )
}

export default Contact
