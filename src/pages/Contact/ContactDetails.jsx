import { Globe, Mail, Phone } from "lucide-react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { SiLeetcode, SiStackoverflow, SiInstagram } from "react-icons/si";

function ContactDetails() {
  const contactDetails = {
    email: "machhanamulya@gmail.com",
    phone: "+91 98778 70135",
    website: "www.yourportfolio.com",
    socials: [
      {
        icon: <FaLinkedin className="w-5 h-5" />,
        url: "https://www.linkedin.com/in/amulya-machhan-5876bb261",
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

  return (
    <div className="space-y-8 relative z-10 animate-fadeIn">
      <div className="space-y-4">
        <h2 className="text-5xl font-semibold text-white tracking-tight leading-tight">
          Let's Build
          <br />
          Something Amazing
        </h2>
        <p className="text-gray-400 text-lg max-w-md leading-relaxed font-light">
          Whether you're looking for a full-stack web solution, a stunning
          UI/UX, or expert React development — I'm just a message away.
        </p>
      </div>

      <div className="space-y-3">
        {[
          { icon: Mail, text: contactDetails.email },
          { icon: Phone, text: contactDetails.phone },
          { icon: Globe, text: contactDetails.website },
        ].map((item, idx) => (
          <div
            key={idx}
            className="group flex items-center gap-4 p-4 rounded-2xl bg-white/5 backdrop-blur-sm
                       border border-white/10 hover:bg-white/10 hover:border-white/20
                       transition-all duration-500 ease-out cursor-pointer"
            style={{ animationDelay: `${idx * 100}ms` }}
          >
            <div
              className="w-10 h-10 rounded-full bg-gradient-to-br from-fuchsia-500/20 to-indigo-500/20 
                            flex items-center justify-center group-hover:scale-110 transition-transform duration-500"
            >
              <item.icon className="text-fuchsia-300 w-5 h-5" />
            </div>
            <span className="text-gray-300 text-base font-light group-hover:text-white transition-colors duration-300">
              {item.text}
            </span>
          </div>
        ))}
      </div>

      <div className="w-16 h-0.5 bg-gradient-to-r from-fuchsia-500/50 to-transparent rounded-full" />

      <div>
        <h4 className="text-sm text-gray-500 tracking-wide mb-5 font-light">
          Connect with me
        </h4>
        <div className="flex flex-wrap gap-3">
          {contactDetails.socials.map((social, idx) => (
            <a
              key={idx}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group w-12 h-12 flex items-center justify-center rounded-xl
                         bg-white/5 backdrop-blur-sm border border-white/10 text-gray-400
                         hover:bg-white/10 hover:border-fuchsia-500/30 hover:text-fuchsia-400
                         transition-all duration-500 ease-out hover:scale-110"
              style={{ animationDelay: `${idx * 50}ms` }}
            >
              {social.icon}
            </a>
          ))}
        </div>
      </div>

      <p className="text-gray-500 italic text-sm mt-8 pl-4 border-l border-fuchsia-500/30 font-light">
        "Code is where creativity meets logic — let's make your idea come
        alive."
      </p>
    </div>
  );
}

export default ContactDetails;
