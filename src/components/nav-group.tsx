"use client"
import { ReactNode } from 'react'

import { Collapsible } from '@radix-ui/react-collapsible';
import { NavCollapsible, NavItem, NavLink, type NavGroup } from '@/types/data-sidebar';
import { SidebarGroup, SidebarGroupLabel, SidebarMenu, SidebarMenuButton, SidebarMenuItem, SidebarMenuSub, SidebarMenuSubButton, SidebarMenuSubItem, useSidebar } from "./ui/sidebar";
import { CollapsibleContent, CollapsibleTrigger } from './ui/collapsible';
import { Badge } from './ui/badge';
import Link from 'next/link';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from './ui/dropdown/dropdown-menu';
import { ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { usePathname } from 'next/navigation';
import { HorizontaLDots } from '@/icons';

export function NavGroup({title, items}: NavGroup){
const { state, isExpanded, isMobile } = useSidebar();
    
    return (
        <>
            <h2
                className={`mb-4 text-xs uppercase flex leading-[20px] text-gray-400 ${
                  !isExpanded
                    ? "lg:justify-center"
                    : "justify-start"
                }`}
              >
                {isExpanded || isMobile ? (
                  title
                ) : (
                  <HorizontaLDots />
                )}
            </h2>
            <SidebarMenu>
                {items.map((item) => {
                    const key = `${item.title}-${item.href}`;

                    if(!item.items){
                        return (
                            <SidebarMenuLink key={key} item={item} href={item?.href} />
                        )
                    }

                    if(state === "collapsed")
                        return (
                            <SidebarMenuCollapsedDropdown key={key} item={item} href={item?.href ?? ''} />
                        )

                    return <SidebarMenuCollapsible key={key} item={item} href={item?.href ?? ''} />
                })
                }
            </SidebarMenu>
        </>
    )
}

const SidebarMenuLink = ({ item, href }: { item: NavLink, href: string }) => {
    const { setOpenMobile } = useSidebar();
    return (
        <SidebarMenuItem>
            <SidebarMenuButton asChild isActive={checkIsActive(href, item)} tooltip={item.title}>
                <Link href={item.href} onClick={() => setOpenMobile(false)}>
                    {item.icon && <item.icon />}
                    <span>{item.title}</span>
                    {item.badge && <NavBadge>{item.badge}</NavBadge>}
                </Link>
            </SidebarMenuButton>
        </SidebarMenuItem>
    )
}

const NavBadge = ({ children }: { children: ReactNode }) => (
    <Badge className="rounded-full px-1 py-0 text-xs">{children}</Badge>
)

const SidebarMenuCollapsible = ({
    item,
    href,
}: {
    item: NavCollapsible,
    href: string,
}) => {
    const { setOpenMobile } = useSidebar();
    const pathname = usePathname()
    return (
        <Collapsible
            asChild
            defaultOpen={checkIsActive(href, item, true)}
            className={cn('group/collapsible')}
        >
            <SidebarMenuItem>
                <CollapsibleTrigger asChild>
                    <SidebarMenuButton isActive={checkIsActive(href, item)} tooltip={item.title}>
                        <Link className="flex flex-row gap-2" href={item?.href ?? ''}>
                            {item.icon && <item.icon className="tabler-icon tabler-icon-users" />}
                            <span>{item.title}</span>
                            {item.badge && <NavBadge>{item.badge}</NavBadge>}
                        </Link>
                        <ChevronRight className='ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90' />
                    </SidebarMenuButton>
                </CollapsibleTrigger>
                <CollapsibleContent className='CollapsibleContent'>
                <SidebarMenuSub>
                    {
                    item.items.map((subItem) => (
                        <SidebarMenuSubItem key={subItem.title}>
                            <SidebarMenuSubButton
                            asChild
                            isActive={checkIsActive(href, subItem)}
                            >
                            <Link href={subItem?.href ?? '#'} onClick={() => setOpenMobile(false)}>
                                {subItem.icon && <subItem.icon />}
                                <span>{subItem.title}</span>
                                {subItem.badge && <NavBadge>{subItem.badge}</NavBadge>}
                            </Link>
                            </SidebarMenuSubButton>
                        </SidebarMenuSubItem>
                    ))
                    }
                </SidebarMenuSub>
                </CollapsibleContent>
            </SidebarMenuItem>
        </Collapsible>
    )
}

const SidebarMenuCollapsedDropdown = ({
    item,
    href,
}: {
    item: NavCollapsible,
    href: string,
}) => {

    return (
        <SidebarMenuItem>
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <SidebarMenuButton
                        tooltip={item.title}
                        isActive={checkIsActive(href, item)}
                    >
                        {item.icon && <item.icon />}
                        <span>{item.title}</span>
                        {item.badge && <NavBadge>{item.badge}</NavBadge>}
                        <ChevronRight className='ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90' />
                    </SidebarMenuButton>
                </DropdownMenuTrigger>
                <DropdownMenuContent side='right' align='start' sideOffset={4}>
                    <DropdownMenuLabel>{item.title} {item.badge ? `${item.badge}` : ''}</DropdownMenuLabel>
                    <DropdownMenuSeparator/>
                    {item.items.map((sub) => (
                        <DropdownMenuItem key={`${sub.title}-${sub?.href}`} asChild>
                            <Link
                                href={sub?.href}
                                className={`${checkIsActive(href, sub) ? 'bg-secondary' : ''}`}
                            >
                                {sub.icon && <sub.icon />}
                                <span className='max-w-52 text-wrap'>{sub.title}</span>
                                {sub.badge && (
                                <span className='ml-auto text-xs'>{sub.badge}</span>
                                )}
                            </Link>
                        </DropdownMenuItem>
                    ))}
                </DropdownMenuContent>
            </DropdownMenu>
        </SidebarMenuItem>
    )
}

function checkIsActive(href: string, item: NavItem, mainNav = false) {

  const pathname = usePathname();
  return (
    href === item.href || // /endpint?search=param
    href?.split('?')[0] === item.href || // endpoint
    !!item?.items?.filter((i) => i.href === href).length || // if child nav is active
    (mainNav &&
      href.split('/')[1] !== '' &&
      href.split('/')[1] === item?.href?.split('/')[1])
  )
}