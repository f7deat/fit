export default function ContactSection() {
  return (
    <section id="contact" className="py-16 px-8 bg-gray-100 text-center">
      <h2 className="text-3xl font-bold text-blue-700">Contact Us</h2>
      <p className="text-gray-700 mt-4">Address: 123 Hai Phong Street, Vietnam</p>
      <p className="text-gray-700">Email: info@fit-hpu.edu.vn</p>
      <p className="text-gray-700">Phone: +84 123 456 789</p>
      <div className="mt-8">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3723.856857488041!2d105.7842393154024!3d21.02851179320285!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab4000000001%3A0x1b7b7b7b7b7b7b7b!2sHai%20Phong%20University!5e0!3m2!1sen!2s!4v1616581234567!5m2!1sen!2s"
          width="100%"
          height="400"
          style={{ border: 0 }}
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </section>
  );
}