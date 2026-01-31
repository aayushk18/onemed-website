"use client"



import { useState, useMemo } from "react";
import { FileText, Download } from "lucide-react";

const medicalPdfs = [
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
          {
            name: "Joints Overview",
            description: "Classification and structure of joints",
            date: "2025-01-11",
            size: "2.1 MB",
            link: "/pdfs/anatomy/joints.pdf",
          },
          {
            name: "Muscle Anatomy",
            description: "Origin, insertion, and actions of muscles",
            date: "2025-01-12",
            size: "3.1 MB",
            link: "/pdfs/anatomy/muscles.pdf",
          },
          {
            name: "Blood Vessels",
            description: "Arteries, veins, and capillaries",
            date: "2025-01-13",
            size: "2.5 MB",
            link: "/pdfs/anatomy/blood-vessels.pdf",
          },
          {
            name: "Peripheral Nerves",
            description: "Anatomy of cranial and spinal nerves",
            date: "2025-01-14",
            size: "2.8 MB",
            link: "/pdfs/anatomy/nerves.pdf",
          },
          {
            name: "Thorax Anatomy",
            description: "Heart, lungs, and mediastinum",
            date: "2025-01-15",
            size: "3.4 MB",
            link: "/pdfs/anatomy/thorax.pdf",
          },
          {
            name: "Abdomen Anatomy",
            description: "Abdominal organs and relations",
            date: "2025-01-16",
            size: "3.6 MB",
            link: "/pdfs/anatomy/abdomen.pdf",
          },
          {
            name: "Pelvis & Perineum",
            description: "Pelvic organs and perineal structures",
            date: "2025-01-17",
            size: "2.9 MB",
            link: "/pdfs/anatomy/pelvis-perineum.pdf",
          },
          {
            name: "Head & Neck",
            description: "Detailed head and neck anatomy",
            date: "2025-01-18",
            size: "4.2 MB",
            link: "/pdfs/anatomy/head-neck.pdf",
          },
          {
            name: "Neuroanatomy",
            description: "Brain and spinal cord overview",
            date: "2025-01-19",
            size: "4.5 MB",
            link: "/pdfs/anatomy/neuroanatomy.pdf",
          },
        ],
      },

      {
        sub_category: "Histology",
        pdfs: [
          {
            name: "Cell Structure",
            description: "Ultrastructure of the cell",
            date: "2025-01-10",
            size: "1.9 MB",
            link: "/pdfs/histology/cell-structure.pdf",
          },
          {
            name: "Epithelium Tissue",
            description: "Types and functions of epithelium",
            date: "2025-01-11",
            size: "1.8 MB",
            link: "/pdfs/histology/epithelium.pdf",
          },
          {
            name: "Connective Tissue",
            description: "Loose and dense connective tissue",
            date: "2025-01-12",
            size: "2.0 MB",
            link: "/pdfs/histology/connective-tissue.pdf",
          },
          {
            name: "Muscle Tissue",
            description: "Skeletal, cardiac, and smooth muscle",
            date: "2025-01-13",
            size: "2.2 MB",
            link: "/pdfs/histology/muscle-tissue.pdf",
          },
          {
            name: "Nervous Tissue",
            description: "Neurons and neuroglia",
            date: "2025-01-14",
            size: "2.1 MB",
            link: "/pdfs/histology/nervous-tissue.pdf",
          },
          {
            name: "Organ Histology",
            description: "Liver, kidney, lung histology",
            date: "2025-01-15",
            size: "2.7 MB",
            link: "/pdfs/histology/organs.pdf",
          },
        ],
      },

      {
        sub_category: "Embryology",
        pdfs: [
          {
            name: "Gametogenesis",
            description: "Formation of gametes",
            date: "2025-01-10",
            size: "1.6 MB",
            link: "/pdfs/embryology/gametogenesis.pdf",
          },
          {
            name: "Fertilization",
            description: "Process of fertilization",
            date: "2025-01-11",
            size: "1.5 MB",
            link: "/pdfs/embryology/fertilization.pdf",
          },
          {
            name: "Gastrulation & Neurulation",
            description: "Early embryonic development",
            date: "2025-01-12",
            size: "1.9 MB",
            link: "/pdfs/embryology/gastrulation-neurulation.pdf",
          },
          {
            name: "Heart Development",
            description: "Embryological development of heart",
            date: "2025-01-13",
            size: "2.0 MB",
            link: "/pdfs/embryology/heart.pdf",
          },
          {
            name: "Congenital Anomalies",
            description: "Common developmental anomalies",
            date: "2025-01-14",
            size: "2.3 MB",
            link: "/pdfs/embryology/congenital-anomalies.pdf",
          },
        ],
      },
    ],
  },

  {
    category_name: "Physiology",
    sub_categories: [
      {
        sub_category: "General Physiology",
        pdfs: [
          {
            name: "Cell Membrane & Transport",
            description: "Structure and transport mechanisms of cell membrane",
            date: "2025-01-12",
            size: "2.1 MB",
            link: "/pdfs/physiology/cell-membrane.pdf",
          },
          {
            name: "Body Fluid Compartments",
            description: "Distribution and regulation of body fluids",
            date: "2025-01-12",
            size: "1.9 MB",
            link: "/pdfs/physiology/body-fluids.pdf",
          },
          {
            name: "Homeostasis",
            description: "Physiological mechanisms maintaining internal balance",
            date: "2025-01-13",
            size: "1.7 MB",
            link: "/pdfs/physiology/homeostasis.pdf",
          },
          {
            name: "Nerve & Muscle Physiology",
            description: "Basics of nerve conduction and muscle contraction",
            date: "2025-01-14",
            size: "2.8 MB",
            link: "/pdfs/physiology/nerve-muscle.pdf",
          },
          {
            name: "Action Potential",
            description: "Generation and propagation of action potential",
            date: "2025-01-14",
            size: "2.2 MB",
            link: "/pdfs/physiology/action-potential.pdf",
          },
          {
            name: "Receptors",
            description: "Types and mechanisms of physiological receptors",
            date: "2025-01-15",
            size: "1.6 MB",
            link: "/pdfs/physiology/receptors.pdf",
          },
        ],
      },
  
      {
        sub_category: "Blood",
        pdfs: [
          {
            name: "RBC, WBC & Platelets",
            description: "Structure and functions of blood cells",
            date: "2025-01-16",
            size: "2.4 MB",
            link: "/pdfs/physiology/blood-cells.pdf",
          },
          {
            name: "Hemoglobin",
            description: "Structure, function, and regulation of hemoglobin",
            date: "2025-01-16",
            size: "1.8 MB",
            link: "/pdfs/physiology/hemoglobin.pdf",
          },
          {
            name: "Anemia",
            description: "Types, causes, and physiological basis of anemia",
            date: "2025-01-17",
            size: "2.3 MB",
            link: "/pdfs/physiology/anemia.pdf",
          },
          {
            name: "Blood Groups",
            description: "ABO and Rh blood group systems",
            date: "2025-01-17",
            size: "1.5 MB",
            link: "/pdfs/physiology/blood-groups.pdf",
          },
          {
            name: "Hemostasis",
            description: "Physiology of bleeding control",
            date: "2025-01-18",
            size: "2.0 MB",
            link: "/pdfs/physiology/hemostasis.pdf",
          },
          {
            name: "Coagulation",
            description: "Clotting factors and coagulation pathways",
            date: "2025-01-18",
            size: "2.6 MB",
            link: "/pdfs/physiology/coagulation.pdf",
          },
        ],
      },
  
      {
        sub_category: "Cardiovascular System",
        pdfs: [
          {
            name: "Cardiac Cycle",
            description: "Phases of cardiac cycle and pressure changes",
            date: "2025-01-19",
            size: "2.7 MB",
            link: "/pdfs/physiology/cardiac-cycle.pdf",
          },
          {
            name: "Heart Sounds",
            description: "Origin and clinical significance of heart sounds",
            date: "2025-01-19",
            size: "1.6 MB",
            link: "/pdfs/physiology/heart-sounds.pdf",
          },
          {
            name: "ECG",
            description: "Basics of electrocardiography interpretation",
            date: "2025-01-20",
            size: "2.9 MB",
            link: "/pdfs/physiology/ecg.pdf",
          },
          {
            name: "Blood Pressure",
            description: "Regulation and measurement of blood pressure",
            date: "2025-01-20",
            size: "2.2 MB",
            link: "/pdfs/physiology/blood-pressure.pdf",
          },
          {
            name: "Regulation of Circulation",
            description: "Neural and hormonal control of circulation",
            date: "2025-01-21",
            size: "2.5 MB",
            link: "/pdfs/physiology/circulation-regulation.pdf",
          },
        ],
      },
  
      {
        sub_category: "Respiratory System",
        pdfs: [
          {
            name: "Lung Volumes",
            description: "Spirometry and lung volume measurements",
            date: "2025-01-22",
            size: "2.1 MB",
            link: "/pdfs/physiology/lung-volumes.pdf",
          },
          {
            name: "Gas Exchange",
            description: "Diffusion of gases across respiratory membrane",
            date: "2025-01-22",
            size: "2.3 MB",
            link: "/pdfs/physiology/gas-exchange.pdf",
          },
          {
            name: "Transport of O₂ & CO₂",
            description: "Mechanisms of oxygen and carbon dioxide transport",
            date: "2025-01-23",
            size: "2.6 MB",
            link: "/pdfs/physiology/gas-transport.pdf",
          },
          {
            name: "Regulation of Respiration",
            description: "Neural and chemical control of breathing",
            date: "2025-01-23",
            size: "2.0 MB",
            link: "/pdfs/physiology/respiration-regulation.pdf",
          },
          {
            name: "Hering–Breuer Reflex",
            description: "Protective reflex in respiratory physiology",
            date: "2025-01-24",
            size: "1.4 MB",
            link: "/pdfs/physiology/hering-breuer.pdf",
          },
        ],
      },
  
      {
        sub_category: "CNS",
        pdfs: [
          {
            name: "Reflexes",
            description: "Types and physiology of reflex actions",
            date: "2025-01-25",
            size: "1.9 MB",
            link: "/pdfs/physiology/reflexes.pdf",
          },
          {
            name: "Sensory System",
            description: "Physiology of sensory pathways",
            date: "2025-01-25",
            size: "2.4 MB",
            link: "/pdfs/physiology/sensory-system.pdf",
          },
          {
            name: "Motor System",
            description: "Motor pathways and voluntary movement control",
            date: "2025-01-26",
            size: "2.7 MB",
            link: "/pdfs/physiology/motor-system.pdf",
          },
          {
            name: "Basal Ganglia & Cerebellum",
            description: "Role in movement coordination",
            date: "2025-01-26",
            size: "2.8 MB",
            link: "/pdfs/physiology/basal-ganglia.pdf",
          },
          {
            name: "Sleep & EEG",
            description: "Stages of sleep and EEG patterns",
            date: "2025-01-27",
            size: "2.2 MB",
            link: "/pdfs/physiology/sleep-eeg.pdf",
          },
        ],
      },
  
      {
        sub_category: "Renal Physiology",
        pdfs: [
          {
            name: "Nephron",
            description: "Structure and function of nephron",
            date: "2025-01-28",
            size: "2.1 MB",
            link: "/pdfs/physiology/nephron.pdf",
          },
          {
            name: "GFR",
            description: "Glomerular filtration rate and regulation",
            date: "2025-01-28",
            size: "1.8 MB",
            link: "/pdfs/physiology/gfr.pdf",
          },
          {
            name: "Tubular Reabsorption",
            description: "Mechanisms of tubular transport",
            date: "2025-01-29",
            size: "2.3 MB",
            link: "/pdfs/physiology/tubular-reabsorption.pdf",
          },
          {
            name: "Acid–Base Balance",
            description: "Renal regulation of acid-base status",
            date: "2025-01-29",
            size: "2.0 MB",
            link: "/pdfs/physiology/acid-base.pdf",
          },
          {
            name: "Micturition",
            description: "Physiology of urine storage and voiding",
            date: "2025-01-30",
            size: "1.5 MB",
            link: "/pdfs/physiology/micturition.pdf",
          },
        ],
      },
  
      {
        sub_category: "Gastrointestinal Physiology",
        pdfs: [
          {
            name: "Saliva",
            description: "Composition and functions of saliva",
            date: "2025-01-31",
            size: "1.4 MB",
            link: "/pdfs/physiology/saliva.pdf",
          },
          {
            name: "Gastric Secretion",
            description: "Mechanism and regulation of gastric juice",
            date: "2025-01-31",
            size: "2.2 MB",
            link: "/pdfs/physiology/gastric-secretion.pdf",
          },
          {
            name: "Pancreatic Juice & Bile",
            description: "Digestive secretions of pancreas and liver",
            date: "2025-02-01",
            size: "2.5 MB",
            link: "/pdfs/physiology/pancreatic-bile.pdf",
          },
          {
            name: "Digestion & Absorption",
            description: "Process of nutrient digestion and absorption",
            date: "2025-02-01",
            size: "2.7 MB",
            link: "/pdfs/physiology/digestion-absorption.pdf",
          },
        ],
      },
  
      {
        sub_category: "Endocrine",
        pdfs: [
          {
            name: "Hypothalamus–Pituitary Axis",
            description: "Central control of endocrine system",
            date: "2025-02-02",
            size: "2.6 MB",
            link: "/pdfs/physiology/hypothalamus-pituitary.pdf",
          },
          {
            name: "Thyroid & Parathyroid",
            description: "Hormones and physiological functions",
            date: "2025-02-02",
            size: "2.1 MB",
            link: "/pdfs/physiology/thyroid-parathyroid.pdf",
          },
          {
            name: "Adrenal Gland",
            description: "Cortex and medulla hormone physiology",
            date: "2025-02-03",
            size: "2.3 MB",
            link: "/pdfs/physiology/adrenal.pdf",
          },
          {
            name: "Pancreas & Growth Hormone",
            description: "Endocrine pancreas and growth hormone",
            date: "2025-02-03",
            size: "2.0 MB",
            link: "/pdfs/physiology/pancreas-gh.pdf",
          },
        ],
      },
  
      {
        sub_category: "Reproductive Physiology",
        pdfs: [
          {
            name: "Male Reproduction",
            description: "Physiology of male reproductive system",
            date: "2025-02-04",
            size: "2.2 MB",
            link: "/pdfs/physiology/male-reproduction.pdf",
          },
          {
            name: "Female Menstrual Cycle",
            description: "Hormonal regulation of menstrual cycle",
            date: "2025-02-04",
            size: "2.5 MB",
            link: "/pdfs/physiology/menstrual-cycle.pdf",
          },
          {
            name: "Pregnancy & Lactation",
            description: "Physiology of pregnancy and milk production",
            date: "2025-02-05",
            size: "2.8 MB",
            link: "/pdfs/physiology/pregnancy-lactation.pdf",
          },
          {
            name: "Contraception",
            description: "Physiological basis of contraceptive methods",
            date: "2025-02-05",
            size: "1.6 MB",
            link: "/pdfs/physiology/contraception.pdf",
          },
        ],
      },
    ],
  },
  
  


  {
    category_name: "Biochemistry",
    sub_categories: [
      {
        sub_category: "General Biochemistry",
        pdfs: [
          {
            name: "Cell Structure",
            description: "Biochemical organization of the cell",
            date: "2025-01-10",
            size: "2.0 MB",
            link: "/pdfs/biochemistry/cell-structure.pdf",
          },
          {
            name: "Biomolecules",
            description: "Carbohydrates, lipids, proteins and nucleic acids",
            date: "2025-01-11",
            size: "2.4 MB",
            link: "/pdfs/biochemistry/biomolecules.pdf",
          },
          {
            name: "Enzymes",
            description: "Enzyme kinetics, inhibition and regulation",
            date: "2025-01-12",
            size: "2.6 MB",
            link: "/pdfs/biochemistry/enzymes.pdf",
          },
          {
            name: "Acid–Base Balance",
            description: "Regulation of pH in the human body",
            date: "2025-01-13",
            size: "2.1 MB",
            link: "/pdfs/biochemistry/acid-base-balance.pdf",
          },
          {
            name: "Buffers",
            description: "Physiological buffer systems",
            date: "2025-01-14",
            size: "1.9 MB",
            link: "/pdfs/biochemistry/buffers.pdf",
          },
        ],
      },
  
      {
        sub_category: "Carbohydrate Metabolism",
        pdfs: [
          {
            name: "Glycolysis",
            description: "Steps, regulation and clinical importance",
            date: "2025-01-15",
            size: "2.8 MB",
            link: "/pdfs/biochemistry/glycolysis.pdf",
          },
          {
            name: "TCA Cycle",
            description: "Krebs cycle reactions and energy yield",
            date: "2025-01-16",
            size: "2.5 MB",
            link: "/pdfs/biochemistry/tca-cycle.pdf",
          },
          {
            name: "Gluconeogenesis",
            description: "Formation of glucose from non-carbohydrates",
            date: "2025-01-17",
            size: "2.3 MB",
            link: "/pdfs/biochemistry/gluconeogenesis.pdf",
          },
          {
            name: "Glycogen Metabolism",
            description: "Glycogenesis and glycogenolysis",
            date: "2025-01-18",
            size: "2.6 MB",
            link: "/pdfs/biochemistry/glycogen-metabolism.pdf",
          },
          {
            name: "HMP Shunt",
            description: "Hexose monophosphate pathway",
            date: "2025-01-19",
            size: "2.2 MB",
            link: "/pdfs/biochemistry/hmp-shunt.pdf",
          },
        ],
      },
  
      {
        sub_category: "Lipid Metabolism",
        pdfs: [
          {
            name: "Fatty Acid Oxidation",
            description: "Beta oxidation of fatty acids",
            date: "2025-01-20",
            size: "2.7 MB",
            link: "/pdfs/biochemistry/fatty-acid-oxidation.pdf",
          },
          {
            name: "Lipogenesis",
            description: "Synthesis of fatty acids",
            date: "2025-01-21",
            size: "2.4 MB",
            link: "/pdfs/biochemistry/lipogenesis.pdf",
          },
          {
            name: "Cholesterol Metabolism",
            description: "Cholesterol synthesis and regulation",
            date: "2025-01-22",
            size: "2.6 MB",
            link: "/pdfs/biochemistry/cholesterol-metabolism.pdf",
          },
          {
            name: "Lipoproteins",
            description: "Types and functions of lipoproteins",
            date: "2025-01-23",
            size: "2.5 MB",
            link: "/pdfs/biochemistry/lipoproteins.pdf",
          },
          {
            name: "Ketone Bodies",
            description: "Ketogenesis and utilization",
            date: "2025-01-24",
            size: "2.1 MB",
            link: "/pdfs/biochemistry/ketone-bodies.pdf",
          },
        ],
      },
  
      {
        sub_category: "Protein & Amino Acid Metabolism",
        pdfs: [
          {
            name: "Transamination",
            description: "Transfer of amino groups",
            date: "2025-01-25",
            size: "2.2 MB",
            link: "/pdfs/biochemistry/transamination.pdf",
          },
          {
            name: "Deamination",
            description: "Removal of amino groups",
            date: "2025-01-26",
            size: "2.0 MB",
            link: "/pdfs/biochemistry/deamination.pdf",
          },
          {
            name: "Urea Cycle",
            description: "Detoxification of ammonia",
            date: "2025-01-27",
            size: "2.6 MB",
            link: "/pdfs/biochemistry/urea-cycle.pdf",
          },
          {
            name: "Inborn Errors of Metabolism",
            description: "Genetic metabolic disorders",
            date: "2025-01-28",
            size: "2.9 MB",
            link: "/pdfs/biochemistry/inborn-errors.pdf",
          },
        ],
      },
  
      {
        sub_category: "Molecular Biology",
        pdfs: [
          {
            name: "DNA Replication",
            description: "Mechanism of DNA replication",
            date: "2025-01-29",
            size: "2.3 MB",
            link: "/pdfs/biochemistry/dna-replication.pdf",
          },
          {
            name: "Transcription",
            description: "RNA synthesis from DNA",
            date: "2025-01-30",
            size: "2.1 MB",
            link: "/pdfs/biochemistry/transcription.pdf",
          },
          {
            name: "Translation",
            description: "Protein synthesis process",
            date: "2025-01-31",
            size: "2.4 MB",
            link: "/pdfs/biochemistry/translation.pdf",
          },
          {
            name: "Gene Regulation",
            description: "Control of gene expression",
            date: "2025-02-01",
            size: "2.2 MB",
            link: "/pdfs/biochemistry/gene-regulation.pdf",
          },
        ],
      },
  
      {
        sub_category: "Vitamins & Minerals",
        pdfs: [
          {
            name: "Fat-Soluble Vitamins",
            description: "Vitamins A, D, E and K",
            date: "2025-02-02",
            size: "2.5 MB",
            link: "/pdfs/biochemistry/fat-soluble-vitamins.pdf",
          },
          {
            name: "Water-Soluble Vitamins",
            description: "B-complex vitamins and Vitamin C",
            date: "2025-02-03",
            size: "2.4 MB",
            link: "/pdfs/biochemistry/water-soluble-vitamins.pdf",
          },
          {
            name: "Minerals",
            description: "Calcium, iron, iodine and trace elements",
            date: "2025-02-04",
            size: "2.3 MB",
            link: "/pdfs/biochemistry/minerals.pdf",
          },
        ],
      },
  
      {
        sub_category: "Clinical Biochemistry",
        pdfs: [
          {
            name: "Liver Function Tests (LFT)",
            description: "Interpretation of liver enzymes",
            date: "2025-02-05",
            size: "2.6 MB",
            link: "/pdfs/biochemistry/lft.pdf",
          },
          {
            name: "Renal Function Tests (RFT)",
            description: "Assessment of kidney function",
            date: "2025-02-06",
            size: "2.5 MB",
            link: "/pdfs/biochemistry/rft.pdf",
          },
          {
            name: "Blood Glucose",
            description: "Regulation and disorders of glucose",
            date: "2025-02-07",
            size: "2.3 MB",
            link: "/pdfs/biochemistry/blood-glucose.pdf",
          },
          {
            name: "Lipid Profile",
            description: "Cholesterol and triglyceride analysis",
            date: "2025-02-08",
            size: "2.4 MB",
            link: "/pdfs/biochemistry/lipid-profile.pdf",
          },
          {
            name: "Acid–Base Disorders",
            description: "Metabolic and respiratory imbalances",
            date: "2025-02-09",
            size: "2.6 MB",
            link: "/pdfs/biochemistry/acid-base-disorders.pdf",
          },
        ],
      },
    ],
  }
  
];

