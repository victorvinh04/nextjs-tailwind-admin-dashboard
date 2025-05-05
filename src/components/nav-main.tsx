"use client"

import React from "react"
import { ChevronRight, type LucideIcon } from "lucide-react"

import { BarChart3, FileText, Home, LayoutDashboard, LogOut, Settings, ShoppingCart, Users } from "lucide-react"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar"
import { usePathname } from "next/navigation"
import Link from "next/link"

// const othersItems: otherNavItem[] = [
//   {
//     icon: <PieChartIcon />,
//     name: "Charts",
//     subItems: [
//       { name: "Line Chart", path: "/line-chart", pro: false },
//       { name: "Bar Chart", path: "/bar-chart", pro: false },
//     ],
//   },
//   {
//     icon: <BoxCubeIcon />,
//     name: "UI Elements",
//     subItems: [
//       { name: "Alerts", path: "/alerts", pro: false },
//       { name: "Avatar", path: "/avatars", pro: false },
//       { name: "Badge", path: "/badge", pro: false },
//       { name: "Buttons", path: "/buttons", pro: false },
//       { name: "Images", path: "/images", pro: false },
//       { name: "Videos", path: "/videos", pro: false },
//     ],
//   },
//   {
//     icon: <PlugInIcon />,
//     name: "Authentication",
//     subItems: [
//       { name: "Sign In", path: "/signin", pro: false },
//       { name: "Sign Up", path: "/signup", pro: false },
//     ],
//   },
// ];

// const renderMenuItems = (
  //   navItems: NavItem[],
  //   menuType: "main" | "others"
  // ) => (
  //   <ul className="flex flex-col gap-4">
  //     {navItems.map((nav, index) => (
  //       <li key={nav.name}>
  //         {nav.subItems ? (
  //           <button
  //             onClick={() => handleSubmenuToggle(index, menuType)}
  //             className={`menu-item group  ${
  //               openSubmenu?.type === menuType && openSubmenu?.index === index
  //                 ? "menu-item-active"
  //                 : "menu-item-inactive"
  //             } cursor-pointer ${
  //               !isExpanded && !isHovered
  //                 ? "lg:justify-center"
  //                 : "lg:justify-start"
  //             }`}
  //           >
  //             <span
  //               className={` ${
  //                 openSubmenu?.type === menuType && openSubmenu?.index === index
  //                   ? "menu-item-icon-active"
  //                   : "menu-item-icon-inactive"
  //               }`}
  //             >
  //               {nav.icon}
  //             </span>
  //             {(isExpanded || isHovered || isMobileOpen) && (
  //               <span className={`menu-item-text`}>{nav.name}</span>
  //             )}
  //             {(isExpanded || isHovered || isMobileOpen) && (
  //               <ChevronDownIcon
  //                 className={`ml-auto w-5 h-5 transition-transform duration-200  ${
  //                   openSubmenu?.type === menuType &&
  //                   openSubmenu?.index === index
  //                     ? "rotate-180 text-brand-500"
  //                     : ""
  //                 }`}
  //               />
  //             )}
  //           </button>
  //         ) : (
  //           nav.path && (
  //             <Link
  //               href={nav.path}
  //               className={`menu-item group ${
  //                 isActive(nav.path) ? "menu-item-active" : "menu-item-inactive"
  //               }`}
  //             >
  //               <span
  //                 className={`${
  //                   isActive(nav.path)
  //                     ? "menu-item-icon-active"
  //                     : "menu-item-icon-inactive"
  //                 }`}
  //               >
  //                 {nav.icon}
  //               </span>
  //               {(isExpanded || isHovered || isMobileOpen) && (
  //                 <span className={`menu-item-text`}>{nav.name}</span>
  //               )}
  //             </Link>
  //           )
  //         )}
  //         {nav.subItems && (isExpanded || isHovered || isMobileOpen) && (
  //           <div
  //             ref={(el) => {
  //               subMenuRefs.current[`${menuType}-${index}`] = el;
  //             }}
  //             className="overflow-hidden transition-all duration-300"
  //             style={{
  //               height:
  //                 openSubmenu?.type === menuType && openSubmenu?.index === index
  //                   ? `${subMenuHeight[`${menuType}-${index}`]}px`
  //                   : "0px",
  //             }}
  //           >
  //             <ul className="mt-2 space-y-1 ml-9">
  //               {nav.subItems.map((subItem) => (
  //                 <li key={subItem.name}>
  //                   <Link
  //                     href={subItem.path}
  //                     className={`menu-dropdown-item ${
  //                       isActive(subItem.path)
  //                         ? "menu-dropdown-item-active"
  //                         : "menu-dropdown-item-inactive"
  //                     }`}
  //                   >
  //                     {subItem.name}
  //                     <span className="flex items-center gap-1 ml-auto">
  //                       {subItem.new && (
  //                         <span
  //                           className={`ml-auto ${
  //                             isActive(subItem.path)
  //                               ? "menu-dropdown-badge-active"
  //                               : "menu-dropdown-badge-inactive"
  //                           } menu-dropdown-badge `}
  //                         >
  //                           new
  //                         </span>
  //                       )}
  //                       {subItem.pro && (
  //                         <span
  //                           className={`ml-auto ${
  //                             isActive(subItem.path)
  //                               ? "menu-dropdown-badge-active"
  //                               : "menu-dropdown-badge-inactive"
  //                           } menu-dropdown-badge `}
  //                         >
  //                           pro
  //                         </span>
  //                       )}
  //                     </span>
  //                   </Link>
  //                 </li>
  //               ))}
  //             </ul>
  //           </div>
  //         )}
  //       </li>
  //     ))}
  //   </ul>
  // );

  const menuItems = [
  {
    title: "Dashboard",
    href: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "Analytics",
    href: "/analytics",
    icon: BarChart3,
  },
  {
    title: "Customers",
    href: "/customers",
    icon: Users,
  },
  {
    title: "Products",
    href: "/products",
    icon: ShoppingCart,
  },
  {
    title: "Documents",
    href: "/documents",
    icon: FileText,
  },
  {
    title: "Settings",
    href: "/settings",
    icon: Settings,
  },
]
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
  const pathname = usePathname();

  const [openSubmenu, setOpenSubmenu] = React.useState<{
    type: "main" | "others";
    index: number;
  } | null>(null);
  const [subMenuHeight, setSubMenuHeight] = React.useState<Record<string, number>>(
    {}
  );
  const subMenuRefs = React.useRef<Record<string, HTMLDivElement | null>>({});

  // const isActive = (path: string) => path === pathname;
   const isActive = React.useCallback((path: string) => path === pathname, [pathname]);

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
      const key = `${openSubmenu.type}-${openSubmenu.index}`;
      if (subMenuRefs.current[key]) {
        setSubMenuHeight((prevHeights) => ({
          ...prevHeights,
          [key]: subMenuRefs.current[key]?.scrollHeight || 0,
        }));
      }
    }
  }, [openSubmenu]);

  const handleSubmenuToggle = (index: number, menuType: "main" | "others") => {
    setOpenSubmenu((prevOpenSubmenu) => {
      if (
        prevOpenSubmenu &&
        prevOpenSubmenu.type === menuType &&
        prevOpenSubmenu.index === index
      ) {
        return null;
      }
      return { type: menuType, index };
    });
  };


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
            className="group/collapsible"
          >
            <SidebarMenuItem>
              <CollapsibleTrigger asChild>
                <SidebarMenuButton tooltip={item.title}>
                  {item.icon && <item.icon />}
                  <span>{item.title}</span>
                  <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
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
