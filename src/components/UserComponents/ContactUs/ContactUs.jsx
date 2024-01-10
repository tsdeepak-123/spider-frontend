import { Button } from '@mui/material';
import React from 'react';

function ContactUs() {
  return (
    <div className='mr-56'>
    <div className="max-w-screen-md mx-auto mt-8 p-6 bg-white rounded-md">
      <h1 className="text-3xl font-bold mb-6">Contact Us</h1>
      <form onSubmit={""}>
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-600 font-semibold mb-2">
            Name:
          </label>
          <input
            type="text"
            className="w-full md:w-96 lg:w-full border border-gray-300 rounded-md p-2"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-600 font-semibold mb-2">
            Email:
          </label>
          <input
            type="email"
            className="w-full md:w-96 lg:w-full border border-gray-300 rounded-md p-2"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="block text-gray-600 font-semibold mb-2">
            Message:
          </label>
          <textarea
            className="w-full md:w-96 lg:w-full border border-gray-300 rounded-md p-2"
            rows="4"
            required
          />
        </div>
     <div className='flex justify-center'>
     <Button variant="contained" style={{backgroundColor: 'black'}}>Send Messege</Button>
     </div>
      </form>
    </div>
    </div>
  );
}

export default ContactUs;
