import React from 'react'
import Image from 'next/image'


export default function Logo() {
  return (
   <section className='w-full mx-auto'>
    <Image
    className = "boarder-4 boarder-black dark:boarder-slate-500 drop-shadow-xl shadow black rounded full mx-auto mt-8"
    scr="/images/afobata-600x600.png"
    width= {200}
    height={200}
    alt = "topingnow"
    priority = {true}
    />
   </section>
  )
}
