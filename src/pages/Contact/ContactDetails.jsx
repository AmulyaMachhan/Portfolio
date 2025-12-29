import { Globe, Mail, Phone } from "lucide-react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { SiLeetcode, SiStackoverflow, SiInstagram } from "react-icons/si";

const contactDetails = {
  email: "machhanamulya@gmail.com",
  phone: "+91 98778 70135",
  website: "www.yourportfolio.com",
  socials: [
    {
      icon: <FaLinkedin className="w-5 h-5" />,
      url: "https://www.linkedin.com/in/amulya-machhan-5876bb261?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BKnt45Xw%2BQjq%2BXU81SoVMVw%3D%3D",
    },
    {
      icon: <FaGithub className="w-5 h-5" />,
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
      icon: <FaTwitter className="w-5 h-5" />,
      url: "https://twitter.com/yourusername",
    },
    {
      icon: <SiInstagram className="w-5 h-5" />,
      url: "https://instagram.com/yourusername",
    },
  ],
};
function ContactDetails() {
  return (
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
          <span className="text-gray-300 text-sm">{contactDetails.email}</span>
        </div>
        <div className="flex items-center gap-3 p-3 rounded-xl bg-gray-800/60 border border-fuchsia-800/20 hover:border-fuchsia-500/40 transition">
          <Phone className="text-fuchsia-300 w-4 h-4" />
          <span className="text-gray-300 text-sm">{contactDetails.phone}</span>
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
  );
}

export default ContactDetails;
