'use client'

import * as React from 'react'
import { usePathname } from 'next/navigation'
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from '@/components/ui/sidebar'
import { NavGroup } from '@/components/nav-group'
import { NavUser } from '@/components/nav-user'
import { sidebarData } from './data/sidebar-data'

export default function AppSidebar({
  ...props
}: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible='icon' variant='floating' {...props}>
      <SidebarHeader>
        {/*<TeamSwitcher teams={sidebarData.teams} />*/}
      </SidebarHeader>
      <SidebarContent>
        {sidebarData.navGroups.map((props) => (
          <NavGroup key={props.title} {...props} />
        ))}
      </SidebarContent>
      <SidebarFooter className='pb-4'>
        <div className='flex items-center justify-center'>
          <NavUser user={sidebarData.user} />
        </div>
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
