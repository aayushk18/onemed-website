'use client';

import { 
  Target, 
  Eye, 
  Award, 
  Users, 
  BookOpen, 
  TrendingUp,
  HeartPulse,
  CheckCircle2,
  Quote
} from 'lucide-react';
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
      title: 'Student-Centric',
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
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 overflow-x-hidden pb-20">
      
      {/* HERO SECTION */}
      <section className="relative overflow-hidden bg-slate-900 pt-20 sm:pt-28 pb-24 sm:pb-32 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&q=80&w=2070"
            alt="Medical Professionals"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent" />
        </div>

        <motion.div 
          className="relative z-10 max-w-7xl mx-auto text-center"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          <motion.div variants={fadeIn} className="inline-flex items-center justify-center gap-2 px-3 py-1.5 rounded-full bg-blue-400/20 border border-blue-400/30 text-blue-400 text-xs sm:text-sm font-medium mb-6 backdrop-blur-sm mx-auto">
            <HeartPulse className="w-4 h-4" />
            <span>About OneMed Tutor</span>
          </motion.div>
          
          <motion.h1 variants={fadeIn} className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight mb-4 sm:mb-6 leading-tight max-w-4xl mx-auto">
            Empowering Medical Students <br className="hidden sm:block"/> To Achieve Excellence.
          </motion.h1>
          
          <motion.p variants={fadeIn} className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            We are dedicated to revolutionizing medical education by providing world-class tutoring, clinical insights, and personalized mentorship to future healthcare leaders.
          </motion.p>
        </motion.div>
      </section>

      {/* FLOATING STATS SECTION */}
      <section className="relative z-20 -mt-16 sm:-mt-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 sm:mb-24">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white rounded-2xl sm:rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100 p-6 sm:p-10"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 divide-x-0 md:divide-x divide-y md:divide-y-0 divide-slate-100">
            {stats.map((stat, index) => (
              <div key={index} className={`text-center flex flex-col items-center justify-center ${index > 1 ? 'pt-6 md:pt-0' : ''} ${index % 2 !== 0 ? 'pl-2 sm:pl-0' : ''}`}>
                <div className="inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 bg-blue-50 text-blue-400 rounded-xl sm:rounded-2xl mb-3 sm:mb-4">
                  <stat.icon className="w-6 h-6 sm:w-7 sm:h-7" />
                </div>
                <div className="text-2xl sm:text-4xl font-extrabold text-slate-900 mb-1 tracking-tight">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm font-medium text-slate-500 uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* MISSION & VISION */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-16 sm:mb-24">
        <motion.div 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-10"
        >
          {/* Mission Card */}
          <motion.div variants={fadeIn} whileHover={{ y: -4 }} className="bg-white rounded-2xl sm:rounded-3xl shadow-sm border border-slate-200 p-8 sm:p-10 transition-all duration-300 hover:shadow-xl hover:shadow-blue-900/5 hover:border-blue-200 group relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-bl-full" />
            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3.5 bg-blue-400 text-white rounded-xl sm:rounded-2xl shadow-inner">
                  <Target className="w-6 h-6 sm:w-8 sm:h-8" />
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">Our Mission</h2>
              </div>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                To provide world-class medical education through personalized online tutoring, making quality learning accessible to every medical student regardless of their location. We aim to bridge the gap between traditional classroom learning and individual student needs through innovative teaching methods and dedicated mentorship.
              </p>
            </div>
          </motion.div>

          {/* Vision Card */}
          <motion.div variants={fadeIn} whileHover={{ y: -4 }} className="bg-white rounded-2xl sm:rounded-3xl shadow-sm border border-slate-200 p-8 sm:p-10 transition-all duration-300 hover:shadow-xl hover:shadow-blue-900/5 hover:border-blue-200 group relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-bl-full" />
            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3.5 bg-slate-800 text-white rounded-xl sm:rounded-2xl shadow-inner">
                  <Eye className="w-6 h-6 sm:w-8 sm:h-8" />
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">Our Vision</h2>
              </div>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                To become the most trusted and preferred platform for medical education globally, setting new standards in online tutoring through cutting-edge technology, expert faculty, and student-centric approaches. We envision a future where every medical student has access to personalized, high-quality education that prepares them for excellence.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* CORE VALUES - Scrollable on Mobile */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-16 sm:mb-24">
        <div className="text-center mb-10 sm:mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-3">Our Core Values</h2>
          <p className="text-slate-500 text-sm sm:text-base max-w-2xl mx-auto">The principles that guide our teaching methodology and interactions with students.</p>
        </div>

        <div className="flex overflow-x-auto md:grid md:grid-cols-3 gap-4 sm:gap-8 pb-4 md:pb-0 snap-x snap-mandatory hide-scrollbar" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6 sm:p-8 text-center hover:shadow-lg transition-all duration-300 shrink-0 w-[280px] sm:w-[320px] md:w-auto snap-start"
            >
              <div className="inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 bg-blue-50 text-blue-400 rounded-2xl mb-5 sm:mb-6">
                <value.icon className="w-7 h-7 sm:w-8 sm:h-8" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-2 sm:mb-3">
                {value.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* WHY CHOOSE US - Split Layout */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-16 sm:mb-24">
        <div className="bg-white rounded-3xl shadow-lg shadow-slate-200/40 border border-slate-100 overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="p-8 sm:p-12 lg:p-16 flex flex-col justify-center">
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6 sm:mb-8">Why OneMed Tutor?</h2>
              <div className="space-y-5 sm:space-y-6 text-slate-600 text-sm sm:text-base leading-relaxed">
                <p>
                  Founded by a team of experienced medical educators and doctors, OneMed Tutor was created to address the unique challenges faced by medical students. We understand that medical education requires not just rote learning, but deep conceptual understanding and clinical application.
                </p>
                <div className="flex gap-3">
                  <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6 text-blue-400 shrink-0 mt-0.5" />
                  <p>
                    Our platform brings together highly qualified tutors who are passionate about teaching. Each tutor undergoes rigorous selection to ensure they deliver the highest quality education.
                  </p>
                </div>
                <div className="flex gap-3">
                  <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6 text-blue-400 shrink-0 mt-0.5" />
                  <p>
                    We combine traditional teaching wisdom with modern technology. From live interactive classes to comprehensive study materials and detailed analytics, we provide everything needed to succeed.
                  </p>
                </div>
              </div>
            </div>
            {/* Visual Side */}
            <div className="relative h-64 sm:h-80 lg:h-auto hidden sm:block">
              <img 
                src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=2070" 
                alt="Medical Students Studying" 
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-blue-900/10 mix-blend-multiply" />
            </div>
          </div>
        </div>
      </section>

      {/* SUCCESS STORIES - Scrollable on Mobile */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-10 sm:mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-3">Success Stories</h2>
          <p className="text-slate-500 text-sm sm:text-base">Hear from our students who have achieved their dreams.</p>
        </div>

        <div className="flex overflow-x-auto md:grid md:grid-cols-3 gap-5 sm:gap-8 pb-4 md:pb-0 snap-x snap-mandatory hide-scrollbar" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
          {successStories.map((story, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-gradient-to-br from-blue-50/80 to-white rounded-2xl p-6 sm:p-8 border border-blue-100 hover:shadow-xl hover:shadow-blue-900/5 transition-all duration-300 shrink-0 w-[300px] sm:w-[340px] md:w-auto snap-start relative"
            >
              <Quote className="absolute top-6 right-6 w-8 h-8 sm:w-10 sm:h-10 text-blue-200/50" />
              <div className="mb-6 sm:mb-8">
                <p className="text-slate-700 italic text-sm sm:text-base leading-relaxed relative z-10">
                  "{story.quote}"
                </p>
              </div>
              <div className="border-t border-blue-100 pt-4 sm:pt-5 mt-auto flex items-center gap-3">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-400 font-bold text-sm sm:text-base">
                  {story.name.charAt(0)}{story.name.split(' ')[1]?.charAt(0)}
                </div>
                <div>
                  <div className="font-bold text-slate-900 text-sm sm:text-base">{story.name}</div>
                  <div className="text-blue-400 font-semibold text-xs sm:text-sm">
                    {story.achievement}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

    </div>
  );
}
































// import { Target, Eye, Award, Users, BookOpen, TrendingUp } from 'lucide-react';

// export default function About() {
//   const stats = [
//     { icon: Users, value: '5,000+', label: 'Students Taught' },
//     { icon: BookOpen, value: '50+', label: 'Expert Tutors' },
//     { icon: Award, value: '95%', label: 'Success Rate' },
//     { icon: TrendingUp, value: '10+', label: 'Years Experience' },
//   ];

//   const values = [
//     {
//       icon: Target,
//       title: 'Excellence in Education',
//       description: 'We strive for the highest quality of medical education with personalized attention to each student.',
//     },
//     {
//       icon: Users,
//       title: 'Student-Centric Approach',
//       description: 'Our teaching methodology is designed around individual student needs and learning styles.',
//     },
//     {
//       icon: Award,
//       title: 'Proven Results',
//       description: 'Our students consistently achieve top ranks in NEET, MBBS, and other medical exams.',
//     },
//   ];

//   const successStories = [
//     {
//       name: 'Dr. Ananya Reddy',
//       achievement: 'NEET PG AIR 45',
//       quote: 'OneMed Tutor transformed my preparation strategy and helped me achieve my dream rank.',
//     },
//     {
//       name: 'Karan Mehta',
//       achievement: 'MBBS Gold Medalist',
//       quote: 'The personalized guidance and excellent teaching made all the difference in my journey.',
//     },
//     {
//       name: 'Dr. Sarah Thomas',
//       achievement: 'USMLE Step 1 - 260',
//       quote: 'The structured approach and expert faculty helped me score exceptionally well.',
//     },
//   ];

//   return (
//     <div className="min-h-screen bg-gray-50">

// <section className=" bg-gradient-to-br from-blue-400 to-blue-500 text-white py-12 px-4">
//         <div className="max-w-6xl mx-auto">
//           <h1 className="text-4xl font-bold mb-2">About OneMed Tutor</h1>
//           <p className="text-blue-100">
//           Empowering medical students to achieve excellence
//           </p>
//         </div>
//       </section>

      

//       <section className="py-16 px-4">
//         <div className="max-w-7xl mx-auto">
//           <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
//             {stats.map((stat, index) => (
//               <div key={index} className="text-center">
//                 <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 text-blue-400 rounded-full mb-4">
//                   <stat.icon className="w-8 h-8" />
//                 </div>
//                 <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
//                   {stat.value}
//                 </div>
//                 <div className="text-gray-600">{stat.label}</div>
//               </div>
//             ))}
//           </div>

//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
//             <div className="bg-white rounded-xl shadow-md p-8">
//               <div className="flex items-center space-x-3 mb-4">
//                 <Target className="w-8 h-8 text-blue-400" />
//                 <h2 className="text-3xl font-bold text-gray-900">Our Mission</h2>
//               </div>
//               <p className="text-gray-700 leading-relaxed">
//                 To provide world-class medical education through personalized online tutoring,
//                 making quality learning accessible to every medical student regardless of their
//                 location. We aim to bridge the gap between traditional classroom learning and
//                 individual student needs through innovative teaching methods and dedicated mentorship.
//               </p>
//             </div>

//             <div className="bg-white rounded-xl shadow-md p-8">
//               <div className="flex items-center space-x-3 mb-4">
//                 <Eye className="w-8 h-8 text-blue-400" />
//                 <h2 className="text-3xl font-bold text-gray-900">Our Vision</h2>
//               </div>
//               <p className="text-gray-700 leading-relaxed">
//                 To become the most trusted and preferred platform for medical education globally,
//                 setting new standards in online tutoring through cutting-edge technology, expert
//                 faculty, and student-centric approaches. We envision a future where every medical
//                 student has access to personalized, high-quality education that prepares them
//                 for excellence in their careers.
//               </p>
//             </div>
//           </div>

//           <div className="mb-16">
//             <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
//               Our Core Values
//             </h2>
//             <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//               {values.map((value, index) => (
//                 <div
//                   key={index}
//                   className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-lg transition-shadow"
//                 >
//                   <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 text-blue-400 rounded-full mb-4">
//                     <value.icon className="w-8 h-8" />
//                   </div>
//                   <h3 className="text-xl font-bold text-gray-900 mb-3">
//                     {value.title}
//                   </h3>
//                   <p className="text-gray-600">{value.description}</p>
//                 </div>
//               ))}
//             </div>
//           </div>

//           <div className="bg-white rounded-xl shadow-md p-8 mb-16">
//             <h2 className="text-3xl font-bold text-gray-900 mb-6">Why OneMed Tutor?</h2>
//             <div className="space-y-4 text-gray-700">
//               <p className="leading-relaxed">
//                 Founded by a team of experienced medical educators and doctors, OneMed Tutor was
//                 created to address the unique challenges faced by medical students. We understand
//                 that medical education requires not just rote learning, but deep conceptual
//                 understanding and clinical application.
//               </p>
//               <p className="leading-relaxed">
//                 Our platform brings together highly qualified tutors who are not just experts in
//                 their subjects but also passionate about teaching. Each tutor undergoes rigorous
//                 selection and training to ensure they can deliver the highest quality education.
//               </p>
//               <p className="leading-relaxed">
//                 We combine traditional teaching wisdom with modern technology to create an engaging
//                 and effective learning experience. From live interactive classes to comprehensive
//                 study materials, from personalized doubt-clearing sessions to detailed performance
//                 analytics, we provide everything a medical student needs to succeed.
//               </p>
//             </div>
//           </div>

//           <div>
//             <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
//               Success Stories
//             </h2>
//             <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//               {successStories.map((story, index) => (
//                 <div
//                   key={index}
//                   className="bg-blue-50 rounded-xl p-6 hover:shadow-lg transition-shadow"
//                 >
//                   <div className="text-4xl text-blue-600 mb-4">"</div>
//                   <p className="text-gray-700 italic mb-4">{story.quote}</p>
//                   <div className="border-t border-blue-200 pt-4">
//                     <div className="font-bold text-gray-900">{story.name}</div>
//                     <div className="text-blue-600 font-semibold text-sm">
//                       {story.achievement}
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }
