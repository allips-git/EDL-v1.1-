import '@/styles/tailwind.css'

export const metadata = {
  title: {
    template: 'EDL',
    default: '(주) 이디엘',
  },
}

export default function Layout({ children }) {
  return (
    <html lang="ko" className="h-full bg-neutral-950 text-base antialiased">
      <body className="flex min-h-full flex-col">{children}</body>
    </html>
  )
}
