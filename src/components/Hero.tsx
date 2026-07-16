import { Link } from "react-router-dom";
import PhoneMockup from "./PhoneMockup";
import loginImage from "../images/login.jpeg";

export default function HomeHero() {
  return (
    <section className="bg-linear-to-b from-white via-slate-50 to-white">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-3 py-2 lg:grid lg:grid-cols-2 lg:items-center lg:gap-20 lg:px-8 lg:py-8">

        {/* LEFT */}
        <div className="text-center lg:text-left">

          <span className="inline-flex rounded-full bg-blue-100 px-4 py-2 text-xs font-semibold text-blue-700 sm:text-sm">
            🚀 Smart Business Software
          </span>

          <h1 className="mt-3 text-4xl font-extrabold leading-tight text-slate-900 sm:text-5xl lg:text-6xl">
            Manage Your
            <span className="block text-blue-600">
              Business Smarter
            </span>
            with DTTrack POS
          </h1>

          <p className="mx-auto mt-6 max-w-lg text-base leading-7 text-slate-600 sm:text-lg lg:mx-0 lg:max-w-xl lg:leading-8">
            Sell faster, monitor inventory, track expenses,
            manage employees and view business analytics —
            all from one modern cloud-based platform.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center lg:justify-start">

            <Link
              to="/pricing"
              className="rounded-xl bg-blue-600 px-8 py-4 text-center font-semibold text-white shadow-lg transition hover:-translate-y-1 hover:bg-blue-700"
            >
              Get Started
            </Link>

            <a
              href="https://wa.me/234XXXXXXXXXX"
              target="_blank"
              rel="noreferrer"
              className="rounded-xl bg-green-500 px-8 py-4 text-center font-semibold text-white shadow-lg transition hover:-translate-y-1 hover:bg-green-600"
            >
              WhatsApp
            </a>

          </div>

          {/* Contact */}
          <div className="mt-8 space-y-2 text-sm text-slate-500 lg:text-base">
            <p>📧 support@dttrackpos.com</p>
            <p>📱 +234 XXX XXX XXXX</p>
          </div>

          {/* Trust */}
          <div className="mt-8 flex flex-wrap justify-center gap-4 text-sm text-slate-500 lg:justify-start">
            <span>✔ Cloud Sync</span>
            <span>✔ Offline Ready</span>
            <span>✔ Secure Data</span>
          </div>

        </div>

        {/* RIGHT */}
        <div className="flex justify-center">

          <div className="relative">

            {/* Glow */}
            <div className="absolute inset-0 scale-110 rounded-full bg-blue-500/20 blur-3xl"></div>

            {/* Phone */}
            <div className="relative z-10">
              <PhoneMockup image={loginImage} />
            </div>

            {/* Floating Sales Card */}
            <div className="absolute -left-2 top-10 z-20 rounded-xl bg-white px-4 py-3 shadow-xl sm:-left-10 sm:top-16 lg:-left-20 lg:top-24">

              <p className="text-[11px] text-slate-500">
                Today's Sales
              </p>

              <h3 className="text-lg font-bold text-green-600 sm:text-xl">
                ₦245,000
              </h3>

            </div>

            {/* Floating Inventory Card */}
            <div className="absolute -right-2 bottom-10 z-20 rounded-xl bg-white px-4 py-3 shadow-xl sm:-right-10 sm:bottom-16 lg:-right-20 lg:bottom-24">

              <p className="text-[11px] text-slate-500">
                Inventory
              </p>

              <h3 className="text-lg font-bold text-blue-600 sm:text-xl">
                2,560 Items
              </h3>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}