import logo from '../images/logo1.png';

export default function Footer() {
  return (
    <footer className="bg-[#2a2a2a] text-white py-12 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-10">
        <div className="text-left">
          <img
            src={logo} 
            alt="Logo"
            className="mx-auto mb-4 h-24 w-24 sm:h-26 sm:w-26"
          />
          <div className="flex gap-6 mt-6 text-2xl">
            <a
              href="https://wa.me/919483050656"
              target="_blank"
              rel="noopener noreferrer"
              title="WhatsApp"
              className="hover:text-green-400"
            >
              <i className="fab fa-whatsapp" />
            </a>
            <a
              href="https://www.instagram.com/kolpe_design_studio?igsh=MTZuZW01ODk3OGVvdQ=="
              target="_blank"
              rel="noopener noreferrer"
              title="Instagram"
              className="hover:text-pink-500"
            >
              <i className="fab fa-instagram" />
            </a>
            <a
              href="mailto:kolpedesignstudio@gmail.com"
              title="Gmail"
              className="hover:text-red-500"
            >
              <i className="fas fa-envelope" />
            </a>
          </div>
        </div>

        <div className="text-sm leading-relaxed max-w-md">
          <p>Kolpe Design</p>
          <p>Mangalore || Bengaluru</p>
          <p>Ph: +91 94830 50656</p>
          <p>Mail: <a href="mailto:kolpedesignstudio@gmail.com" className="underline">kolpedesignstudio@gmail.com</a></p>
        </div>
      </div>

      <div className="text-center text-sm mt-10 text-gray-400">
        &copy; Shobhi | KOLPE DESIGN 
      </div>
    </footer>
  );
}
