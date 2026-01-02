import { Send } from "lucide-react";
import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";
import Swal from "sweetalert2";

const contactReasons = [
  "Web Development",
  "UI/UX Design",
  "React Development",
  "Other",
];

function ContactForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [reason, setReason] = useState("");
  const [message, setMessage] = useState("");

  const formRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        Swal.fire({
          icon: "success",
          title: "Message Sent!",
          text: "Thank you for reaching out. I’ll get back to you shortly.",
          confirmButtonColor: "#d946ef",
        });

        setFirstName("");
        setLastName("");
        setEmail("");
        setPhoneNumber("");
        setReason("");
        setMessage("");

        formRef.current.reset();
      })
      .catch((err) => {
        console.error(err);
        Swal.fire({
          icon: "error",
          title: "Oops!",
          text: "Something went wrong. Please try again later.",
          confirmButtonColor: "#ef4444",
        });
      });
  };

  return (
    <form
      ref={formRef}
      onSubmit={(e) => handleSubmit(e)}
      className="relative bg-white/5 backdrop-blur-xl px-8 py-10 rounded-3xl border border-white/10
               space-y-6 overflow-hidden animate-fadeIn
               hover:bg-white/[0.07] hover:border-white/20 transition-all duration-700"
    >
      {/* Header */}
      <div className="text-center space-y-2 relative z-10">
        <h3 className="text-3xl font-semibold text-white tracking-tight">
          Get In Touch
        </h3>
        <p className="text-gray-400 text-base font-light">
          We'll get back to you soon
        </p>
      </div>

      {/* Inputs */}
      <div className="text-sm grid grid-cols-2 gap-1.5 relative z-10">
        <input
          type="text"
          name="first_name"
          placeholder="First Name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          className="px-4 py-3.5 bg-white/5 border rounded-xl text-base text-gray-100 
                     placeholder-gray-300 font-light backdrop-blur-sm
                     transition-all duration-500 ease-out"
        />

        <input
          type="text"
          name="last_name"
          placeholder="Last Name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          className="px-4 py-3.5 bg-white/5 border rounded-xl text-base text-gray-100 
                     placeholder-gray-300 font-light backdrop-blur-sm
                     transition-all duration-500 ease-out"
        />
      </div>

      <input
        type="email"
        name="email"
        placeholder="Email Address"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-full px-4 py-3.5 bg-white/5 border rounded-xl text-base text-gray-100 
                   placeholder-gray-300 font-light backdrop-blur-sm
                   transition-all duration-500 ease-out"
      />

      <input
        type="tel"
        name="phone"
        placeholder="Phone Number"
        value={phoneNumber}
        onChange={(e) => setPhoneNumber(e.target.value)}
        className="w-full px-4 py-3.5 bg-white/5 border rounded-xl text-base text-gray-100 
                   placeholder-gray-300 font-light backdrop-blur-sm
                   transition-all duration-500 ease-out"
      />
      {/* Contact Reason */}
      <div className="space-y-2 relative z-10">
        <p className="text-xs text-gray-300 font-semibold flex items-center gap-2">
          <span className="w-1.5 h-1.5 bg-fuchsia-500 rounded-full"></span>
          Why are you contacting?
        </p>
        <div className="grid grid-cols-2 gap-1.5">
          {contactReasons.map((r) => {
            const isSelected = reason === r;

            return (
              <button
                key={r}
                type="button"
                onClick={() => setReason(isSelected ? "" : r)}
                className={`
        px-3 py-1.5 rounded-lg border text-xs font-medium transition-all duration-300
        ${
          isSelected
            ? "bg-fuchsia-500/30 border-fuchsia-400 text-fuchsia-100"
            : "bg-gray-800/70 border-gray-700 text-gray-200 hover:border-fuchsia-400 hover:bg-fuchsia-500/20 hover:text-fuchsia-100"
        }
      `}
              >
                {r}
              </button>
            );
          })}

          <input type="hidden" name="reason" value={reason} />
        </div>
      </div>

      {/* Message */}
      <textarea
        name="message"
        value={message}
        placeholder="Your message..."
        rows="3"
        onChange={(e) => setMessage(e.target.value)}
        className="w-full px-3 py-1.5 bg-gray-800/60 border border-gray-700 rounded-lg text-sm text-gray-100 placeholder-gray-300 focus:border-fuchsia-500 focus:ring-1 focus:ring-fuchsia-500/30 transition resize-none"
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
