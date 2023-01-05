import '../styles/globals.css'
import Header from './Header'
import { Hero } from './Hero'

export default function RootLayout({ children }: { children: React.ReactNode }) {
   return (
      <html>
         <head></head>
         <body>
            <Header />
            <Hero />
            {children}
         </body>
      </html>
   )
}
