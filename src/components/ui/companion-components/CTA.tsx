import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

const Cta = () => {
  return (
    <section className='cta-section'>
      <div className='cta-badge'>Start learning your way</div>
      <h2 className='text-3xl font-bold'>
        Build and Personalize Learning Companion
      </h2>
      <p>
        Pick a name, subject voice, & personality - and start learning through
        voice conversations that feel natural and fun.
      </p>
      <Image src='/images/logo/cta.svg' alt='cta' width={362} height={232} />
      <Button className='flex flex-row rounded-md border-t-cyan-300 bg-amber-600 text-blue-600 hover:text-white'>
        <Image src='/images/icons/plus.svg' alt='plus' width={15} height={15} />
        <Link href='/companions/new'>
          <p>Build a New Companion</p>
        </Link>
      </Button>
    </section>
  )
}
export default Cta
