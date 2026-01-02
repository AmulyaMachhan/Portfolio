import ContactBanner from "./ContactBanner";
import ContactForm from "./ContactForm";
import ContactDetails from "./ContactDetails";

export default function Contact() {
  return (
    <section className="text-gray-100 bg-gradient-to-b from-grey-900 via-blue-900 to-grey-600">
      {/* Section 1: Caption + Banners */}
      <ContactBanner />

      {/* Section 2: Contact Info + Form */}
      <div className="flex flex-col md:flex-row justify-evenly gap-10 py-10 px-4 lg:px-12">
        <div className="[contain:layout] absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(236,72,153,0.08),transparent_70%)]"></div>

        {/* LEFT SIDE */}
        <ContactDetails />

        {/* Right Side (Form) */}
        <ContactForm />
      </div>

      {/* Section 3: Map */}
      <div className="relative h-[400px] overflow-hidden w-[90%] mx-auto p-4 mb-12">
        <iframe
          title="Mohali Location"
          src="https://www.google.com/maps?q=Mohali,+Punjab,+India&output=embed"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          className="rounded-t-2xl grayscale-[40%] hover:grayscale-0 transition-all duration-700"
        ></iframe>
        <div className="[contain:layout] absolute inset-0 bg-gradient-to-t from-gray-950/60 to-transparent pointer-events-none"></div>
      </div>
    </section>
  );
}
