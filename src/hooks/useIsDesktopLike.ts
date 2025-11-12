import { useEffect, useState } from 'react';

export default function useIsDesktopLike() {
  const get = () => {
    if (typeof window === 'undefined') return false;
    const w = window;
    const widthOK = w.matchMedia('(min-width: 1280px)').matches;
    const precise = w.matchMedia('(pointer: fine)').matches;
    const hoverOK = w.matchMedia('(hover: hover)').matches;
    const anyCoarse = w.matchMedia('(any-pointer: coarse)').matches;
    return widthOK && precise && hoverOK && !anyCoarse;
  };

  const [isDesktopLike, setIsDesktopLike] = useState(get());

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const mqs = [
      '(min-width: 1280px)',
      '(pointer: fine)',
      '(hover: hover)',
      '(any-pointer: coarse)'
    ].map(q => matchMedia(q));

    const on = () => setIsDesktopLike(get());
    mqs.forEach(mq => mq.addEventListener?.('change', on) ?? mq.addListener(on));
    return () =>
      mqs.forEach(mq => mq.removeEventListener?.('change', on) ?? mq.removeListener(on));
  }, []);

  return isDesktopLike;
}
