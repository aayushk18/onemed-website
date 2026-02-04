import { Target, Eye, Award, Users, BookOpen, TrendingUp } from 'lucide-react';

export default function About() {
  const stats = [
    { icon: Users, value: '5,000+', label: 'Students Taught' },
    { icon: BookOpen, value: '50+', label: 'Expert Tutors' },
    { icon: Award, value: '95%', label: 'Success Rate' },
    { icon: TrendingUp, value: '10+', label: 'Years Experience' },
  ];

  const values = [
    {
      icon: Target,
      title: 'Excellence in Education',
      description: 'We strive for the highest quality of medical education with personalized attention to each student.',
    },
    {
      icon: Users,
      title: 'Student-Centric Approach',
      description: 'Our teaching methodology is designed around individual student needs and learning styles.',
    },
    {
      icon: Award,
      title: 'Proven Results',
      description: 'Our students consistently achieve top ranks in NEET, MBBS, and other medical exams.',
    },
  ];

  const successStories = [
    {
      name: 'Dr. Ananya Reddy',
      achievement: 'NEET PG AIR 45',
      quote: 'OneMed Tutor transformed my preparation strategy and helped me achieve my dream rank.',
    },
    {
      name: 'Karan Mehta',
      achievement: 'MBBS Gold Medalist',
      quote: 'The personalized guidance and excellent teaching made all the difference in my journey.',
    },
    {
      name: 'Dr. Sarah Thomas',
      achievement: 'USMLE Step 1 - 260',
      quote: 'The structured approach and expert faculty helped me score exceptionally well.',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <section className="bg-blue-400 text-white py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About OneMed Tutor</h1>
          <p className="text-xl text-blue-100">
            Empowering medical students to achieve excellence
          </p>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 text-blue-400 rounded-full mb-4">
                  <stat.icon className="w-8 h-8" />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div className="bg-white rounded-xl shadow-md p-8">
              <div className="flex items-center space-x-3 mb-4">
                <Target className="w-8 h-8 text-blue-400" />
                <h2 className="text-3xl font-bold text-gray-900">Our Mission</h2>
              </div>
              <p className="text-gray-700 leading-relaxed">
                To provide world-class medical education through personalized online tutoring,
                making quality learning accessible to every medical student regardless of their
                location. We aim to bridge the gap between traditional classroom learning and
                individual student needs through innovative teaching methods and dedicated mentorship.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-md p-8">
              <div className="flex items-center space-x-3 mb-4">
                <Eye className="w-8 h-8 text-blue-400" />
                <h2 className="text-3xl font-bold text-gray-900">Our Vision</h2>
              </div>
              <p className="text-gray-700 leading-relaxed">
                To become the most trusted and preferred platform for medical education globally,
                setting new standards in online tutoring through cutting-edge technology, expert
                faculty, and student-centric approaches. We envision a future where every medical
                student has access to personalized, high-quality education that prepares them
                for excellence in their careers.
              </p>
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Our Core Values
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {values.map((value, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-lg transition-shadow"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 text-blue-400 rounded-full mb-4">
                    <value.icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {value.title}
                  </h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-md p-8 mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Why OneMed Tutor?</h2>
            <div className="space-y-4 text-gray-700">
              <p className="leading-relaxed">
                Founded by a team of experienced medical educators and doctors, OneMed Tutor was
                created to address the unique challenges faced by medical students. We understand
                that medical education requires not just rote learning, but deep conceptual
                understanding and clinical application.
              </p>
              <p className="leading-relaxed">
                Our platform brings together highly qualified tutors who are not just experts in
                their subjects but also passionate about teaching. Each tutor undergoes rigorous
                selection and training to ensure they can deliver the highest quality education.
              </p>
              <p className="leading-relaxed">
                We combine traditional teaching wisdom with modern technology to create an engaging
                and effective learning experience. From live interactive classes to comprehensive
                study materials, from personalized doubt-clearing sessions to detailed performance
                analytics, we provide everything a medical student needs to succeed.
              </p>
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Success Stories
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {successStories.map((story, index) => (
                <div
                  key={index}
                  className="bg-blue-50 rounded-xl p-6 hover:shadow-lg transition-shadow"
                >
                  <div className="text-4xl text-blue-600 mb-4">"</div>
                  <p className="text-gray-700 italic mb-4">{story.quote}</p>
                  <div className="border-t border-blue-200 pt-4">
                    <div className="font-bold text-gray-900">{story.name}</div>
                    <div className="text-blue-600 font-semibold text-sm">
                      {story.achievement}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
