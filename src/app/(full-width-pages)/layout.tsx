'use client';

import Footer from '@/layout/footer'
import Image from 'next/image';
import Link from 'next/link';
import NavItems from '@/components/nav-items';


export default function FullWidthPageLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className='text-gray-dark flex min-h-screen flex-1 flex-col dark:text-white'>
      <nav className='navbar'>
        <Link href='/'>
          <div className='flex cursor-pointer items-center gap-2.5'>
            <Image
              src='/images/logo/logo-converso.svg'
              alt='logo'
              width={46}
              height={44}
            />
          </div>
        </Link>
        <div className='flex items-center gap-2'>
          <NavItems />
        </div>
      </nav>
      <div className='flex-1'>{children}</div>
      <Footer />
    </div>
  )
}