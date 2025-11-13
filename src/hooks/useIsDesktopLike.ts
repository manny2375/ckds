import { useEffect, useState } from 'react';

export default function useIsDesktopLike() {
  const get = () => {
    if (typeof window === 'undefined') return false;
    return window.innerWidth >= 1024;
  };

  const [isDesktopLike, setIsDesktopLike] = useState(get());

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const handleResize = () => setIsDesktopLike(get());
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return isDesktopLike;
}
