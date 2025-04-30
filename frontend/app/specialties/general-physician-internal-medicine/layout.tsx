import { Metadata } from 'next';

export const metadata: Metadata = {
  metadataBase: new URL('http://localhost:3000'), 
  title: 'General Physicians & Internal Medicine Doctors | Apollo247 Clone',
  description: 'Book appointments with experienced general physicians and internal medicine doctors. Filter by location and experience to find the right doctor for you.',
  openGraph: {
    title: 'General Physicians & Internal Medicine Doctors | Apollo247 Clone',
    description: 'Book appointments with experienced general physicians and internal medicine doctors.',
    type: 'website',
  },
};

export default function SpecialtyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
