import {
  HiOutlineLocationMarker,
  HiOutlinePhone,
  HiOutlineMail,
} from "react-icons/hi";

type ContactInfoLine = {
  label: string;
  href?: string;
};

type ContactInfoCardProps = {
  icon: "location" | "phone" | "mail";
  title: string;
  content: ContactInfoLine[];
  variant: "red" | "navy";
  backgroundImage?: string;
};

export default function ContactInfoCard({
  icon,
  title,
  content,
  variant,
  backgroundImage,
}: ContactInfoCardProps) {
  const bgColor =
    variant === "red"
      ? "bg-gradient-to-br from-[#c22542] to-[#031428]"
      : "bg-[#1c2e46]";

  const overlayOpacity =
    variant === "red" ? "bg-black/10" : "bg-black/40";

  const Icon =
    icon === "location"
      ? HiOutlineLocationMarker
      : icon === "phone"
        ? HiOutlinePhone
        : HiOutlineMail;

  return (
    <div
      className="
        group relative rounded-2xl p-10 text-center text-white overflow-hidden
        shadow-[0_10px_40px_rgba(0,0,0,0.12)] transition-all duration-300 ease-in-out
        hover:shadow-[0_15px_50px_rgba(0,0,0,0.18)] hover:scale-[1.02] cursor-default
        bg-white
      "
    >
      {backgroundImage && (
        <>
          <img
            src={backgroundImage}
            alt=""
            aria-hidden="true"
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-110"
          />
          <div
            className={`absolute inset-0 ${overlayOpacity}`}
          />
        </>
      )}

      <div
        className={`absolute inset-0 ${bgColor} ${
          backgroundImage ? "opacity-70" : "opacity-100"
        }`}
      />

      <div className="relative z-10">
        <div className="flex justify-center mb-5">
          <div
            className="
              bg-white/20 backdrop-blur-sm rounded-full p-3.5 border border-white/30
              transition-all duration-300 ease-in-out
              group-hover:scale-110 group-hover:rotate-6
            "
          >
            <Icon className="w-8 h-8" />
          </div>
        </div>

        <h3 className="text-lg font-semibold mb-4 tracking-wide">
          {title}
        </h3>

        <div className="space-y-1">
          {content.map((line, index) => (
            <p
              key={index}
              className="text-sm leading-relaxed opacity-95"
            >
              {line.href ? (
                <a
                  href={line.href}
                  className="hover:underline hover:text-white"
                >
                  {line.label}
                </a>
              ) : (
                line.label
              )}
            </p>
          ))}
        </div>
      </div>

      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out pointer-events-none" />
    </div>
  );
}