function ValueBox({ image, title, children }) {
  // This component represents a box that displays a core value with an image, title, and description.
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <img src={image} alt={title} className="w-16 h-16  mx-auto" />
      <h2 className="text-xl font-bold mb-4">{title}</h2>
      <p>{children}</p>
    </div>
  );
}

export default ValueBox;
