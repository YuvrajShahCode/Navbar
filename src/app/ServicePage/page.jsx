import next from "next";
import Link from "next/link";

export default function page() {
    return(
        <div>
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
          </div>
          </div>
  );
}
