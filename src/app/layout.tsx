import React from 'react';
import { Sidebar } from '@/app/components/Sidebar';
import './globals.css';

export const metadata = {
  title: 'Design 99x Agent Studio',
  description: 'Agent Studio Application',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div className="flex h-screen bg-background">
          <Sidebar />
          {children}
        </div>
      </body>
    </html>
  );
}
