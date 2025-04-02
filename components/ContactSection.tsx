export default function ContactSection() {
  return (
    <section id="contact" className="py-16 px-8 bg-gray-100 text-center">
      <h2 className="text-3xl font-bold text-blue-700 mb-8">Contact Us</h2>
      <div className="relative w-full max-w-4xl mx-auto">
        {/* Google Map */}
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3723.856857488041!2d105.7842393154024!3d21.02851179320285!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab4000000001%3A0x1b7b7b7b7b7b7b7b!2sHai%20Phong%20University!5e0!3m2!1sen!2s!4v1616581234567!5m2!1sen!2s"
          width="100%"
          height="400"
          style={{ border: 0 }}
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="rounded-lg shadow-lg"
        ></iframe>

        {/* Overlay Contact Info */}
        <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center bg-opacity-50 text-white p-8 rounded-lg">
          <p className="text-lg font-semibold">Address: 123 Hai Phong Street, Vietnam</p>
          <p className="text-lg font-semibold mt-2">Email: info@fit-hpu.edu.vn</p>
          <p className="text-lg font-semibold mt-2">Phone: +84 123 456 789</p>
        </div>
      </div>
    </section>
  );
}