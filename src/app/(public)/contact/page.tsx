"use client"

import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  MessageCircle,
  CheckCircle2,
  User,
  AtSign,
  HelpCircle,
  AlignLeft,
  X
} from 'lucide-react';
import { useEffect, useState } from 'react';
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

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '+91',
    subject: '',
    message: '',
  });

  const [countryCode, setCountryCode] = useState("+91");
  const [phoneNumber, setPhoneNumber] = useState("");

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const [errors, setErrors] = useState({
    name: null,
    email: null,
    phone: null,
    subject: null,
    message: null,
  });

  const handelValidation = () => {
    const newErrors = {
      name: null,
      email: null,
      phone: null,
      subject: null,
      message: null,
    };

    // Name
    if (!formData.name?.trim()) {
      newErrors.name = "Name is required";
    }

    // Email
    if (!formData.email?.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Enter a valid email address";
    }

    // Phone
    if (!phoneNumber?.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^[0-9]{6,15}$/.test(phoneNumber)) {
      newErrors.phone = "Enter a valid phone number (6–15 digits)";
    }

    if (countryCode === "+91" && phoneNumber.length !== 10) {
      newErrors.phone = "Phone number must be 10 digits";
    }

    if (!phoneNumber.match(/^[0-9]+$/)) {
      newErrors.phone = "Phone number must be a valid number";
    }

    // Subject
    if (!formData.subject) {
      newErrors.subject = "Please select a subject";
    }

    // Message
    if (!formData.message?.trim()) {
      newErrors.message = "Message is required";
    }

    setErrors(newErrors);

    return Object.values(newErrors).every(err => err === null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!handelValidation()) return;

    try {
      setIsSubmitting(true);

      const payload = {
        ...formData,
        phone: `${countryCode}${phoneNumber}`,
      };

      const res = await fetch("/api/enquiries", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (res.ok) {
        setShowSuccess(true);
        setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
        setPhoneNumber("");
        setCountryCode("+91");
        setErrors({ name: null, email: null, phone: null, subject: null, message: null });
      } else {
        setErrors((p) => ({ ...p, message: "Something went wrong. Try again." }));
      }
    } catch (err) {
      setErrors((p) => ({ ...p, message: "Network error. Try again." }));
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    setFormData(prev => ({
      ...prev,
      phone: countryCode + phoneNumber
    }));
  }, [countryCode, phoneNumber]);

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      details: 'onemedtutor@gmail.com',
      link: 'mailto:onemedtutor@gmail.com',
    },
    {
      icon: Phone,
      title: 'Phone',
      details: '+91 92129 48971',
      link: 'tel:+919212948971',
    },
    {
      icon: MessageCircle,
      title: 'WhatsApp',
      details: '+91 92129 48971',
      link: 'https://wa.me/919212948971',
    },
    {
      icon: Clock,
      title: 'Support Hours',
      details: 'Mon-Sat: 9 AM - 9 PM IST',
      link: null,
    },
  ];

  const faqs = [
    {
      question: 'How do I book a demo class?',
      answer: 'Fill out the contact form above or call us directly. We will schedule a free demo class at your convenience.',
    },
    {
      question: 'What are the payment options?',
      answer: 'We accept all major payment methods including credit/debit cards, UPI, net banking, and digital wallets.',
    },
    {
      question: 'Can I change my tutor?',
      answer: 'Yes, you can request a tutor change at any time. We want to ensure you have the best learning experience.',
    },
    {
      question: 'Are classes recorded?',
      answer: 'Yes, all classes are recorded and available for review within 24 hours of the session.',
    },
    {
      question: 'Do you offer refunds?',
      answer: 'Yes, we have a fair refund policy. Please contact us to discuss your specific situation.',
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 overflow-x-hidden pb-20">

      {/* HERO SECTION */}
      <section className="relative overflow-hidden bg-slate-900 pt-20 sm:pt-28 pb-24 sm:pb-32 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=2070"
            alt="Medical Support"
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
          <motion.div variants={fadeIn} className="inline-flex items-center justify-center gap-2 px-3 py-1.5 rounded-full bg-blue-400/20 border border-blue-400/30 text-blue-400 text-xs sm:text-sm font-medium mb-4 sm:mb-6 backdrop-blur-sm mx-auto">
            <MessageCircle className="w-4 h-4" />
            <span>24/7 Support Desk</span>
          </motion.div>

          <motion.h1 variants={fadeIn} className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight mb-3 sm:mb-4 leading-tight max-w-3xl mx-auto">
            Get in Touch With <br className="hidden sm:block" /> Our Academic Team.
          </motion.h1>

          <motion.p variants={fadeIn} className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Whether you need help booking a demo, have questions about our courses, or require technical support, our team is here to assist you.
          </motion.p>
        </motion.div>
      </section>

      {/* MAIN CONTENT GRID */}
      <section className="relative z-20 -mt-16 sm:-mt-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 sm:mb-24">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 sm:gap-10 items-start">

          {/* FORM COLUMN */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-3 bg-white rounded-2xl sm:rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100 p-6 sm:p-10"
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-2">Send Us a Message</h2>
            <p className="text-slate-500 text-sm mb-8">Fill out the form below and we will get back to you within 24 hours.</p>

            <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Full Name</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <User className="h-5 w-5 text-slate-400" />
                    </div>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`w-full pl-11 pr-4 py-3 bg-slate-50 border ${errors.name ? 'border-red-400 focus:ring-red-400' : 'border-slate-200 focus:ring-blue-400'} rounded-xl focus:bg-white focus:ring-2 focus:border-transparent transition-all outline-none text-slate-900`}
                      placeholder="Your Name"
                    />
                  </div>
                  {errors.name && <p className="text-red-500 text-xs mt-1.5 font-medium">{errors.name}</p>}
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Email Address</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <AtSign className="h-5 w-5 text-slate-400" />
                    </div>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full pl-11 pr-4 py-3 bg-slate-50 border ${errors.email ? 'border-red-400 focus:ring-red-400' : 'border-slate-200 focus:ring-blue-400'} rounded-xl focus:bg-white focus:ring-2 focus:border-transparent transition-all outline-none text-slate-900`}
                      placeholder=" Email Address"
                    />
                  </div>
                  {errors.email && <p className="text-red-500 text-xs mt-1.5 font-medium">{errors.email}</p>}
                </div>
              </div>

              {/* Phone */}
              <div>
                <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Phone Number</label>
                <div className="flex flex-col sm:flex-row gap-3">
                  <div className="relative sm:w-[35%] lg:w-[40%]">
                    <select
                      value={countryCode}
                      onChange={(e) => setCountryCode(e.target.value)}
                      className="w-full pl-4 pr-10 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all outline-none text-slate-900 appearance-none cursor-pointer"
                    >
                      <option value="+1">🇺🇸 +1 (USA/Canada)</option>
                      <option value="+7">🇷🇺 +7 (Russia)</option>
                      <option value="+20">🇪🇬 +20 (Egypt)</option>
                      <option value="+27">🇿🇦 +27 (South Africa)</option>
                      <option value="+31">🇳🇱 +31 (Netherlands)</option>
                      <option value="+32">🇧🇪 +32 (Belgium)</option>
                      <option value="+33">🇫🇷 +33 (France)</option>
                      <option value="+34">🇪🇸 +34 (Spain)</option>
                      <option value="+36">🇭🇺 +36 (Hungary)</option>
                      <option value="+39">🇮🇹 +39 (Italy)</option>
                      <option value="+40">🇷🇴 +40 (Romania)</option>
                      <option value="+41">🇨🇭 +41 (Switzerland)</option>
                      <option value="+43">🇦🇹 +43 (Austria)</option>
                      <option value="+44">🇬🇧 +44 (UK)</option>
                      <option value="+45">🇩🇰 +45 (Denmark)</option>
                      <option value="+46">🇸🇪 +46 (Sweden)</option>
                      <option value="+47">🇳🇴 +47 (Norway)</option>
                      <option value="+48">🇵🇱 +48 (Poland)</option>
                      <option value="+49">🇩🇪 +49 (Germany)</option>
                      <option value="+51">🇵🇪 +51 (Peru)</option>
                      <option value="+52">🇲🇽 +52 (Mexico)</option>
                      <option value="+53">🇨🇺 +53 (Cuba)</option>
                      <option value="+54">🇦🇷 +54 (Argentina)</option>
                      <option value="+55">🇧🇷 +55 (Brazil)</option>
                      <option value="+56">🇨🇱 +56 (Chile)</option>
                      <option value="+57">🇨🇴 +57 (Colombia)</option>
                      <option value="+58">🇻🇪 +58 (Venezuela)</option>
                      <option value="+60">🇲🇾 +60 (Malaysia)</option>
                      <option value="+61">🇦🇺 +61 (Australia)</option>
                      <option value="+62">🇮🇩 +62 (Indonesia)</option>
                      <option value="+63">🇵🇭 +63 (Philippines)</option>
                      <option value="+64">🇳🇿 +64 (New Zealand)</option>
                      <option value="+65">🇸🇬 +65 (Singapore)</option>
                      <option value="+66">🇹🇭 +66 (Thailand)</option>
                      <option value="+81">🇯🇵 +81 (Japan)</option>
                      <option value="+82">🇰🇷 +82 (South Korea)</option>
                      <option value="+84">🇻🇳 +84 (Vietnam)</option>
                      <option value="+86">🇨🇳 +86 (China)</option>
                      <option value="+90">🇹🇷 +90 (Turkey)</option>
                      <option value="+91">🇮🇳 +91 (India)</option>
                      <option value="+92">🇵🇰 +92 (Pakistan)</option>
                      <option value="+93">🇦🇫 +93 (Afghanistan)</option>
                      <option value="+94">🇱🇰 +94 (Sri Lanka)</option>
                      <option value="+95">🇲🇲 +95 (Myanmar)</option>
                      <option value="+98">🇮🇷 +98 (Iran)</option>
                      <option value="+211">🇸🇸 +211 (South Sudan)</option>
                      <option value="+212">🇲🇦 +212 (Morocco)</option>
                      <option value="+213">🇩🇿 +213 (Algeria)</option>
                      <option value="+216">🇹🇳 +216 (Tunisia)</option>
                      <option value="+218">🇱🇾 +218 (Libya)</option>
                      <option value="+220">🇬🇲 +220 (Gambia)</option>
                      <option value="+221">🇸🇳 +221 (Senegal)</option>
                      <option value="+234">🇳🇬 +234 (Nigeria)</option>
                      <option value="+254">🇰🇪 +254 (Kenya)</option>
                      <option value="+255">🇹🇿 +255 (Tanzania)</option>
                      <option value="+256">🇺🇬 +256 (Uganda)</option>
                      <option value="+263">🇿🇼 +263 (Zimbabwe)</option>
                      <option value="+351">🇵🇹 +351 (Portugal)</option>
                      <option value="+352">🇱🇺 +352 (Luxembourg)</option>
                      <option value="+353">🇮🇪 +353 (Ireland)</option>
                      <option value="+354">🇮🇸 +354 (Iceland)</option>
                      <option value="+355">🇦🇱 +355 (Albania)</option>
                      <option value="+356">🇲🇹 +356 (Malta)</option>
                      <option value="+357">🇨🇾 +357 (Cyprus)</option>
                      <option value="+358">🇫🇮 +358 (Finland)</option>
                      <option value="+359">🇧🇬 +359 (Bulgaria)</option>
                      <option value="+370">🇱🇹 +370 (Lithuania)</option>
                      <option value="+371">🇱🇻 +371 (Latvia)</option>
                      <option value="+372">🇪🇪 +372 (Estonia)</option>
                      <option value="+380">🇺🇦 +380 (Ukraine)</option>
                      <option value="+381">🇷🇸 +381 (Serbia)</option>
                      <option value="+385">🇭🇷 +385 (Croatia)</option>
                      <option value="+386">🇸🇮 +386 (Slovenia)</option>
                      <option value="+420">🇨🇿 +420 (Czech Republic)</option>
                      <option value="+421">🇸🇰 +421 (Slovakia)</option>
                      <option value="+880">🇧🇩 +880 (Bangladesh)</option>
                      <option value="+971">🇦🇪 +971 (UAE)</option>
                      <option value="+972">🇮🇱 +972 (Israel)</option>
                      <option value="+973">🇧🇭 +973 (Bahrain)</option>
                      <option value="+974">🇶🇦 +974 (Qatar)</option>
                      <option value="+975">🇧🇹 +975 (Bhutan)</option>
                      <option value="+976">🇲🇳 +976 (Mongolia)</option>
                      <option value="+977">🇳🇵 +977 (Nepal)</option>
                      <option value="+992">🇹🇯 +992 (Tajikistan)</option>
                      <option value="+993">🇹🇲 +993 (Turkmenistan)</option>
                      <option value="+994">🇦🇿 +994 (Azerbaijan)</option>
                      <option value="+995">🇬🇪 +995 (Georgia)</option>
                      <option value="+996">🇰🇬 +996 (Kyrgyzstan)</option>
                      <option value="+998">🇺🇿 +998 (Uzbekistan)</option>
                    </select>
                    {/* Custom Dropdown Arrow */}
                    <div className="absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none">
                      <svg className="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                    </div>
                  </div>

                  <div className="relative flex-1">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <Phone className="h-5 w-5 text-slate-400" />
                    </div>
                    <input
                      type="tel"
                      value={phoneNumber}
                      onChange={(e) => setPhoneNumber(e.target.value)}
                      className={`w-full pl-11 pr-4 py-3 bg-slate-50 border ${errors.phone ? 'border-red-400 focus:ring-red-400' : 'border-slate-200 focus:ring-blue-400'} rounded-xl focus:bg-white focus:ring-2 focus:border-transparent transition-all outline-none text-slate-900`}
                      placeholder="98765 43210"
                    />
                  </div>
                </div>
                {errors.phone && <p className="text-red-500 text-xs mt-1.5 font-medium">{errors.phone}</p>}
              </div>

              {/* Subject */}
              <div>
                <label htmlFor="subject" className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Subject</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <HelpCircle className="h-5 w-5 text-slate-400" />
                  </div>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className={`w-full pl-11 pr-10 py-3 bg-slate-50 border ${errors.subject ? 'border-red-400 focus:ring-red-400' : 'border-slate-200 focus:ring-blue-400'} rounded-xl focus:bg-white focus:ring-2 focus:border-transparent transition-all outline-none text-slate-900 appearance-none cursor-pointer`}
                  >
                    <option value="" disabled>Select a subject</option>
                    <option value="demo">Book a Demo Class</option>
                    <option value="course">Course Inquiry</option>
                    <option value="tutor">Become a Tutor</option>
                    <option value="support">Technical Support</option>
                    <option value="other">Other</option>
                  </select>
                  <div className="absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none">
                    <svg className="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                  </div>
                </div>
                {errors.subject && <p className="text-red-500 text-xs mt-1.5 font-medium">{errors.subject}</p>}
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Message</label>
                <div className="relative">
                  <div className="absolute top-3 left-0 pl-4 pointer-events-none">
                    <AlignLeft className="h-5 w-5 text-slate-400" />
                  </div>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className={`w-full pl-11 pr-4 py-3 bg-slate-50 border ${errors.message ? 'border-red-400 focus:ring-red-400' : 'border-slate-200 focus:ring-blue-400'} rounded-xl focus:bg-white focus:ring-2 focus:border-transparent transition-all outline-none text-slate-900 resize-none`}
                    placeholder="Tell us how we can help you..."
                  ></textarea>
                </div>
                {errors.message && <p className="text-red-500 text-xs mt-1.5 font-medium">{errors.message}</p>}
                {errors.message === "Something went wrong. Try again." && <p className="text-red-500 text-xs mt-1.5 font-medium">{errors.message}</p>}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full px-6 py-4 rounded-xl font-bold flex items-center justify-center space-x-2 transition-all duration-300 shadow-lg 
                  ${isSubmitting
                    ? "bg-slate-300 text-slate-500 cursor-not-allowed shadow-none"
                    : "bg-blue-400 hover:bg-blue-500 text-white shadow-blue-400/20 active:scale-[0.98]"
                  }`}
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-slate-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5 mr-1" />
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </form>
          </motion.div>

          {/* CONTACT INFO COLUMN */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="lg:col-span-2 space-y-4 sm:space-y-6"
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-6 hidden lg:block">Direct Contact</h2>

            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                whileHover={{ x: 4 }}
                className="bg-white rounded-2xl shadow-sm border border-slate-100 p-5 sm:p-6 transition-all duration-300 hover:border-blue-200 group"
              >
                <div className="flex items-center space-x-4 sm:space-x-5">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 bg-blue-50 text-blue-400 rounded-xl flex items-center justify-center group-hover:bg-blue-400 group-hover:text-white transition-colors duration-300 shadow-inner">
                      <info.icon className="w-6 h-6" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xs sm:text-sm font-bold text-slate-400 uppercase tracking-wider mb-0.5">{info.title}</h3>
                    {info.link ? (
                      <a
                        href={info.link}
                        className="text-slate-900 font-semibold sm:text-lg hover:text-blue-500 transition-colors"
                      >
                        {info.details}
                      </a>
                    ) : (
                      <p className="text-slate-900 font-semibold sm:text-lg">{info.details}</p>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Quick Map/Address Box if needed in future */}
            <div className="bg-slate-800 rounded-2xl p-6 sm:p-8 text-white relative overflow-hidden mt-8">
              <div className="absolute -right-4 -bottom-4 opacity-10">
                <MapPin className="w-32 h-32" />
              </div>
              <h3 className="font-bold text-lg mb-2 relative z-10">Global Operations</h3>
              <p className="text-slate-300 text-sm leading-relaxed relative z-10">
                Operating internationally to serve medical students globally through our robust online tutoring platform.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQS SECTION */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="bg-white rounded-2xl sm:rounded-3xl shadow-sm border border-slate-200 p-6 sm:p-10 lg:p-12">
          <div className="text-center mb-10 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-3">
              Frequently Asked Questions
            </h2>
            <p className="text-slate-500 text-sm sm:text-base max-w-2xl mx-auto">
              Quick answers to questions you may have about our platform and services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-slate-50 rounded-xl p-5 sm:p-6 border border-slate-100 hover:border-blue-200 transition-colors"
              >
                <div className="flex gap-3">
                  <HelpCircle className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-bold text-slate-800 mb-2 leading-snug">{faq.question}</h3>
                    <p className="text-slate-600 text-sm leading-relaxed">{faq.answer}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SUCCESS MODAL */}
      <AnimatePresence>
        {showSuccess && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/40 backdrop-blur-sm p-4"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              className="w-full max-w-sm sm:max-w-md rounded-2xl bg-white shadow-2xl p-6 sm:p-8 relative"
            >
              <button
                onClick={() => setShowSuccess(false)}
                className="absolute top-4 right-4 p-2 text-slate-400 hover:bg-slate-100 hover:text-slate-600 rounded-full transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mb-5">
                  <CheckCircle2 className="w-8 h-8 text-green-500" />
                </div>
                <h2 className="text-2xl font-bold text-slate-900 mb-2">
                  Enquiry Sent Successfully!
                </h2>
                <p className="text-slate-500 text-sm sm:text-base mb-8 leading-relaxed">
                  Thank you for reaching out to OneMed Tutor. A member of our academic support team will contact you shortly.
                </p>

                <button
                  onClick={() => setShowSuccess(false)}
                  className="w-full px-5 py-3.5 rounded-xl bg-blue-400 text-white font-bold hover:bg-blue-500 transition-all duration-200 active:scale-[0.98]"
                >
                  Return to Page
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}






























// "use client"

// import { Mail, Phone, MapPin, Clock, Send, MessageCircle, CheckCircle2 } from 'lucide-react';
// import { useEffect, useState } from 'react';

// export default function Contact() {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     phone: '+91',
//     subject: '',
//     message: '',
//   });

//   const [countryCode, setCountryCode] = useState("+91");
//   const [phoneNumber, setPhoneNumber] = useState("");

//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [showSuccess, setShowSuccess] = useState(false);


//   const [errors, setErrors] = useState({
//     name: null,
//     email: null,
//     phone: null,
//     subject: null,
//     message: null,
//   });

//   const handelValidation = () => {
//     const newErrors = {
//       name: null,
//       email: null,
//       phone: null,
//       subject: null,
//       message: null,
//     };

//     // Name
//     if (!formData.name?.trim()) {
//       newErrors.name = "Name is required";
//     }

//     // Email
//     if (!formData.email?.trim()) {
//       newErrors.email = "Email is required";
//     } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
//       newErrors.email = "Enter a valid email address";
//     }

//     // Phone
//     if (!phoneNumber?.trim()) {
//       newErrors.phone = "Phone number is required";
//     } else if (!/^[0-9]{6,15}$/.test(phoneNumber)) {
//       newErrors.phone = "Enter a valid phone number (6–15 digits)";
//     }

//     if (countryCode === "+91" && phoneNumber.length !== 10) {
//       newErrors.phone = "Phone number must be 10 digits";
//     }

//     if (!phoneNumber.match(/^[0-9]+$/)) {
//       newErrors.phone = "Phone number must be a valid number";
//     }

//     // Subject
//     if (!formData.subject) {
//       newErrors.subject = "Please select a subject";
//     }

//     // Message
//     if (!formData.message?.trim()) {
//       newErrors.message = "Message is required";
//     }

//     setErrors(newErrors);

//     return true;
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();

//     if (!handelValidation()) return;

//     try {
//       setIsSubmitting(true);

//       // make sure formData.phone is updated before sending (if you combine code+number)
//       const payload = {
//         ...formData,
//         phone: `${countryCode}${phoneNumber}`,
//       };


//       const res = await fetch("/api/enquiries", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(payload),
//       });

//       if (res.ok) {
//         setShowSuccess(true);

//         // optional: reset form
//         setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
//         setPhoneNumber("");
//         setCountryCode("+91");
//         setErrors({
//           name: null,
//           email: null,
//           phone: null,
//           subject: null,
//           message: null,
//         });
//       } else {
//         // optional: show a field level generic error
//         setErrors((p) => ({ ...p, message: "Something went wrong. Try again." }));
//       }
//     } catch (err) {
//       // optional: handle network error
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };




//   useEffect(() => {
//     setFormData(prev => ({
//       ...prev,
//       phone: countryCode + phoneNumber
//     }));
//   }, [countryCode, phoneNumber]);

//   const contactInfo = [
//     {
//       icon: Mail,
//       title: 'Email',
//       details: 'onemedtutor@gmail.com',
//       link: 'mailto:onemedtutor@gmail.com',
//     },
//     {
//       icon: Phone,
//       title: 'Phone',
//       details: '+91 92129 48971',
//       link: 'tel:+919212948971',
//     },
//     {
//       icon: MessageCircle,
//       title: 'WhatsApp',
//       details: '+91 92129 48971',
//       link: 'https://wa.me/919212948971',
//     },
//     {
//       icon: Clock,
//       title: 'Support Hours',
//       details: 'Mon-Sat: 9 AM - 9 PM IST',
//       link: null,
//     },
//   ];

//   const faqs = [
//     {
//       question: 'How do I book a demo class?',
//       answer: 'Fill out the contact form above or call us directly. We will schedule a free demo class at your convenience.',
//     },
//     {
//       question: 'What are the payment options?',
//       answer: 'We accept all major payment methods including credit/debit cards, UPI, net banking, and digital wallets.',
//     },
//     {
//       question: 'Can I change my tutor?',
//       answer: 'Yes, you can request a tutor change at any time. We want to ensure you have the best learning experience.',
//     },
//     {
//       question: 'Are classes recorded?',
//       answer: 'Yes, all classes are recorded and available for review within 24 hours of the session.',
//     },
//     {
//       question: 'Do you offer refunds?',
//       answer: 'Yes, we have a fair refund policy. Please contact us to discuss your specific situation.',
//     },
//   ];

//   return (
//     <div className="min-h-screen bg-gray-50">




//       <section className="  bg-gradient-to-br from-blue-400 to-blue-500 text-white py-12 px-4">
//         <div className="max-w-6xl mx-auto">
//           <h1 className="text-4xl font-bold mb-2">Contact Us</h1>
//           <p className="text-blue-100">
//             Get in touch with us for any questions or support
//           </p>
//         </div>
//       </section>


//       <section className="py-12 px-4">
//         <div className="max-w-7xl mx-auto">
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
//             <div>
//               <h2 className="text-3xl font-bold text-gray-900 mb-6">Send Us a Message</h2>
//               <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-md p-8 space-y-6">
//                 <div>
//                   <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
//                     Full Name
//                   </label>
//                   <input
//                     type="text"
//                     id="name"
//                     name="name"
//                     value={formData.name}
//                     onChange={handleChange}

//                     className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                     placeholder="Enter your name"
//                   />
//                   {errors.name && (
//                     <p className="text-red-500 text-sm mt-1">{errors.name}</p>
//                   )}
//                 </div>

//                 <div>
//                   <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
//                     Email Address
//                   </label>
//                   <input
//                     type="email"
//                     id="email"
//                     name="email"
//                     value={formData.email}
//                     onChange={handleChange}

//                     className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                     placeholder="your@email.com"
//                   />
//                   {errors.email && (
//                     <p className="text-red-500 text-sm mt-1">{errors.email}</p>
//                   )}
//                 </div>

//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-2">
//                     Phone Number
//                   </label>

//                   <div className="flex flex-wrap gap-2">
//                     <select
//                       value={countryCode}
//                       onChange={(e) => setCountryCode(e.target.value)}
//                       className="w-28 px-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white"
//                     >
//                       <option value="+1">🇺 +1 (USA/Canada)</option>
//                       <option value="+7">🇷 +7 (Russia)</option>
//                       <option value="+20"> +20 (Egypt)</option>
//                       <option value="+27">🇿 +27 (South Africa)</option>

//                       <option value="+31"> +31 (Netherlands)</option>
//                       <option value="+32"> +32 (Belgium)</option> <option value="+33"> +33 (France)</option> <option value="+34"> +34 (Spain)</option> <option value="+36"> +36 (Hungary)</option> <option value="+39"> +39 (Italy)</option> <option value="+40"> +40 (Romania)</option> <option value="+41"> +41 (Switzerland)</option> <option value="+43"> +43 (Austria)</option> <option value="+44"> +44 (UK)</option> <option value="+45"> +45 (Denmark)</option> <option value="+46"> +46 (Sweden)</option> <option value="+47"> +47 (Norway)</option> <option value="+48"> +48 (Poland)</option> <option value="+49"> +49 (Germany)</option> <option value="+51"> +51 (Peru)</option> <option value="+52"> +52 (Mexico)</option> <option value="+53"> +53 (Cuba)</option> <option value="+54"> +54 (Argentina)</option> <option value="+55"> +55 (Brazil)</option> <option value="+56"> +56 (Chile)</option> <option value="+57"> +57 (Colombia)</option> <option value="+58"> +58 (Venezuela)</option> <option value="+60"> +60 (Malaysia)</option> <option value="+61"> +61 (Australia)</option> <option value="+62"> +62 (Indonesia)</option> <option value="+63"> +63 (Philippines)</option> <option value="+64"> +64 (New Zealand)</option> <option value="+65"> +65 (Singapore)</option> <option value="+66"> +66 (Thailand)</option> <option value="+81"> +81 (Japan)</option> <option value="+82"> +82 (South Korea)</option> <option value="+84"> +84 (Vietnam)</option> <option value="+86"> +86 (China)</option> <option value="+90"> +90 (Turkey)</option> <option value="+91"> +91 (India)</option> <option value="+92"> +92 (Pakistan)</option> <option value="+93"> +93 (Afghanistan)</option> <option value="+94"> +94 (Sri Lanka)</option> <option value="+95"> +95 (Myanmar)</option> <option value="+98"> +98 (Iran)</option> <option value="+211"> +211 (South Sudan)</option> <option value="+212"> +212 (Morocco)</option> <option value="+213"> +213 (Algeria)</option> <option value="+216"> +216 (Tunisia)</option> <option value="+218"> +218 (Libya)</option> <option value="+220"> +220 (Gambia)</option> <option value="+221"> +221 (Senegal)</option> <option value="+234"> +234 (Nigeria)</option> <option value="+254"> +254 (Kenya)</option> <option value="+255"> +255 (Tanzania)</option> <option value="+256"> +256 (Uganda)</option> <option value="+263"> +263 (Zimbabwe)</option> <option value="+351"> +351 (Portugal)</option> <option value="+352"> +352 (Luxembourg)</option> <option value="+353"> +353 (Ireland)</option> <option value="+354"> +354 (Iceland)</option> <option value="+355"> +355 (Albania)</option> <option value="+356"> +356 (Malta)</option> <option value="+357"> +357 (Cyprus)</option> <option value="+358"> +358 (Finland)</option> <option value="+359"> +359 (Bulgaria)</option> <option value="+370"> +370 (Lithuania)</option> <option value="+371"> +371 (Latvia)</option> <option value="+372"> +372 (Estonia)</option> <option value="+380"> +380 (Ukraine)</option> <option value="+381"> +381 (Serbia)</option> <option value="+385"> +385 (Croatia)</option> <option value="+386"> +386 (Slovenia)</option> <option value="+420"> +420 (Czech Republic)</option> <option value="+421"> +421 (Slovakia)</option> <option value="+880"> +880 (Bangladesh)</option> <option value="+971"> +971 (UAE)</option> <option value="+972"> +972 (Israel)</option> <option value="+973"> +973 (Bahrain)</option> <option value="+974"> +974 (Qatar)</option> <option value="+975"> +975 (Bhutan)</option> <option value="+976"> +976 (Mongolia)</option> <option value="+977"> +977 (Nepal)</option> <option value="+992"> +992 (Tajikistan)</option> <option value="+993"> +993 (Turkmenistan)</option> <option value="+994"> +994 (Azerbaijan)</option> <option value="+995"> +995 (Georgia)</option> <option value="+996"> +996 (Kyrgyzstan)</option> <option value="+998"> +998 (Uzbekistan)</option>
//                       {/* ... */}
//                     </select>

//                     <input
//                       type="tel"
//                       value={phoneNumber}
//                       onChange={(e) => setPhoneNumber(e.target.value)}
//                       className="min-w-[180px] flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                       placeholder="Enter phone number"
//                     />
//                   </div>

//                   {errors.phone && (
//                     <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
//                   )}
//                 </div>

//                 <div>
//                   <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
//                     Subject
//                   </label>
//                   <select
//                     id="subject"
//                     name="subject"
//                     value={formData.subject}
//                     onChange={handleChange}

//                     className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                   >
//                     <option value="">Select a subject</option>
//                     <option value="demo">Book a Demo Class</option>
//                     <option value="course">Course Inquiry</option>
//                     <option value="tutor">Become a Tutor</option>
//                     <option value="support">Technical Support</option>
//                     <option value="other">Other</option>
//                   </select>
//                   {errors.subject && (
//                     <p className="text-red-500 text-sm mt-1">{errors.subject}</p>
//                   )}
//                 </div>

//                 <div>
//                   <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
//                     Message
//                   </label>
//                   <textarea
//                     id="message"
//                     name="message"
//                     value={formData.message}
//                     onChange={handleChange}

//                     rows={5}
//                     className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                     placeholder="Tell us more about your inquiry..."
//                   ></textarea>
//                   {errors.message && (
//                     <p className="text-red-500 text-sm mt-1">{errors.message}</p>
//                   )}
//                 </div>

//                 <button
//                   type="submit"
//                   disabled={isSubmitting}
//                   className={`w-full px-6 py-3 rounded-lg transition-colors font-semibold flex items-center justify-center space-x-2
//     ${isSubmitting ? "bg-blue-300 cursor-not-allowed" : "bg-blue-400 hover:bg-blue-500"} text-white`}
//                 >
//                   <span>{isSubmitting ? "Sending..." : "Send Message"}</span>
//                 </button>
//               </form>

//               {showSuccess && (
//                 <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
//                   <div className="w-full max-w-md rounded-xl bg-white shadow-lg p-6">
//                     <h2 className="text-xl font-bold text-gray-900 flex items-center gap-2">
//                       <CheckCircle2 className="text-green-500" />
//                       Enquiry Sent
//                     </h2>
//                     <p className="text-gray-600 mt-2">
//                       Your enquiry has been sent successfully. We’ll get back to you soon.
//                     </p>

//                     <div className="mt-6 flex justify-end gap-3">
//                       <button
//                         onClick={() => setShowSuccess(false)}
//                         className="px-5 py-2 rounded-lg bg-blue-500 text-white hover:bg-blue-600"
//                       >
//                         OK
//                       </button>
//                     </div>
//                   </div>
//                 </div>
//               )}
//             </div>

//             <div>
//               <h2 className="text-3xl font-bold text-gray-900 mb-6">Contact Information</h2>
//               <div className="space-y-4 mb-8">
//                 {contactInfo.map((info, index) => (
//                   <div key={index} className="bg-white rounded-xl shadow-md p-6">
//                     <div className="flex items-start space-x-4">
//                       <div className="flex-shrink-0">
//                         <div className="w-12 h-12 bg-blue-100 text-blue-400 rounded-full flex items-center justify-center">
//                           <info.icon className="w-6 h-6" />
//                         </div>
//                       </div>
//                       <div className="flex-1">
//                         <h3 className="font-semibold text-gray-900 mb-1">{info.title}</h3>
//                         {info.link ? (
//                           <a
//                             href={info.link}
//                             className="text-blue-500 hover:text-blue-600"
//                           >
//                             {info.details}
//                           </a>
//                         ) : (
//                           <p className="text-gray-600">{info.details}</p>
//                         )}
//                       </div>
//                     </div>
//                   </div>
//                 ))}
//               </div>

//               {/* <div className="bg-blue-50 rounded-xl p-6">
//                 <MapPin className="w-8 h-8 text-blue-600 mb-3" />
//                 <h3 className="font-semibold text-gray-900 mb-2">Our Office</h3>
//                 <p className="text-gray-700">
//                   OneMed Tutor Pvt. Ltd.<br />
//                   Medical Education Complex<br />
//                   Mumbai, Maharashtra 400001<br />
//                   India
//                 </p>
//               </div> */}
//             </div>
//           </div>

//           <div className="bg-white rounded-xl shadow-md p-8">
//             <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
//               Frequently Asked Questions
//             </h2>
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//               {faqs.map((faq, index) => (
//                 <div key={index} className="border-l-4 border-blue-400 pl-4">
//                   <h3 className="font-semibold text-gray-900 mb-2">{faq.question}</h3>
//                   <p className="text-gray-600 text-sm">{faq.answer}</p>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }
