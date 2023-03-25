import Navbar from '@/components/Navbar';
import './globals.css';
import ProfilePic from '@/components/ProfilePic';

export const metadata = {
  title: "Ezequiel's Blog",
  description: 'Created by Ezequiel Amin',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className='dark:bg-slate-800'>
        <Navbar />
        <ProfilePic />
        {children}
      </body>
    </html>
  );
}
