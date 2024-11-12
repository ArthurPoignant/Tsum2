export default function VideoBackground() {
  return (
    <div className="fixed top-0 left-0 w-full h-full overflow-hidden z-0">
      <video
        className="min-w-full min-h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/album_animation.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="absolute inset-0 bg-black opacity-50"></div>
    </div>
  )
}
