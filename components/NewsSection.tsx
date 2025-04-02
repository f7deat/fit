import Image from "next/image";

export default function NewsSection() {
  const newsArticles = [
    {
      id: 1,
      image: "https://via.placeholder.com/300x200",
      title: "Faculty Hosts Annual Technology Conference",
      description: "The Faculty of Information Technology successfully hosted its annual technology conference, bringing together experts and students.",
      viewCount: 1200,
      date: "April 1, 2025",
    },
    {
      id: 2,
      image: "https://via.placeholder.com/300x200",
      title: "New AI Research Lab Opens at the University",
      description: "The university has inaugurated a state-of-the-art AI research lab to foster innovation and collaboration in artificial intelligence.",
      viewCount: 950,
      date: "March 28, 2025",
    },
    {
      id: 3,
      image: "https://via.placeholder.com/300x200",
      title: "Students Win National Programming Contest",
      description: "A team of students from the Faculty of Information Technology won first place in the national programming contest.",
      viewCount: 1800,
      date: "March 20, 2025",
    },
    {
      id: 4,
      image: "https://via.placeholder.com/300x200",
      title: "Cybersecurity Workshop Held for Students",
      description: "The faculty organized a hands-on cybersecurity workshop to equip students with practical skills in network security.",
      viewCount: 700,
      date: "March 15, 2025",
    },
  ];

  return (
    <section id="news" className="py-16 px-8 bg-white">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-blue-700 text-center">News & Events</h2>
        <p className="text-gray-700 mt-4 text-center">
          Stay updated with the latest activities and announcements from our faculty.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-8">
          {newsArticles.map((article) => (
            <div key={article.id} className="bg-gray-100 rounded-lg shadow-md overflow-hidden">
              <Image
                src={article.image}
                alt={article.title}
                width={300}
                height={200}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-bold text-blue-700 line-clamp-2">{article.title}</h3>
                <p className="text-sm text-gray-700 mt-2 line-clamp-3">{article.description}</p>
                <div className="flex justify-between items-center mt-4 text-sm text-gray-500">
                  <span>{article.date}</span>
                  <span>{article.viewCount} views</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}