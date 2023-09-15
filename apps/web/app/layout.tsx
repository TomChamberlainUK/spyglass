import { Header, Footer } from 'ui';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header text="Web" />
          {children}
        <Footer />
      </body>
    </html>
  );
}
