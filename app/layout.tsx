// app/layout.tsx

import '@/app/ui/global.css';
import { Inter, Lusitana } from '@next/font/google';  // Make sure to import the fonts from the correct source

const inter = Inter({ subsets: ['latin'] });
const lusitana = Lusitana({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter?.className ?? ''} antialiased`}>
        {children}
      </body>
    </html>
  );
}

}
