'use client';

import {
  FileQuestion,
  Clock,
  TrendingUp,
  Target,
  CheckCircle,
  BarChart3,
  Stethoscope,
  PlayCircle,
  BookOpen,
  ClipboardList,
  Award,
  ShieldCheck,
  BrainCircuit
} from 'lucide-react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';

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

export default function TestsPage() {
  const router = useRouter();

  const features = [
    {
      icon: FileQuestion,
      title: 'Topic-wise MCQs',
      description: '10,000+ questions covering all medical subjects.',
    },
    {
      icon: Clock,
      title: 'Timed Exams',
      description: 'Simulate real exam conditions with time limits.',
    },
    {
      icon: TrendingUp,
      title: 'Performance Analytics',
      description: 'Track your progress with detailed insights.',
    },
    {
      icon: BrainCircuit,
      title: 'Weak Area Focus',
      description: 'AI-powered analysis to focus your preparation.',
    },
  ];

  const testCategories = [
    {
      icon: Award,
      title: 'MBBS University Exams',
      tests: 30,
      questions: 3000,
      description: 'Year-wise and subject-wise papers tailored for university standards.',
    },
    {
      icon: Stethoscope,
      title: 'USMLE Practice Tests',
      tests: 25,
      questions: 2500,
      description: 'High-yield Step 1 and Step 2 CK practice environments.',
    },
    {
      icon: BookOpen,
      title: 'Subject-wise Tests',
      tests: 100,
      questions: 8000,
      description: 'Deep dive into Anatomy, Physiology, Pharmacology, and more.',
    },
  ];

  const mockTests = [
    {
      title: 'Anatomy Complete Test',
      category: 'Basic Sciences',
      questions: 100,
      duration: '2 hours',
      difficulty: 'Medium',
      attempts: 890,
    },
    {
      title: 'Pharmacology Mock Test',
      category: 'Para-Clinical',
      questions: 80,
      duration: '1 hr 30 mins',
      difficulty: 'Medium',
      attempts: 760,
    },
    {
      title: 'Clinical Medicine Test',
      category: 'Clinical',
      questions: 150,
      duration: '3 hours',
      difficulty: 'High',
      attempts: 540,
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 overflow-x-hidden pb-20">

      {/* HERO SECTION */}
      <section className="relative overflow-hidden bg-slate-900 pt-20 sm:pt-24 pb-12 sm:pb-16 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=2070&auto=format&fit=crop"
            alt="Medical Exam Preparation"
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
            <ClipboardList className="w-4 h-4" />
            <span>Mock Exams & Assessment</span>
          </motion.div>

          <motion.h1 variants={fadeIn} className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight mb-3 sm:mb-4 leading-tight">
            Evaluate Your Clinical <br className="hidden md:block" /> Readiness.
          </motion.h1>

          <motion.p variants={fadeIn} className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed">
            Sharpen your clinical reasoning and exam skills with our comprehensive mock tests, topic-wise practice questions, and AI-powered performance analytics.
          </motion.p>
        </motion.div>
      </section>

      {/* QUICK FEATURES - Scrollable on mobile */}
      <section className="relative z-20 -mt-6 sm:-mt-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 sm:mb-16">
        <div className="flex overflow-x-auto md:grid md:grid-cols-4 gap-3 sm:gap-5 pb-4 md:pb-0 snap-x snap-mandatory hide-scrollbar" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index }}
              className="bg-white rounded-xl sm:rounded-2xl shadow-lg shadow-slate-200/50 p-4 sm:p-6 border border-slate-100 flex flex-col items-start shrink-0 w-64 md:w-auto snap-start"
            >
              <div className="p-2.5 sm:p-3 bg-blue-50 rounded-lg sm:rounded-xl mb-3 sm:mb-4">
                <feature.icon className="w-5 h-5 sm:w-6 sm:h-6 text-blue-400" />
              </div>
              <h3 className="font-bold text-slate-800 text-sm sm:text-base mb-1.5">{feature.title}</h3>
              <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* TEST CATEGORIES */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-16 sm:mb-20">
        <motion.div initial="hidden" animate="visible" variants={staggerContainer}>
          <motion.div variants={fadeIn} className="mb-6 sm:mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">Question Banks</h2>
            <p className="text-sm sm:text-base text-slate-500 mt-1">Targeted practice across major medical disciplines.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {testCategories.map((category, index) => (
              <motion.div
                key={index}
                variants={fadeIn}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="bg-white rounded-2xl p-5 sm:p-6 shadow-sm border border-slate-200 hover:shadow-xl hover:shadow-blue-900/5 transition-all duration-300 relative overflow-hidden group"
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-blue-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-bl-full" />

                <div className="relative z-10">
                  <div className="flex items-center gap-3 sm:gap-4 mb-4">
                    <div className="p-3 bg-blue-400 text-white rounded-xl shadow-inner">
                      <category.icon className="w-5 h-5 sm:w-6 sm:h-6" />
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-slate-900 leading-tight">
                      {category.title}
                    </h3>
                  </div>

                  <p className="text-sm text-slate-600 mb-6 h-10">
                    {category.description}
                  </p>

                  <div className="flex items-center justify-between p-3 sm:p-4 bg-slate-50 rounded-xl border border-slate-100">
                    <div className="text-center flex-1 border-r border-slate-200">
                      <p className="text-[10px] sm:text-xs text-slate-400 font-bold uppercase tracking-wider mb-0.5">Tests</p>
                      <p className="text-lg sm:text-xl font-extrabold text-slate-800">{category.tests}</p>
                    </div>
                    <div className="text-center flex-1">
                      <p className="text-[10px] sm:text-xs text-slate-400 font-bold uppercase tracking-wider mb-0.5">Questions</p>
                      <p className="text-lg sm:text-xl font-extrabold text-blue-400">{category.questions.toLocaleString()}+</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* POPULAR MOCK TESTS */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-16 sm:mb-20">
        <motion.div initial="hidden" animate="visible" variants={staggerContainer}>
          <motion.div variants={fadeIn} className="mb-6 sm:mb-8 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">Popular Mock Tests</h2>
              <p className="text-sm sm:text-base text-slate-500 mt-1">Highly attempted full-length exams to gauge your readiness.</p>
            </div>
            <button className="text-blue-400 text-sm font-bold hover:text-blue-500 transition-colors w-fit">
              View All Tests &rarr;
            </button>
          </motion.div>

          <div className="space-y-4 sm:space-y-5">
            {mockTests.map((test, index) => (
              <motion.div
                key={index}
                variants={fadeIn}
                whileHover={{ x: 4, transition: { duration: 0.2 } }}
                className="bg-white rounded-xl sm:rounded-2xl shadow-sm border border-slate-200 hover:border-blue-200 hover:shadow-md transition-all duration-300 p-4 sm:p-6"
              >
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-5 sm:gap-6">

                  {/* Info Section */}
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="px-2.5 py-1 bg-slate-100 text-slate-600 text-[10px] sm:text-xs font-bold uppercase tracking-wider rounded-md">
                        {test.category}
                      </span>
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-4 sm:mb-5">
                      {test.title}
                    </h3>

                    <div className="flex flex-wrap gap-3 sm:gap-6 text-xs sm:text-sm">
                      <div className="flex items-center gap-1.5 sm:gap-2">
                        <FileQuestion className="w-4 h-4 text-slate-400" />
                        <span className="text-slate-600 font-medium">{test.questions} Qs</span>
                      </div>
                      <div className="flex items-center gap-1.5 sm:gap-2">
                        <Clock className="w-4 h-4 text-slate-400" />
                        <span className="text-slate-600 font-medium">{test.duration}</span>
                      </div>
                      <div className="flex items-center gap-1.5 sm:gap-2">
                        <Target className="w-4 h-4 text-slate-400" />
                        <span className={`font-semibold px-2 py-0.5 rounded-md ${test.difficulty === 'High'
                          ? 'bg-rose-50 text-rose-500'
                          : 'bg-amber-50 text-amber-500'
                          }`}>
                          {test.difficulty}
                        </span>
                      </div>
                      <div className="flex items-center gap-1.5 sm:gap-2">
                        <TrendingUp className="w-4 h-4 text-slate-400" />
                        <span className="text-slate-500">{test.attempts} attempts</span>
                      </div>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-row lg:flex-col gap-2 sm:gap-3 w-full lg:w-48 shrink-0 border-t lg:border-t-0 lg:border-l border-slate-100 pt-4 lg:pt-0 lg:pl-6">
                    <button
                      onClick={() => { window.location.href = 'https://onemedtutor.online/login'; }}
                      className="flex-1 flex items-center justify-center gap-2 bg-blue-400 text-white py-2.5 sm:py-3 rounded-xl hover:bg-blue-500 font-bold text-sm transition-all duration-200 shadow-md shadow-blue-400/20 active:scale-[0.98]"
                    >
                      <PlayCircle className="w-4 h-4" />
                      Start Test
                    </button>
                    <button className="flex-1 flex items-center justify-center gap-2 bg-slate-50 text-slate-600 border border-slate-200 py-2.5 sm:py-3 rounded-xl hover:bg-slate-100 hover:text-slate-900 font-bold text-sm transition-all duration-200 active:scale-[0.98]">
                      <BarChart3 className="w-4 h-4" />
                      Analysis
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* PERFORMANCE TRACKING (Detailed) */}
      <section className="bg-white border-t border-slate-200 py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10 sm:mb-14 max-w-2xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-3 sm:mb-4">
              Advanced Performance Analytics
            </h2>
            <p className="text-slate-500 text-sm sm:text-base">
              Don't just take tests. Understand your preparation level with our deep-dive analytics dashboard designed specifically for medical students.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {[
              {
                icon: ShieldCheck,
                title: 'Instant Explanations',
                desc: 'Detailed rationales for every right and wrong option immediately after submission.',
              },
              {
                icon: TrendingUp,
                title: 'Growth Tracking',
                desc: 'Visual graphs comparing your score trajectory over weeks and months.',
              },
              {
                icon: Target,
                title: 'Weak Area Focus',
                desc: 'System auto-generates custom quizzes based on your frequently missed topics.',
              },
              {
                icon: BarChart3,
                title: 'Peer Comparison',
                desc: 'See exactly where you stand with state and national level percentile rankings.',
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-slate-50 rounded-2xl p-5 sm:p-6 border border-slate-100 hover:border-blue-200 transition-colors"
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-xl shadow-sm border border-slate-100 flex items-center justify-center mb-4 sm:mb-5">
                  <item.icon className="w-5 h-5 sm:w-6 sm:h-6 text-blue-400" />
                </div>
                <h3 className="text-base sm:text-lg font-bold text-slate-800 mb-2">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
































// 'use client';

// import {
//   FileQuestion,
//   Clock,
//   TrendingUp,
//   Target,
//   CheckCircle,
//   BarChart3,
// } from 'lucide-react';
// import { useRouter } from 'next/navigation';

// export default function TestsPage() {
//   const router = useRouter();

//   const features = [
//     {
//       icon: FileQuestion,
//       title: 'Topic-wise MCQs',
//       description: '10,000+ questions covering all medical subjects',
//     },
//     {
//       icon: Clock,
//       title: 'Timed Exams',
//       description: 'Simulate real exam conditions with time limits',
//     },
//     {
//       icon: TrendingUp,
//       title: 'Performance Analytics',
//       description: 'Track your progress with detailed insights',
//     },
//     {
//       icon: Target,
//       title: 'Weak Area Identification',
//       description: 'AI-powered analysis to focus your preparation',
//     },
//   ];

//   const testCategories = [
//     {
//       title: 'MBBS University Exams',
//       tests: 30,
//       questions: 3000,
//       description: 'Year-wise and subject-wise papers',
//     },
//     {
//       title: 'USMLE Practice Tests',
//       tests: 25,
//       questions: 2500,
//       description: 'Step 1 and Step 2 CK practice',
//     },
//     {
//       title: 'Subject-wise Tests',
//       tests: 100,
//       questions: 8000,
//       description: 'All medical subjects covered',
//     },
//   ];

//   const mockTests = [
//     {
//       title: 'Anatomy Complete Test',
//       questions: 100,
//       duration: '2 hours',
//       difficulty: 'Medium',
//       attempts: 890,
//     },
//     {
//       title: 'Pharmacology Mock Test',
//       questions: 80,
//       duration: '1 hour 30 minutes',
//       difficulty: 'Medium',
//       attempts: 760,
//     },
//     {
//       title: 'Clinical Medicine Test',
//       questions: 150,
//       duration: '3 hours',
//       difficulty: 'High',
//       attempts: 540,
//     },
//   ];

//   return (
//     <div className="min-h-screen bg-gray-50">
//       {/* HERO */}


//       <section className=" bg-gradient-to-br from-blue-400 to-blue-500 text-white py-12 px-4">
//         <div className="max-w-6xl mx-auto">
//           <h1 className="text-4xl font-bold mb-2">
//             Test & Practice
//           </h1>
//           <p className="text-blue-100">
//             Sharpen your skills with comprehensive mock tests and practice questions
//           </p>
//         </div>
//       </section>



//       <section className="py-12 px-4">
//         <div className="max-w-7xl mx-auto">
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
//             {features.map((feature, index) => (
//               <div
//                 key={index}
//                 className="bg-white rounded-xl p-6 text-center shadow-md hover:shadow-lg transition"
//               >
//                 <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 text-blue-400 rounded-full mb-4">
//                   <feature.icon className="w-6 h-6" />
//                 </div>
//                 <h3 className="text-lg font-semibold mb-2">
//                   {feature.title}
//                 </h3>
//                 <p className="text-gray-600 text-sm">
//                   {feature.description}
//                 </p>
//               </div>
//             ))}
//           </div>


//           <h2 className="text-3xl font-bold mb-8">Test Categories</h2>
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
//             {testCategories.map((category, index) => (
//               <div
//                 key={index}
//                 className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition"
//               >
//                 <h3 className="text-xl font-bold mb-3">
//                   {category.title}
//                 </h3>
//                 <p className="text-gray-600 text-sm mb-4">
//                   {category.description}
//                 </p>
//                 <div className="flex justify-between text-sm">
//                   <span>Tests: <b>{category.tests}</b></span>
//                   <span>Questions: <b>{category.questions}</b></span>
//                 </div>
//               </div>
//             ))}
//           </div>

//           {/* MOCK TESTS */}
//           <h2 className="text-3xl font-bold mb-8">Popular Mock Tests</h2>
//           <div className="space-y-6">
//             {mockTests.map((test, index) => (
//               <div
//                 key={index}
//                 className="bg-white rounded-xl shadow-md hover:shadow-lg transition p-6"
//               >
//                 <div className="flex flex-col lg:flex-row justify-between gap-6">
//                   <div>
//                     <h3 className="text-xl font-bold mb-3">
//                       {test.title}
//                     </h3>
//                     <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
//                       <div>
//                         <p className="text-gray-500">Questions</p>
//                         <p className="font-semibold">{test.questions}</p>
//                       </div>
//                       <div>
//                         <p className="text-gray-500">Duration</p>
//                         <p className="font-semibold">{test.duration}</p>
//                       </div>
//                       <div>
//                         <p className="text-gray-500">Difficulty</p>
//                         <p
//                           className={`font-semibold ${test.difficulty === 'High'
//                               ? 'text-red-600'
//                               : 'text-yellow-600'
//                             }`}
//                         >
//                           {test.difficulty}
//                         </p>
//                       </div>
//                       <div>
//                         <p className="text-gray-500">Attempts</p>
//                         <p className="font-semibold">{test.attempts}</p>
//                       </div>
//                     </div>
//                   </div>

//                   <div className="flex flex-col gap-2 min-w-[180px]">
//                     <button
//                       onClick={() => { window.location.href = 'https://onemedtutor.online/login'; }}
//                       className="bg-blue-400 text-white py-2 rounded-lg hover:bg-blue-500 font-semibold"
//                     >
//                       Start Test
//                     </button>
//                     <button className="bg-blue-50 text-blue-400 py-2 rounded-lg hover:bg-blue-100 font-semibold flex items-center justify-center gap-2">
//                       <BarChart3 className="w-4 h-4" />
//                       View Analysis
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* PERFORMANCE */}
//       <section className="py-16 px-4 bg-white">
//         <div className="max-w-4xl mx-auto text-center">
//           <h2 className="text-3xl font-bold mb-10">
//             Performance Tracking Features
//           </h2>

//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
//             {[
//               {
//                 icon: CheckCircle,
//                 title: 'Instant Results',
//                 desc: 'Immediate feedback with explanations',
//               },
//               {
//                 icon: TrendingUp,
//                 title: 'Progress Tracking',
//                 desc: 'Visual performance analytics',
//               },
//               {
//                 icon: Target,
//                 title: 'Weak Area Focus',
//                 desc: 'Identify and improve weak topics',
//               },
//               {
//                 icon: BarChart3,
//                 title: 'Comparative Analysis',
//                 desc: 'Compare with peers',
//               },
//             ].map((item, i) => (
//               <div key={i} className="bg-blue-50 rounded-xl p-6">
//                 <item.icon className="w-8 h-8 text-blue-400 mb-3" />
//                 <h3 className="text-xl font-semibold mb-2">
//                   {item.title}
//                 </h3>
//                 <p className="text-gray-600">{item.desc}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }
