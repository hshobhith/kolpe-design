import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/919483050656"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 flex items-center gap-2 bg-green-500 text-white px-4 py-2 rounded-full shadow-lg hover:bg-green-600 transition-all duration-300 z-50"
    >
      <FaWhatsapp className="text-2xl" />
      <span className="hidden sm:inline font-medium">Let's Chat</span>
    </a>
  );
}
