'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { removeBookmark } from '@/lib/actions/companion.actions'
import { addBookmark } from '@/lib/actions/companion.actions'

interface CompanionCardProps {
  id: string
  name: string
  topic: string
  subject: string
  duration: number
  color: string
  bookmarked: boolean
}

const CompanionCard = ({
  id,
  name,
  topic,
  subject,
  duration,
  color,
  bookmarked,
}: CompanionCardProps) => {
  const pathname = usePathname()
  const handleBookmark = async () => {
    if (bookmarked) {
      await removeBookmark(id, pathname)
    } else {
      await addBookmark(id, pathname)
    }
  }

  return (
    <article className='companion-card' style={{ backgroundColor: color }}>
      <div className='flex items-center justify-between'>
        <div className='subject-badge'>{subject}</div>
        <button className='companion-bookmark' onClick={handleBookmark}>
          <Image
            src={
              bookmarked
                ? '/images/icons/bookmark-filled.svg'
                : '/images/icons/bookmark.svg'
            }
            alt='bookmark'
            width={12.5}
            height={15}
          />
        </button>
      </div>

      <h2 className='text-2xl font-bold'>{name}</h2>
      <p className='text-sm'>{topic}</p>
      <div className='flex items-center gap-2'>
        <Image
          src='/images/icons/clock.svg'
          alt='duration'
          width={13.5}
          height={13.5}
        />
        <p className='text-sm'>{duration} minutes</p>
      </div>

      <Link href={`/companions/${id}`} className='w-full'>
        <button className='btn-primary-cta w-full justify-center'>
          Launch Lesson
        </button>
      </Link>
    </article>
  )
}
export default CompanionCard
