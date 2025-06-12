import { FaClock, FaVoicemail } from "react-icons/fa";
import { FaMessage } from "react-icons/fa6";

import ContactForm from "../components/ContactForm";
import LocationAddress from "../components/LocationAddress";
import SeniorManagementTeam from "../components/SeniorManagementTeam";
import OurTeam from "../components/OurTeam";

function Contact() {
  return (
    <section>
      {/* -----------------------------hero section------------------------------------- */}
      <div className="md:mt-[4rem] md:w-full md:h-[95dvh] relative flex items-center justify-center">
        <img
          src="/contact-page/pink/p1.jpg"
          alt="Contact Us"
          className="w-full h-full  absolute top-0 left-0 z-[-1]"
        />
        <div className="absolute top-0 left-0 md:w-full md:h-full flex flex-col items-center justify-center bg-black/60 text-stone-50">
          <h1 className="font-bold text-6xl md:mb-8"># Contact Us</h1>
          <p className="text-xl md:w-[55%] text-center">
            We would love to hear from you! Feel free to reach out with any
            questions, feedback, or inquiries. We are here to assist you.
          </p>
        </div>
      </div>

      <SeniorManagementTeam />
      <OurTeam />
      <LocationAddress />
      <ContactForm />
    </section>
  );
}

export default Contact;
