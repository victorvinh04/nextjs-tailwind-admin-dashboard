"use client"
import { ReactNode } from 'react'

import { Collapsible } from '@radix-ui/react-collapsible';
import { NavCollapsible, NavItem, NavLink, type NavGroup } from '@/types/data-sidebar';
import { SidebarGroupLabel, SidebarMenu, SidebarMenuButton, SidebarMenuItem, SidebarMenuSub, SidebarMenuSubButton, SidebarMenuSubItem, useSidebar } from "@/components/ui/sidebar";
import { CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown/dropdown-menu';
import { cn } from '@/lib/utils';
import { usePathname } from 'next/navigation';
import { HorizontaLDots } from '@/icons';
import { IconChevronRight } from '@tabler/icons-react';

export function NavGroup({title, items}: NavGroup){
const { state, isExpanded, isMobile } = useSidebar();
    return (
        <>
            <SidebarGroupLabel>
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
            </SidebarGroupLabel>
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
                <Link 
                    href={item.href} 
                    onClick={() => setOpenMobile(false)} 
                    className='menu-item group menu-item-active'
                >
                    {item.icon && <item.icon className="menu-item-icon-active" />}
                    <span className='text-brand-500'>{item.title}</span>
                    {item.badge && <NavBadge>{item.badge}</NavBadge>}
                </Link>
            </SidebarMenuButton>
        </SidebarMenuItem>
    )
}

const NavBadge = ({ children }: { children: ReactNode }) => (
    <Badge className="rounded-full px-1 py-0 text-xs ml-auto menu-dropdown-badge">{children}</Badge>
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
                    <SidebarMenuButton 
                        className='text-brand-500 dark:hover:text-gray-400'
                        isActive={checkIsActive(href, item)} tooltip={item.title}>
                        <Link className={cn(
                            'flex flex-row gap-4 menu-item group',
                        )} href={item?.href ?? ''}>
                            {item.icon && <item.icon className="tabler-icon tabler-icon-users" />}
                            <span className='text-brand-500 dark:text-gray-400'>{item.title}</span>
                            {item.badge && <NavBadge>{item.badge}</NavBadge>}
                        </Link>
                        <IconChevronRight 
                            className="dark:text-gray-400 ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" 
                        />
                    </SidebarMenuButton>
                </CollapsibleTrigger>
                <CollapsibleContent className='CollapsibleContent'>
                <SidebarMenuSub className='mt-2 space-y-1 ml-9'>
                    {
                    item.items.map((subItem) => (
                        <SidebarMenuSubItem key={subItem.title} 
                            className='text-brand-500 dark:hover:text-brand-400'
                        >
                            <SidebarMenuSubButton 
                            className='text-brand-500 dark:hover:text-gray-400'
                            asChild
                            isActive={checkIsActive(href, subItem)}>
                            <Link 
                                href={subItem?.href ?? '#'} onClick={() => setOpenMobile(false)}
                                className={cn(
                                    checkIsActive(href, subItem)
                                    ? "menu-item-active"
                                    : "menu-item-inactive"
                                )}
                            >
                                {subItem.icon && <subItem.icon className="tabler-icon tabler-icon-users" />}
                                <span className='text-brand-500 dark:text-gray-400'>{subItem.title}</span>
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
                        className='text-brand-500'
                    >
                        {item.icon && <item.icon className="tabler-icon tabler-icon-users" />}
                        <span className='text-brand-500'>{item.title}</span>
                        {item.badge && <NavBadge>{item.badge}</NavBadge>}
                        <IconChevronRight 
                            className='dark:text-gray-400 ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90'
                        />
                    </SidebarMenuButton>
                </DropdownMenuTrigger>
                <DropdownMenuContent side='right' align='start' sideOffset={4}>
                    <DropdownMenuLabel className='menu-item group menu-item-active'>{item.title} {item.badge ? `${item.badge}` : ''}</DropdownMenuLabel>
                    <DropdownMenuSeparator/>
                    {item.items.map((sub) => (
                        <DropdownMenuItem key={`${sub.title}-${sub?.href}`} asChild>
                            <Link
                                href={sub?.href}
                                className={`menu-item group menu-item-active ${checkIsActive(href, sub) ? 'bg-secondary' : ''}`}
                            >
                                {sub.icon && <sub.icon className="tabler-icon tabler-icon-users" />}
                                <span
                                    className={`${
                                        checkIsActive(href, sub)
                                          ? "menu-item-icon-active"
                                          : "menu-item-icon-inactive"
                                      }`}
                                >{sub.title}</span>
                                {sub.badge && (
                                <span className='ml-auto text-xs text-brand-500'>{sub.badge}</span>
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