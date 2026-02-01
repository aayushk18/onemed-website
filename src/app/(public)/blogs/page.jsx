import { Calendar, User, ArrowRight, Clock } from 'lucide-react';

export default function Blogs() {
  const blogPosts = [
    {
      id: '1',
      title: 'Top 10 NEET PG Preparation Tips for 2026',
      excerpt: 'Discover the most effective strategies to ace NEET PG exam with expert guidance and proven techniques.',
      author: 'Dr. Rajesh Kumar',
      date: 'Jan 18, 2026',
      readTime: '5 min read',
      category: 'NEET Preparation',
      image: 'https://images.pexels.com/photos/4226140/pexels-photo-4226140.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      id: '2',
      title: 'MBBS Study Strategies: First Year Success Guide',
      excerpt: 'Essential tips and techniques to excel in your first year of MBBS, from anatomy to biochemistry.',
      author: 'Dr. Amit Patel',
      date: 'Jan 15, 2026',
      readTime: '7 min read',
      category: 'MBBS Tips',
      image: 'https://images.pexels.com/photos/5427868/pexels-photo-5427868.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      id: '3',
      title: 'Anatomy Simplified: Learning Human Body Systems',
      excerpt: 'Break down complex anatomical concepts with our systematic approach to understanding body systems.',
      author: 'Dr. Priya Sharma',
      date: 'Jan 12, 2026',
      readTime: '6 min read',
      category: 'Anatomy',
      image: 'https://images.pexels.com/photos/8460157/pexels-photo-8460157.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      id: '4',
      title: 'Pharmacology Memory Tricks and Mnemonics',
      excerpt: 'Master drug classifications and mechanisms with these proven memory techniques.',
      author: 'Dr. Meera Reddy',
      date: 'Jan 10, 2026',
      readTime: '8 min read',
      category: 'Pharmacology',
      image: 'https://images.pexels.com/photos/3683056/pexels-photo-3683056.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      id: '5',
      title: 'Case-Based Learning in Medical Education',
      excerpt: 'How clinical case studies enhance your understanding and exam performance.',
      author: 'Dr. Sneha Gupta',
      date: 'Jan 8, 2026',
      readTime: '5 min read',
      category: 'Medical Education',
      image: 'https://images.pexels.com/photos/4386466/pexels-photo-4386466.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      id: '6',
      title: 'USMLE Step 1: Complete Preparation Roadmap',
      excerpt: 'A comprehensive guide to planning and executing your USMLE Step 1 preparation.',
      author: 'Dr. Vikram Malhotra',
      date: 'Jan 5, 2026',
      readTime: '10 min read',
      category: 'USMLE',
      image: 'https://images.pexels.com/photos/4386466/pexels-photo-4386466.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
  ];

  const categories = [
    'All',
    'NEET Preparation',
    'MBBS Tips',
    'Anatomy',
    'Pharmacology',
    'Pathology',
    'Medical Education',
    'USMLE',
    'Career Guidance',
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <section className="bg-gradient-to-br from-blue-600 to-blue-700 text-white py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Medical Education Blog</h1>
          <p className="text-xl text-blue-100">
            Expert insights, study tips, and medical education guidance
          </p>
        </div>
      </section>

      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8 flex flex-wrap gap-3 justify-center">
            {categories.map((category, index) => (
              <button
                key={index}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  index === 0
                    ? 'bg-blue-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-blue-50'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <div
                key={post.id}
                className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow overflow-hidden"
              >
                <div className="aspect-video overflow-hidden bg-gray-200">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <div className="text-blue-600 font-semibold text-sm mb-2">
                    {post.category}
                  </div>
                  <h2 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                    {post.title}
                  </h2>
                  <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <div className="flex items-center space-x-2">
                      <User className="w-4 h-4" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Clock className="w-4 h-4" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2 text-sm text-gray-500">
                      <Calendar className="w-4 h-4" />
                      <span>{post.date}</span>
                    </div>
                    <button className="text-blue-600 font-semibold hover:text-blue-700 flex items-center space-x-1">
                      <span>Read More</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
