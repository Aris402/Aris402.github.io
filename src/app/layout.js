import './global.css'
import NavBar from "./layout_components/NavBar"

export const metadata = {
  title: 'Aristóteles | Programador front-end',
  description: 'Portfólio dos meus projetos de programação',
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
  },
  charset: 'utf-8',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>
        <NavBar/>
        {children}
      </body>
    </html>
  )
}
