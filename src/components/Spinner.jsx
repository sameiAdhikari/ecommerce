function Spinner() {
  return (
    <div className=" flex items-center justify-center min-w-full min-h-[100vh] ">
      <div className="w-12 h-12 border-5  border-gray-300 border-t-gray-600 rounded-full  animate-spin"></div>
      <span className="md:text-3xl font-semibold md:ml-3">Loading...</span>
    </div>
  );
}

export default Spinner;
