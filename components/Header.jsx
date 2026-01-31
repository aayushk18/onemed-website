"use client";

import { Menu, X, ChevronDown } from "lucide-react";
import { useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import Image from "next/image";

export default function Header() {
  const router = useRouter();
  const pathname = usePathname();

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [coursesDropdownOpen, setCoursesDropdownOpen] = useState(false);
  const [resourcesDropdownOpen, setResourcesDropdownOpen] = useState(false);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Courses", path: "/courses", hasDropdown: true },
    // { name: "Tutors", path: "/tutors" },
    // { name: "Classes", path: "/classes" },
    // { name: "Pricing", path: "/pricing" },
    { name: "Resources", path: "/resources", hasDropdown: true },
    { name: "Tests", path: "/tests" },
    // { name: "Blog", path: "/blogs" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" }
  ];

  const coursesSubmenu = [
  
    "MBBS (All Years)",
    "Nursing",
    "USMLE / PLAB",
    "Anatomy / Physiology / Pathology",
    "Pharmacology",
    "Crash Courses",
    "Revision & Test Series"
  ];

  const resourcesSubmenu = [
    "Notes (PDF)",
    "Practice Questions",
    "MCQs",
    "Previous Year Questions",
    
  ];

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div
            className="flex items-center space-x-3 cursor-pointer"
            onClick={() => router.push("/")}
          >
            <Image
              src="/onemed_pic.jpg"
              alt="OneMed Tutor"
              width={100}
              height={50}
              priority
            />
          </div>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center space-x-6">
            {navItems.map((item) => (
              <div key={item.path} className="relative">
                <button
                  onClick={() => router.push(item.path)}
                  onMouseEnter={() => {
                    if (item.name === "Courses") setCoursesDropdownOpen(true);
                    if (item.name === "Resources") setResourcesDropdownOpen(true);
                  }}
                  onMouseLeave={() => {
                    if (item.name === "Courses") setCoursesDropdownOpen(false);
                    if (item.name === "Resources") setResourcesDropdownOpen(false);
                  }}
                  className={`flex items-center space-x-1 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    pathname === item.path
                      ? "text-blue-600 bg-blue-50"
                      : "text-gray-700 hover:text-blue-600 hover:bg-blue-50"
                  }`}
                >
                  <span>{item.name}</span>
                  {item.hasDropdown && <ChevronDown className="w-4 h-4" />}
                </button>

                {/* Courses Dropdown */}
                {item.name === "Courses" && coursesDropdownOpen && (
                  <div
                    className="absolute left-0   w-64 bg-white rounded-lg shadow-xl py-2 "
                    onMouseEnter={() => setCoursesDropdownOpen(true)}
                    onMouseLeave={() => setCoursesDropdownOpen(false)}
                  >
                    {coursesSubmenu.map((course) => (
                      <button
                        key={course}
                        onClick={() => router.push("/courses")}
                        className="block w-full text-left px-4 py-2 text-sm hover:bg-blue-50 hover:text-blue-600"
                      >
                        {course}
                      </button>
                    ))}
                  </div>
                )}

                {/* Resources Dropdown */}
                {item.name === "Resources" && resourcesDropdownOpen && (
                  <div
                    className="absolute left-0  w-56 bg-white rounded-lg shadow-xl py-2 "
                    onMouseEnter={() => setResourcesDropdownOpen(true)}
                    onMouseLeave={() => setResourcesDropdownOpen(false)}
                  >
                    {resourcesSubmenu.map((resource) => (
                      <button
                        key={resource}
                        onClick={() => router.push("/resources")}
                        className="block w-full text-left px-4 py-2 text-sm hover:bg-blue-50 hover:text-blue-600"
                      >
                        {resource}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}

           
          </nav>

          <button
              onClick={() =>{  window.location.href = 'https://onemedtutor.online/login';}} 
              className="ml-4 px-6 py-2 bg-blue-600 hidden lg:flex text-white rounded-lg hover:bg-blue-700 font-medium"
            >
              Login
            </button>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t">
            {navItems.map((item) => (
              <button
                key={item.path}
                onClick={() => {
                  router.push(item.path);
                  setMobileMenuOpen(false);
                }}
                className={`block w-full text-left px-4 py-2 text-sm font-medium ${
                  pathname === item.path
                    ? "text-blue-600 bg-blue-50"
                    : "text-gray-700 hover:bg-blue-50"
                }`}
              >
                {item.name}
              </button>
            ))}

            <button
              onClick={() => router.push("/login")}
              className="block w-full mt-2 px-4 py-2 bg-blue-600 text-white rounded-lg font-medium"
            >
              Login
            </button>
          </div>
        )}
      </div>
    </header>
  );
}
