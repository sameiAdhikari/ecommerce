const JoinAffiliate = () => {
  return (
    <div className="bg-white mt-[7rem] text-gray-800 px-6 py-16 max-w-5xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-extrabold mb-4">
          Join Our Affiliate Program
        </h1>
        <p className="text-lg text-gray-600">
          Earn money by promoting products your audience will love. Join our
          growing community of affiliates and turn your reach into revenue.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 mb-16">
        <div className="p-6 bg-gray-200 rounded-2xl shadow hover:shadow-lg transition">
          <h2 className="text-xl font-semibold mb-2">📦 Promote Any Product</h2>
          <p>
            Access our entire catalog — from electronics to fashion — and
            promote the products you believe in.
          </p>
        </div>
        <div className="p-6 bg-gray-200 rounded-2xl shadow hover:shadow-lg transition">
          <h2 className="text-xl font-semibold mb-2">💰 Earn Commissions</h2>
          <p>
            Receive up to 15% commission on every sale made through your unique
            referral link. No limits.
          </p>
        </div>
        <div className="p-6 bg-gray-200 rounded-2xl shadow hover:shadow-lg transition">
          <h2 className="text-xl font-semibold mb-2">📊 Track Performance</h2>
          <p>
            Get real-time analytics, track clicks, and see how much you’re
            earning through your dashboard.
          </p>
        </div>
      </div>

      <div className="text-center">
        <h2 className="text-2xl font-bold mb-4">Start Earning Today</h2>
        <p className="text-gray-600 mb-6 text-[1.1rem]">
          Signing up is free, quick, and open to everyone. Whether you're a
          content creator, blogger, or just passionate about great products —
          this is for you.
        </p>
        <a
          href="/affiliate-signup"
          className="inline-block bg-blue-600 hover:bg-blue-400 text-white text-lg font-semibold px-8 py-3 rounded-xl transition"
        >
          Join Now
        </a>
      </div>

      <div className="mt-16 text-center text-md text-gray-400">
        Have questions?{" "}
        <a href="*" className="hover:underline text-blue-600">
          Contact our affiliate team
        </a>
        .
      </div>
    </div>
  );
};

export default JoinAffiliate;
