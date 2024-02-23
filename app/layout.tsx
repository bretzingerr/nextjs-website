"use client"
import "../styles/globals.css"
import React from "react"

import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import { ThemeProvider } from "next-themes"
import { Outfit, Open_Sans, Roboto, Roboto_Condensed,Merriweather, Nunito_Sans,Noto_Sans, Kenia } from "@next/font/google"

// const outfit = Outfit({
//   subsets: ['latin'],
//   weight: ['300'],
//   variable: '--font-outfit',
// })

// const open_sans = Open_Sans({
//   subsets: ['latin'],
//   weight: ['400'],
//   variable: '--font-open-sans',
// })

// const roboto = Roboto({
//   subsets: ['latin'],
//   weight: ['400'],
//   variable: '--font-roboto',
// })

// const robotocondensed = Roboto_Condensed({
//   subsets: ['latin'],
//   weight: ['400'],
//   variable: '--font-robotocondensed',
// })

// const nunitosans = Nunito_Sans({
//   subsets: ['latin'],
//   weight: ['200'],
//   variable: '--font-nunitosans',
// })

// const noto = Noto_Sans({
//   subsets: ['latin'],
//   weight: ['400'],
//   variable: '--font-noto',
// })



export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      {/* <body className="bg-tertiary"> */}
      <body>

        <ThemeProvider enableSystem={true} attribute="class">
          <Navbar />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
