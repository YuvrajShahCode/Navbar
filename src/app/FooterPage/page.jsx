// components/Footer.jsx
import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-200">
      {/* Spacer */}
      <div className="h-[200px]"></div>

      {/* Footer Content */}
      <div className="max-w-7xl mx-auto px-6 py-10">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {/* Brand */}
          <div>
            <h1 className="text-2xl font-bold text-white">Zuptrix Solutions PVT. LTD</h1>
          </div>

          {/* Links */}
          <div>
            <ul>
              <li className="font-semibold mb-2 ">Links</li>
              <a href="/">
              <li>Home</li>
              </a>
              <a href="/ServicePage"><li> Our Service</li></a>
              <a href="/BlogPage"><li>Blog</li></a>
              <a href="/AboutPage"><li>About</li></a>
              <a href="/ContactPage"><li>Contact</li></a>
            </ul>
          </div>

          {/* Blog */}
          <div>
            <ul>
              <li className="font-semibold mb-2">Service's we provide</li>
              <li>Web Development</li>
              <li> Mobile Apps</li>
              <li>Digital Marketing</li>
              <li>Cloud Solutions</li>
              <li>Ai & Machine Learning</li>
              <li>Cybersecurity</li>
              <li>UI / UX Design</li>
              <li>E-Commerce Solutions</li>
              <li>Data Analytics</li>
              <li>DevOps</li>
              <li>Blockchain</li>
              <li>IoT</li>
              <li>AR / VR</li>
              <li>SEO Services</li>
              <li>Custom Software Development</li>
            </ul>
          </div>

          {/* Privacy & Contact */}
          <div>
            <ul>
              <li className="font-semibold">Contact Us</li>
              <li>Mobile : +9779715010101</li>
              <li>Email : infozuptrix@gmail.com
              </li>
            </ul>
              <ul>
                <li className="flex ">
                    Email : zuptrixcode@gmail.com
                </li>
            </ul>
          </div>

          {/* Socials */}
          <div>
            <p className="font-semibold mb-2">Follow me on</p>
            <div className="flex space-x-4">
              <a
                href="https://www.instagram.com/dark.soul.io/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  width="30"
                  height="30"
                  src="https://img.icons8.com/ios-glyphs/100/instagram-new.png"
                  alt="Instagram"
                />
              </a>
              <a
                href="https://www.youtube.com/channel/UCooCOD2j8Q4Y9ysYZIFzI_w"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  width="30"
                  height="30"
                  src="https://img.icons8.com/ios-filled/100/youtube-squared.png"
                  alt="YouTube"
                />
              </a>
              <a
                href="https://dribbble.com/dark-soul"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  width="25"
                  height="25"
                  src="https://img.icons8.com/offices/100/dribbble.png"
                  alt="Dribbble"
                />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-10 border-t border-gray-700 pt-6 grid grid-cols-1 md:grid-cols-3 gap-4 text-center md:text-left">
          <p>
            Icons by{" "}
            <a
              href="https://icons8.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:underline"
            >
              Icons8
            </a>
          </p>
          <p>Designed & Created by SpectacledCoder</p>
          <p>&copy; 2024 SpectacledCoder</p>
        </div>
      </div>
    </footer>
  );
}
