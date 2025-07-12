// import React from "react";

const BlogPostPage = () => {
  const post = {
    title: "Top 10 Must-Have Gadgets in 2025",
    author: "Jane Doe",
    date: "July 3, 2025",
    category: "Electronics",
    coverImage:
      "https://images.unsplash.com/photo-1413708617479-50918bc877eb?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: `
      Technology is evolving rapidly, and 2025 is already shaping up to be a year of incredible innovation.
      From smart wearables to home automation tools, here are the top 10 gadgets you should look out for.

      1. AI-Powered Smartwatches
      2. Foldable Smartphones
      3. Wireless Charging Desks
      4. Smart Glasses
      5. Multi-Device Charging Hubs
      6. Portable Projectors
      7. Noise-Canceling Smart Earbuds
      8. Home AI Assistants
      9. Compact 3D Printers
      10. AR-Focused Gaming Consoles

      At ShopVerse, we bring the future to your doorstep. Stay tuned for our upcoming deals!
    `,
  };

  return (
    <div className="max-w-4xl mt-[7rem] mx-auto px-4 py-10">
      <img
        src={post.coverImage}
        alt={post.title}
        className="rounded-2xl shadow-lg w-full mb-6"
      />
      <h1 className="text-4xl font-bold mb-2">{post.title}</h1>
      <div className="text-sm text-gray-500 mb-4">
        By <span className="text-gray-700 font-medium">{post.author}</span> |{" "}
        {post.date} | Category:{" "}
        <span className="text-blue-600">{post.category}</span>
      </div>
      <div className="prose max-w-none prose-lg prose-blue">
        {post.content.split("\n").map((para, i) => (
          <p key={i}>{para.trim()}</p>
        ))}
      </div>
    </div>
  );
};

export default BlogPostPage;
