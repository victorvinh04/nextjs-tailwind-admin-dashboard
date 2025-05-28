import React from 'react'
import { cn } from '@/lib/utils'
interface MainProps extends React.HTMLAttributes<HTMLElement> {
  fixed?: boolean
  // ref?: React.Ref<HTMLElement>
}

const AppMain = ({ fixed, ...props }: MainProps) => {
  return (
    <div
      className={cn(
        'p-4 mx-auto max-w-(--breakpoint-2xl) md:p-6'
      )}
      {...props}
    />
  )
}
AppMain.displayName = 'AppMain'
export default AppMain