import Footer from "@/src/components/footer/footer";
import Header from "@/src/components/header/Header";

function ContactLayout({ children }) {
  return (
    <>
      <Header />
      <section className="h-screen flex flex-col gap-4 text-white justify-center items-center mx-10">
        {children}
      </section>
      <Footer />
    </>
  );
}

export default ContactLayout;
