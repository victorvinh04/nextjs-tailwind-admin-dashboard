import * as React from "react"

const MOBILE_BREAKPOINT = 768

export function useIsMobile() {
  const [isMobile, setIsMobile] = React.useState<boolean | undefined>(undefined)

  React.useEffect(() => {
    const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`)
    const onChange = () => {
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT)
    }
    mql.addEventListener("change", onChange)
    setIsMobile(window.innerWidth < MOBILE_BREAKPOINT)

    const handleResize = () => {
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT)
    };
  
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      mql.removeEventListener("change", onChange)
      window.removeEventListener("resize", handleResize);
    }
  }, [])

  return !!isMobile
}
