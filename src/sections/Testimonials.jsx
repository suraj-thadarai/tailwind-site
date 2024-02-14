import React from 'react'
import { clients } from '../exports'
import ClientGrid from '../components/ClientGrid'

const Testimonials = () => {
  return (
    <section id="testimonials" className='w-full flex flex-col gap-5 h-fit p-7 lg:p-20'>
      <p className='text-center text-xl'>Testimonials</p>
      <h1 className='text-green-600 font-bold text-6xl text-center leading-[68px]'>What Client Says</h1>
      <p className='text-slate-950 text-2xl text-center'>Lorem ipsum dolor, sit amet consectetur adipisicing elit.<br /> Harum ut similique repudiandae quam tempore fuga deserunt assumenda eveniet veritatis explicabo.</p>
      <div className='flex flex-col lg:flex-row justify-center items-center mt-5 w-full gap-6'>
        {
          clients.map((client) => (
            <div key={client.name} className='w-80'>
              <ClientGrid {...client} />
            </div>
          ))
        }
      </div>
    </section>
  )
}

export default Testimonials