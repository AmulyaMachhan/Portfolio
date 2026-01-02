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

      <div className="space-y-3 relative z-10">
        <p className="text-sm text-gray-400 font-light flex items-center gap-2">
          <span className="w-1 h-1 bg-fuchsia-500 rounded-full"></span>
          Why are you contacting?
        </p>
        <div className="grid grid-cols-2 gap-3">
          {contactReasons.map((r) => (
            <button
              key={r}
              name="reason"
              type="button"
              onClick={() => setReason(r)}
              className={`px-4 py-3 rounded-xl text-sm font-light transition-all duration-500 ease-out
                ${
                  reason === r
                    ? "bg-fuchsia-500/20 border border-fuchsia-500/50 text-fuchsia-300 shadow-lg shadow-fuchsia-500/10 scale-[1.02]"
                    : "bg-white/5 border border-white/10 text-gray-300 hover:bg-white/10 hover:border-white/20 hover:text-white"
                }`}
            >
              {r}
            </button>
          ))}
          <input type="hidden" name="reason" value={reason} />
        </div>
      </div>

      <textarea
        placeholder="Your message..."
        rows={4}
        name="message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        className={`w-full px-4 py-3.5 bg-white/5 border rounded-xl text-base text-gray-100 
                 placeholder-gray-500 font-light backdrop-blur-sm resize-none
                 transition-all duration-500 ease-out`}
      />

      <button
        type="button"
        onClick={handleSubmit}
        className="group w-full py-4 bg-white text-gray-900 font-medium text-base rounded-xl
                 hover:bg-gray-100 transition-all duration-500 ease-out
                 shadow-lg hover:shadow-xl hover:scale-[1.02]
                 flex items-center justify-center gap-2"
      >
        <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-500" />
        Send Message
      </button>
    </form>
  );
}

export default ContactForm;
