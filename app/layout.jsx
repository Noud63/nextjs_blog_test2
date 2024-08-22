import '@/styling/globals.css'
import AuthProvider from '@/components/AuthProvider';
import Navbar from '@/components/Navbar';
import GetAllPosts from '@/components/GetAllPosts';
import AddPost from '@/components/AddPost';


export const metadata = {
  title: "Nextjs blog",
  description: "Generated by create next app",
  icons: {
    icon: "/icon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gradient-to-r from-green-950 via-green-800 to-green-950">
        <AuthProvider>
          <Navbar />
          {/* <AddPost /> */}
          <main>{children}</main>
          {/* <GetAllPosts /> */}
        </AuthProvider>
      </body>
    </html>
  );
}