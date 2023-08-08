import "./globals.css";
import Navbar from "../components/navigation/Navbar";

export const metadata = {
  title: "Ben Thorne's Portfolio",
  description: "A collection of work by Ben",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
