import { useState } from "react";
import ContactForm from "../components/ContactForm";
import LocationAddress from "../components/LocationAddress";
import OurTeam from "../components/OurTeam";
import SeniorManagementTeam from "../components/SeniorManagementTeam";

function Contact() {
  const [isLoading, setIsLoading] = useState(true);
  return (
    <section>
      {/* -----------------------------hero section------------------------------------- */}
      <div className="md:mt-[4rem] md:w-full md:h-[45dvh] relative flex items-center justify-center">
        <img
          src="/contact-page/pink/p1.jpg"
          alt="Contact Us"
          onLoad={() => setIsLoading(false)}
          className={`w-full h-full absolute top-0 left-0 z-[-1] ${
            isLoading ? "blur-2xl" : "blur-0"
          }`}
        />
        <div className="absolute top-0 left-0 md:w-full md:h-full flex flex-col items-center justify-center bg-black/60 text-stone-50">
          <h1 className="font-bold text-4xl md:mb-3 md:mt-10"># Contact Us</h1>
          <p className="text-[1.15rem] md:w-[50%] text-center">
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
