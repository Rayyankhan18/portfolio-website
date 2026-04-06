import type { Metadata } from 'next';
import './globals.css';

import SmoothScroll from '../components/SmoothScroll';

export const metadata: Metadata = {
  title: "Rayyan's Portfolio | Creative Developer",
  description: "Rayyan's personal portfolio showcasing creative work, experiments, and engineering projects.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
