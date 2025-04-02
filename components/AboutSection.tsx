export default function AboutSection() {
  return (
    <section id="about" className="py-16 px-8 bg-gray-50">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <div className="text-center md:text-left">
          <h2 className="text-4xl font-extrabold text-blue-700 leading-tight">
            About Us
          </h2>
          <p className="text-gray-600 mt-6 text-lg leading-relaxed">
            The Faculty of Information Technology at Hai Phong University is dedicated to excellence in teaching, research, and innovation. 
            We aim to empower students with the skills and knowledge to thrive in the ever-evolving tech industry.
          </p>
          <p className="text-gray-600 mt-4 text-lg leading-relaxed">
            Join us to explore cutting-edge technologies, collaborate with industry leaders, and shape the future of IT.
          </p>
        </div>

        {/* Video Content */}
        <div className="flex justify-center">
          <div className="relative w-full max-w-md md:max-w-lg aspect-video rounded-lg overflow-hidden shadow-lg">
            <iframe
              src="https://www.youtube.com/embed/r6ZZ3GhR-pw"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute top-0 left-0 w-full h-full"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}