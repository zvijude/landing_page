import type { Metadata } from 'next'
import { Assistant } from 'next/font/google'
import '@/ui/globals.css'

const font = Assistant({ subsets: ['hebrew'] })

export const metadata: Metadata = {
  title: 'Roi Crm',
  description: 'מערכות ייחודיות לחברות ומפעלי אלומיניום',
  icons: {
    icon: 'https://res.cloudinary.com/dfletli2x/image/upload/icons/reg/qrcode.svg',
    shortcut: 'https://res.cloudinary.com/dfletli2x/image/upload/icons/reg/qrcode.svg',
    apple: 'https://res.cloudinary.com/dfletli2x/image/upload/icons/reg/qrcode.svg',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="he" dir="rtl">
      <body className={font.className}>
        {/* <div className="flex -z-[1] fixed top-0 start-20">
          <div className="bg-blue-200 opacity-20 blur-3xl w-[1036px] h-[600px]"></div>
          <div className="bg-sky-100 opacity-60 blur-3xl w-[577px] h-[300px]"></div>
        </div> */}
        {/* <div className="fixed bg-gradient-to-br from-white via-blue-100/70 to-blue-50/70 text-400 h-screen w-full" /> */}
        <main className="wrp">{children}</main>
      </body>
    </html>
  )
}
