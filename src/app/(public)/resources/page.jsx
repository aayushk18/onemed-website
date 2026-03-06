"use client";

import { useState, useMemo, useEffect } from "react";
import {
  FileText,
  Download,
  ShieldCheck,
  BookOpen,
  Stethoscope,
  Clock3,
} from "lucide-react";

const Pdfs = [
  {
    category_name: "Anatomy",
    sub_categories: [
      {
        sub_category: "Gross Anatomy",
        pdfs: [
          {
            name: "Osteology Basics",
            description: "Detailed study of bones",
            date: "2025-01-10",
            size: "2.3 MB",
            link: "/pdfs/anatomy/osteology-basics.pdf",
          },
        ],
      },
    ],
  },
];

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

            return {
              ...sub,
              pdfs: filteredPdfs,
            };
          })
          .filter((sub) => sub.pdfs.length > 0);

        return {
          ...category,
          sub_categories: filteredSubCategories,
        };
      })
      .filter((category) => category.sub_categories.length > 0);
  };

  const loadData = async () => {
    try {
      const res = await fetch("/api/courses");
      const data = await res.json();

      if (Array.isArray(data.data)) {
        const filteredData = filterWebViewData(data.data);
        setMedicalPdfs(filteredData);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
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

  const totalSubjects = medicalPdfs.length;
  const totalSubCategories = medicalPdfs.reduce(
    (acc, cat) => acc + (cat.sub_categories?.length || 0),
    0
  );
  const totalResources = medicalPdfs.reduce(
    (acc, cat) =>
      acc +
      (cat.sub_categories?.reduce(
        (subAcc, sub) => subAcc + (sub.pdfs?.length || 0),
        0
      ) || 0),
    0
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-gradient-to-br from-blue-400 to-blue-500 text-white py-12 px-4">
        <div className="max-w-6xl mx-auto">

          <h1 className="text-4xl font-bold mb-2">Study Resources</h1>
          <p className="text-blue-100 max-w-2xl">
            Category-wise medical PDFs curated for structured learning, quick
            revision, and exam-focused preparation.
          </p>


        </div>


      </section>

      {/* Summary cards */}

      <section className="max-w-6xl mx-auto px-4 pt-8">
        <div className="bg-white border border-gray-100 rounded-2xl shadow-sm p-6 md:p-8">
          <div className="max-w-4xl">
            <p className="text-sm font-medium text-blue-500 mb-2">
              Professional Medical Resource Library
            </p>

            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 leading-tight">
              Structured study materials for concept clarity, revision, and
              exam-focused preparation
            </h2>

            <p className="text-gray-600 text-sm md:text-base mt-4 leading-7">
              Explore carefully organized medical learning resources across major
              subjects and sub-topics. We are here to help students access
              high-value PDF notes in a simple, topic-wise format for faster study,
              better retention, and efficient academic revision.
            </p>

            <div className="mt-5 flex flex-wrap gap-3">
              <span className="px-3 py-1.5 text-xs font-medium rounded-full bg-blue-50 text-blue-700 border border-blue-100">
                Topic-wise organization
              </span>
              <span className="px-3 py-1.5 text-xs font-medium rounded-full bg-blue-50 text-blue-700 border border-green-100">
                Exam-oriented resources
              </span>
              <span className="px-3 py-1.5 text-xs font-medium rounded-full bg-blue-50 text-blue-700 border border-purple-100">
                Quick revision support
              </span>
              <span className="px-3 py-1.5 text-xs font-medium rounded-full bg-blue-50 text-blue-700 border border-orange-100">
                Easy PDF access
              </span>
            </div>
          </div>
        </div>
      </section>


      {loading ? (
        <div className="max-w-6xl bg-gray-50 px-4 sm:px-6 mx-auto px-4 lg:px-8 py-10 sm:py-16">
          <div className="max-w-7xl mx-auto">
            <div className="h-9 sm:h-10 w-56 sm:w-72 bg-gray-200 rounded-lg animate-pulse mb-4 sm:mb-6" />
            <div className="h-4 sm:h-5 w-full max-w-[28rem] bg-gray-200 rounded animate-pulse mb-8 sm:mb-10" />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              {Array.from({ length: 8 }).map((_, i) => (
                <div
                  key={i}
                  className="bg-white rounded-xl shadow-sm border border-gray-100 p-4 sm:p-6"
                >
                  <div className="h-4 w-20 sm:w-24 bg-blue-100 rounded animate-pulse mb-3" />
                  <div className="h-6 w-32 sm:w-40 bg-gray-200 rounded animate-pulse mb-4" />
                  <div className="space-y-2">
                    <div className="h-3 w-full bg-gray-200 rounded animate-pulse" />
                    <div className="h-3 w-11/12 sm:w-5/6 bg-gray-200 rounded animate-pulse" />
                    <div className="h-3 w-2/3 bg-gray-200 rounded animate-pulse" />
                  </div>
                  <div className="h-10 w-24 sm:w-28 bg-gray-200 rounded-lg animate-pulse mt-6" />
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <div>

          {/* Main Layout */}
          <section className="max-w-6xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Category Sidebar */}
            <aside className="md:col-span-1 bg-white rounded-xl shadow p-4 space-y-2 h-fit">
              <div className="border-b border-gray-100 pb-3 mb-2">
                <h3 className="font-semibold text-gray-800">Subjects</h3>
                <p className="text-xs text-gray-500 mt-1">
                  Browse resources by medical discipline
                </p>
              </div>

              {medicalPdfs.map((cat, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setActiveCategory(index);
                    setActiveSubCategory(0);
                  }}
                  className={`w-full text-left px-4 py-3 rounded-lg transition text-sm font-medium ${activeCategory === index
                    ? "bg-blue-400 text-white shadow-sm"
                    : "hover:bg-blue-50 text-gray-700"
                    }`}
                >
                  {cat.category_name}
                </button>
              ))}

              <div className="mt-4 rounded-lg bg-blue-50 border border-blue-100 p-3">
                <p className="text-xs font-medium text-blue-700">
                  Academic Note
                </p>
                <p className="text-xs text-gray-600 mt-1 leading-relaxed">
                  These materials are intended for learning, revision, and exam
                  support within the OneMed Tutor platform.
                </p>
              </div>
            </aside>

            {/* Content */}
            <div className="md:col-span-3 space-y-6">
              {/* Section heading */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-5">
                <p className="text-sm text-blue-500 font-medium mb-1">
                  Resource Directory
                </p>
                <h2 className="text-2xl font-bold text-gray-900">
                  {currentCategory?.category_name || "Resources"}
                </h2>
                <p className="text-sm text-gray-600 mt-1">
                  Access topic-wise notes and downloadable PDF resources for
                  guided preparation.
                </p>
              </div>

              {/* Sub-category Tabs */}
              <div className="flex flex-wrap gap-2">
                {currentCategory?.sub_categories?.map((sub, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveSubCategory(index)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition ${activeSubCategory === index
                      ? "bg-blue-400 text-white shadow-sm"
                      : "bg-white shadow hover:border-blue-400 text-gray-700 border border-gray-100"
                      }`}
                  >
                    {sub.sub_category}
                  </button>
                ))}
              </div>

              {/* Subcategory info */}
              <div className="flex items-center justify-between flex-wrap gap-3">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    {currentSubCategory?.sub_category}
                  </h3>
                  <p className="text-sm text-gray-500">
                    {currentSubCategory?.pdfs?.length || 0} resource
                    {(currentSubCategory?.pdfs?.length || 0) !== 1 ? "s" : ""}{" "}
                    available
                  </p>
                </div>

                <div className="text-xs text-gray-500 bg-white border border-gray-100 rounded-lg px-3 py-2">
                  Verified educational documents
                </div>
              </div>

              {/* PDFs Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {currentSubCategory?.pdfs?.map((pdf, index) => (
                  <div
                    key={index}
                    className="bg-white shadow rounded-xl p-4 hover:shadow-md transition border border-gray-100"
                  >
                    <div className="flex justify-between gap-4">
                      <div className="flex space-x-3">
                        <div className="w-11 h-11 rounded-lg bg-blue-50 flex items-center justify-center shrink-0">
                          <FileText className="w-5 h-5 text-blue-400" />
                        </div>

                        <div>
                          <div className="flex flex-wrap items-center gap-2 mb-1">
                            <h4 className="font-semibold text-gray-900">
                              {pdf.name}
                            </h4>
                            <span className="text-[10px] px-2 py-1 rounded-full bg-green-50 text-green-700 border border-green-100">
                              PDF
                            </span>
                          </div>

                          <p className="text-sm text-gray-600">
                            {pdf.description}
                          </p>

                          <div className="text-xs text-gray-500 mt-2 flex flex-wrap gap-2">
                            <span>{pdf.date.split("T")[0]}</span>
                            <span>•</span>
                            <span>{pdf.size}</span>
                          </div>
                        </div>
                      </div>

                      <a
                        href={pdf.link}
                        download
                        className="text-blue-400 hover:text-blue-500 shrink-0"
                        title="Download PDF"
                      >
                        <Download className="w-5 h-5" />
                      </a>
                    </div>
                  </div>
                ))}
              </div>

              {/* Footer note */}
              <div className="bg-white border border-gray-100 rounded-xl p-4 text-sm text-gray-600">
                <span className="font-medium text-gray-800">Note:</span> Select
                a subject from the left panel, choose a topic tab, and download
                the required resource for study or revision.
              </div>
            </div>
          </section>
        </div>
      )}
    </div>
  );
}


// "use client"



// import { useState, useMemo, useEffect } from "react";
// import { FileText, Download } from "lucide-react";

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
//       }
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
//           // remove subcategories with no pdfs
//           .filter((sub) => sub.pdfs.length > 0);

//         return {
//           ...category,
//           sub_categories: filteredSubCategories,
//         };
//       })
//       // remove categories with no subcategories
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
//     [activeCategory]
//   );

//   const currentSubCategory = useMemo(
//     () => currentCategory.sub_categories[activeSubCategory],
//     [currentCategory, activeSubCategory]
//   );

//   return (
//     <div className="min-h-screen bg-gray-50">
//       {/* Header */}
//       <section className="  bg-gradient-to-br from-blue-400 to-blue-500 text-white py-12 px-4">
//         <div className="max-w-6xl mx-auto">
//           <h1 className="text-4xl font-bold mb-2">Study Resources</h1>
//           <p className="text-blue-100">
//             Category-wise medical PDFs curated by expert tutors
//           </p>
//         </div>
//       </section>

//       {loading ? (

//         <div className="min-h-screen bg-gray-50 px-4 sm:px-6 lg:px-8 py-10 sm:py-16">
//           <div className="max-w-7xl mx-auto">
//             {/* Title skeleton */}
//             <div className="h-9 sm:h-10 w-56 sm:w-72 bg-gray-200 rounded-lg animate-pulse mb-4 sm:mb-6" />

//             {/* Subtitle skeleton (responsive width) */}
//             <div className="h-4 sm:h-5 w-full max-w-[28rem] bg-gray-200 rounded animate-pulse mb-8 sm:mb-10" />

//             {/* Cards */}
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
//             <aside className="md:col-span-1 bg-white rounded-xl shadow p-4 space-y-2">
//               <h3 className="font-semibold text-gray-700 mb-3">Subjects</h3>

//               {medicalPdfs.map((cat, index) => (
//                 <button
//                   key={index}
//                   onClick={() => {
//                     setActiveCategory(index);
//                     setActiveSubCategory(0);
//                   }}
//                   className={`w-full text-left px-4 py-2 rounded-lg transition ${activeCategory === index
//                     ? "bg-blue-400 text-white"
//                     : "hover:bg-blue-50 text-gray-700"
//                     }`}
//                 >
//                   {cat.category_name}
//                 </button>
//               ))}
//             </aside>

//             {/* Content */}
//             <div className="md:col-span-3 space-y-6">
//               {/* Sub-category Tabs */}
//               <div className="flex flex-wrap gap-2">
//                 {currentCategory.sub_categories.map((sub, index) => (
//                   <button
//                     key={index}
//                     onClick={() => setActiveSubCategory(index)}
//                     className={`px-4 py-2 rounded-lg text-sm font-medium transition ${activeSubCategory === index
//                       ? "bg-blue-400 text-white"
//                       : "bg-white shadow hover:border-blue-400"
//                       }`}
//                   >
//                     {sub.sub_category}
//                   </button>
//                 ))}
//               </div>

//               {/* PDFs Grid */}
//               <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//                 {currentSubCategory.pdfs.map((pdf, index) => (
//                   <div
//                     key={index}
//                     className="bg-white shadow rounded-xl p-4 hover:shadow transition"
//                   >
//                     <div className="flex justify-between">
//                       <div className="flex space-x-3">
//                         <FileText className="w-6 h-6 text-blue-400 mt-1" />
//                         <div>
//                           <h4 className="font-semibold text-gray-900">
//                             {pdf.name}
//                           </h4>
//                           <p className="text-sm text-gray-600">
//                             {pdf.description}
//                           </p>
//                           <div className="text-xs text-gray-500 mt-1">
//                             {pdf.date} • {pdf.size}
//                           </div>
//                         </div>
//                       </div>

//                       <a
//                         href={pdf.link}
//                         download
//                         className="text-blue-400 hover:text-blue-500"
//                       >
//                         <Download className="w-5 h-5" />
//                       </a>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </section>
//         </div>

//       )}




//     </div>
//   );
// }
