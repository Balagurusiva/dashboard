import '@/styles/globals.css'
 

export const metadata = {
    title : "Dashboard",
}

const RootLayout = ({children}) => {
  return (
     <html lang='en'>
        <body>
             {children}
        </body>
     </html>
  )
}

export default RootLayout
