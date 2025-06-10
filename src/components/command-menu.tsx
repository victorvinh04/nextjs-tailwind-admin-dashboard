import React from 'react'
import {
  IconArrowRightDashed,
  IconDeviceLaptop,
  IconMoon,
  IconSun,
} from '@tabler/icons-react'
import { sidebarData } from '@/layout/data/sidebar-data'
import Link from 'next/link'
import { useTheme } from '@/context/ThemeContext'
import { useSearch } from '@/context/search-context'
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from '@/components/ui/command'
import { ScrollArea } from '@/components/ui/scroll-area'

export function CommandMenu() {
  const { toggleTheme } = useTheme()
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
      <CommandInput placeholder='Type a command or search...' />
      <CommandList>
        <ScrollArea type='hover' className='h-72 pr-1'>
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
                          <IconArrowRightDashed className='text-muted-foreground/80 size-2' />
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
                        <IconArrowRightDashed className='text-muted-foreground/80 size-2' />
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
            <CommandItem
              onSelect={() => runCommand(() => toggleTheme('light'))}
            >
              <IconSun /> <span>Light</span>
            </CommandItem>
            <CommandItem onSelect={() => runCommand(() => toggleTheme('dark'))}>
              <IconMoon className='scale-90' />
              <span>Dark</span>
            </CommandItem>
            <CommandItem
              onSelect={() => runCommand(() => toggleTheme('system'))}
            >
              <IconDeviceLaptop />
              <span>System</span>
            </CommandItem>
          </CommandGroup>
        </ScrollArea>
      </CommandList>
    </CommandDialog>
  )
}
