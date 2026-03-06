"use client";

import { useState, useMemo, useEffect } from "react";
import {
  FileText,
  Download,
  ShieldCheck,
  BookOpen,
  Stethoscope,
  Clock3,
  Microscope,
  ChevronRight
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Pdfs = [
  {
    category_name: "Anatomy",
    sub_categories: [
      {
        sub_category: "Gross Anatomy",
        pdfs: [
          {
            name: "Osteology Basics",
            description: "Detailed study of bones and articulation.",
            date: "2025-01-10",
            size: "2.3 MB",
            link: "/pdfs/anatomy/osteology-basics.pdf",
          },
        ],
      },
    ],
  },
];

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

export default function ResourcesPage() {
  const [activeCategory, setActiveCategory] = useState(0);
  const [activeSubCategory, setActiveSubCategory] = useState(0);
  const [medicalPdfs, setMedicalPdfs] = useState(Pdfs);
  const [loading, setLoading] = useState(true);

  const filterWebViewData = (data) => {
    return data
      .filter((category) => category.web_view === true)
      .map((category) => {
        const filteredSubCategories = category.sub_categories
          ?.filter((sub) => sub.web_view === true)
          .map((sub) => {
            const filteredPdfs = sub.pdfs?.filter(
              (pdf) => pdf.web_view === true
            );
            return { ...sub, pdfs: filteredPdfs };
          })
          .filter((sub) => sub.pdfs.length > 0);

        return { ...category, sub_categories: filteredSubCategories };
      })
      .filter((category) => category.sub_categories.length > 0);
  };

  const loadData = async () => {
    try {
      const res = await fetch("/api/courses");
      const data = await res.json();

      if (Array.isArray(data.data)) {
        const filteredData = filterWebViewData(data.data);
        setMedicalPdfs(filteredData.length > 0 ? filteredData : Pdfs);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setTimeout(() => setLoading(false), 800);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  const currentCategory = useMemo(
    () => medicalPdfs[activeCategory],
    [medicalPdfs, activeCategory]
  );

  const currentSubCategory = useMemo(
    () => currentCategory?.sub_categories?.[activeSubCategory],
    [currentCategory, activeSubCategory]
  );

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-slate-900 pt-20 sm:pt-24 pb-12 sm:pb-16 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2070&auto=format&fit=crop"
            alt="Medical Students Learning"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent" />
        </div>

        <motion.div
          className="relative z-10 max-w-6xl mx-auto"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          <motion.div variants={fadeIn} className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-400/20 border border-blue-400/30 text-blue-400 text-xs sm:text-sm font-medium mb-4 sm:mb-6 backdrop-blur-sm">
            <BookOpen className="w-4 h-4" />
            <span>MBBS Academic Library</span>
          </motion.div>

          <motion.h1 variants={fadeIn} className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight mb-3 sm:mb-4 leading-tight">
            Master Clinical Concepts <br className="hidden md:block" /> With Precision.
          </motion.h1>

          <motion.p variants={fadeIn} className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed">
            Access our comprehensive, peer-reviewed collection of study notes, high-yield PDFs, and clinical guidelines curated exclusively for medical undergraduates.
          </motion.p>
        </motion.div>
      </section>

      {/* Feature Highlights - Scrollable on mobile */}
      <section className="relative z-20 -mt-6 sm:-mt-8 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 sm:mb-12">
        <div className="flex overflow-x-auto md:grid md:grid-cols-3 gap-3 sm:gap-4 pb-4 md:pb-0 snap-x snap-mandatory hide-scrollbar" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
          {[
            { icon: <ShieldCheck className="w-5 h-5 sm:w-6 sm:h-6 text-blue-400" />, title: "Faculty Verified", desc: "Vetted by senior professors." },
            { icon: <Microscope className="w-5 h-5 sm:w-6 sm:h-6 text-blue-400" />, title: "High-Yield Topics", desc: "Focused on board exams." },
            { icon: <Clock3 className="w-5 h-5 sm:w-6 sm:h-6 text-blue-400" />, title: "Quick Revision", desc: "Structured for retention." },
          ].map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + (idx * 0.1) }}
              className="bg-white rounded-xl sm:rounded-2xl shadow-lg shadow-slate-200/50 p-4 sm:p-6 border border-slate-100 flex items-start gap-3 sm:gap-4 shrink-0 w-72 md:w-auto snap-start"
            >
              <div className="p-2 sm:p-3 bg-slate-50 rounded-lg sm:rounded-xl shrink-0">
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

      {/* Main Content */}
      {loading ? (
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10">
          <div className="flex flex-col md:flex-row gap-6 sm:gap-8">
            <div className="w-full md:w-64 shrink-0 space-y-4">
              <div className="h-6 w-32 bg-slate-200 rounded animate-pulse hidden md:block" />
              <div className="flex md:flex-col gap-2 overflow-hidden">
                {[1, 2, 3, 4].map((i) => <div key={i} className="h-10 w-24 md:w-full md:h-12 bg-slate-200 rounded-xl animate-pulse shrink-0" />)}
              </div>
            </div>
            <div className="flex-1 space-y-6">
              <div className="h-6 sm:h-8 w-40 sm:w-48 bg-slate-200 rounded animate-pulse" />
              <div className="flex flex-wrap gap-2">
                {[1, 2, 3].map((i) => <div key={i} className="h-9 sm:h-10 w-20 sm:w-24 bg-slate-200 rounded-lg animate-pulse" />)}
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[1, 2, 3, 4].map((i) => <div key={i} className="h-28 sm:h-32 w-full bg-slate-200 rounded-xl sm:rounded-2xl animate-pulse" />)}
              </div>
            </div>
          </div>
        </div>
      ) : (
        <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 sm:pb-20">
          <div className="flex flex-col md:flex-row gap-6 sm:gap-8 items-start">

            {/* Sidebar Navigation - Horizontal on mobile, Vertical sticky on desktop */}
            <aside className="w-full md:w-72 shrink-0 space-y-4 sm:space-y-6 md:sticky md:top-6 z-10">
              <div className="bg-white rounded-xl sm:rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
                <div className="p-3 sm:p-5 border-b border-slate-100 bg-slate-50/50 hidden md:block">
                  <h3 className="font-bold text-slate-800 flex items-center gap-2">
                    <Stethoscope className="w-5 h-5 text-blue-400" />
                    Disciplines
                  </h3>
                </div>
                {/* Scrollable container for mobile */}
                <div className="p-2 sm:p-3 flex overflow-x-auto md:flex-col gap-2 snap-x hide-scrollbar" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
                  {medicalPdfs.map((cat, index) => (
                    <button
                      key={index}
                      onClick={() => {
                        setActiveCategory(index);
                        setActiveSubCategory(0);
                      }}
                      className={`shrink-0 snap-start flex items-center justify-between px-4 py-2 sm:py-3 rounded-lg sm:rounded-xl transition-all text-sm font-medium ${activeCategory === index
                          ? "bg-blue-400 text-white shadow-md shadow-blue-200"
                          : "text-slate-600 bg-slate-50 md:bg-transparent hover:bg-slate-100 hover:text-slate-900"
                        }`}
                    >
                      <span className="whitespace-nowrap">{cat.category_name}</span>
                      {activeCategory === index && <ChevronRight className="w-4 h-4 hidden md:block ml-2" />}
                    </button>
                  ))}
                </div>
              </div>

              {/* Academic Disclaimer Box - Hidden on very small mobile to save space, visible on sm and up */}
              <div className="hidden sm:block rounded-xl sm:rounded-2xl bg-indigo-50 border border-indigo-100 p-4 sm:p-5">
                <p className="text-xs font-bold text-indigo-800 uppercase tracking-wider mb-1.5 sm:mb-2">Notice</p>
                <p className="text-xs sm:text-sm text-indigo-900/80 leading-relaxed">
                  These materials are intended to supplement, not replace, primary medical textbooks and clinical rotations.
                </p>
              </div>
            </aside>

            {/* Content Area */}
            <div className="flex-1 w-full min-w-0">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeCategory}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-6 sm:space-y-8"
                >
                  {/* Category Header */}
                  <div>
                    <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-1.5 sm:mb-2">
                      {currentCategory?.category_name} Resources
                    </h2>
                    <p className="text-sm sm:text-base text-slate-600">
                      Select a topic module below to access detailed study documents.
                    </p>
                  </div>

                  {/* Sub-category Pills */}
                  <div className="flex flex-wrap gap-2 p-1 bg-slate-200/50 rounded-xl w-fit">
                    {currentCategory?.sub_categories?.map((sub, index) => (
                      <button
                        key={index}
                        onClick={() => setActiveSubCategory(index)}
                        className={`px-4 sm:px-5 py-2 sm:py-2.5 rounded-lg text-xs sm:text-sm font-semibold transition-all duration-200 ${activeSubCategory === index
                            ? "bg-white text-blue-400 shadow-sm"
                            : "text-slate-600 hover:text-slate-900 hover:bg-slate-200"
                          }`}
                      >
                        {sub.sub_category}
                      </button>
                    ))}
                  </div>

                  {/* PDFs Grid */}
                  <motion.div
                    key={`${activeCategory}-${activeSubCategory}`}
                    variants={staggerContainer}
                    initial="hidden"
                    animate="visible"
                    className="grid grid-cols-1 xl:grid-cols-2 gap-4 sm:gap-5"
                  >
                    {currentSubCategory?.pdfs?.map((pdf, index) => (
                      <motion.div
                        key={index}
                        variants={fadeIn}
                        whileHover={{ y: -4, transition: { duration: 0.2 } }}
                        className="group bg-white rounded-xl sm:rounded-2xl p-4 sm:p-5 border border-slate-200 shadow-sm hover:shadow-xl hover:shadow-blue-900/5 transition-all duration-300 relative overflow-hidden"
                      >
                        <div className="absolute top-0 right-0 w-24 sm:w-32 h-24 sm:h-32 bg-gradient-to-br from-blue-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-bl-full -z-0" />

                        <div className="relative z-10 flex items-start sm:items-center justify-between gap-3 sm:gap-4">
                          <div className="flex items-start space-x-3 sm:space-x-4">
                            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-blue-400 flex items-center justify-center shrink-0 shadow-inner">
                              <FileText className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                            </div>

                            <div className="space-y-1 sm:space-y-1.5">
                              <h4 className="font-bold text-sm sm:text-base text-slate-900 group-hover:text-blue-400 transition-colors line-clamp-1 pr-4">
                                {pdf.name}
                              </h4>
                              <p className="text-xs sm:text-sm text-slate-500 line-clamp-2 leading-relaxed">
                                {pdf.description}
                              </p>

                              <div className="flex flex-wrap items-center gap-2 sm:gap-3 pt-1 sm:pt-2">
                                <span className="inline-flex items-center px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-md bg-slate-100 text-slate-600 text-[10px] sm:text-[11px] font-semibold tracking-wide">
                                  {pdf.size}
                                </span>
                                <span className="text-[10px] sm:text-[11px] text-slate-400 font-medium">
                                  Updated: {pdf.date.split("T")[0]}
                                </span>
                              </div>
                            </div>
                          </div>

                          <a
                            href={pdf.link}
                            download
                            className="shrink-0 flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-slate-50 border border-slate-200 text-slate-400 hover:bg-blue-400 hover:text-white hover:border-blue-400 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
                            title="Download PDF"
                          >
                            <Download className="w-3 h-3 sm:w-4 sm:h-4" />
                          </a>
                        </div>
                      </motion.div>
                    ))}
                  </motion.div>

                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </main>
      )}
    </div>
  );
}





