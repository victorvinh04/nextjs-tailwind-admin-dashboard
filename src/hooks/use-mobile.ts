import * as React from "react"

const MOBILE_BREAKPOINT = 768

export function useIsMobile() {
  const [isMobile, setIsMobile] = React.useState<boolean | undefined>(undefined)
  const [isSidebarOpen, setIsSidebarOpen] = React.useState(true)

  React.useEffect(() => {
    const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`)
    const onChange = () => {
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT)
      if (window.innerWidth >= 1024) {
        setIsSidebarOpen(prev => !prev)
      }
    }
    mql.addEventListener("change", onChange)
    setIsMobile(window.innerWidth < MOBILE_BREAKPOINT)

    const handleResize = () => {
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT)
    };

    const handleToggle = () => {
      if (window.innerWidth >= 1024) {
        setIsSidebarOpen(prev => !prev)
      }
    }
  
    handleResize();
    window.addEventListener("resize", handleResize);
    window.addEventListener("click", handleToggle);

    return () => {
      mql.removeEventListener("change", onChange)
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("click", handleToggle);
    }
  }, [])

  return { isMobile: !!isMobile, isSidebarOpen }
}
