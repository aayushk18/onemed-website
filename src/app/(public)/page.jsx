"use client";

import { useRouter } from "next/navigation";
import {
  BookOpen,
  Video,
  Users,
  Award,
  Star,
  ArrowRight,
  Quote,
  CheckCircle2,
  Sparkles
} from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

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

export default function Home() {
  const router = useRouter();

  const highlights = [
    {
      icon: Video,
      title: "Live 1-to-1 Classes",
      description: "Personalized attention with expert medical tutors tailored to your pace.",
    },
    {
      icon: Users,
      title: "Expert Medical Tutors",
      description: "Learn from qualified MD, MS, and MBBS professionals.",
    },
    {
      icon: BookOpen,
      title: "Exam-Focused Teaching",
      description: "Curriculum designed specifically for NEET, MBBS, & USMLE success.",
    },
    {
      icon: Award,
      title: "Recorded Sessions",
      description: "Access all your classes and study materials anytime, anywhere.",
    },
  ];

  const courses = [
    {
      title: "MBBS Complete Course",
      description: "All years MBBS curriculum with strong clinical focus and viva prep.",
      category: "Medical Degree",
      image: "https://images.unsplash.com/photo-1530497610245-94d3c16cda28?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "USMLE Coaching",
      description: "Step-by-step guidance for USMLE exams by US-based faculty.",
      category: "International",
      image: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Nursing Courses",
      description: "Complete nursing education and clinical posting support.",
      category: "Nursing",
      image: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?auto=format&fit=crop&q=80&w=800',
    },
  ];

  const testimonials = [
    {
      name: "Rahul Verma",
      exam: "MBBS 2nd Year",
      text: "The tutors are incredibly knowledgeable. Their teaching methods made complex topics like pathology so much easier to understand.",
      rating: 5,
    },
    {
      name: "Anjali Patel",
      exam: "USMLE Step 1",
      text: "Cleared USMLE Step 1 on my first attempt! The structured curriculum and practice tests were exactly what I needed.",
      rating: 5,
    },
    {
      name: "Dr. Sameer Khan",
      exam: "NEET PG Aspirant",
      text: "The 1-on-1 attention transformed my prep. My mock scores improved drastically within just two months of joining.",
      rating: 5,
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 overflow-x-hidden">
      
      {/* HERO SECTION (Preserved Layout & Responsive Colors) */}
      <section className="relative h-[90vh] w-full overflow-hidden">
        {/* Background Image */}
        <Image
          src="/coverpic.jpg"
          alt="OneMed Tutor Hero"
          fill
          priority
          className="object-cover object-right md:object-center"
        />

        {/* Overlay - Dark on mobile for text readability, transparent on desktop */}
        <div className="absolute inset-0 bg-black/40 md:bg-transparent" />

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto h-full flex items-center px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="w-full md:w-1/2 text-center md:text-left mt-10 md:mt-0"
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            

            <motion.h1 variants={fadeIn} className="text-4xl md:text-6xl lg:text-7xl font-bold text-white md:text-slate-900 mb-6 leading-[1.1] tracking-tight">
              Master Your Concepts with <br className="hidden md:block" />
              <span className="text-blue-400">OneMed Tutor</span>
            </motion.h1>

            <motion.p variants={fadeIn} className="text-lg md:text-xl text-gray-200 md:text-slate-600 mb-8 max-w-xl mx-auto md:mx-0 leading-relaxed font-medium">
              Online tutoring for MBBS, Nursing, NEET, USMLE & Medical Entrance Exams.
            </motion.p>

            <motion.div variants={fadeIn} className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <button
                onClick={() => router.push("/courses")}
                className="px-8 py-4 bg-blue-400 text-white rounded-xl hover:bg-blue-500 transition-all duration-300 shadow-lg shadow-blue-400/30 font-bold text-lg flex items-center justify-center gap-2 active:scale-[0.98]"
              >
                Start Learning <ArrowRight className="w-5 h-5" />
              </button>

              <button
                onClick={() => router.push('/contact')}
                className="px-8 py-4 bg-white/10 md:bg-white text-white md:text-blue-400 border-2 border-white md:border-blue-400 rounded-xl hover:bg-white/20 md:hover:bg-blue-50 transition-all duration-300 font-bold text-lg active:scale-[0.98] backdrop-blur-sm md:backdrop-blur-none"
              >
                Book a Free Demo
              </button>
            </motion.div>

            <motion.div variants={fadeIn} className="mt-10 flex items-center justify-center md:justify-start gap-3">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-8 h-8 rounded-full border-2 border-white md:border-slate-100 bg-slate-200 flex items-center justify-center overflow-hidden">
                    <img src={`https://i.pravatar.cc/100?img=${i + 10}`} alt="Student" className="w-full h-full object-cover" />
                  </div>
                ))}
              </div>
              <div className="text-sm text-gray-200 md:text-slate-600 font-bold">
                Trusted by <span className="text-white md:text-blue-500">5,000+</span> Students
              </div>
            </motion.div>
          </motion.div>

          {/* Empty right half for the doctor in the image */}
          <div className="hidden md:block md:w-1/2" />
        </div>
      </section>

      {/* WHY CHOOSE US - Scrollable on Mobile */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-20">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">Why Choose OneMed Tutor</h2>
          <p className="text-slate-500 max-w-2xl mx-auto text-sm sm:text-base">We bridge the gap between complex medical textbooks and your clinical understanding.</p>
        </div>

        <div className="flex overflow-x-auto md:grid md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 pb-4 md:pb-0 snap-x snap-mandatory hide-scrollbar" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
          {highlights.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6 sm:p-8 hover:shadow-xl hover:shadow-blue-900/5 hover:-translate-y-1 transition-all duration-300 shrink-0 w-[280px] sm:w-[320px] md:w-auto snap-start text-center md:text-left flex flex-col items-center md:items-start"
            >
              <div className="inline-flex w-14 h-14 sm:w-16 sm:h-16 items-center justify-center bg-blue-50 text-blue-400 rounded-2xl mb-5 sm:mb-6">
                <item.icon className="w-7 h-7 sm:w-8 sm:h-8" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-2 sm:mb-3">{item.title}</h3>
              <p className="text-sm text-slate-500 leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* POPULAR COURSES */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-white border-y border-slate-100">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row justify-between items-center mb-10 sm:mb-14 gap-4">
            <div className="text-center sm:text-left">
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-3">Popular Courses</h2>
              <p className="text-slate-500 text-sm sm:text-base">Expert-led programs designed for medical excellence.</p>
            </div>
            <button
              onClick={() => router.push("/courses")}
              className="hidden sm:flex items-center gap-2 text-blue-400 font-bold hover:text-blue-500 transition-colors"
            >
              View All Courses <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {courses.map((course, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-slate-50 rounded-2xl sm:rounded-3xl shadow-sm hover:shadow-xl hover:shadow-blue-900/5 transition-all duration-300 border border-slate-200 overflow-hidden flex flex-col group"
              >
                <div className="h-48 sm:h-56 w-full relative overflow-hidden">
                  <img 
                    src={course.image} 
                    alt={course.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent" />
                  <div className="absolute bottom-4 left-4 sm:bottom-5 sm:left-6">
                    <span className="inline-block px-3 py-1 bg-blue-400/90 backdrop-blur-sm text-white text-[10px] sm:text-xs font-bold uppercase tracking-wider rounded-md mb-2">
                      {course.category}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold text-white leading-tight">
                      {course.title}
                    </h3>
                  </div>
                </div>

                <div className="p-5 sm:p-6 flex-1 flex flex-col">
                  <p className="text-sm sm:text-base text-slate-600 mb-6 flex-1">
                    {course.description}
                  </p>
                  
                  <div className="flex items-center justify-between border-t border-slate-200 pt-4 mt-auto">
                    <div className="flex items-center gap-1.5">
                      <CheckCircle2 className="w-4 h-4 text-blue-400" />
                      <span className="text-xs sm:text-sm font-bold text-slate-700">Live & Recorded</span>
                    </div>
                    <button
                      onClick={() => router.push("/courses")}
                      className="text-blue-400 font-bold hover:text-blue-500 flex items-center gap-1 text-sm sm:text-base"
                    >
                      Learn More <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          <button
            onClick={() => router.push("/courses")}
            className="sm:hidden w-full mt-8 py-3.5 bg-blue-50 text-blue-500 font-bold rounded-xl flex items-center justify-center gap-2"
          >
            View All Courses <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>

      {/* TESTIMONIALS - Scrollable on Mobile */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">Student Success Stories</h2>
          <p className="text-slate-500 max-w-2xl mx-auto text-sm sm:text-base">Join the thousands of students who have transformed their medical careers with us.</p>
        </div>

        <div className="flex overflow-x-auto md:grid md:grid-cols-3 gap-5 sm:gap-8 pb-4 md:pb-0 snap-x snap-mandatory hide-scrollbar" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
          {testimonials.map((t, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-900/5 transition-all duration-300 shrink-0 w-[300px] sm:w-[340px] md:w-auto snap-start relative flex flex-col"
            >
              <Quote className="absolute top-6 right-6 w-8 h-8 sm:w-10 sm:h-10 text-blue-50" />
              
              <div className="flex mb-5">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 text-amber-400 fill-current" />
                ))}
              </div>

              <p className="text-slate-600 italic text-sm sm:text-base leading-relaxed mb-8 flex-1 relative z-10">
                "{t.text}"
              </p>

              <div className="border-t border-slate-100 pt-5 mt-auto flex items-center gap-3">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-400 font-bold text-sm sm:text-base">
                  {t.name.charAt(0)}{t.name.split(' ')[1]?.charAt(0)}
                </div>
                <div>
                  <div className="font-bold text-slate-900 text-sm sm:text-base">{t.name}</div>
                  <div className="text-blue-400 font-semibold text-xs sm:text-sm">{t.exam}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CALL TO ACTION */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto bg-gradient-to-br from-blue-400 to-blue-500 rounded-3xl sm:rounded-[2.5rem] p-8 sm:p-16 text-center shadow-2xl shadow-blue-400/20 relative overflow-hidden">
          {/* Decorative background elements */}
          <div className="absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 bg-white opacity-10 rounded-full blur-2xl" />
          <div className="absolute bottom-0 left-0 -mb-10 -ml-10 w-40 h-40 bg-white opacity-10 rounded-full blur-2xl" />
          
          <div className="relative z-10">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-4 sm:mb-6 tracking-tight">
              Ready to Start Your Medical Journey?
            </h2>
            <p className="text-lg sm:text-xl text-blue-50 mb-8 sm:mb-10 max-w-2xl mx-auto">
              Join our interactive platform today and get access to top-tier tutors, comprehensive notes, and mock tests.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => router.push("/courses")}
                className="px-8 py-4 bg-white text-blue-500 rounded-xl hover:bg-blue-50 font-bold text-lg transition-all duration-200 active:scale-[0.98] shadow-lg"
              >
                Explore Courses
              </button>
              <button
                onClick={() => router.push("/contact")}
                className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-xl hover:bg-white/10 font-bold text-lg transition-all duration-200 active:scale-[0.98]"
              >
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}































// "use client";

// import { useRouter } from "next/navigation";
// import {
 
//   BookOpen,
//   Video,
//   Users,
//   Award,
//   Star,
//   ArrowRight,
// } from "lucide-react";
// import Image from "next/image";

// export default function Home() {
//   const router = useRouter();

//   const highlights = [
//     {
//       icon: Video,
//       title: "Live 1-to-1 Classes",
//       description: "Personalized attention with expert medical tutors",
//     },
//     {
//       icon: Users,
//       title: "Expert Medical Tutors",
//       description: "Learn from qualified MD, MS, and MBBS professionals",
//     },
//     {
//       icon: BookOpen,
//       title: "Exam-Focused Teaching",
//       description: "Curriculum designed for NEET, MBBS, USMLE success",
//     },
//     {
//       icon: Award,
//       title: "Recorded Sessions",
//       description: "Access all your classes anytime, anywhere",
//     },
//   ];

//   const courses = [
 
//     {
//       title: "MBBS Complete Course",
//       description: "All years MBBS curriculum with clinical focus",
//       category: "Medical Degree",
//     },
//     {
//       title: "USMLE Coaching",
//       description: "Step-by-step guidance for USMLE exams",
//       category: "International",
//     },
//     {
//       title: "Nursing Courses",
//       description: "Complete nursing education and exam preparation",
//       category: "Nursing",
//     },
//   ];

//   const testimonials = [
  
//     {
//       name: "Rahul Verma",
//       exam: "MBBS 2nd Year",
//       text:
//         "The tutors are incredibly knowledgeable. Their teaching methods made complex topics like pathology so much easier to understand.",
//       rating: 5,
//     },
//     {
//       name: "Anjali Patel",
//       exam: "USMLE Step 1",
//       text:
//         "Cleared USMLE Step 1 on my first attempt! The structured curriculum and practice tests were exactly what I needed.",
//       rating: 5,
//     },
//   ];

//   return (
//     <div className="min-h-screen">
//       {/* Hero */}
//       <section className="relative h-[90vh] w-full overflow-hidden">
//       {/* Background Image */}
//       <Image
//         src="/coverpic.jpg"
//         alt="OneMed Tutor Hero"
//         fill
//         priority
//         className="object-cover object-right md:object-center"
//       />

//       {/* Overlay */}
//       <div className="absolute inset-0 bg-black/40 md:bg-transparent" />

//       {/* Content */}
//       <div className="relative z-10 max-w-7xl mx-auto h-full flex items-center px-6">
//         <div className="w-full md:w-1/2 text-center md:text-left">
//           <h1 className="text-4xl md:text-6xl font-bold text-white md:text-gray-900 mb-6">
//             Master Your Concepts with{' '}
//             <span className="text-blue-400">OneMed Tutor</span>
//           </h1>

//           <p className="text-lg md:text-xl text-gray-200 md:text-gray-600 mb-8">
//             Online tutoring for MBBS, Nursing, NEET, USMLE & Medical Entrance Exams
//           </p>

//           <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
//           <button
//               onClick={() => router.push("/courses")}
//               className="px-8 py-4 bg-blue-400 text-white rounded-lg hover:bg-blue-500 transition font-semibold text-lg flex items-center justify-center gap-2"
//             >
//               Start Learning <ArrowRight className="w-5 h-5" />
//             </button>

//             <button
//               onClick={() => router.push('/contact')}
//               className="px-8 py-4 bg-white text-blue-400 border-2 border-blue-400 rounded-lg hover:bg-blue-50 transition font-semibold text-lg"
//             >
//               Book a Free Demo
//             </button>
//           </div>

//           <div className="mt-10 text-gray-200 md:text-gray-600 font-medium">
//             Trusted by 5,000+ Medical Students
//           </div>
//         </div>

//         <div className="hidden md:block md:w-1/2" />
//       </div>
//     </section>

//       {/* Why Choose */}
//       <section className="py-16 px-4 bg-white">
//         <div className="max-w-7xl mx-auto">
//           <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
//             Why Choose OneMed Tutor
//           </h2>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//             {highlights.map((item, index) => (
//               <div
//                 key={index}
//                 className="text-center p-6 rounded-xl bg-blue-50 hover:bg-blue-100 transition"
//               >
//                 <div className="inline-flex w-16 h-16 items-center justify-center bg-blue-400 text-white rounded-full mb-4">
//                   <item.icon className="w-8 h-8" />
//                 </div>
//                 <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
//                 <p className="text-gray-600">{item.description}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Courses */}
//       <section className="py-16 px-4 bg-gray-50">
//         <div className="max-w-7xl mx-auto">
//           <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
//             Popular Courses
//           </h2>

//           <p className="text-center text-gray-600 mb-12">
//             Expert-led courses designed for medical excellence
//           </p>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//             {courses.map((course, index) => (
//               <div
//                 key={index}
//                 className="bg-white rounded-xl shadow-md hover:shadow-xl transition p-6"
//               >
//                 <div className="text-blue-600 text-sm font-semibold mb-2">
//                   {course.category}
//                 </div>
//                 <h3 className="text-xl font-bold mb-3">{course.title}</h3>
//                 <p className="text-gray-600 mb-4">{course.description}</p>

//                 <button
//                   onClick={() => router.push("/courses")}
//                   className="text-blue-500 font-semibold hover:text-blue-700 flex items-center gap-1"
//                 >
//                   Learn More <ArrowRight className="w-4 h-4" />
//                 </button>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Testimonials */}
//       <section className="py-16 px-4 bg-white">
//         <div className="max-w-7xl mx-auto">
//           <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
//             Student Success Stories
//           </h2>

//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             {testimonials.map((t, index) => (
//               <div
//                 key={index}
//                 className="bg-blue-50 rounded-xl p-6 hover:shadow-lg transition"
//               >
//                 <div className="flex mb-4">
//                   {[...Array(t.rating)].map((_, i) => (
//                     <Star
//                       key={i}
//                       className="w-5 h-5 text-yellow-400 fill-current"
//                     />
//                   ))}
//                 </div>

//                 <p className="italic text-gray-700 mb-4">
//                   “{t.text}”
//                 </p>

//                 <div className="border-t pt-4">
//                   <div className="font-semibold">{t.name}</div>
//                   <div className="text-sm text-gray-600">{t.exam}</div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* CTA */}
//       <section className="py-16 px-4 bg-gray-100 text-white">
//         <div className="max-w-4xl mx-auto text-center">
//           <h2 className="text-3xl text-black md:text-4xl font-bold mb-6">
//             Ready to Start Your Medical Journey?
//           </h2>
//           <p className="text-xl  text-gray-500 mb-8 ">
//             Join thousands of successful medical students today
//           </p>

//           <div className="flex flex-col sm:flex-row gap-4 justify-center">
//             <button
//               onClick={() => router.push("/courses")}
//               className="px-8 py-4 bg-white text-blue-400 rounded-lg hover:bg-blue-50 font-semibold text-lg"
//             >
//               Explore Courses
//             </button>
//             <button
//               onClick={() => router.push("/contact")}
//               className="px-8 py-4 bg-blue-400 rounded-lg hover:bg-blue-500 font-semibold text-lg"
//             >
//               Contact Us
//             </button>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }
