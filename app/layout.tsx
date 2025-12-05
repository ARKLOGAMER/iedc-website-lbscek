import './globals.css'

export const metadata = {
  title: 'IEDC SUMMIT 2025 - LBSCEK Alumni Crowdfunding',
  description: 'LBSCEK Alumni: Support IEDC SUMMIT 2025',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
