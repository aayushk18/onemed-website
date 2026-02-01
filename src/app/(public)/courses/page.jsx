'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import {
  BookOpen,
  Clock,
  IndianRupee,
  CheckCircle,
  ChevronDown,
} from 'lucide-react';

export default function CoursesPage() {
  const router = useRouter();
  const [expandedCourse, setExpandedCourse] = useState(null);

  const courses = [
    {
      id: 'mbbs-first-year',
      title: 'MBBS 1st Year',
      category: 'MBBS (All Years)',
      description:
        'Foundation subjects - Anatomy, Physiology, and Biochemistry',
      duration: '5 months',
      fees: '₹1,200–2,500/hour',
      highlights: [
        'Conceptual understanding',
        'Dissection guidance',
        'Practical exam preparation',
        'University exam focus',
        'Monthly assessments',
      ],
      syllabus: [
        'Anatomy - General, Upper limb, Lower limb, Thorax, Abdomen',
        'Physiology - All systems',
        'Biochemistry - Metabolic pathways, Clinical biochemistry',
      ],
      forWhom: 'First year MBBS students',
    },
    {
      id: 'mbbs-clinical',
      title: 'MBBS Clinical Years',
      category: 'MBBS (All Years)',
      description: 'Clinical subjects with case-based learning approach',
      duration: 'Subject-wise',
      fees: '₹1,500–3,000/hour',
      highlights: [
        'Clinical case discussions',
        'Bedside teaching',
        'OSCE preparation',
        'Clinical examination techniques',
        'Practical viva preparation',
      ],
      syllabus: [
        'Medicine and allied subjects',
        'Surgery and allied subjects',
        'Obstetrics & Gynecology',
        'Pediatrics',
        'Community Medicine',
      ],
      forWhom: '2nd, 3rd, and Final year MBBS students',
    },
    {
      id: 'nursing',
      title: 'Nursing Complete Course',
      category: 'Nursing',
      description: 'Comprehensive nursing education and exam preparation',
      duration: 'Customized',
      fees: '₹1,000–2,000/hour',
      highlights: [
        'Theory and practical guidance',
        'Nursing procedures',
        'Exam-focused teaching',
        'Clinical posting support',
        'Interview preparation',
      ],
      syllabus: [
        'Fundamentals of Nursing',
        'Medical-Surgical Nursing',
        'Community Health Nursing',
        'Pediatric Nursing',
        'Obstetric Nursing',
      ],
      forWhom: 'BSc Nursing, GNM, and Post-Basic Nursing students',
    },
    {
      id: 'usmle',
      title: 'USMLE Step 1 & 2',
      category: 'USMLE / PLAB',
      description:
        'Comprehensive USMLE preparation with US faculty guidance',
      duration: '6-12 months',
      fees: '₹2,000–3,000/hour',
      highlights: [
        'USMLE-specific teaching',
        'QBank integration',
        'High-yield topics',
        'Communication skills for Step 2 CS',
        'Study schedule planning',
      ],
      syllabus: [
        'Step 1 - Basic sciences integration',
        'Step 2 CK - Clinical knowledge',
        'Step 2 CS - Clinical skills',
      ],
      forWhom: 'Medical graduates planning USMLE',
    },
    {
      id: 'anatomy',
      title: 'Anatomy Mastery',
      category: 'Anatomy / Physiology / Pathology',
      description:
        'In-depth anatomy teaching with dissection guidance',
      duration: '3-6 months',
      fees: '₹1,200–2,500/hour',
      highlights: [
        'Regional anatomy',
        'Clinical correlations',
        '3D model demonstrations',
        'Dissection techniques',
        'MCQ practice',
      ],
      syllabus: [
        'Gross Anatomy',
        'Histology',
        'Embryology',
        'Neuroanatomy',
      ],
      forWhom: 'MBBS students and NEET PG aspirants',
    },
    {
      id: 'pharmacology',
      title: 'Pharmacology Complete',
      category: 'Pharmacology',
      description:
        'Drug classifications, mechanisms, and clinical applications',
      duration: '3-4 months',
      fees: '₹1,200–2,500/hour',
      highlights: [
        'System-wise approach',
        'Drug mnemonics',
        'Clinical pharmacology',
        'Adverse effects focus',
        'Therapeutic uses',
      ],
      syllabus: [
        'General Pharmacology',
        'System-wise Pharmacology',
        'Chemotherapy',
        'Toxicology',
      ],
      forWhom: 'MBBS 2nd year and PG aspirants',
    },
  ];

  const goToContact = () => {
    router.push('/contact');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <section className="bg-blue-500 text-white py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Our Courses
          </h1>
          <p className="text-xl text-blue-100">
            Expert-designed courses for every stage of your medical journey
          </p>
        </div>
      </section>

      {/* Courses */}
      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto grid gap-8">
          {courses.map((course) => (
            <div
              key={course.id}
              className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow"
            >
              <div className="p-6">
                <div className="mb-4">
                  <div className="text-blue-600 font-semibold text-sm mb-2">
                    {course.category}
                  </div>
                  <h2 className="text-2xl font-bold mb-2">
                    {course.title}
                  </h2>
                  <p className="text-gray-600">
                    {course.description}
                  </p>
                </div>

                <div className="grid md:grid-cols-3 gap-4 mb-6">
                  <Info icon={Clock} label="Duration" value={course.duration} />
                  <Info icon={IndianRupee} label="Fees" value={course.fees} />
                  <Info icon={BookOpen} label="For" value={course.forWhom} />
                </div>

                <h3 className="font-semibold mb-3">Course Highlights</h3>
                <div className="grid md:grid-cols-2 gap-2 mb-6">
                  {course.highlights.map((h, i) => (
                    <div key={i} className="flex gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span className="text-sm">{h}</span>
                    </div>
                  ))}
                </div>

                <button
                  onClick={() =>
                    setExpandedCourse(
                      expandedCourse === course.id ? null : course.id
                    )
                  }
                  className="flex items-center gap-2 text-blue-600 font-semibold mb-4"
                >
                  View Syllabus
                  <ChevronDown
                    className={`transition-transform ${
                      expandedCourse === course.id ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {expandedCourse === course.id && (
                  <div className="bg-blue-50 rounded-lg p-4 mb-4">
                    <ul className="space-y-2 text-sm">
                      {course.syllabus.map((s, i) => (
                        <li key={i}>• {s}</li>
                      ))}
                    </ul>
                  </div>
                )}

                <div className="flex flex-col sm:flex-row gap-3">
                  <button
                    onClick={goToContact}
                    className="flex-1 bg-blue-500 text-white py-3 rounded-lg font-semibold"
                  >
                    Enroll Now
                  </button>
                  <button
                    onClick={goToContact}
                    className="flex-1 border-2 border-blue-500 text-blue-500 py-3 rounded-lg font-semibold"
                  >
                    Book Demo Class
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

/* Helper */
function Info({ icon: Icon, label, value }) {
  return (
    <div className="flex items-center gap-2">
      <Icon className="w-5 h-5 text-blue-600" />
      <div>
        <div className="text-sm text-gray-500">{label}</div>
        <div className="font-semibold text-sm">{value}</div>
      </div>
    </div>
  );
}
