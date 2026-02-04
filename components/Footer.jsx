"use client";

import Link from "next/link";
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Youtube,
  Mail,
  Phone,
  Stethoscope,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">


          <div className="space-y-4">
            <Link
              href="/"
              className="flex items-center space-x-2 text-blue-400"
            >
              <Stethoscope className="h-8 w-8" />
              <span className="text-xl font-bold ">
                OneMed Tutor
              </span>
            </Link>

            <p className="text-sm leading-relaxed">
              Master medical concepts with expert-led online tutoring for MBBS
              and medical entrance preparation.
            </p>

            <div className="flex space-x-4 pt-2">
              <Link href="#" className="hover:text-blue-400">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="#" className="hover:text-blue-400">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href="https://www.instagram.com/onemedtutor" className="hover:text-blue-400">
                <Instagram className="h-5 w-5" />
              </Link>
              <Link href="#" className="hover:text-blue-400">
                <Linkedin className="h-5 w-5" />
              </Link>
              <Link href="https://www.youtube.com/@OneMedtutor" className="hover:text-blue-400">
                <Youtube className="h-5 w-5" />
              </Link>
            </div>
          </div>

           <div>
            <h3 className="text-white font-semibold mb-4">
              Quick Links
            </h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/courses" className="hover:text-blue-400">
                  Courses
                </Link>
              </li>
              <li>
                <Link href="/tests" className="hover:text-blue-400">
                  Tests and Practices
                </Link>
              </li>
              <li>
                <Link href="/tutors" className="hover:text-blue-400">
                  Tutors
                </Link>
              </li>
              <li>
                <Link href="/resources" className="hover:text-blue-400">
                  Resources
                </Link>
              </li>
              <li>
                <Link href="/blogs" className="hover:text-blue-400">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

           <div>
            <h3 className="text-white font-semibold mb-4">
              Policies
            </h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/privacy-policy" className="hover:text-blue-400">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-blue-400">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link href="/refund-policy" className="hover:text-blue-400">
                  Refund Policy
                </Link>
              </li>
            </ul>
          </div>

           <div>
            <h3 className="text-white font-semibold mb-4">
              Contact Us
            </h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-blue-400" />
                <span>onemedtutor@gmail.com</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-blue-400" />
                <span>+91 92129 48971</span>
              </li>
            </ul>
          </div>
        </div>

         <div className="border-t border-gray-800 mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between text-sm text-gray-500">
          <p>© 2026 OneMed Tutor. All rights reserved.</p>
          <p className="mt-2 sm:mt-0">
            Designed for medical excellence 🩺
          </p>
        </div>
      </div>
    </footer>
  );
}