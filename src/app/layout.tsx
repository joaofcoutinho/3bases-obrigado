import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Obrigado · As Três Bases",
  description: "Sua inscrição foi confirmada.",
  icons: {
    icon: [{ url: "/favicon.png", type: "image/png" }],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
