import ArtistList from '../components/ArtistList';

const artists = [
  { name: 'Artist 1', genre: 'Pop', image: '/GIBxTSUM.jpeg' },
  { name: 'Artist 2', genre: 'Rock', image: '/GIBxTSUM.jpeg' },
  { name: 'Artist 3', genre: 'Hip Hop', image: '/GIBxTSUM.jpeg' },
  { name: 'Artist 4', genre: 'Pop', image: '/GIBxTSUM.jpeg' },
  { name: 'Artist 5', genre: 'Rock', image: '/GIBxTSUM.jpeg' },
  { name: 'Artist 6', genre: 'Hip Hop', image: '/GIBxTSUM.jpeg' },
  // Add more artists as needed
];

export default function ArtistsPage() {
  return (
    <>
      <video
        className="fixed top-0 left-0 w-full h-full object-cover z-[-1]"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/album_animation.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="container mx-auto py-8">
        <h1 className="text-3xl sm:text-4xl font-bold text-white mb-8 text-center font-horizon">Tsum Members</h1>
        <ArtistList artists={artists} />
      </div>
    </>
  );
}