// "use client";

// import { useState, useMemo, useEffect } from "react";
// import {
//   FileText,
//   Download,
//   ShieldCheck,
//   BookOpen,
//   Stethoscope,
//   Clock3,
// } from "lucide-react";

// const Pdfs = [
//   {
//     category_name: "Anatomy",
//     sub_categories: [
//       {
//         sub_category: "Gross Anatomy",
//         pdfs: [
//           {
//             name: "Osteology Basics",
//             description: "Detailed study of bones",
//             date: "2025-01-10",
//             size: "2.3 MB",
//             link: "/pdfs/anatomy/osteology-basics.pdf",
//           },
//         ],
//       },
//     ],
//   },
// ];

// export default function ResourcesPage() {
//   const [activeCategory, setActiveCategory] = useState(0);
//   const [activeSubCategory, setActiveSubCategory] = useState(0);

//   const [medicalPdfs, setMedicalPdfs] = useState(Pdfs);
//   const [loading, setLoading] = useState(true);

//   const filterWebViewData = (data) => {
//     return data
//       .filter((category) => category.web_view === true)
//       .map((category) => {
//         const filteredSubCategories = category.sub_categories
//           ?.filter((sub) => sub.web_view === true)
//           .map((sub) => {
//             const filteredPdfs = sub.pdfs?.filter(
//               (pdf) => pdf.web_view === true
//             );

