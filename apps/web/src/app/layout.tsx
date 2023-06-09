import '../styles/globals.css';
// include styles from the ui package
import 'ui/styles.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  let d = '';
  return (
    <html lang="en" className="h-full bg-gray-50">
      <body className="h-full">{children}</body>
    </html>
  );
}
