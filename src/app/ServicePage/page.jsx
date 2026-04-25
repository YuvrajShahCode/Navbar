import next from "next";
import Link from "next/link";
import NavBar from "../NavBar/page";

export default function page() {
    return(
        <div>
          <div className=" sticky top-0 z-50">
            <NavBar/>
          </div>
          <div className="m-4">
            <a href="/" className="bg-red-600 text-white font-bold rounded-2xl text-center px-4 py-2">
              X 
            </a>
            </div>
        {/* Services Grid */}
          <div className="grid gap-8 md:grid-cols-3">
            {/* Service Card 1 */}
            <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition">
              <h2 className="text-2xl font-semibold text-blue-600 mb-4">
                Web Development
              </h2>
              <p className="text-gray-600">
                We build responsive, modern websites using the latest
                technologies like Next.js, React, and Tailwind CSS.
              </p>
            </div>

            {/* Service Card 2 */}
            <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition">
              <h2 className="text-2xl font-semibold text-blue-600 mb-4">
                Mobile Apps
              </h2>
              <p className="text-gray-600">
                Our team creates cross-platform mobile applications with smooth
                performance and intuitive design.
              </p>
            </div>

            {/* Service Card 3 */}
            <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition">
              <h2 className="text-2xl font-semibold text-blue-600 mb-4">
                Digital Marketing
              </h2>
              <p className="text-gray-600">
                We help businesses grow online with SEO, social media campaigns,
                and targeted advertising.
              </p>
            </div>

            <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition">
              <h2 className="text-2xl font-semibold text-blue-600 mb-4">
                Cloud Solutions
              </h2>
              <p className="text-gray-600">
                We build responsive, modern websites using the latest
                technologies like Next.js, React, and Tailwind CSS.
              </p>
            </div>

            <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition">
              <h2 className="text-2xl font-semibold text-blue-600 mb-4">
                AI & Machine Learning
              </h2>
              <p className="text-gray-600">
                We build responsive, modern websites using the latest
                technologies like Next.js, React, and Tailwind CSS.
              </p>
            </div>

            <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition">
              <h2 className="text-2xl font-semibold text-blue-600 mb-4">
                Cybersecurity
              </h2>
              <p className="text-gray-600">
                We build responsive, modern websites using the latest
                technologies like Next.js, React, and Tailwind CSS.
              </p>
            </div>

            <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition">
              <h2 className="text-2xl font-semibold text-blue-600 mb-4">
                UI/UX Design
              </h2>
              <p className="text-gray-600">
                We build responsive, modern websites using the latest
                technologies like Next.js, React, and Tailwind CSS.
              </p>
            </div>

            <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition">
              <h2 className="text-2xl font-semibold text-blue-600 mb-4">
                E-commerce Solutions
              </h2>
              <p className="text-gray-600">
                We build responsive, modern websites using the latest
                technologies like Next.js, React, and Tailwind CSS.
              </p>
            </div>

            <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition">
              <h2 className="text-2xl font-semibold text-blue-600 mb-4">
                Data Analytics
              </h2>
              <p className="text-gray-600">
                We build responsive, modern websites using the latest
                technologies like Next.js, React, and Tailwind CSS.
              </p>
            </div>

            <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition">
              <h2 className="text-2xl font-semibold text-blue-600 mb-4">
                DevOps
              </h2>
              <p className="text-gray-600">
                We build responsive, modern websites using the latest
                technologies like Next.js, React, and Tailwind CSS.
              </p>
            </div>

            <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition">
              <h2 className="text-2xl font-semibold text-blue-600 mb-4">
                Blockchain
              </h2>
              <p className="text-gray-600">
                We build responsive, modern websites using the latest
                technologies like Next.js, React, and Tailwind CSS.
              </p>
            </div>

            <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition">
              <h2 className="text-2xl font-semibold text-blue-600 mb-4">
                IOT
              </h2>
              <p className="text-gray-600">
                We build responsive, modern websites using the latest
                technologies like Next.js, React, and Tailwind CSS.
              </p>
            </div>

            <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition">
              <h2 className="text-2xl font-semibold text-blue-600 mb-4">
                AR/VR
              </h2>
              <p className="text-gray-600">
                We build responsive, modern websites using the latest
                technologies like Next.js, React, and Tailwind CSS.
              </p>
            </div>

            <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition">
              <h2 className="text-2xl font-semibold text-blue-600 mb-4">
                SEO Services
              </h2>
              <p className="text-gray-600">
                We build responsive, modern websites using the latest
                technologies like Next.js, React, and Tailwind CSS.
              </p>
            </div>

            <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition">
              <h2 className="text-2xl font-semibold text-blue-600 mb-4">
                Custom Software Development
              </h2>
              <p className="text-gray-600">
                We build responsive, modern websites using the latest
                technologies like Next.js, React, and Tailwind CSS.
              </p>
            </div>
          </div>
          </div>
  );
}
