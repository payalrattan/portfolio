import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SectionHeader from "../Common/SectionHeader";
import FormInput from "../Common/FormInput";
import Button from "../Common/Button";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

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
      );
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
        <h3 className="text-xl font-semibold font-manrope text-beige text-center">
          Connect With Me <span className="ml-1">🚀</span>
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

          <Button type="submit" variant="primary">
            Send
          </Button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
