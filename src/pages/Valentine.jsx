export default function Valentine() {
  return (
    <div className="h-screen w-screen relative overflow-hidden
      bg-gradient-to-br from-pink-200 via-pink-100 to-rose-200
      flex items-center justify-center">

      {/* Floating hearts (background feel) */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-20 left-20 text-6xl">💖</div>
        <div className="absolute top-40 right-32 text-5xl">💗</div>
        <div className="absolute bottom-32 left-40 text-6xl">💕</div>
        <div className="absolute bottom-20 right-20 text-5xl">💘</div>
      </div>

      {/* Main Card */}
      <div className="relative bg-white/70 backdrop-blur-md
        px-12 py-14 rounded-3xl shadow-2xl
        text-center max-w-lg w-[90%]
        animate-fadeIn">

        <img
          src="/bear.png"
          alt="cute"
          className="mx-auto mb-6 w-36 drop-shadow-md"
        />

        <h1 className="text-4xl md:text-5xl font-bold text-pink-600 mb-4">
          Happy Valentine’s Day
        </h1>

        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
          Every second with you is a celebration. <br />
          You make my world brighter 💕
        </p>

        <p className="mt-6 text-pink-500 font-medium text-lg">
          Forever starts with this moment ❤️
        </p>
      </div>
    </div>
  );
}
