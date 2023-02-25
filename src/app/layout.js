
import Head from "next/head"
import './global.css'
import NavBar from "./layout_components/NavBar"

export const metadata = {
  title: 'Aristóteles | Programador',
  description: 'Portfólio dos meus projetos de programação',
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <Head>
        <meta charset="utf-8" />
      </Head>
      <body>
        <NavBar/>
        {children}
      </body>
    </html>
  )
}
