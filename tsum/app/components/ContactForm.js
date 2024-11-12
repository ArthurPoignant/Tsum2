'use client'

import { useState } from 'react'

export default function ContactForm() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, message }),
      });
      if (response.ok) {
        setSubmitted(true);
      } else {
        // Handle error
        console.error('Form submission failed');
      }
    } catch (error) {
      console.error('An error occurred', error);
    }
  };

  if (submitted) {
    return (
      <div className="text-green-600 font-semibold">
        Thank you for your message. We'll get back to you soon!
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-lg backdrop-blur-2xl p-12 min-h-[50vh] w-2/3 rounded-lg border border-white/15 mb-24">
      <p className="mb-6 text-center text-white">
          Have a question or want to get in touch?
          <br />
          Fill out the form below and we'll get back to you as soon as possible.
        </p>
      <div className="mb-4">
        <label htmlFor="name" className="block mb-2 font-semibold text-white">Name</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="w-full px-3 py-2 border border-gray-300 rounded-md"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="email" className="block mb-2 font-semibold text-white">Email</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="w-full px-3 py-2 border border-gray-300 rounded-md"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="message" className="block mb-2 font-semibold text-white">Message</label>
        <textarea
          id="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
          rows="4"
          className="w-full px-3 py-2 border border-gray-300 rounded-md"
        ></textarea>
      </div>
      <button type="submit" className="bg-purple text-white px-4 py-2 rounded-md hover:bg-white hover:text-black border border-white/15">
        Send Message
      </button>
    </form>
  )
}
