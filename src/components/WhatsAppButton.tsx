'use client';

export default function WhatsAppButton() {
  const phoneNumber = '918074758938'; // Country code + number
  const message = encodeURIComponent("Hello! I'm interested in your farm dung products.");
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-[#25D366] hover:bg-[#1ebe5d] text-white p-3 rounded-full shadow-lg transition-transform transform hover:scale-110 z-50"
      aria-label="Chat on WhatsApp"
    >
      {/* WhatsApp SVG Icon */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 32 32"
        fill="currentColor"
        className="w-7 h-7"
      >
        <path d="M16.04 3C9.4 3 4 8.4 4 15.04c0 2.65.9 5.12 2.42 7.14L4 29l6.97-2.35a11.9 11.9 0 0 0 5.07 1.12h.01c6.64 0 12.04-5.4 12.04-12.04C28.09 8.4 22.69 3 16.04 3zm0 21.63c-1.64 0-3.25-.43-4.67-1.24l-.33-.19-4.14 1.39 1.36-4.03-.21-.35A9.68 9.68 0 0 1 6.36 15c0-5.33 4.34-9.67 9.68-9.67 5.33 0 9.67 4.34 9.67 9.67 0 5.33-4.34 9.67-9.67 9.67zm5.3-7.24c-.29-.15-1.72-.85-1.99-.94-.27-.1-.47-.15-.67.15-.2.29-.77.94-.94 1.13-.17.19-.35.21-.64.08-.29-.15-1.23-.45-2.34-1.45a8.75 8.75 0 0 1-1.62-2c-.17-.29 0-.45.13-.6.13-.13.29-.35.44-.52.15-.17.2-.29.29-.48.1-.19.05-.36-.03-.52-.08-.15-.67-1.61-.92-2.21-.24-.58-.49-.5-.67-.51h-.57c-.19 0-.52.08-.79.36-.27.29-1.03 1-.99 2.42.05 1.42.98 2.8 1.12 3 .13.19 1.9 3.04 4.62 4.26.65.28 1.16.45 1.55.58.65.21 1.25.18 1.72.11.53-.08 1.72-.7 1.96-1.37.24-.67.24-1.25.17-1.37-.06-.12-.27-.19-.56-.34z" />
      </svg>
    </a>
  );
}
