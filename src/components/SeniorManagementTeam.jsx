function SeniorManagementTeam() {
  return (
    <section className="bg-gray-100 py-10">
      <div className="w-[85%] md:m-auto">
        <h2 className="text-3xl font-bold text-center mb-6">
          Senior Management Team
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-4 rounded shadow">
            <img
              src="/people/1.png"
              alt="CEO"
              className="w-24 h-24 rounded-full mb-4"
            />
            <div>
              <h3 className="text-xl font-semibold">John Doe</h3>
              <p>CEO - Leading the company with vision and strategy.</p>
              <p>Email: cheifofficer@ceo.gmail.com</p>
              <p>Phone: +1234567890</p>
            </div>
          </div>
          <div className="bg-white p-4 rounded shadow">
            <img
              src="/people/2.png"
              alt="CEO"
              className="w-24 h-24 rounded-full mb-4"
            />
            <div>
              <h3 className="text-xl font-semibold">Jane Smith</h3>
              <p>CTO - Overseeing technology and product development.</p>
              <p>Email: technical@cto.gmail.com</p>
              <p>Phone: +0987654321</p>
            </div>
          </div>
          <div className="bg-white p-4 rounded shadow">
            <img
              src="/people/3.png"
              alt="CEO"
              className="w-24 h-24 rounded-full mb-4"
            />
            <div>
              <h3 className="text-xl font-semibold">Alice Johnson</h3>
              <p>CFO - Managing financial operations and strategy.</p>
              <p>Email: finance@cfo.gmail.com</p>
              <p>Phone: +1122334455</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SeniorManagementTeam;
