
import CompanionForm from '@/components/ui/companion-components/CompanionForm'
import { newCompanionPermisson } from '@/lib/actions/companion.actions'
import { auth } from '@clerk/nextjs/server'
import Image from 'next/image'
import Link from 'next/link'
import { redirect } from 'next/navigation'
import React from 'react'

const NewCompanion = async () => {
  const { userId } = await auth();
  if(!userId) redirect('/sign-in');

  const canCreateCompanion = await newCompanionPermisson();
  return (
    <main className='min-lg:w-1/3 min-md:w-2/3 items-center justify-center'>
      {canCreateCompanion ? (
      <article className='w-full gap-4 flex flex-col'>
        <h1>Companion Builder</h1>
        <CompanionForm />
      </article>
      ) : 
      (
        <article>
        <Image width={360} height={230} src="/images/logo/limit.svg" alt="Companion limit reached" />
        <div className='cta-badge'>
          Upgrade your plan
        </div>
        <h1 className=''>You’ve Reached Your Limit</h1>
        <p>You’ve reached your companion limit. Upgrade to create more companions and premium features.</p>
        <Link href="/subscription" className="btn-primary-cta w-full justify-center" >Upgrade My Plan</Link>
      </article>
      )}
    </main>
  )
}

export default NewCompanion