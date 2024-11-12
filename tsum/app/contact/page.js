import ContactForm from '../components/ContactForm'

export default function ContactPage() {
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
      <div className="container flex flex-col items-center mx-auto py-8">
        <h1 className="text-3xl font-bold mb-6 text-white">Contact us</h1>
        <ContactForm />
      </div>
    </>
  )
}
