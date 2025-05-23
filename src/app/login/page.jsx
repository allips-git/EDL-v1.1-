"use client";
import { useState } from "react";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === "edlpass@250523") {
      Cookies.set("edl_auth", "1", { expires: 1 });
      router.replace("/");
    } else {
      setError("비밀번호가 올바르지 않습니다.");
    }
  };

  return (
    <div style={{ minHeight: "100vh", display: "flex", justifyContent: "center", alignItems: "center" }}>
      <form onSubmit={handleSubmit} style={{ minWidth: 320, padding: 32, border: "1px solid #eee", borderRadius: 8, background: "#fff", boxShadow: "0 2px 8px #0001" }}>
        <h2 style={{ marginBottom: 24 }}>로그인</h2>
        <input
          type="password"
          placeholder="비밀번호를 입력하세요"
          value={password}
          onChange={e => setPassword(e.target.value)}
          style={{ width: "100%", padding: 12, marginBottom: 16, borderRadius: 4, border: "1px solid #ccc" }}
        />
        {error && <div style={{ color: "red", marginBottom: 12 }}>{error}</div>}
        <button type="submit" style={{ width: "100%", padding: 12, borderRadius: 4, background: "#222", color: "#fff", border: "none", fontWeight: "bold" }}>
          로그인
        </button>
      </form>
    </div>
  );
} 