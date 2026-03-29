export default function Footer() {
  return (
    <footer className="bg-black text-white text-center py-12">
      <h3 className="text-xl font-semibold mb-2">Get in Touch</h3>

      <p className="text-gray-300 mb-4">
        Call or WhatsApp us for inquiries
      </p>

      {/* CLICKABLE PHONE NUMBER */}
      <a
        href="tel:+254718856612"
        className="text-2xl font-bold text-orange-400 hover:underline"
      >
        +254 718 856 612
      </a>

      {/* OPTIONAL WHATSAPP QUICK LINK */}
      <div className="mt-4">
        <a
          href="https://wa.me/254718856612"
          target="_blank"
          rel="noopener noreferrer"
          className="text-green-400 hover:underline"
        >
          Chat on WhatsApp
        </a>
      </div>

      <p className="mt-6 text-sm text-gray-400">
        © {new Date().getFullYear()} Manzi Homes
      </p>
    </footer>
  );
}