import React from 'react'
import CloudServices from './cloudServices'

const OurTechnologyForDEvelopement = () => {
  return (
    <section className="pt-4 pb-4 bg-[#FFFFFF] relative overflow-hidden">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl text-left font-bold leading-tight text-black dark:text-white sm:text-lg lg:text-3xl mb-3">
                Our Technologies<br className="block sm:hidden" />
                </h2>
                <CloudServices />
            </div>
        </section>
  )
}

export default OurTechnologyForDEvelopement
