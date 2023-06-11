import React from 'react'

const Navbar = () => {
  return (
    <div className=' w-screen bg-black h-[80px]'>
        <div className='flex justify-between items-center text-white h-full p-[var(--desktop-padding)]'>
            <span>Logo</span>
            <ul className='flex justify-center items-center gap-8'>
                <li>About</li>
                <li>Projects</li>
                <li>Contact</li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar