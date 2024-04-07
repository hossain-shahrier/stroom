import StreamVideoProvider from '@/providers/StreamClientProvider';
import { Metadata } from 'next';
import { ReactNode } from 'react';
export const metadata: Metadata = {
  title: 'Stroom',
  description: 'Video Meet up',
  icons: { icon: '/icons/logo.svg' },
};
const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <main>
      <StreamVideoProvider>{children}</StreamVideoProvider>
    </main>
  );
};

export default RootLayout;
