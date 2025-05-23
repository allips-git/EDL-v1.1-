"use client";
import { useEffect } from "react";
import Cookies from "js-cookie";

export default function AuthGuard({ children }) {
  useEffect(() => {
    if (typeof window === "undefined") return;
    const isLoginPage = window.location.pathname === "/login";
    const isAuthed = Cookies.get("edl_auth") === "1";
    if (!isAuthed && !isLoginPage) {
      window.location.replace("/login");
    }
    if (isAuthed && isLoginPage) {
      window.location.replace("/");
    }
  }, []);
  return children;
} 