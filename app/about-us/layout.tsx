
export default function AboutUsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {children}
        &copy; Next JS is great!
      </body>
    </html>
  );
}
