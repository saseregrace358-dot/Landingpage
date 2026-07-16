import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer
      id="contact"
      className="bg-slate-950 text-slate-300 mt-20"
    >
      <div className="max-w-7xl mx-auto px-6 py-14">

        {/* Grid */}
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">

          {/* Brand */}
          <div>
            <h2 className="text-3xl font-bold text-white">
              DTTrack POS
            </h2>

            <p className="mt-5 leading-7 text-slate-400">
              Smart Point of Sale and Business Management
              software built for modern businesses.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-5">
              Quick Links
            </h3>

            <div className="flex flex-col gap-4">

              <Link
                to="/"
                className="hover:text-blue-400 transition"
              >
                Home
              </Link>

              <a
                href="#pos"
                className="hover:text-blue-400 transition"
              >
                POS
              </a>

              <a
                href="#pricing"
                className="hover:text-blue-400 transition"
              >
                Pricing
              </a>

              <Link
                to="/app"
                className="hover:text-blue-400 transition"
              >
                Get Started
              </Link>

            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-5">
              Contact
            </h3>

            <div className="space-y-4">

              <p>
                📧 support@dttrackpos.com
              </p>

              <p>
                📱 +234 XXX XXX XXXX
              </p>

              <a
                href="https://wa.me/234XXXXXXXXXX"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-lg bg-green-500 px-6 py-3 font-semibold text-white transition hover:bg-green-600"
              >
                Chat on WhatsApp
              </a>

            </div>
          </div>

        </div>

        {/* Divider */}
        <div className="my-10 border-t border-slate-800" />

        {/* Bottom */}
        <div className="flex flex-col items-center justify-between gap-4 text-center text-sm text-slate-500 md:flex-row">

          <p>
            © {new Date().getFullYear()} DTTrack POS. All rights reserved.
          </p>

          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition">
              Privacy Policy
            </a>

            <a href="#" className="hover:text-white transition">
              Terms
            </a>
          </div>

        </div>

      </div>
    </footer>
  );
}