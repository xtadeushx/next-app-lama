// import Navbar from '@/components/navbar/Navbar';
import './globals.css';
import { Inter } from 'next/font/google';
import AuthProvider from 'src/components/auth-provider/auth-provider';
import Footer from 'src/components/footer/Footer';
import Navbar from 'src/components/navbar/Navbar';
import { ThemeProvider } from 'src/context/ThemeContext';
const inter = Inter({ subsets: ['latin'] });

export const metadata = {
    title: 'next-blog',
    description: 'This is the educational site for developers with a variety of technologies',
};
type Props = {
    children?: React.ReactNode;
};

export default function RootLayout({ children }: Props) {
    return (
        <html lang="en" >
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
