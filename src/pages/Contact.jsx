import { motion as Motion } from "framer-motion";
import {
  Mail,
  Phone,
  Globe,
  Linkedin,
  Github,
  Twitter,
  Send,
} from "lucide-react";
import { lazy, Suspense } from "react";
import { SiLeetcode, SiStackoverflow, SiInstagram } from "react-icons/si";

const ContactBanner = lazy(() => import("../components/ContactBanner.jsx"));

// 🧩 Contact Data (easy to modify later)
const contactDetails = {
  email: "machhanamulya@gmail.com",
  phone: "+91 98778 70135",
  website: "www.yourportfolio.com",
  socials: [
    {
      icon: <Linkedin className="w-5 h-5" />,
      url: "https://www.linkedin.com/in/amulya-machhan-5876bb261?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BKnt45Xw%2BQjq%2BXU81SoVMVw%3D%3D",
    },
    {
      icon: <Github className="w-5 h-5" />,
      url: "https://github.com/AmulyaMachhan",
    },
    {
      icon: <SiStackoverflow className="w-5 h-5" />,
      url: "https://stackoverflow.com/users/yourid",
    },
    {
      icon: <SiLeetcode className="w-5 h-5" />,
      url: "https://leetcode.com/u/machhanamulya/",
    },
    {
      icon: <Twitter className="w-5 h-5" />,
      url: "https://twitter.com/yourusername",
    },
    {
      icon: <SiInstagram className="w-5 h-5" />,
      url: "https://instagram.com/yourusername",
    },
  ],
};
const contactReasons = [
  "Web Development",
  "UI/UX Design",
  "React Development",
  "Other",
];

