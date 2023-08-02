import Footer from "./footer";
import Navbar from "./navbar";

export default function Layout({ children }) {
 return (
  <>
   <header className="border-b">
    <Navbar />
   </header>
   {/* className="container flex justify-center flex-grow mx-auto" */}
   <main className="container flex-grow mx-auto">
     {children}
   </main>
   <Footer />
  </>
  );
}