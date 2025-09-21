'use client';

import { useScreenSize } from '@/hooks/useScreenSize';
import DesktopLayout from './desktopLayout';
import MobileLayout from './mobileLayout';

export default function Home() {
  const isLarge = useScreenSize();

  if (isLarge === null) return null;

  return <main>{isLarge ? <DesktopLayout /> : <MobileLayout />}</main>;
}
