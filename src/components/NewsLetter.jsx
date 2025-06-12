function NewsLetter() {
  return (
    <section>
      <div className="bg-gray-100 p-8 md:p-16 text-center">
        <h2 className="text-3xl font-bold mb-4">Subscribe to Our Newsletter</h2>
        <p className="text-gray-600 mb-6">
          Stay updated with our latest collections and exclusive offers.
        </p>
        <form className="flex justify-between mx-auto w-[40%]">
          <input
            type="email"
            placeholder="Enter your email"
            className="px-4 py-2 border w-[80%] border-gray-300 bg-stone-50 rounded-md md:mr-5 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <button
            type="submit"
            className="px-6 py-2 bg-indigo-500 text-white rounded-md hover:bg-indigo-600 transition cursor-pointer"
          >
            Subscribe
          </button>
        </form>
        <p className="text-[17px] text-gray-600 md:mt-4">
          Your email is safe with us, we don't spam
        </p>
      </div>
    </section>
  );
}

export default NewsLetter;
