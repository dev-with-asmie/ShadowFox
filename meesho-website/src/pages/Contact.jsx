import React from 'react'
import Title from '../components/Title'

const Contact = () => {
  return (
    <div className='border-t pt-10 text-pink-900'>

      {/* Heading */}
      <div className='text-center mb-10'>
        <Title text1={'CONTACT'} text2={'US'} />
        <p className='text-gray-600 mt-2 text-sm'>
          Need help? We're here for you.
        </p>
      </div>

      {/* Main Container */}
      <div className='max-w-4xl mx-auto bg-white shadow-md rounded-lg p-6'>

        {/* Help Section */}
        <div className='mb-8'>
          <h2 className='text-lg font-semibold mb-2'>Customer Support</h2>
          <p className='text-gray-600 text-sm'>
            For any queries related to orders, returns, refunds, or account issues, feel free to reach out to us.
          </p>
        </div>

        {/* Contact Details */}
        <div className='grid sm:grid-cols-2 gap-6 text-sm'>

          <div>
            <p className='font-medium'>📧 Email Support</p>
            <p className='text-gray-600'>support@meesho-clone.com</p>
          </div>

          <div>
            <p className='font-medium'>📞 Phone Support</p>
            <p className='text-gray-600'>+91 9876543210</p>
          </div>

          <div>
            <p className='font-medium'>🕒 Working Hours</p>
            <p className='text-gray-600'>Mon - Sat, 10 AM - 9 PM</p>
          </div>

          <div>
            <p className='font-medium'>📍 Address</p>
            <p className='text-gray-600'>
              Bengaluru, Karnataka, India
            </p>
          </div>

        </div>

        {/* Divider */}
        <hr className='my-6'/>

        {/* Note */}
        <p className='text-xs text-gray-500 text-center'>
          We are here to help you always. 
        </p>

      </div>

    </div>
  )
}

export default Contact