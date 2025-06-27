import koushik from '../images/koushik.jpeg';
export default function AboutUs() {
  return (
    <div className="relative  max-w-5xl mx-auto p-6 pt-24">
      <h2 className="text-4xl font-bold mb-6 text-center">About Kaushik</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Description */}
        <div className="text-gray-800 text-lg leading-relaxed">
          <p className="mb-4">
            <strong>Kaushik</strong> is a passionate and visionary architect known for designing spaces that are both stunning and functional. With a deep understanding of aesthetics, structure, and sustainability, he has transformed countless ideas into timeless buildings that inspire and elevate everyday life.
          </p>

          <p className="mb-4">
            With an eye for detail and a heart for creativity, Koushik brings each project to life by blending modern design principles with a respect for the environment and cultural context. His portfolio spans residential homes, commercial complexes, and public spaces — each reflecting elegance, balance, and innovation.
          </p>

          <p className="mb-4">
            Beyond design, Kaushik believes architecture is about crafting experiences. He works closely with clients to understand their needs and dreams, ensuring that every line drawn has purpose, and every corner built tells a story.
          </p>

          <p>
            Driven by excellence and inspired by beauty, Koushik continues to shape the future of architecture — one building at a time.
          </p>
        </div>

        {/* Architect Image */}
        <div className="flex justify-center">
          <img
            src={koushik} 
            alt="Architect Kaushik"
            className="w-64 h-64 object-cover rounded-full shadow-lg"
          />
        </div>
      </div>
    </div>
  );
}
