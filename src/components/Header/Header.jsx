import React from 'react'
import { useSelector } from 'react-redux';
import gates from '../Header/bg.jfif'

const Header = () => {
  const budget = useSelector((state) => state.products.budget);
  return (
    <div className='p-10 flex flex-col items-center  '>
          <img src={ gates } alt="" className='object-contain w-[20rem] h-[10rem]  mb-4' />
          <h1 className=' text-2xl font-bold mb-5'>Spend Bill Gates' Money</h1>
          <h1 className='  text-xl font-bold'> { budget } $</h1>
    </div>
  )
}

export default Header