//             return {
//               ...sub,
//               pdfs: filteredPdfs,
//             };
//           })
//           .filter((sub) => sub.pdfs.length > 0);

//         return {
//           ...category,
//           sub_categories: filteredSubCategories,
//         };
//       })
//       .filter((category) => category.sub_categories.length > 0);
//   };

//   const loadData = async () => {
//     try {
//       const res = await fetch("/api/courses");
//       const data = await res.json();

//       if (Array.isArray(data.data)) {
//         const filteredData = filterWebViewData(data.data);
//         setMedicalPdfs(filteredData);
//       }
//     } catch (error) {
//       console.error("Error fetching data:", error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     loadData();
//   }, []);

//   const currentCategory = useMemo(
//     () => medicalPdfs[activeCategory],
//     [medicalPdfs, activeCategory]
//   );

//   const currentSubCategory = useMemo(
//     () => currentCategory?.sub_categories?.[activeSubCategory],
//     [currentCategory, activeSubCategory]
//   );

//   const totalSubjects = medicalPdfs.length;
//   const totalSubCategories = medicalPdfs.reduce(
//     (acc, cat) => acc + (cat.sub_categories?.length || 0),
//     0
//   );
//   const totalResources = medicalPdfs.reduce(
//     (acc, cat) =>
//       acc +
//       (cat.sub_categories?.reduce(
//         (subAcc, sub) => subAcc + (sub.pdfs?.length || 0),
//         0
//       ) || 0),
//     0
//   );

