import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SectionHeader from "../Common/SectionHeader";
import FormInput from "../Common/FormInput";
import { textStyles } from '../../config/textStyles';

const Contact = () => {
  const form = useRef();
  const [isLoading, setIsLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsLoading(true);

    emailjs
      .sendForm(
        "service_nc9wfwr", // Replace with your EmailJS Service ID
        "template_ztynkxm", // Replace with your EmailJS Template ID
        form.current,
        "-5EkvYowaMVupYYI7" // Replace with your EmailJS Public Key
      )
      .then(
        () => {
          form.current.reset(); // Reset form fields after sending
          setIsLoading(false);
          toast.success("Message sent successfully! ✅", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            theme: "dark",
          });
        },
        (error) => {
          console.error("EmailJS Error:", error);
          setIsLoading(false);
          toast.error("Failed to send message. Please try again.", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            theme: "dark",
          });
        }
      )
      .catch((error) => {
        console.error("Form submission error:", error);
        setIsLoading(false);
        toast.error("An error occurred. Please try again.", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          theme: "dark",
        });
      });
  };

  return (
    <section
      id="contact"
      className="flex flex-col items-center justify-center py-24 px-[12vw] md:px-[7vw] lg:px-[20vw]"
    >
      {/* Toast Container */}
      <ToastContainer />

      <SectionHeader
        title="CONTACT"
        description="I'd love to hear from you—reach out for any opportunities or questions!"
      />

      {/* Contact Form */}
        <div className="mt-8 w-full max-w-md bg-darkGrey p-6 rounded-lg shadow-md border border-olive">
        <h3 className={textStyles.heading.h4 + " text-center"}>
          Let’s Connect 
        </h3>

        <form
          ref={form}
          onSubmit={sendEmail}
          className="mt-4 flex flex-col space-y-4"
        >
          <FormInput type="email" name="user_email" placeholder="Your Email" required />
          <FormInput type="text" name="user_name" placeholder="Your Name" required />
          <FormInput type="text" name="subject" placeholder="Subject" required />
          <FormInput type="textarea" name="message" placeholder="Message" rows={4} required />

          <div className="flex justify-center">
            <button
              type="submit"
              disabled={isLoading}
              className="py-2 px-6 rounded-full transition duration-300 transform hover:scale-110 bg-olive hover:bg-lightOlive text-white disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-lg hover:shadow-olive/50"
            >
              {isLoading ? "Sending..." : "Send"}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
