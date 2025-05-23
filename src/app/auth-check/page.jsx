'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Cookies from 'js-cookie';

export default function AuthCheck() {
  const router = useRouter();

  useEffect(() => {
    const checkAuth = () => {
      const isLoggedIn = Cookies.get('isLoggedIn');
      if (!isLoggedIn) {
        const password = prompt('비밀번호를 입력하세요:');
        const VALID_PASSWORD = 'edlpass@250523';

        if (password === VALID_PASSWORD) {
          Cookies.set('isLoggedIn', 'true', { expires: 1 });
          router.push('/');
        } else {
          alert('비밀번호가 올바르지 않습니다.');
          checkAuth(); // 재시도
        }
      }
    };

    checkAuth();
  }, [router]);

  return null;
} 