//   return (
//     <div className="min-h-screen bg-gray-50">
//       {/* Header */}
//       <section className="bg-gradient-to-br from-blue-400 to-blue-500 text-white py-12 px-4">
//         <div className="max-w-6xl mx-auto">

//           <h1 className="text-4xl font-bold mb-2">Study Resources</h1>
//           <p className="text-blue-100 max-w-2xl">
//             Category-wise medical PDFs curated for structured learning, quick
//             revision, and exam-focused preparation.
//           </p>


//         </div>


//       </section>

//       {/* Summary cards */}

//       <section className="max-w-6xl mx-auto px-4 pt-8">
//         <div className="bg-white border border-gray-100 rounded-2xl shadow-sm p-6 md:p-8">
//           <div className="max-w-4xl">
//             <p className="text-sm font-medium text-blue-500 mb-2">
//               Professional Medical Resource Library
//             </p>

//             <h2 className="text-2xl md:text-3xl font-bold text-gray-900 leading-tight">
//               Structured study materials for concept clarity, revision, and
//               exam-focused preparation
//             </h2>

//             <p className="text-gray-600 text-sm md:text-base mt-4 leading-7">
//               Explore carefully organized medical learning resources across major
//               subjects and sub-topics. We are here to help students access
//               high-value PDF notes in a simple, topic-wise format for faster study,
//               better retention, and efficient academic revision.
//             </p>

