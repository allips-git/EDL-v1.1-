import { useId } from 'react'
import clsx from 'clsx'


export function Logomark({ invert = false, filled = false, ...props }) {
  let id = useId()

  return (
    <img src="/images/logo.png" alt='logo' style={{ width: '120px', height: '60px'}}/>



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
    <img src="/images/logo_gray.png" alt='logo' style={{ width: '120px', height: '60px'}}/>

  )
}
