
import "./globals.css";

export const metadata = {
  title: "Ficko Ditian | Web Developer",
  description:
    "Personal portfolio of Ficko Ditian — Web Developer and Creative Designer from Indonesia.",
  keywords: [
    "Ficko Ditian",
    "Web Developer",
    "Portfolio",
    "Website Development",
    "Creative Designer"
  ],
  authors: [{ name: "Ficko Ditian" }],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}