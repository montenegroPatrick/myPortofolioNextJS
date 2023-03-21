import Footer from "@/src/components/footer/footer";

function ContactLayout({ children }) {
  return (
    <section className="h-screen flex flex-col gap-4 text-white justify-center items-center mx-10">
      {children}
    </section>
  );
}

export default ContactLayout;
