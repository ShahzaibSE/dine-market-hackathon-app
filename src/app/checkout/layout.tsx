"use client"
import "./../globals.css";
import { Inter } from "next/font/google";

export default function CheckOutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta
          name="description"
          content="Free Web tutorials"
        />
        <meta
          name="keywords"
          content="HTML, CSS, JavaScript, Ecommerce"
        />
        <meta name="author" content="Shahzaib Noor" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        />
      </head>
      <body>
        <main>{children}</main>
      </body>
    </html>
  );
}
