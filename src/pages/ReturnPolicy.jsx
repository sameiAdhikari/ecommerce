const ReturnPolicy = () => {
  return (
    <div className="max-w-3xl mt-[7rem] mx-auto px-4 py-12 text-gray-800">
      <h1 className="text-4xl font-extrabold mb-6">Return & Refund Policy</h1>

      <p className="mb-4">
        We want you to love what you ordered. If something isn't right, let us
        help.
      </p>

      <h2 className="text-2xl font-bold mt-8 mb-2">Returns</h2>
      <p className="mb-4">
        You can return most items within <strong>30 days of delivery</strong>{" "}
        for a full refund or exchange. Items must be unused, in their original
        packaging, and accompanied by the receipt or proof of purchase.
      </p>

      <ul className="list-disc pl-6 mb-4 space-y-2">
        <li>
          Products like clothing, electronics, books, and toys are eligible for
          return.
        </li>
        <li>Items marked as "Final Sale" cannot be returned.</li>
        <li>
          Beauty or personal care products must be unopened for return
          eligibility.
        </li>
      </ul>

      <h2 className="text-2xl font-bold mt-8 mb-2">Refunds</h2>
      <p className="mb-4">
        Once we receive your returned item, we’ll inspect it and notify you of
        the refund status. If approved, your refund will be processed to your
        original payment method within 5–7 business days.
      </p>

      <h2 className="text-2xl font-bold mt-8 mb-2">Exchanges</h2>
      <p className="mb-4">
        Want a different size or color? Contact us to request an exchange, and
        we’ll help you out as long as the item is still in stock.
      </p>

      <h2 className="text-2xl font-bold mt-8 mb-2">How to Start a Return</h2>
      <ol className="list-decimal pl-6 mb-4 space-y-2">
        <li>
          Email us at:
          <a
            href="khadkan73@gamil.com"
            className="text-blue-600 underline ml-2"
          >
            khadkan73@gamil.com
          </a>
        </li>
        <li>Include your order number and reason for return</li>
        <li>We’ll send you a return label and further instructions</li>
      </ol>

      <h2 className="text-2xl font-bold mt-8 mb-2">Questions?</h2>
      <p className="mb-8">
        Reach out to our support team anytime — we're here to make things right.
      </p>

      <div className="text-sm text-gray-500 mt-8 border-t pt-4">
        Last updated: {new Date().toISOString()}
      </div>
    </div>
  );
};

export default ReturnPolicy;
