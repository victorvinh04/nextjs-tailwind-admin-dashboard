'use client'

import React from 'react'
import { ChevronRight, type LucideIcon } from 'lucide-react'
import {
  BarChart3,
  FileText,
  Home,
  LayoutDashboard,
  LogOut,
  Settings,
  ShoppingCart,
  Users,
} from 'lucide-react'
import { usePathname } from 'next/navigation'
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible'
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from '@/components/ui/sidebar'

export function NavMain({
  items,
}: {
  items: {
    title: string
    href: string
    icon?: LucideIcon
    isActive?: boolean
    items?: {
      title: string
      href: string
    }[]
  }[]
}) {
  const pathname = usePathname()

  const [openSubmenu, setOpenSubmenu] = React.useState<{
    type: 'main' | 'others'
    index: number
  } | null>(null)
  const [subMenuHeight, setSubMenuHeight] = React.useState<
    Record<string, number>
  >({})
  const subMenuRefs = React.useRef<Record<string, HTMLDivElement | null>>({})

  // const isActive = (path: string) => path === pathname;
  const isActive = React.useCallback(
    (path: string) => path === pathname,
    [pathname]
  )

  // React.useEffect(() => {
  //   // Check if the current path matches any submenu item
  //   let submenuMatched = false;
  //   ["main", "others"].forEach((menuType) => {
  //     const items = menuType === "main" ? navItems : othersItems;
  //     items.forEach((nav, index) => {
  //       if (nav.subItems) {
  //         nav.subItems.forEach((subItem) => {
  //           if (isActive(subItem.path)) {
  //             setOpenSubmenu({
  //               type: menuType as "main" | "others",
  //               index,
  //             });
  //             submenuMatched = true;
  //           }
  //         });
  //       }
  //     });
  //   });

  //   // If no submenu item matches, close the open submenu
  //   if (!submenuMatched) {
  //     setOpenSubmenu(null);
  //   }
  // }, [pathname,isActive]);

  React.useEffect(() => {
    // Set the height of the submenu items when the submenu is opened
    if (openSubmenu !== null) {
      const key = `${openSubmenu.type}-${openSubmenu.index}`
      if (subMenuRefs.current[key]) {
        setSubMenuHeight((prevHeights) => ({
          ...prevHeights,
          [key]: subMenuRefs.current[key]?.scrollHeight || 0,
        }))
      }
    }
  }, [openSubmenu])

  const handleSubmenuToggle = (index: number, menuType: 'main' | 'others') => {
    setOpenSubmenu((prevOpenSubmenu) => {
      if (
        prevOpenSubmenu &&
        prevOpenSubmenu.type === menuType &&
        prevOpenSubmenu.index === index
      ) {
        return null
      }
      return { type: menuType, index }
    })
  }

  return (
    <SidebarMenu>
      {/* {
          items.map((item) => (
            <SidebarMenuItem key={item.title}>
              <SidebarMenuButton asChild isActive={pathname === item.href} tooltip={item.title}>
                <a href={item.href}>
                  {item.icon && <item.icon />}
                  <span>{item.title}</span>
                </a>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))
        } */}
      {items.map((item) => (
        <Collapsible
          key={item.title}
          asChild
          defaultOpen={item.isActive}
          className='group/collapsible'
        >
          <SidebarMenuItem>
            <CollapsibleTrigger asChild>
              <SidebarMenuButton tooltip={item.title}>
                {item.icon && <item.icon />}
                <span>{item.title}</span>
                <ChevronRight className='ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90' />
              </SidebarMenuButton>
            </CollapsibleTrigger>
            <CollapsibleContent>
              <SidebarMenuSub>
                {item.items?.map((subItem) => (
                  <SidebarMenuSubItem key={subItem.title}>
                    <SidebarMenuSubButton asChild>
                      <a href={subItem.href}>
                        <span>{subItem.title}</span>
                      </a>
                    </SidebarMenuSubButton>
                  </SidebarMenuSubItem>
                ))}
              </SidebarMenuSub>
            </CollapsibleContent>
          </SidebarMenuItem>
        </Collapsible>
      ))}
    </SidebarMenu>
  )
}