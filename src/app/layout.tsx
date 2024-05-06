import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.scss";
// import { IngredientProvider } from "@/Provider/IngredientContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/ReactToastify.css";
import UserProvider from "@/Provider/UserContext";
import IngredientProvider from "@/Provider/IngredientContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Crée tes potions",
    description: "Choisis des ingrédients et crée tes potions",
    keywords: ["Jeu", "Merge", "Reflexion"],
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="fr">
            <body className={`${inter.className}`}>
                <UserProvider>
                    <IngredientProvider>
                        <main>{children}</main>
                    </IngredientProvider>
                </UserProvider>
                <ToastContainer />
            </body>
        </html>
    );
}
