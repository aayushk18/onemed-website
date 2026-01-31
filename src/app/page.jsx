"use client";

import { useRouter } from "next/navigation";
import {
 
  BookOpen,
  Video,
  Users,
  Award,
  Star,
  ArrowRight,
} from "lucide-react";
import Image from "next/image";

export default function Home() {
  const router = useRouter();

  const highlights = [
    {
      icon: Video,
      title: "Live 1-to-1 Classes",
      description: "Personalized attention with expert medical tutors",
    },
    {
      icon: Users,
      title: "Expert Medical Tutors",
      description: "Learn from qualified MD, MS, and MBBS professionals",
    },
    {
      icon: BookOpen,
      title: "Exam-Focused Teaching",
      description: "Curriculum designed for NEET, MBBS, USMLE success",
    },
    {
      icon: Award,
      title: "Recorded Sessions",
      description: "Access all your classes anytime, anywhere",
    },
  ];

  const courses = [
 
    {
      title: "MBBS Complete Course",
      description: "All years MBBS curriculum with clinical focus",
      category: "Medical Degree",
    },
    {
      title: "USMLE Coaching",
      description: "Step-by-step guidance for USMLE exams",
      category: "International",
    },
    {
      title: "Nursing Courses",
      description: "Complete nursing education and exam preparation",
      category: "Nursing",
    },
  ];

  const testimonials = [
  
    {
      name: "Rahul Verma",
      exam: "MBBS 2nd Year",
      text:
        "The tutors are incredibly knowledgeable. Their teaching methods made complex topics like pathology so much easier to understand.",
      rating: 5,
    },
    {
      name: "Anjali Patel",
      exam: "USMLE Step 1",
      text:
        "Cleared USMLE Step 1 on my first attempt! The structured curriculum and practice tests were exactly what I needed.",
      rating: 5,
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative h-[90vh] w-full overflow-hidden">
      {/* Background Image */}
      <Image
        src="/coverpic.jpg"
        alt="OneMed Tutor Hero"
        fill
        priority
        className="object-cover object-right md:object-center"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40 md:bg-transparent" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto h-full flex items-center px-6">
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-bold text-white md:text-gray-900 mb-6">
            Master Your Concepts with{' '}
            <span className="text-blue-400">OneMed Tutor</span>
          </h1>

          <p className="text-lg md:text-xl text-gray-200 md:text-gray-600 mb-8">
            Online tutoring for MBBS, Nursing, NEET, USMLE & Medical Entrance Exams
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
          <button
              onClick={() => router.push("/courses")}
              className="px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-semibold text-lg flex items-center justify-center gap-2"
            >
              Start Learning <ArrowRight className="w-5 h-5" />
            </button>

            <button
              onClick={() => router.push('/contact')}
              className="px-8 py-4 bg-white text-blue-600 border-2 border-blue-600 rounded-lg hover:bg-blue-50 transition font-semibold text-lg"
            >
              Book a Free Demo
            </button>
          </div>

          <div className="mt-10 text-gray-200 md:text-gray-600 font-medium">
            Trusted by 5,000+ Medical Students
          </div>
        </div>

        <div className="hidden md:block md:w-1/2" />
      </div>
    </section>

      {/* Why Choose */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Why Choose OneMed Tutor
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="text-center p-6 rounded-xl bg-blue-50 hover:bg-blue-100 transition"
              >
                <div className="inline-flex w-16 h-16 items-center justify-center bg-blue-600 text-white rounded-full mb-4">
                  <item.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Courses */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Popular Courses
          </h2>

          <p className="text-center text-gray-600 mb-12">
            Expert-led courses designed for medical excellence
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {courses.map((course, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-md hover:shadow-xl transition p-6"
              >
                <div className="text-blue-600 text-sm font-semibold mb-2">
                  {course.category}
                </div>
                <h3 className="text-xl font-bold mb-3">{course.title}</h3>
                <p className="text-gray-600 mb-4">{course.description}</p>

                <button
                  onClick={() => router.push("/courses")}
                  className="text-blue-600 font-semibold hover:text-blue-700 flex items-center gap-1"
                >
                  Learn More <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Student Success Stories
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t, index) => (
              <div
                key={index}
                className="bg-blue-50 rounded-xl p-6 hover:shadow-lg transition"
              >
                <div className="flex mb-4">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 text-yellow-400 fill-current"
                    />
                  ))}
                </div>

                <p className="italic text-gray-700 mb-4">
                  “{t.text}”
                </p>

                <div className="border-t pt-4">
                  <div className="font-semibold">{t.name}</div>
                  <div className="text-sm text-gray-600">{t.exam}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Start Your Medical Journey?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Join thousands of successful medical students today
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => router.push("/courses")}
              className="px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-blue-50 font-semibold text-lg"
            >
              Explore Courses
            </button>
            <button
              onClick={() => router.push("/contact")}
              className="px-8 py-4 bg-blue-700 rounded-lg hover:bg-blue-800 font-semibold text-lg"
            >
              Contact Us
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
