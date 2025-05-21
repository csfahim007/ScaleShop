import './globals.css';
import { Inter } from 'next/font/google';
import { Chatbot } from '@/components/Chatbot';
import { getServerSession } from 'next-auth';
import { authOptions } from './api/auth/[...nextauth]/route';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'ScaleShop',
  description: 'Scalable e-commerce platform',
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const session = await getServerSession(authOptions);

  return (
    <html lang="en">
      <body className={inter.className}>
        <nav className="bg-gray-800 text-white p-4">
          <div className="container mx-auto flex justify-between">
            <a href="/" className="text-xl font-bold">ScaleShop</a>
            <div>
              {session ? (
                <>
                  <a href="/cart" className="mr-4">Cart</a>
                  <a href="/api/auth/signout">Sign Out</a>
                </>
              ) : (
                <>
                  <a href="/login" className="mr-4">Login</a>
                  <a href="/signup">Sign Up</a>
                </>
              )}
            </div>
          </div>
        </nav>
        {children}
        <Chatbot />
      </body>
    </html>
  );
}