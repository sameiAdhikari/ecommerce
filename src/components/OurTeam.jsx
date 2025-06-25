import { FaClock, FaVoicemail } from "react-icons/fa";
import { FaMessage } from "react-icons/fa6";

function OurTeam() {
  return (
    <div className="bg-gray-300  md:pt-10 md:pb-20">
      <h2 className="text-3xl font-bold text-center mb-6">Meet Our Team</h2>
      <div className="md:w-[85%] md:m-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-4 rounded shadow">
          <FaMessage className="text-4xl mb-2" />
          <h3 className="text-xl font-semibold">Customer Support</h3>
          <p>Our dedicated team is here to assist you with any inquiries.</p>
        </div>
        <div className="bg-white p-4 rounded shadow">
          <FaVoicemail className="text-4xl mb-2" />
          <h3 className="text-xl font-semibold">Sales Team</h3>
          <p>Contact our sales team for product information and pricing.</p>
        </div>
        <div className="bg-white p-4 rounded shadow">
          <FaClock className="text-4xl mb-2" />
          <h3 className="text-xl font-semibold">Technical Support</h3>
          <p>Get help with technical issues from our expert support staff.</p>
        </div>
      </div>
    </div>
  );
}

export default OurTeam;
