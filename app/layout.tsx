import "./globals.css";
import Navbar from "./components/Navbar";
import MyProfilePics from "./components/MyProfilePics";

export const metadata = {
  title: "Dev Virginus's Blog",
  description: "Created by Virginus Alajekwu",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="dark:bg-slate-800">
        <Navbar />
        <MyProfilePics />
        {children}
      </body>
    </html>
  );
}