export default function ResourcesPage() {
  const [activeCategory, setActiveCategory] = useState(0);
  const [activeSubCategory, setActiveSubCategory] = useState(0);

  const currentCategory = useMemo(
    () => medicalPdfs[activeCategory],
    [activeCategory]
  );

  const currentSubCategory = useMemo(
    () => currentCategory.sub_categories[activeSubCategory],
    [currentCategory, activeSubCategory]
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-linear-to-br from-blue-600 to-blue-700 text-white py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold mb-2">Study Resources</h1>
          <p className="text-blue-100">
            Category-wise medical PDFs curated by expert tutors
          </p>
        </div>
      </section>

      {/* Main Layout */}
      <section className="max-w-6xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Category Sidebar */}
        <aside className="md:col-span-1 bg-white rounded-xl shadow p-4 space-y-2">
          <h3 className="font-semibold text-gray-700 mb-3">Subjects</h3>

          {medicalPdfs.map((cat, index) => (
            <button
              key={index}
              onClick={() => {
                setActiveCategory(index);
                setActiveSubCategory(0);
              }}
              className={`w-full text-left px-4 py-2 rounded-lg transition ${
                activeCategory === index
                  ? "bg-blue-600 text-white"
                  : "hover:bg-blue-50 text-gray-700"
              }`}
            >
              {cat.category_name}
            </button>
          ))}
        </aside>

        {/* Content */}
        <div className="md:col-span-3 space-y-6">
          {/* Sub-category Tabs */}
          <div className="flex flex-wrap gap-2">
            {currentCategory.sub_categories.map((sub, index) => (
              <button
                key={index}
                onClick={() => setActiveSubCategory(index)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition ${
                  activeSubCategory === index
                    ? "bg-blue-600 text-white"
                    : "bg-white shadow hover:border-blue-400"
                }`}
              >
                {sub.sub_category}
              </button>
            ))}
          </div>

          {/* PDFs Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {currentSubCategory.pdfs.map((pdf, index) => (
              <div
                key={index}
                className="bg-white shadow rounded-xl p-4 hover:shadow transition"
              >
                <div className="flex justify-between">
                  <div className="flex space-x-3">
                    <FileText className="w-6 h-6 text-blue-600 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900">
                        {pdf.name}
                      </h4>
                      <p className="text-sm text-gray-600">
                        {pdf.description}
                      </p>
                      <div className="text-xs text-gray-500 mt-1">
                        {pdf.date} • {pdf.size}
                      </div>
                    </div>
                  </div>

                  <a
                    href={pdf.link}
                    download
                    className="text-blue-600 hover:text-blue-700"
                  >
                    <Download className="w-5 h-5" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
