import React from 'react'
import CloudServices from './cloudServices'

const OurTechnologyForDEvelopement = () => {
  return (
    <section className="pt-10 pb-20 bg-[#345635] relative overflow-hidden">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-xl text-left font-bold leading-tight text-black dark:text-white sm:text-lg lg:text-xl mb-3">
                The Technology Used In Software Devlopment<br className="block sm:hidden" />
                </h2>
                <CloudServices />
            </div>
        </section>
  )
}

export default OurTechnologyForDEvelopement
