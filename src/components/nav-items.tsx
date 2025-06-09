'use client'

import {
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from '@clerk/nextjs'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'

interface NavItem {
  label: string
  href: string
}

const navItems: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'Learning Companions', href: '/companions' },
  { label: 'My Journey', href: 'my-journey' },
]

// @ts-ignore
const NavItems: React.FC = () => {
  const pathname = usePathname()
  return (
    <nav className='items- flex justify-between gap-4'>
      {navItems.map(({ label, href }) => (
        <Link
          href={href}
          key={label}
          className={cn(pathname === href && 'font-semibold text-amber-900')}
        >
          {label}
        </Link>
      ))}
      <SignedOut>
        <SignInButton>
          <button className='btn-signin'>Sign In</button>
        </SignInButton>
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn>
    </nav>
  )
}

export default NavItems
