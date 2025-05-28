import React from 'react'
import {
    CommandDialog,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
    CommandSeparator,
  } from '@/components/ui/command'
import { useSearch } from '@/context/search-context'
import { ScrollArea } from '@/components/ui/scroll-area'
import {
    IconArrowRightDashed,
    IconDeviceLaptop,
    IconMoon,
    IconSun,
  } from '@tabler/icons-react'
import { useTheme } from '@/context/ThemeContext'
import { sidebarData } from '@/layout/data/sidebar-data';
import { usePathname } from "next/navigation";
import Link from 'next/link'

export function CommandMenu() {

    const pathname = usePathname();
      const { toggleTheme } = useTheme();
    const { open, setOpen } = useSearch()

    const runCommand = React.useCallback(
    (command: () => unknown) => {
        setOpen(false)
        command()
      },
      [setOpen]
    )

    return (
        <CommandDialog modal open={open} onOpenChange={setOpen}>
            <CommandInput placeholder="Type a command or search..." />
            <CommandList>
                <ScrollArea type="hover" className="h-72 pr-1">
                    <CommandEmpty>No results found.</CommandEmpty>
                    {sidebarData.navGroups.map((group) => (
                        <CommandGroup key={group.title} heading={group.title}>
                        {group.items.map((navItem, i) => {
                            if (navItem.href)
                            return (
                                <CommandItem
                                key={`${navItem.href}-${i}`}
                                value={navItem.title}
                                onSelect={() => {
                                    // runCommand(() => pathname({ to: navItem.href }))
                                }}
                                >
                                <Link href={navItem.href}>
                                
                                <div className='mr-2 flex h-4 w-4 items-center justify-center'>
                                    <IconArrowRightDashed className='size-2 text-muted-foreground/80' />
                                </div>
                                    <span>{navItem.title}</span>
                                </Link>
                                </CommandItem>
                            )

                            return navItem.items?.map((subItem, i) => (
                            <CommandItem
                                key={`${subItem.href}-${i}`}
                                value={subItem.title}
                                onSelect={() => {
                                // runCommand(() => pathname({ to: subItem.href }))
                                }}
                            >
                                <Link href={subItem.href}>
                                    <div className='mr-2 flex h-4 w-4 items-center justify-center'>
                                    <IconArrowRightDashed className='size-2 text-muted-foreground/80' />
                                    </div>
                                    {subItem.title}
                                </Link>
                            </CommandItem>
                            ))
                        })}
                        </CommandGroup>
                    ))}
                    <CommandSeparator />
                    <CommandGroup heading='Theme'>
                        <CommandItem onSelect={() => runCommand(() => toggleTheme('light'))}>
                            <IconSun /> <span>Light</span>
                        </CommandItem>
                        <CommandItem onSelect={() => runCommand(() => toggleTheme('dark'))}>
                            <IconMoon className='scale-90' />
                            <span>Dark</span>
                        </CommandItem>
                        <CommandItem onSelect={() => runCommand(() => toggleTheme('system'))}>
                            <IconDeviceLaptop />
                            <span>System</span>
                        </CommandItem>
                    </CommandGroup>
                </ScrollArea>
            </CommandList>
        </CommandDialog>
    )
}