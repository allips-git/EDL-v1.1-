"use client";
import '@/styles/tailwind.css'
import AuthGuard from './AuthGuard';
import Image from 'next/image'
import Link from 'next/link'
import { useState, useEffect } from "react";
import Cookies from "js-cookie";

// export const metadata = {
//   title: {
//     template: 'EDL',
//     default: '(주) 이디엘',
//   },
// }

export default function Layout({ children }) {
  return (
    <html lang="ko" className="h-full bg-neutral-950 text-base antialiased">
      <body className="flex min-h-full flex-col">
        <AuthGuard>
          {children}
        </AuthGuard>
      </body>
    </html>
  )
}
