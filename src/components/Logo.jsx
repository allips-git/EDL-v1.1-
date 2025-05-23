import { useId } from 'react'
import clsx from 'clsx'


export function Logomark({ invert = false, filled = false, ...props }) {
  let id = useId()

  return (
    <img src="/images/edl_logo.png" alt='logo' style={{ width: '120px', height: '60px'}}/>



  )
}

export function Logo({
  className,
  invert = true,
  filled = false,
  fillOnHover = false,
  ...props
}) {
  return (
    <img src="/images/edl-logogray.png" alt='logo' style={{ width: '120px', height: '60px'}}/>

  )
}
