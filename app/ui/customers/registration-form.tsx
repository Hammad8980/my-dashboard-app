'use client';

import { useState } from 'react';

export default function CustomerRegistrationForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    try {
      const response = await fetch('/api/customers/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, imageUrl }),
      });

      if (!response.ok) {
        throw new Error('Failed to register customer');
      }

      setName('');
      setEmail('');
      setImageUrl('');
      setSuccess('Customer registered successfully!');
    } catch (err) {
      setError('Error registering customer');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {error && <p className="text-red-500">{error}</p>}
      {success && <p className="text-green-500">{success}</p>}
      <div className="flex w-full flex-col md:col-span-4">
        <label htmlFor="name" className="mb-2 font-medium text-gray-700">Name</label>
        <input
          id="name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="rounded-md border border-gray-300 p-2"
        />
      </div>
      <div className="flex w-full flex-col md:col-span-4">
        <label htmlFor="email" className="mb-2 font-medium text-gray-700">Email</label>
        <input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="rounded-md border border-gray-300 p-2"
        />
      </div>
      <div className="flex w-full flex-col md:col-span-4">
        <label htmlFor="imageUrl" className="mb-2 font-medium text-gray-700">Image URL</label>
        <input
          id="imageUrl"
          type="text"
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
          className="rounded-md border border-gray-300 p-2"
        />
      </div>
      <button
        type="submit"
        className="mt-4 w-full rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
      >
        Register
      </button>
    </form>
  );
}
