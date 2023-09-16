import React from 'react'

const SubcribeComponent = () => {
  return (
    <div className="flex items-center justify-center mt-24 border-yellow">
      <div className='border-yellow absolute  bg-yellow py-10 px-12 rounded-2xl md:flex items-center justify-center gap-9 shadow-[0px_15px_30px_10px_rgba(0,0,0,0.2)]'>
        <div className='flex items-center justify-center gap-5'> 
          <div className='text-xl text-black '>
            Subscribe To Our Relief Newsletter
          </div>
          <div className='flex gap-1'>
            <input type="text" className='p-4 border border-black rounded-lg' placeholder='Enter Your Mail' />
            <button className='p-4 rounded-lg bg-black text-yellow border-yellow'>Subscribe</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SubcribeComponent