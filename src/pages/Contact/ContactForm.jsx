import { Send } from "lucide-react";

const contactReasons = [
  "Web Development",
  "UI/UX Design",
  "React Development",
  "Other",
];
function ContactForm() {
  return (
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
      <button
        type="submit"
        className="w-full py-2.5 bg-gradient-to-r from-fuchsia-400 to-indigo-400 text-gray-900 font-semibold text-sm rounded-lg hover:from-fuchsia-300 hover:to-indigo-300 transition-all duration-300 shadow-md hover:shadow-lg"
      >
        <Send className="inline-block w-4 h-4 mr-2" /> Send Message
      </button>
    </form>
  );
}

export default ContactForm;
