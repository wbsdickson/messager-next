import AuthContext from "./context/AuthContext";
import ToasterContext from "./context/ToasterContext";
import "./globals.css";
import { Inter } from "next/font/google";
import ActiveStatus from "./components/ActiveStatus";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "Messger Light",
    description: "Messager Light",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <AuthContext>
                    <ToasterContext />
                    <ActiveStatus />
                    {children}
                </AuthContext>
            </body>
        </html>
    );
}
