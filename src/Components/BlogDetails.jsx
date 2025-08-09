import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";

const blogs = [
  {
    id: 1,
    image: "https://images.pexels.com/photos/12437056/pexels-photo-12437056.jpeg",
    title: "First-Time Buyer Guide",
    excerpt: "Buying your first home can be both exciting and overwhelming. From saving for a down payment to understanding mortgage terms, it’s easy to get lost in the process. Start by assessing your finances and getting pre-approved for a loan. Research neighborhoods, visit open houses, and choose a real estate agent who understands your needs. Don’t rush—take time to understand the paperwork, taxes, and long-term responsibilities of owning a home. With the right preparation, your first home can be a smooth and rewarding investment for your future",
    date: "Aug 07, 2025 | 10:00 AM",
  },
  {
    id: 2,
    image: "https://as2.ftcdn.net/v2/jpg/03/26/98/51/1000_F_326985142_1aaKcEjMQW6ULp6oI9MYuv8lN9f8sFmj.jpg",
    title: "Mistakes When Selling",
    excerpt: "Selling a home involves more than listing and waiting. Common mistakes include overpricing, poor photos, ignoring repairs, and skipping staging. Buyers form opinions quickly—often online—so your home’s first impression matters. Always declutter, fix minor issues, and use high-quality images. Avoid emotional pricing and listen to your agent’s market analysis. Also, make your home available for showings, even on short notice. These small changes can significantly improve your chances of selling faster and at a better price.",
    date: "Aug 06, 2025 | 02:30 PM",
  },
  {
    id: 3,
    image: "https://images.pexels.com/photos/8815878/pexels-photo-8815878.jpeg",
    title: "Real Estate Trends 2025",
    excerpt: "The real estate market is constantly evolving, and 2025 is no exception. Expect to see continued growth in smart homes, remote work-driven relocations, and eco-friendly construction. Virtual tours and AI-powered property matching will become even more common. Suburban and smaller cities will attract more buyers due to affordability and lifestyle preferences. Investors are also turning to fractional ownership and real estate tokens. Staying informed about these trends can help buyers, sellers, and investors make smarter decisions in a tech-driven housing market..",
    date: "Aug 05, 2025 | 09:45 AM",
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1617127365659-c47fa864d8bc?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Rent or Buy?",
    excerpt: "Deciding whether to rent or buy depends on your financial goals and lifestyle. Renting offers flexibility and lower upfront costs, making it ideal for those who move often or are uncertain about long-term plans. Buying builds equity and can be a smart investment, but it requires a significant commitment and maintenance. Consider your job stability, future plans, and budget. Use rent vs. buy calculators to compare long-term costs. There’s no one-size-fits-all answer—choose what fits your current stage of life.",
    date: "Aug 05, 2025 | 09:45 AM",
  },
];

const BlogDetails = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    const found = blogs.find((b) => b.id === parseInt(id));
    setBlog(found);
  }, [id]);

  if (!blog) {
    return (
      <div className="text-center mt-20 text-red-500 text-xl font-medium">
        Blog not found!
      </div>
    );
  }

  const otherBlogs = blogs.filter((b) => b.id !== parseInt(id)).slice(0, 4);

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <div className="bg-white shadow-lg rounded-lg p-6 mb-10">
        <div className="flex flex-col items-center space-y-4 sm:flex-row sm:space-y-0 sm:justify-between sm:items-start">
          <img
            src={blog.image}
            alt={blog.title}
            className="w-40 h-40 object-cover rounded-full border-4 border-blue-300"
          />
          <Link to="/blog">
            <button className="bg-green-400 px-6 py-2 rounded-3xl hover:bg-green-700 hover:text-white mt-4 sm:mt-0">
              Back to Blogs
            </button>
          </Link>
        </div>
        <h1 className="text-3xl md:text-4xl font-bold mt-6 mb-3 text-center">
          {blog.title}
        </h1>
        <p className="text-sm text-gray-500 mb-4 text-center">{blog.date}</p>
        <p className="text-gray-700 text-base md:text-lg leading-relaxed">
          {blog.excerpt}
        </p>
      </div>

      <h2 className="text-2xl font-semibold mb-4">Our Other Blogs</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {otherBlogs.map((b) => (
          <Link
            to={`/blog/${b.id}`}
            key={b.id}
            className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-xl transition duration-300"
          >
            <img
              src={b.image}
              alt={b.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-bold mb-2">{b.title}</h3>
              <p className="text-sm text-gray-600 mb-2">{b.date}</p>
              <p className="text-sm text-gray-700 line-clamp-3">
                {b.excerpt}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default BlogDetails;
