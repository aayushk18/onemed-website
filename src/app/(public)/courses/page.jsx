
"use client"

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import {
  BookOpen,
  Clock,
  IndianRupee,
  ChevronDown,
  GraduationCap,
  Award,
  Users,
  CheckCircle2,
  Sparkles
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// Animation variants
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

export default function CoursesPage() {
  const router = useRouter();
  const [expandedCourse, setExpandedCourse] = useState(null);

  const courses = [
    {
      id: 'mbbs-first-year',
      title: 'MBBS 1st Year',
      category: 'MBBS (All Years)',
      image: 'https://images.unsplash.com/photo-1530497610245-94d3c16cda28?auto=format&fit=crop&q=80&w=800',
      description: 'Foundation subjects - Anatomy, Physiology, and Biochemistry',
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
      image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=800',
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
      forWhom: '2nd, 3rd, and Final year students',
    },
    {
      id: 'nursing',
      title: 'Nursing Complete Course',
      category: 'Nursing',
      image: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?auto=format&fit=crop&q=80&w=800',
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
      forWhom: 'BSc Nursing, GNM, Post-Basic',
    },
    {
      id: 'usmle',
      title: 'USMLE Step 1 & 2',
      category: 'USMLE / PLAB',
      image: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&q=80&w=800',
      description: 'Comprehensive USMLE preparation with US faculty guidance',
      duration: '6-12 months',
      fees: '₹2,000–3,000/hour',
      highlights: [
        'USMLE-specific teaching',
        'QBank integration',
        'High-yield topics',
        'Communication skills for CS',
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
      category: 'Specialized',
      image: 'https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?auto=format&fit=crop&q=80&w=800',
      description: 'In-depth anatomy teaching with dissection guidance',
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
      forWhom: 'MBBS students & NEET PG aspirants',
    },
    {
      id: 'pharmacology',
      title: 'Pharmacology Complete',
      category: 'Specialized',
      image: 'https://images.unsplash.com/photo-1631549916768-4119b2e5f926?auto=format&fit=crop&q=80&w=800',
      description: 'Drug classifications, mechanisms, and clinical applications',
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
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 overflow-x-hidden pb-20">
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-slate-900 pt-20 sm:pt-24 pb-12 sm:pb-16 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1581056771107-24ca5f033842?q=80&w=2070&auto=format&fit=crop"
            alt="Medical Education"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent" />
        </div>

        <motion.div 
          className="relative z-10 max-w-7xl mx-auto"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          <motion.div variants={fadeIn} className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-400/20 border border-blue-400/30 text-blue-400 text-xs sm:text-sm font-medium mb-4 sm:mb-6 backdrop-blur-sm">
            <GraduationCap className="w-4 h-4" />
            <span>Academic Programs</span>
          </motion.div>
          
          <motion.h1 variants={fadeIn} className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight mb-3 sm:mb-4 leading-tight">
            Expert-Designed Courses <br className="hidden md:block"/> For Your Medical Journey.
          </motion.h1>
          
          <motion.p variants={fadeIn} className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed">
            From your first day of MBBS to USMLE preparations, access comprehensive, personalized tutoring tailored to your specific academic needs and learning pace.
          </motion.p>
        </motion.div>
      </section>

      {/* Feature Highlights - Scrollable on mobile */}
      <section className="relative z-20 -mt-6 sm:-mt-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10 sm:mb-16">
        <div className="flex overflow-x-auto md:grid md:grid-cols-3 gap-3 sm:gap-5 pb-4 md:pb-0 snap-x snap-mandatory hide-scrollbar" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
          {[
            { icon: <Award className="w-5 h-5 sm:w-6 sm:h-6 text-blue-400" />, title: "Premium Mentorship", desc: "Learn directly from top professionals." },
            { icon: <Sparkles className="w-5 h-5 sm:w-6 sm:h-6 text-blue-400" />, title: "Customized Pace", desc: "Schedules that adapt to you." },
            { icon: <Users className="w-5 h-5 sm:w-6 sm:h-6 text-blue-400" />, title: "1-on-1 Attention", desc: "Interactive doubt-clearing sessions." },
          ].map((feature, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + (idx * 0.1) }}
              className="bg-white rounded-xl sm:rounded-2xl shadow-lg shadow-slate-200/50 p-4 sm:p-6 border border-slate-100 flex items-start gap-3 sm:gap-4 shrink-0 w-72 md:w-auto snap-start"
            >
              <div className="p-2 sm:p-3 bg-blue-50/50 rounded-lg sm:rounded-xl shrink-0">
                {feature.icon}
              </div>
              <div>
                <h3 className="font-bold text-slate-800 text-sm sm:text-base">{feature.title}</h3>
                <p className="text-xs sm:text-sm text-slate-500 mt-0.5 sm:mt-1">{feature.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Courses Grid */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8"
        >
          {courses.map((course) => (
            <motion.div
              key={course.id}
              variants={fadeIn}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="bg-white rounded-2xl shadow-sm hover:shadow-xl hover:shadow-blue-900/5 transition-all duration-300 border border-slate-200 overflow-hidden flex flex-col"
            >
              {/* Course Image Banner */}
              <div className="h-32 sm:h-48 w-full relative">
                <img 
                  src={course.image} 
                  alt={course.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent" />
                <div className="absolute bottom-4 left-4 sm:bottom-5 sm:left-6">
                  <span className="inline-block px-3 py-1 bg-blue-400/90 backdrop-blur-sm text-white text-[10px] sm:text-xs font-bold uppercase tracking-wider rounded-md mb-2">
                    {course.category}
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-bold text-white leading-tight">
                    {course.title}
                  </h2>
                </div>
              </div>

              <div className="p-4 sm:p-6 flex-1 flex flex-col">
                <p className="text-sm sm:text-base text-slate-600 mb-5 sm:mb-6">
                  {course.description}
                </p>

                {/* UPDATED: Course Details Grid (Now 2 Columns for better fit) */}
                <div className="grid grid-cols-2 gap-3 sm:gap-4 mb-6 sm:mb-8">
                  <Info icon={Clock} label="Duration" value={course.duration} />
                  <Info icon={IndianRupee} label="Fees" value={course.fees} />
                  <Info icon={BookOpen} label="Target Audience" value={course.forWhom} className="col-span-2" />
                </div>

                <hr className="border-slate-100 mb-5 sm:mb-6" />

                {/* Highlights */}
                <h3 className="font-bold text-slate-800 text-sm sm:text-base mb-3 sm:mb-4 flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-blue-400" />
                  Course Highlights
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3 mb-6 sm:mb-8 flex-1">
                  {course.highlights.map((h, i) => (
                    <div key={i} className="flex items-start gap-2 sm:gap-2.5">
                      <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-blue-400 shrink-0 mt-0.5" />
                      <span className="text-xs sm:text-sm text-slate-600 leading-tight">{h}</span>
                    </div>
                  ))}
                </div>

                {/* Interactive Syllabus Accordion */}
                <div className="mb-6 sm:mb-8 bg-slate-50 rounded-xl border border-slate-100 overflow-hidden">
                  <button
                    onClick={() =>
                      setExpandedCourse(expandedCourse === course.id ? null : course.id)
                    }
                    className="w-full flex items-center justify-between p-3 sm:p-4 text-sm font-semibold text-slate-700 hover:bg-slate-100 transition-colors focus:outline-none"
                  >
                    <span className="flex items-center gap-2 text-blue-400">
                      <BookOpen className="w-4 h-4" />
                      View Syllabus Structure
                    </span>
                    <ChevronDown
                      className={`w-4 h-4 text-slate-400 transition-transform duration-300 ${
                        expandedCourse === course.id ? 'rotate-180' : ''
                      }`}
                    />
                  </button>

                  <AnimatePresence>
                    {expandedCourse === course.id && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <div className="p-3 sm:p-4 pt-0 border-t border-slate-100 mt-1">
                          <ul className="space-y-2 text-xs sm:text-sm text-slate-600">
                            {course.syllabus.map((s, i) => (
                              <li key={i} className="flex items-start gap-2">
                                <span className="text-blue-400 mt-1">•</span>
                                <span>{s}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 mt-auto">
                  <button
                    onClick={goToContact}
                    className="flex-1 bg-blue-400 hover:bg-blue-500 text-white py-3 sm:py-3.5 rounded-xl font-bold text-sm sm:text-base transition-all duration-200 shadow-lg shadow-blue-400/20 active:scale-[0.98]"
                  >
                    Enroll Now
                  </button>
                  <button
                    onClick={goToContact}
                    className="flex-1 border-2 border-blue-400 text-blue-400 hover:bg-blue-50 py-3 sm:py-3.5 rounded-xl font-bold text-sm sm:text-base transition-all duration-200 active:scale-[0.98]"
                  >
                    Book Demo Class
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </div>
  );
}

/* UPDATED: Helper Component */
function Info({ icon: Icon, label, value, className = "" }) {
  return (
    <div className={`flex flex-row items-center gap-3 bg-slate-50 p-3 sm:p-4 rounded-xl border border-slate-100 ${className}`}>
      <div className="p-2 bg-white rounded-lg shadow-sm border border-slate-100 shrink-0">
        <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-blue-400" />
      </div>
      <div className="flex flex-col justify-center min-w-0">
        <div className="text-[10px] sm:text-xs text-slate-400 font-semibold uppercase tracking-wider">{label}</div>
        <div className="font-bold text-slate-800 text-xs sm:text-sm leading-tight mt-0.5 whitespace-normal break-words">{value}</div>
      </div>
    </div>
  );
}
































// 'use client';

// import { useState } from 'react';
// import { useRouter } from 'next/navigation';
// import {
//   BookOpen,
//   Clock,
//   IndianRupee,
//   CheckCircle,
//   ChevronDown,
// } from 'lucide-react';

// export default function CoursesPage() {
//   const router = useRouter();
//   const [expandedCourse, setExpandedCourse] = useState(null);

//   const courses = [
//     {
//       id: 'mbbs-first-year',
//       title: 'MBBS 1st Year',
//       category: 'MBBS (All Years)',
//       description:
//         'Foundation subjects - Anatomy, Physiology, and Biochemistry',
//       duration: '5 months',
//       fees: '₹1,200–2,500/hour',
//       highlights: [
//         'Conceptual understanding',
//         'Dissection guidance',
//         'Practical exam preparation',
//         'University exam focus',
//         'Monthly assessments',
//       ],
//       syllabus: [
//         'Anatomy - General, Upper limb, Lower limb, Thorax, Abdomen',
//         'Physiology - All systems',
//         'Biochemistry - Metabolic pathways, Clinical biochemistry',
//       ],
//       forWhom: 'First year MBBS students',
//     },
//     {
//       id: 'mbbs-clinical',
//       title: 'MBBS Clinical Years',
//       category: 'MBBS (All Years)',
//       description: 'Clinical subjects with case-based learning approach',
//       duration: 'Subject-wise',
//       fees: '₹1,500–3,000/hour',
//       highlights: [
//         'Clinical case discussions',
//         'Bedside teaching',
//         'OSCE preparation',
//         'Clinical examination techniques',
//         'Practical viva preparation',
//       ],
//       syllabus: [
//         'Medicine and allied subjects',
//         'Surgery and allied subjects',
//         'Obstetrics & Gynecology',
//         'Pediatrics',
//         'Community Medicine',
//       ],
//       forWhom: '2nd, 3rd, and Final year MBBS students',
//     },
//     {
//       id: 'nursing',
//       title: 'Nursing Complete Course',
//       category: 'Nursing',
//       description: 'Comprehensive nursing education and exam preparation',
//       duration: 'Customized',
//       fees: '₹1,000–2,000/hour',
//       highlights: [
//         'Theory and practical guidance',
//         'Nursing procedures',
//         'Exam-focused teaching',
//         'Clinical posting support',
//         'Interview preparation',
//       ],
//       syllabus: [
//         'Fundamentals of Nursing',
//         'Medical-Surgical Nursing',
//         'Community Health Nursing',
//         'Pediatric Nursing',
//         'Obstetric Nursing',
//       ],
//       forWhom: 'BSc Nursing, GNM, and Post-Basic Nursing students',
//     },
//     {
//       id: 'usmle',
//       title: 'USMLE Step 1 & 2',
//       category: 'USMLE / PLAB',
//       description:
//         'Comprehensive USMLE preparation with US faculty guidance',
//       duration: '6-12 months',
//       fees: '₹2,000–3,000/hour',
//       highlights: [
//         'USMLE-specific teaching',
//         'QBank integration',
//         'High-yield topics',
//         'Communication skills for Step 2 CS',
//         'Study schedule planning',
//       ],
//       syllabus: [
//         'Step 1 - Basic sciences integration',
//         'Step 2 CK - Clinical knowledge',
//         'Step 2 CS - Clinical skills',
//       ],
//       forWhom: 'Medical graduates planning USMLE',
//     },
//     {
//       id: 'anatomy',
//       title: 'Anatomy Mastery',
//       category: 'Anatomy / Physiology / Pathology',
//       description:
//         'In-depth anatomy teaching with dissection guidance',
//       duration: '3-6 months',
//       fees: '₹1,200–2,500/hour',
//       highlights: [
//         'Regional anatomy',
//         'Clinical correlations',
//         '3D model demonstrations',
//         'Dissection techniques',
//         'MCQ practice',
//       ],
//       syllabus: [
//         'Gross Anatomy',
//         'Histology',
//         'Embryology',
//         'Neuroanatomy',
//       ],
//       forWhom: 'MBBS students and NEET PG aspirants',
//     },
//     {
//       id: 'pharmacology',
//       title: 'Pharmacology Complete',
//       category: 'Pharmacology',
//       description:
//         'Drug classifications, mechanisms, and clinical applications',
//       duration: '3-4 months',
//       fees: '₹1,200–2,500/hour',
//       highlights: [
//         'System-wise approach',
//         'Drug mnemonics',
//         'Clinical pharmacology',
//         'Adverse effects focus',
//         'Therapeutic uses',
//       ],
//       syllabus: [
//         'General Pharmacology',
//         'System-wise Pharmacology',
//         'Chemotherapy',
//         'Toxicology',
//       ],
//       forWhom: 'MBBS 2nd year and PG aspirants',
//     },
//   ];

//   const goToContact = () => {
//     router.push('/contact');
//   };

//   return (
//     <div className="min-h-screen bg-gray-50">
//       {/* Hero */}

      

// <section className=" bg-gradient-to-br from-blue-400 to-blue-500 text-white py-12 px-4">
//         <div className="max-w-6xl mx-auto">
//           <h1 className="text-4xl font-bold mb-2">
//           Our Courses
//           </h1>
//           <p className="text-blue-100">
//           Expert-designed courses for every stage of your medical journey
//           </p>
//         </div>
//       </section>
 


//       {/* Courses */}
//       <section className="py-12 px-4">
//         <div className="max-w-7xl mx-auto grid gap-8">
//           {courses.map((course) => (
//             <div
//               key={course.id}
//               className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow"
//             >
//               <div className="p-6">
//                 <div className="mb-4">
//                   <div className="text-blue-600 font-semibold text-sm mb-2">
//                     {course.category}
//                   </div>
//                   <h2 className="text-2xl font-bold mb-2">
//                     {course.title}
//                   </h2>
//                   <p className="text-gray-600">
//                     {course.description}
//                   </p>
//                 </div>

//                 <div className="grid md:grid-cols-3 gap-4 mb-6">
//                   <Info icon={Clock} label="Duration" value={course.duration} />
//                   <Info icon={IndianRupee} label="Fees" value={course.fees} />
//                   <Info icon={BookOpen} label="For" value={course.forWhom} />
//                 </div>

//                 <h3 className="font-semibold mb-3">Course Highlights</h3>
//                 <div className="grid md:grid-cols-2 gap-2 mb-6">
//                   {course.highlights.map((h, i) => (
//                     <div key={i} className="flex gap-2">
//                       <CheckCircle className="w-5 h-5 text-green-500" />
//                       <span className="text-sm">{h}</span>
//                     </div>
//                   ))}
//                 </div>

//                 <button
//                   onClick={() =>
//                     setExpandedCourse(
//                       expandedCourse === course.id ? null : course.id
//                     )
//                   }
//                   className="flex items-center gap-2 text-blue-600 font-semibold mb-4"
//                 >
//                   View Syllabus
//                   <ChevronDown
//                     className={`transition-transform ${
//                       expandedCourse === course.id ? 'rotate-180' : ''
//                     }`}
//                   />
//                 </button>

//                 {expandedCourse === course.id && (
//                   <div className="bg-blue-50 rounded-lg p-4 mb-4">
//                     <ul className="space-y-2 text-sm">
//                       {course.syllabus.map((s, i) => (
//                         <li key={i}>• {s}</li>
//                       ))}
//                     </ul>
//                   </div>
//                 )}

//                 <div className="flex flex-col sm:flex-row gap-3">
//                   <button
//                     onClick={goToContact}
//                     className="flex-1 bg-blue-400 text-white py-3 rounded-lg font-semibold"
//                   >
//                     Enroll Now
//                   </button>
//                   <button
//                     onClick={goToContact}
//                     className="flex-1 border-2 border-blue-400 text-blue-400 py-3 rounded-lg font-semibold"
//                   >
//                     Book Demo Class
//                   </button>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </section>
//     </div>
//   );
// }

// /* Helper */
// function Info({ icon: Icon, label, value }) {
//   return (
//     <div className="flex items-center gap-2">
//       <Icon className="w-5 h-5 text-blue-600" />
//       <div>
//         <div className="text-sm text-gray-500">{label}</div>
//         <div className="font-semibold text-sm">{value}</div>
//       </div>
//     </div>
//   );
// }
