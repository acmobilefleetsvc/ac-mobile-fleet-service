import './globals.css';

export const metadata = {
  title: 'AC Mobile Fleet Service | Mobile Heavy Duty Truck Repair in Dayton, Ohio',
  description:
    'Mobile medium and heavy duty truck and trailer repair, roadside assistance, fleet maintenance, DOT inspections, and on-site diagnostics serving Dayton and Southwest Ohio.',
  keywords: [
    'mobile truck repair Dayton Ohio',
    'heavy duty truck repair Ohio',
    'fleet maintenance Dayton Ohio',
    'mobile diesel mechanic Ohio',
    'trailer repair Dayton Ohio',
    'roadside truck repair Ohio',
  ],
  openGraph: {
    title: 'AC Mobile Fleet Service',
    description: 'Mobile heavy duty truck and trailer repair serving Southwest Ohio.',
    type: 'website',
    locale: 'en_US',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