export default function Contact() {
  return (
    <section className="text-gray-100 ">
      {/* Section 1: Caption + Banners */}
      <Suspense
        fallback={<div className="w-full h-screen">Initializing Prism...</div>}
      >
        <ContactBanner />
      </Suspense>
      {/* Section 2: Contact Info + Form */}
      <div className="flex flex-col md:flex-row justify-evenly gap-10 py-25 px-4 lg:px-12">
        <div className="[contain:layout] absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(236,72,153,0.08),transparent_70%)]"></div>

        {/* LEFT SIDE */}
        <div className="space-y-6 relative z-10">
          {/* Header */}
          <div className="space-y-3">
            <h2 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 via-pink-400 to-indigo-400">
              Let’s Build Something Amazing
            </h2>
            <p className="text-gray-400 text-sm sm:text-base max-w-md leading-relaxed">
              Whether you’re looking for a full-stack web solution, a stunning
              UI/UX, or expert React development — I’m just a message away.
            </p>
          </div>

          {/* Contact Info Cards */}
          <div className="space-y-3">
            <div className="flex items-center gap-3 p-3 rounded-xl bg-gray-800/60 border border-fuchsia-800/20 hover:border-fuchsia-500/40 transition">
              <Mail className="text-fuchsia-300 w-4 h-4" />
              <span className="text-gray-300 text-sm">
                {contactDetails.email}
              </span>
            </div>
            <div className="flex items-center gap-3 p-3 rounded-xl bg-gray-800/60 border border-fuchsia-800/20 hover:border-fuchsia-500/40 transition">
              <Phone className="text-fuchsia-300 w-4 h-4" />
              <span className="text-gray-300 text-sm">
                {contactDetails.phone}
              </span>
            </div>
            <div className="flex items-center gap-3 p-3 rounded-xl bg-gray-800/60 border border-fuchsia-800/20 hover:border-fuchsia-500/40 transition">
              <Globe className="text-fuchsia-300 w-4 h-4" />
              <span className="text-gray-300 text-sm">
                {contactDetails.website}
              </span>
            </div>
          </div>

          {/* Divider */}
          <div className="w-20 h-[2px] bg-gradient-to-r from-fuchsia-500 to-indigo-500 rounded-full"></div>

          {/* Social Media Grid */}
          <div>
            <h4 className="text-sm uppercase text-gray-400 tracking-wider mb-3">
              Connect with me
            </h4>
            <div className="grid grid-cols-3 sm:grid-cols-6 gap-3">
              {contactDetails.socials.map((social, idx) => (
                <a
                  key={idx}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group w-10 h-10 sm:w-11 sm:h-11 flex items-center justify-center rounded-xl
                           bg-gray-800/70 border border-gray-700 text-fuchsia-300 
                           hover:bg-gradient-to-br hover:from-fuchsia-500 hover:to-indigo-500 hover:text-gray-900 
                           transition-all duration-300 shadow-sm hover:shadow-[0_0_15px_rgba(236,72,153,0.4)]"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quote or Motto */}
          <p className="text-gray-500 italic text-xs sm:text-sm mt-6 border-l-2 border-fuchsia-400 pl-3">
            “Code is where creativity meets logic — let’s make your idea come
            alive.”
          </p>
        </div>

        {/* Right Side (Form) */}
        <form
          className="relative bg-gray-900 backdrop-blur-xl px-6 py-4 rounded-2xl border border-fuchsia-600/30 
               space-y-3 overflow-hidden
             hover:shadow-[0_0_40px_-10px_rgba(236,72,153,0.5)] transition-shadow duration-500"
        >
          {/* Header */}
          <div className="text-center space-y-1 relative z-10">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-fuchsia-300 to-indigo-300 bg-clip-text text-transparent">
              Get In Touch
            </h3>
            <p className="text-gray-400 text-sm font-medium">
              We'll get back to you soon
            </p>
          </div>

          {/* Inputs */}
          <div className="text-sm grid grid-cols-2 gap-1.5 relative z-10">
            <input
              type="text"
              placeholder="First Name"
              className="px-3 py-1.5 bg-gray-800/60 border border-gray-700 rounded-lg text-sm text-gray-100 placeholder-gray-500 focus:border-fuchsia-500 focus:ring-1 focus:ring-fuchsia-500/30 transition"
            />
            <input
              type="text"
              placeholder="Last Name"
              className="px-3 py-1.5 bg-gray-800/60 border border-gray-700 rounded-lg text-sm text-gray-100 placeholder-gray-500 focus:border-fuchsia-500 focus:ring-1 focus:ring-fuchsia-500/30 transition"
            />
          </div>

          <input
            type="email"
            placeholder="Email Address"
            className="w-full px-3 py-1.5 bg-gray-800/60 border border-gray-700 rounded-lg text-sm text-gray-100 placeholder-gray-500 focus:border-fuchsia-500 focus:ring-1 focus:ring-fuchsia-500/30 transition"
          />

          <input
            type="tel"
            placeholder="Phone Number"
            className="w-full px-3 py-1.5 bg-gray-800/60 border border-gray-700 rounded-lg text-sm text-gray-100 placeholder-gray-500 focus:border-fuchsia-500 focus:ring-1 focus:ring-fuchsia-500/30 transition"
          />

          {/* Contact Reason */}
          <div className="space-y-2 relative z-10">
            <p className="text-xs text-gray-300 font-semibold flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-fuchsia-500 rounded-full"></span>
              Why are you contacting?
            </p>
            <div className="grid grid-cols-2 gap-1.5">
              {contactReasons.map((reason, idx) => (
                <label
                  key={idx}
                  className="px-3 py-1.5 rounded-lg bg-gray-800/70 border border-gray-700 text-gray-200 text-xs font-medium cursor-pointer hover:border-fuchsia-400 hover:bg-fuchsia-500/20 hover:text-fuchsia-100 transition-all duration-300"
                >
                  <input
                    type="radio"
                    name="reason"
                    value={reason}
                    className="hidden"
                  />
                  {reason}
                </label>
              ))}
            </div>
          </div>

          {/* Message */}
          <textarea
            placeholder="Your message..."
            rows="3"
            className="w-full px-3 py-1.5 bg-gray-800/60 border border-gray-700 rounded-lg text-sm text-gray-100 placeholder-gray-500 focus:border-fuchsia-500 focus:ring-1 focus:ring-fuchsia-500/30 transition resize-none"
          ></textarea>

          {/* Submit Button */}
          <Motion.button
            type="submit"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full py-2.5 bg-gradient-to-r from-fuchsia-400 to-indigo-400 text-gray-900 font-semibold text-sm rounded-lg hover:from-fuchsia-300 hover:to-indigo-300 transition-all duration-300 shadow-md hover:shadow-lg"
          >
            <Send className="inline-block w-4 h-4 mr-2" /> Send Message
          </Motion.button>
        </form>
      </div>

      {/* Section 3: Map */}
      <div className="relative h-[400px] overflow-hidden w-[90%] mx-auto p-4">
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
