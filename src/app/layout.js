import Navbar from '@/components/navbar/Navbar';
import './globals.css';
import { Inter, Roboto, Poppins } from 'next/font/google';
import Footer from '@/components/footer/Footer';
import { ThemeProvider } from '@/context/ThemeContext';
import { SessionProvider } from 'next-auth/react';
import AuthProvider from '@/components/auth-provider/auth-provider';
const inter = Inter({ subsets: ['latin'] });

export const metadata = {
    title: 'next-blog',
    description: 'This is the educational site for developers with a variety of technologies',
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <ThemeProvider>
                    <AuthProvider>
                        <div className="container">
                            <Navbar />
                            {children}
                            <Footer />
                        </div>
                    </AuthProvider>
                </ThemeProvider>
            </body>
        </html>
    );
}
