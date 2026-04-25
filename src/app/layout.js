import { Geist, Geist_Mono, Montserrat, Poppins } from "next/font/google";
import "./globals.css";


export const metadata = {
  title: "Daragon News",
  description: "Best news portal in Bangladesh",
};

const poppins=Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight:['400','500','700','900']
})
export const montserrat=Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight:['400','500','700','900']
})




export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
       data-theme="light"
      className={` h-full antialiased`}
    >
      <body  className={`${poppins.className} min-h-full flex flex-col`}>
        
        {children}
        </body>
    </html>
  );
}
