import { useEffect, useState } from 'react';

export default function useIsDesktopLike() {
  const query = '(min-width: 1280px) and (hover: hover) and (pointer: fine)';
  const getMatches = () => typeof window !== 'undefined' && matchMedia(query).matches;
  const [isDesktopLike, setIsDesktopLike] = useState(getMatches());

  useEffect(() => {
    const mq = matchMedia(query);
    const onChange = (e: MediaQueryListEvent) => setIsDesktopLike(e.matches);

    if ('addEventListener' in mq) {
      mq.addEventListener('change', onChange);
    } else {
      mq.addListener(onChange);
    }

    return () => {
      if ('removeEventListener' in mq) {
        mq.removeEventListener('change', onChange);
      } else {
        mq.removeListener(onChange);
      }
    };
  }, []);

  return isDesktopLike;
}
