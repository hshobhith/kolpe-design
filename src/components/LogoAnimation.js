export default function LogoAnimation() {
  return (
    <div className="flex items-center justify-center h-16 w-16 sm:h-20 sm:w-20 relative">
      {[...Array(5)].map((_, i) => (
        <div
          key={i}
          className="absolute border border-white rounded-full animate-pulse-circle"
          style={{
            width: `${20 + i * 8}px`, // Smaller widths
            height: `${20 + i * 8}px`,
            animationDelay: `${i * 0.2}s`,
          }}
        />
      ))}
    </div>
  );
}
