export default function ContactSection() {
  return (
    <section id="contact" className=" bg-gray-100 text-center">
      <div className="relative w-full mx-auto">
        {/* Google Map */}
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3729.6043989960267!2d106.62390099999999!3d20.8072865!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x314a7735d162afdb%3A0x70df39254ee1c357!2zVHLGsOG7nW5nIMSQ4bqhaSBo4buNYyBI4bqjaSBQaMOybmc!5e0!3m2!1svi!2s!4v1743655123598!5m2!1svi!2s"
          width="100%"
          style={{ border: 0 }}
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="rounded-lg shadow-lg h-[200px] md:h-[400px]"
        ></iframe>
      </div>
    </section>
  );
}