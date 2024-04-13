import React from 'react';

export default function Footer() {
  return (
    <footer className='bg-gray-100 py-8'>
      <div className='container mx-auto px-4'>

        <div className='grid grid-cols-1 md:grid-cols-4 gap-8'>
          <div>
            <h3 className='text-lg font-semibold mb-4'>OFFLINE STORE</h3>
            <ul className='text-sm'>
              <li>Find Stores Near Me</li>
            </ul>
          </div>
          <div>
            <h3 className='text-lg font-semibold mb-4'>GET TO KNOW US</h3>
            <ul className='text-sm'>
              <li>Contact Us</li>
              <li>FAQ's</li>
              <li>Blogs</li>
              <li>Terms & Conditions</li>
            </ul>
          </div>
          <div>
            <h3 className='text-lg font-semibold mb-4'>TRACK OR RETURN/EXCHANGE ORDER</h3>
            <ul className='text-sm'>
              <li>TRACK ORDER</li>
              <li>PLACE RETURN/EXCHANGE REQUEST</li>
              <li>RETURNS/EXCHANGE POLICY</li>
            </ul>
          </div>
          <div>
            <h3 className='text-lg font-semibold mb-4'>CUSTOMER CARE</h3>
            <p className='text-sm mb-2'>Timings: 10 AM - 7 PM (Mon - Sat)</p>
            <p className='text-sm mb-2'>
              Whatsapp : +91 6366966283</p>
            <p className='text-sm'>
              Instagram: @snitch.co.in</p>
          </div>
        </div>
        <div className="text-center mt-8">
          <p className="text-gray-600">&copy; 2024 SNITCH</p>
          <p className="text-sm text-gray-600">Made in India, for the World 🌍</p>
        </div>
      </div>
    </footer>
  );
}
