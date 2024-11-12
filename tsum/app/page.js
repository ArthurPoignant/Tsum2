import NewsSection from './components/NewsSection';
import YouTubeVideo from './components/YouTubeVideo';

export default function Home() {
  return (
    <main className="relative min-h-screen pt-16">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/album_animation.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <section className="relative z-10">
        <h1 className="md:text-4xl text-3xl text-center text-white font-bold animate-pulse mb-16">Welcome to Tsum Records</h1>
        <NewsSection />
      </section>
      <section className='backdrop-blur-2xl p-12 min-h-[50vh] sm:w-5/6 md:w-2/3  mx-auto rounded-lg border border-white/15 mb-24'>
        <h1 className="text-3xl text-center text-white font-horizon animate-pulse mb-12 tracking-wider">Our Story</h1>
        <div className="max-w-3xl mx-auto">
          <p className="text-xl leading-relaxed text-gray-200 mb-8">
            Tsum Records is a record label that specializes in releasing music from independent artists. We are a team of music lovers who are passionate about finding and promoting new music.
          </p>
          <p className="text-xl leading-relaxed text-gray-200 mb-8">
            We believe that music is a powerful force that can bring people together and that every artist has a unique story to tell.
          </p>
          <p className="text-xl leading-relaxed text-gray-200 italic text-center font-semibold">
            We are committed to supporting our artists and helping them achieve their dreams.
          </p>
          <h1 className="text-xl text-center text-white font-horizon animate-pulse mt-16 tracking-wider">We are Tsum Records</h1>
        </div>
      </section>
      <section className="relative z-10 items-center justify-center flex md:flex-row flex-col bg-black border-t border-white/15">
        <h1 className="text-4xl text-center md:mt-0 mt-8 text-white font-bold animate-pulse mb-8">chica sovética</h1>
        <YouTubeVideo videoId="KUFnQHVRCCk" />
      </section>
    </main>
  );
}
