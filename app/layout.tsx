import type {Metadata} from 'next';
import './globals.css'; // Global styles

export const metadata: Metadata = {
  title: 'Chaminda Sampath – IT Support & Infrastructure Portfolio',
  description: 'Professional portfolio and standalone PHP project for Chaminda Sampath, IT Support Specialist with 13+ years experience in Infrastructure Support, IT Operations, Asset Management, and Automation.',
  openGraph: {
    title: 'Chaminda Sampath – IT Support & Infrastructure Portfolio',
    description: 'Professional portfolio and standalone PHP project for Chaminda Sampath, IT Support Specialist with 13+ years experience in Infrastructure Support, IT Operations, Asset Management, and Automation.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Chaminda Sampath – IT Support & Infrastructure Portfolio',
    description: 'Professional portfolio and standalone PHP project for Chaminda Sampath, IT Support Specialist with 13+ years experience in Infrastructure Support, IT Operations, Asset Management, and Automation.',
  },
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
