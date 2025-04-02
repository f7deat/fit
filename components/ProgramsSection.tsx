export default function ProgramsSection() {
  const programs = ["Software Engineering", "Information Systems", "Artificial Intelligence", "Cybersecurity"];
  return (
    <section id="programs" className="py-16 px-8 bg-gray-100 text-center">
      <h2 className="text-3xl font-bold text-blue-700">Programs Offered</h2>
      <ul className="mt-4 space-y-2">
        {programs.map((program, index) => (
          <li key={index} className="text-gray-700">{program}</li>
        ))}
      </ul>
    </section>
  );
}