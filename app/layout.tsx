// app/layout.tsx

export const metadata = {
  title: 'Produção de Móveis',
  description: 'Painel de acompanhamento de projetos',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  )
}
