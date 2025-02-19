import React from 'react'

const Hero = () => {
  return (
    <div className="container mx-auto mt-50 px-4">
      <form className='max-w-md mx-auto bg-white/80 backdrop-blur-sm p-8 rounded-lg shadow-lg 
        transform transition-all duration-300 hover:shadow-xl hover:scale-[1.02]'>
        <h1 className="text-2xl font-bold text-gray-800 mb-6 text-center 
          hover:text-blue-600 transition-colors duration-300">Save your Password</h1>
        <div className="space-y-4">
          <div className="form-group">
            <h2 className="text-sm font-medium text-gray-700 mb-1 
              transform transition-all duration-200 hover:translate-x-1">Add your website</h2>
            <input className='w-full px-4 py-2 rounded-md border border-gray-300 
              focus:outline-none focus:ring-2 focus:ring-blue-500
              transition-all duration-300 hover:border-blue-400
              transform hover:-translate-y-0.5' type="url" placeholder='Enter your website URL' />
          </div>
          <div className="form-group">
            <h2 className="text-sm font-medium text-gray-700 mb-1 
              transform transition-all duration-200 hover:translate-x-1">Add your email</h2>
            <input className='w-full px-4 py-2 rounded-md border border-gray-300 
              focus:outline-none focus:ring-2 focus:ring-blue-500
              transition-all duration-300 hover:border-blue-400
              transform hover:-translate-y-0.5' type="email" placeholder='Enter your email' />
          </div>
          <div className="form-group">
            <h2 className="text-sm font-medium text-gray-700 mb-1 
              transform transition-all duration-200 hover:translate-x-1">Add your password</h2>
            <input className='w-full px-4 py-2 rounded-md border border-gray-300 
              focus:outline-none focus:ring-2 focus:ring-blue-500
              transition-all duration-300 hover:border-blue-400
              transform hover:-translate-y-0.5' type="password" placeholder='Enter your password' />
          </div>
        </div>
        <button className="w-full mt-6 px-4 py-2 bg-blue-500 text-white rounded-md 
          hover:bg-blue-600 transition-all duration-300 
          transform hover:scale-[1.02] hover:shadow-lg
          active:scale-95" type='submit'>Create Account</button>
      </form>
    </div>
  )
}

export default Hero
