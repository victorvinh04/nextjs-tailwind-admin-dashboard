"use client";
import * as React from "react"

import { NavUser } from "@/components/nav-user"
import { TeamSwitcher } from "@/components/team-switcher"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarHeader, SidebarMenuButton, SidebarMenuItem,
  SidebarRail,
  useSidebar,
} from '@/components/ui/sidebar'
import { sidebarData } from './data/sidebar-data'

import { usePathname } from "next/navigation";
import { NavGroup } from "@/components/nav-group";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from 'next/link'
import { Command } from 'lucide-react'


export default function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>){
  const pathname = usePathname();

  return (
    <Sidebar collapsible="icon" variant='floating' {...props}>
      <SidebarHeader>
        {/*<TeamSwitcher teams={sidebarData.teams} />*/}
      </SidebarHeader>
      <SidebarContent>
        {sidebarData.navGroups.map((props) => ( 
          <NavGroup key={props.title} {...props} />
        ))}
      </SidebarContent>
      <SidebarFooter className="pb-4">        
        <div className="flex items-center justify-center">
            <NavUser user={sidebarData.user} />
        </div>
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
};