//             <div className="mt-5 flex flex-wrap gap-3">
//               <span className="px-3 py-1.5 text-xs font-medium rounded-full bg-blue-50 text-blue-700 border border-blue-100">
//                 Topic-wise organization
//               </span>
//               <span className="px-3 py-1.5 text-xs font-medium rounded-full bg-blue-50 text-blue-700 border border-green-100">
//                 Exam-oriented resources
//               </span>
//               <span className="px-3 py-1.5 text-xs font-medium rounded-full bg-blue-50 text-blue-700 border border-purple-100">
//                 Quick revision support
//               </span>
//               <span className="px-3 py-1.5 text-xs font-medium rounded-full bg-blue-50 text-blue-700 border border-orange-100">
//                 Easy PDF access
//               </span>
//             </div>
//           </div>
//         </div>
//       </section>


//       {loading ? (
//         <div className="max-w-6xl bg-gray-50 px-4 sm:px-6 mx-auto px-4 lg:px-8 py-10 sm:py-16">
//           <div className="max-w-7xl mx-auto">
//             <div className="h-9 sm:h-10 w-56 sm:w-72 bg-gray-200 rounded-lg animate-pulse mb-4 sm:mb-6" />
//             <div className="h-4 sm:h-5 w-full max-w-[28rem] bg-gray-200 rounded animate-pulse mb-8 sm:mb-10" />

