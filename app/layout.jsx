import '@/styles/globals.css'
import {Montserrat} from '@next/font/google'

const montserrat = Montserrat({
   subsets:['latin'],
   weight:['400','700']
})
 

export const metadata = {
    title : "Dashboard",
}

const RootLayout = ({children}) => {
  return (
     <html lang='en'>
        <body>
         <main className={montserrat.className}>
         {children}
         </main>
              
        </body>
     </html>
  )
}

export default RootLayout
