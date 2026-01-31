'use client';

import {
  FileQuestion,
  Clock,
  TrendingUp,
  Target,
  CheckCircle,
  BarChart3,
} from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function TestsPage() {
  const router = useRouter();

  const features = [
    {
      icon: FileQuestion,
      title: 'Topic-wise MCQs',
      description: '10,000+ questions covering all medical subjects',
    },
    {
      icon: Clock,
      title: 'Timed Exams',
      description: 'Simulate real exam conditions with time limits',
    },
    {
      icon: TrendingUp,
      title: 'Performance Analytics',
      description: 'Track your progress with detailed insights',
    },
    {
      icon: Target,
      title: 'Weak Area Identification',
      description: 'AI-powered analysis to focus your preparation',
    },
  ];

  const testCategories = [
    {
      title: 'MBBS University Exams',
      tests: 30,
      questions: 3000,
      description: 'Year-wise and subject-wise papers',
    },
    {
      title: 'USMLE Practice Tests',
      tests: 25,
      questions: 2500,
      description: 'Step 1 and Step 2 CK practice',
    },
    {
      title: 'Subject-wise Tests',
      tests: 100,
      questions: 8000,
      description: 'All medical subjects covered',
    },
  ];

  const mockTests = [
    {
      title: 'Anatomy Complete Test',
      questions: 100,
      duration: '2 hours',
      difficulty: 'Medium',
      attempts: 890,
    },
    {
      title: 'Pharmacology Mock Test',
      questions: 80,
      duration: '1 hour 30 minutes',
      difficulty: 'Medium',
      attempts: 760,
    },
    {
      title: 'Clinical Medicine Test',
      questions: 150,
      duration: '3 hours',
      difficulty: 'High',
      attempts: 540,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* HERO */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-700 text-white py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Test & Practice
          </h1>
          <p className="text-xl text-blue-100">
            Sharpen your skills with comprehensive mock tests and practice questions
          </p>
        </div>
      </section>

      {/* FEATURES */}
      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 text-center shadow-md hover:shadow-lg transition"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 text-blue-600 rounded-full mb-4">
                  <feature.icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-semibold mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>

          {/* TEST CATEGORIES */}
          <h2 className="text-3xl font-bold mb-8">Test Categories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {testCategories.map((category, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition"
              >
                <h3 className="text-xl font-bold mb-3">
                  {category.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  {category.description}
                </p>
                <div className="flex justify-between text-sm">
                  <span>Tests: <b>{category.tests}</b></span>
                  <span>Questions: <b>{category.questions}</b></span>
                </div>
              </div>
            ))}
          </div>

          {/* MOCK TESTS */}
          <h2 className="text-3xl font-bold mb-8">Popular Mock Tests</h2>
          <div className="space-y-6">
            {mockTests.map((test, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-md hover:shadow-lg transition p-6"
              >
                <div className="flex flex-col lg:flex-row justify-between gap-6">
                  <div>
                    <h3 className="text-xl font-bold mb-3">
                      {test.title}
                    </h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                      <div>
                        <p className="text-gray-500">Questions</p>
                        <p className="font-semibold">{test.questions}</p>
                      </div>
                      <div>
                        <p className="text-gray-500">Duration</p>
                        <p className="font-semibold">{test.duration}</p>
                      </div>
                      <div>
                        <p className="text-gray-500">Difficulty</p>
                        <p
                          className={`font-semibold ${
                            test.difficulty === 'High'
                              ? 'text-red-600'
                              : 'text-yellow-600'
                          }`}
                        >
                          {test.difficulty}
                        </p>
                      </div>
                      <div>
                        <p className="text-gray-500">Attempts</p>
                        <p className="font-semibold">{test.attempts}</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col gap-2 min-w-[180px]">
                    <button
                      onClick={() => router.push('/login')}
                      className="bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 font-semibold"
                    >
                      Start Test
                    </button>
                    <button className="bg-blue-50 text-blue-600 py-2 rounded-lg hover:bg-blue-100 font-semibold flex items-center justify-center gap-2">
                      <BarChart3 className="w-4 h-4" />
                      View Analysis
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PERFORMANCE */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-10">
            Performance Tracking Features
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
            {[
              {
                icon: CheckCircle,
                title: 'Instant Results',
                desc: 'Immediate feedback with explanations',
              },
              {
                icon: TrendingUp,
                title: 'Progress Tracking',
                desc: 'Visual performance analytics',
              },
              {
                icon: Target,
                title: 'Weak Area Focus',
                desc: 'Identify and improve weak topics',
              },
              {
                icon: BarChart3,
                title: 'Comparative Analysis',
                desc: 'Compare with peers',
              },
            ].map((item, i) => (
              <div key={i} className="bg-blue-50 rounded-xl p-6">
                <item.icon className="w-8 h-8 text-blue-600 mb-3" />
                <h3 className="text-xl font-semibold mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
