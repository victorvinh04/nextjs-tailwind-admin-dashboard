import { SidebarData } from '@/types/data-sidebar'
import {
  IconBarrierBlock,
  IconBrowserCheck,
  IconBug,
  IconChecklist,
  IconError404,
  IconHelp,
  IconLayoutDashboard,
  IconLock,
  IconLockAccess,
  IconMessages,
  IconNotification,
  IconPackages,
  IconPalette,
  IconServerOff,
  IconSettings,
  IconTool,
  IconUserCog,
  IconUserOff,
  IconUsers,
  IconGrid4x4
} from '@tabler/icons-react'
import {  
  BookOpen,
  Bot,
  Command,
  Frame,
  LifeBuoy,
  Map,
  PieChart,
  Send,
  Settings2,
  SquareTerminal,
  GalleryVerticalEnd,
  AudioWaveform,
  LayoutDashboard,
  Codesandbox,
} from 'lucide-react';

import {
  BoxCubeIcon,
  CalenderIcon,
  ChevronDownIcon,
  GridIcon,
  HorizontaLDots,
  ListIcon,
  PageIcon,
  PieChartIcon,
  PlugInIcon,
  TableIcon,
  UserCircleIcon,
} from "@/icons/index";


export const sidebarData: SidebarData = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/images/user/owner.jpg",
  },
  teams: [
    {
      name: "Acme Inc",
      logo: GalleryVerticalEnd,
      plan: "Enterprise",
    },
    {
      name: "Acme Corp.",
      logo: AudioWaveform,
      plan: "Startup",
    },
    {
      name: "Shadcn Admin",
      logo: Command,
      plan: "Next + ShadcnUI",
    },
  ],
  navMain: [
    {      
        title: "Dashboard",
        icon: LayoutDashboard,
        isActive: true,
        items: [
        {
            title: "Calendar",
            href: "/calendar",
        },
        {
            title: "User Profile",
            href: "/profile",
        },
        {
            title: "Forms",
            href: "/form",
        },
        ]
    },
    {
        title: "Playground",
        icon: SquareTerminal,
        items: [
            {
                title: "History",
                href: "#",
            },
            {
                title: "Starred",
                href: "#",
            },
            {
                title: "Settings",
                href: "#",
            },
        ],
    },
    {
      title: "Models",
      icon: Bot,
      items: [
        {
          title: "Genesis",
          href: "#",
        },
        {
          title: "Explorer",
          href: "#",
        },
        {
          title: "Quantum",
          href: "#",
        },
      ],
    },
    {
      title: "Documentation",
      icon: BookOpen,
      items: [
        {
          title: "Introduction",
          href: "#",
        },
        {
          title: "Get Started",
          href: "#",
        },
        {
          title: "Tutorials",
          href: "#",
        },
        {
          title: "Changelog",
          href: "#",
        },
      ],
    },
    {
      title: "Settings",
      icon: Settings2,
      items: [
        {
          title: "General",
          href: "#",
        },
        {
          title: "Team",
          href: "#",
        },
        {
          title: "Billing",
          href: "#",
        },
        {
          title: "Limits",
          href: "#",
        },
      ],
    },
  ],
    navGroups: [
    {
      title: 'General',
      items: [
        {
          title: 'Dashboard',
          href: '/',
          icon: IconLayoutDashboard,
        },
        {
          title: 'Tasks',
          href: '/tasks',
          icon: IconChecklist,
        },
        {
          title: 'Apps',
          href: '/apps',
          icon: IconPackages,
        },
        {
          title: 'Chats',
          href: '/chats',
          badge: '3',
          icon: IconMessages,
        },
        {
          title: 'Users',
          href: '/users',
          icon: IconUsers,
        },
      ],
    },
    {
      title: 'Pages',
      items: [
        {
          title: 'Auth',
          icon: IconLockAccess,
          items: [
            {
              title: 'Sign In',
              href: '/sign-in',
            },
            {
              title: 'Sign In (2 Col)',
              href: '/sign-in-2',
            },
            {
              title: 'Sign Up',
              href: '/sign-up',
            },
            {
              title: 'Forgot Password',
              href: '/forgot-password',
            },
            {
              title: 'OTP',
              href: '/otp',
            },
          ],
        },
        {
          title: 'Errors',
          icon: IconBug,
          items: [
            {
              title: 'Unauthorized',
              href: '/401',
              icon: IconLock,
            },
            {
              title: 'Forbidden',
              href: '/403',
              icon: IconUserOff,
            },
            {
              title: 'Not Found',
              href: '/404',
              icon: IconError404,
            },
            {
              title: 'Internal Server Error',
              href: '/500',
              icon: IconServerOff,
            },
            {
              title: 'Maintenance Error',
              href: '/503',
              icon: IconBarrierBlock,
            },
          ],
        },
        {
          title: 'UI-Elements',
          icon: Codesandbox,
          items: [
            {
              title: 'Alerts',
              href: '/alerts',
            },
            {
              title: 'avatar',
              href: '/avatars',
            },
            {
              title: 'Badge',
              href: '/badge',
            },
            {
              title: 'Breadcrumb',
              href: '/breadcrumb',
            },
            {
              title: 'Cards',
              href: '/cards',
            },
            {
              title: 'Carousel',
              href: '/cards',
            },
            {
              title: 'Dropdowns',
              href: '/dropdowns',
            },
            {
              title: 'Images',
              href: '/images',
            },
            {
              title: 'Links',
              href: '/links',
            },
            {
              title: 'list',
              href: '/list',
            },
            {
              title: 'Modals',
              href: '/modals',
            },
            {
              title: 'Notification',
              href: '/notification',
            },
            {
              title: 'Pagination',
              href: '/pagination',
            },
            {
              title: 'Popovers',
              href: '/popovers',
            },
            {
              title: 'Progressbar',
              href: '/progressbar',
            },
            {
              title: 'Tooltips',
              href: '/tooltips',
            },
            {
              title: 'Videos',
              href: '/videos',
            },
          ],
        },
      ],
    },
    {
      title: 'Other',
      items: [
        {
          title: 'Settings',
          icon: IconSettings,
          items: [
            {
              title: 'Profile',
              href: '/settings',
              icon: IconUserCog,
            },
            {
              title: 'Account',
              href: '/settings/account',
              icon: IconTool,
            },
            {
              title: 'Appearance',
              href: '/settings/appearance',
              icon: IconPalette,
            },
            {
              title: 'Notifications',
              href: '/settings/notifications',
              icon: IconNotification,
            },
            {
              title: 'Display',
              href: '/settings/display',
              icon: IconBrowserCheck,
            },
          ],
        },
        {
          title: 'Help Center',
          href: '/help-center',
          icon: IconHelp,
        },
      ],
    },
    {
    title: 'projects',
    items: [{
      title: "Design Engineering",
      href: "#",
      icon: Frame,
    },
    {
      title: "Sales & Marketing",
      href: "#",
      icon: PieChart,
    },
    {
      title: "Travel",
      href: "#",
      icon: Map,
    },]}
  ],
  projects: [
  ],
}