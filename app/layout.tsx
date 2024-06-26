import { ClerkProvider } from '@clerk/nextjs';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import '@stream-io/video-react-sdk/dist/css/styles.css';
import 'react-datepicker/dist/react-datepicker.css';
import { SpeedInsights } from '@vercel/speed-insights/next';
const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Stroom',
  description: 'Video Meet up',
  icons: { icon: '/icons/logo.svg' },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider
      appearance={{
        layout: {
          logoImageUrl: '/icons/yoom-logo.svg',
          socialButtonsVariant: 'iconButton',
        },
        variables: {
          colorText: '#fff',
          colorPrimary: '#0E78F9',
          colorBackground: '#1C1F2E',
          colorInputBackground: '#252a41',
          colorInputText: '#fff',
        },
      }}
    >
      <html lang="en">
        <body className={`${inter.className} bg-dark-2`}>
          {children}
          <SpeedInsights />
          <Toaster />
        </body>
      </html>
    </ClerkProvider>
  );
}