//             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
//               {Array.from({ length: 8 }).map((_, i) => (
//                 <div
//                   key={i}
//                   className="bg-white rounded-xl shadow-sm border border-gray-100 p-4 sm:p-6"
//                 >
//                   <div className="h-4 w-20 sm:w-24 bg-blue-100 rounded animate-pulse mb-3" />
//                   <div className="h-6 w-32 sm:w-40 bg-gray-200 rounded animate-pulse mb-4" />
//                   <div className="space-y-2">
//                     <div className="h-3 w-full bg-gray-200 rounded animate-pulse" />
//                     <div className="h-3 w-11/12 sm:w-5/6 bg-gray-200 rounded animate-pulse" />
//                     <div className="h-3 w-2/3 bg-gray-200 rounded animate-pulse" />
//                   </div>
//                   <div className="h-10 w-24 sm:w-28 bg-gray-200 rounded-lg animate-pulse mt-6" />
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       ) : (
//         <div>

//           {/* Main Layout */}
//           <section className="max-w-6xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-4 gap-8">
//             {/* Category Sidebar */}
//             <aside className="md:col-span-1 bg-white rounded-xl shadow p-4 space-y-2 h-fit">
//               <div className="border-b border-gray-100 pb-3 mb-2">
//                 <h3 className="font-semibold text-gray-800">Subjects</h3>
//                 <p className="text-xs text-gray-500 mt-1">
//                   Browse resources by medical discipline
//                 </p>
//               </div>

//               {medicalPdfs.map((cat, index) => (
//                 <button
//                   key={index}
//                   onClick={() => {
//                     setActiveCategory(index);
//                     setActiveSubCategory(0);
//                   }}
//                   className={`w-full text-left px-4 py-3 rounded-lg transition text-sm font-medium ${activeCategory === index
//                     ? "bg-blue-400 text-white shadow-sm"
//                     : "hover:bg-blue-50 text-gray-700"
//                     }`}
//                 >
//                   {cat.category_name}
//                 </button>
//               ))}

//               <div className="mt-4 rounded-lg bg-blue-50 border border-blue-100 p-3">
//                 <p className="text-xs font-medium text-blue-700">
//                   Academic Note
//                 </p>
//                 <p className="text-xs text-gray-600 mt-1 leading-relaxed">
//                   These materials are intended for learning, revision, and exam
//                   support within the OneMed Tutor platform.
//                 </p>
//               </div>
//             </aside>

//             {/* Content */}
//             <div className="md:col-span-3 space-y-6">
//               {/* Section heading */}
//               <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-5">
//                 <p className="text-sm text-blue-500 font-medium mb-1">
//                   Resource Directory
//                 </p>
//                 <h2 className="text-2xl font-bold text-gray-900">
//                   {currentCategory?.category_name || "Resources"}
//                 </h2>
//                 <p className="text-sm text-gray-600 mt-1">
//                   Access topic-wise notes and downloadable PDF resources for
//                   guided preparation.
//                 </p>
//               </div>

//               {/* Sub-category Tabs */}
//               <div className="flex flex-wrap gap-2">
//                 {currentCategory?.sub_categories?.map((sub, index) => (
//                   <button
//                     key={index}
//                     onClick={() => setActiveSubCategory(index)}
//                     className={`px-4 py-2 rounded-lg text-sm font-medium transition ${activeSubCategory === index
//                       ? "bg-blue-400 text-white shadow-sm"
//                       : "bg-white shadow hover:border-blue-400 text-gray-700 border border-gray-100"
//                       }`}
//                   >
//                     {sub.sub_category}
//                   </button>
//                 ))}
//               </div>

//               {/* Subcategory info */}
//               <div className="flex items-center justify-between flex-wrap gap-3">
//                 <div>
//                   <h3 className="text-lg font-semibold text-gray-900">
//                     {currentSubCategory?.sub_category}
//                   </h3>
//                   <p className="text-sm text-gray-500">
//                     {currentSubCategory?.pdfs?.length || 0} resource
//                     {(currentSubCategory?.pdfs?.length || 0) !== 1 ? "s" : ""}{" "}
//                     available
//                   </p>
//                 </div>

//                 <div className="text-xs text-gray-500 bg-white border border-gray-100 rounded-lg px-3 py-2">
//                   Verified educational documents
//                 </div>
//               </div>

//               {/* PDFs Grid */}
//               <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//                 {currentSubCategory?.pdfs?.map((pdf, index) => (
//                   <div
//                     key={index}
//                     className="bg-white shadow rounded-xl p-4 hover:shadow-md transition border border-gray-100"
//                   >
//                     <div className="flex justify-between gap-4">
//                       <div className="flex space-x-3">
//                         <div className="w-11 h-11 rounded-lg bg-blue-50 flex items-center justify-center shrink-0">
//                           <FileText className="w-5 h-5 text-blue-400" />
//                         </div>

//                         <div>
//                           <div className="flex flex-wrap items-center gap-2 mb-1">
//                             <h4 className="font-semibold text-gray-900">
//                               {pdf.name}
//                             </h4>
//                             <span className="text-[10px] px-2 py-1 rounded-full bg-green-50 text-green-700 border border-green-100">
//                               PDF
//                             </span>
//                           </div>

//                           <p className="text-sm text-gray-600">
//                             {pdf.description}
//                           </p>

//                           <div className="text-xs text-gray-500 mt-2 flex flex-wrap gap-2">
//                             <span>{pdf.date.split("T")[0]}</span>
//                             <span>•</span>
//                             <span>{pdf.size}</span>
//                           </div>
//                         </div>
//                       </div>

//                       <a
//                         href={pdf.link}
//                         download
//                         className="text-blue-400 hover:text-blue-500 shrink-0"
//                         title="Download PDF"
//                       >
//                         <Download className="w-5 h-5" />
//                       </a>
//                     </div>
//                   </div>
//                 ))}
//               </div>

//               {/* Footer note */}
//               <div className="bg-white border border-gray-100 rounded-xl p-4 text-sm text-gray-600">
//                 <span className="font-medium text-gray-800">Note:</span> Select
//                 a subject from the left panel, choose a topic tab, and download
//                 the required resource for study or revision.
//               </div>
//             </div>
//           </section>
//         </div>
//       )}
//     </div>
//   );
// }


