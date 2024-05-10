import React from 'react'
import Image from 'next/image'
import ErrorPic from '../../public/assets/ERROR.gif'
import Link from 'next/link'

const Notfound = () => {
  return (
    <>  
    <Link href="/">
    <button className='pointer'> 
    <div className='text-3xl font-bold text-orange-300 absolute flex justify-center items-center w-full h-full'>Not Found</div>
    <Image src= {ErrorPic} alt='error' className='w-screen h-screen z-1'/>
    </button>
    </Link>
    </>
  )
}

export default Notfound