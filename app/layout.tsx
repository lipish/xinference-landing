import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Xinference',
  description: 'Xinference - 最全面的企业级推理服务平台',
  metadataBase: new URL('http://localhost:3000'),
  icons: {
    icon: '/images/favicon-new.svg',
    apple: '/images/favicon-new.svg',
  },
  openGraph: {
    title: 'Xinference - 最全面的企业级推理服务平台',
    description: '针对生成式 AI 场景度身定制的能力全面的推理服务平台',
    url: 'https://xinference.ai',
    siteName: 'Xinference',
    locale: 'zh_CN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Xinference - 最全面的企业级推理服务平台',
    description: '针对生成式 AI 场景度身定制的能力全面的推理服务平台',
  },
  viewport: 'width=device-width, initial-scale=1',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh">
      <body className="min-h-screen antialiased">{children}</body>
    </html>
  )
}