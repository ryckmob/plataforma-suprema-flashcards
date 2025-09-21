import { useEffect, useState } from 'react';

export function useScreenSize() {
  const [isLarge, setIsLarge] = useState<boolean | null>(null);

  useEffect(() => {
    const checkSize = () => {
      setIsLarge(window.innerWidth >= 514);
    };

    checkSize();
    window.addEventListener('resize', checkSize);

    return () => window.removeEventListener('resize', checkSize);
  }, []);

  return isLarge;
}
