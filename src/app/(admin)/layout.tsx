'use client'

import React from 'react'
import AppHeader from '@/layout/AppHeader'
import AppMain from '@/layout/AppMain'
import AppSidebar from '@/layout/AppSidebar'
import { cn } from '@/lib/utils'
import { useSidebar } from '@/components/ui/sidebar'

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const { isExpanded, isMobile, isMobileOpen } = useSidebar()

  // Dynamic class for main content margin based on sidebar state
  const mainContentMargin = isMobile
    ? 'ml-0'
    : isExpanded
      ? 'lg:ml-[18rem]'
      : 'lg:ml-[5.6rem]'

  return (
    <>
      {/* Sidebar and Backdrop */}
      <AppSidebar />
      {/* <Backdrop /> */}
      {/* Main Content Area */}
      <div
        className={cn(
          'flex-1 transition-all duration-300 ease-in-out',
          mainContentMargin
        )}
      >
        {/* Header  */}
        <AppHeader />
        <AppMain>{children}</AppMain>
      </div>
    </>
  )
}
