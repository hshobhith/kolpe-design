export default function Services() {
  // Dynamically require all images from the projects folder
  const importAll = (r) => r.keys().map(r);
  const images = importAll(require.context('../images/projects', false, /\.(png|jpe?g|gif)$/));

  return (
    <div className="p-6  max-w-6xl mx-auto pt-24">
      <h2 className="text-4xl  mb-8 text-center">Our Projects</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {images.map((img, index) => (
          <div
            key={index}
            className="group relative overflow-hidden rounded-2xl shadow-lg cursor-pointer transform transition duration-300 hover:scale-105"
          >
            <img
              src={img}
              alt={`Project ${index + 1}`}
              className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
              <p className="text-white font-medium">Kolpe Design</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
