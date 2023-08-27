import React from 'react'
import { GiFireDash } from 'react-icons/gi'
import styles from "../styles/gameLoader.module.css"
const Esportree = () => {
  return (
    <div className='bg-[#1a1a1a] h-[100vh] w-[100vw] flex flex-col justify-center items-center '>
        <div className='flex flex-row items-center mb-[30px]'>
        <GiFireDash className="text-[#ff3939] text-[50px]" />
        <span className='text-[35px] ml-[10px] italic text-[#f3f3f3]'>Esportsree</span>
        </div>
        <div class={`${styles.loader}`}></div>
         </div>
  )
}

export default Esportree