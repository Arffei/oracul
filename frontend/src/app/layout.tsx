import "./globals.css";
import { ReactNode } from "react";
import Header from "./components/Header";

export const metadata = {
  title: "Oracul",
  description: "Игровая платформа Oracul",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ru">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}