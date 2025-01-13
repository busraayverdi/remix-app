import Footer from "./footer";
import Navbar from "./navbar";

export default function Layout({ children }: any) {
 return (
  <>
   <header className="border-b">
    <Navbar />
   </header>
   <main className="container flex-grow mx-auto">
     {children}
   </main>
   <Footer />
  </>
  );
}