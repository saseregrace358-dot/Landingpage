import { Link } from "react-router-dom";
import PhoneMockup from "./PhoneMockup";
import loginImage from "../images/login.jpeg";

const features = [
  {
    title: "🔐 Secure Login",
    description:
      "Every employee signs in securely while owners maintain complete control of business data.",
  },
  {
    title: "📊 Business Dashboard",
    description:
      "Monitor sales, profits, expenses and inventory in real time.",
  },
  {
    title: "🧾 Fast Checkout",
    description:
      "Complete customer transactions in seconds and automatically update stock.",
  },
  {
    title: "📦 Inventory Management",
    description:
      "Track inventory, receive low-stock alerts and manage thousands of products.",
  },
];

export default function ProductTour() {
  return (
    <>
      
       <section className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 py-16 lg:py-28">

  <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">

    <div className="text-center">

      <span className="rounded-full bg-blue-500/20 px-4 py-2 text-sm font-semibold text-blue-300">
        PRODUCT TOUR
      </span>

      <h2 className="mt-5 text-3xl font-bold text-white sm:text-4xl lg:text-6xl">
        See DTTrack POS in Action
      </h2>

      <p className="mx-auto mt-5 max-w-2xl text-base text-blue-100 sm:text-lg">
        Every screen is designed to help your business sell faster,
        manage inventory and increase profits.
      </p>

    </div>

    <div className="mt-16 grid gap-12 lg:grid-cols-[320px_1fr]">

      {/* Phone */}

      <div className="flex justify-center lg:sticky lg:top-28 lg:h-fit">

        <PhoneMockup image={loginImage} />

      </div>

      {/* Features */}

      <div className="space-y-8">

        {features.map((feature, index) => (

          <div
            key={index}
            className="rounded-3xl border border-white/10 bg-white/10 p-6 backdrop-blur transition duration-300 hover:border-blue-400 hover:bg-white/20 hover:translate-x-2"
          >

            <div className="flex gap-5">

              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-blue-600 text-lg font-bold text-white">
                0{index + 1}
              </div>

              <div>

                <h3 className="text-xl font-bold text-white sm:text-2xl">
                  {feature.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-blue-100 sm:text-base">
                  {feature.description}
                </p>

              </div>

            </div>

          </div>

        ))}

      </div>

    </div>

  </div>

</section>
      {/* Business Types */}

      <section className="bg-slate-50 py-24">
        <div className="mx-auto max-w-6xl px-6">

          <h2 className="text-center text-4xl font-bold">
            Perfect For Every Business
          </h2>

          <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">

            {[
              "Retail Shops",
              "Supermarkets",
              "Restaurants",
              "Pharmacies",
              "Fashion Stores",
              "Growing Businesses",
            ].map((item) => (

              <div
                key={item}
                className="rounded-3xl bg-white p-8 text-center shadow hover:-translate-y-2 transition"
              >
                <h3 className="text-xl font-semibold">
                  {item}
                </h3>
              </div>

            ))}

          </div>

        </div>
      </section>

      {/* Features */}

      <section className="py-24">

        <div className="mx-auto max-w-6xl px-6">

          <h2 className="text-center text-4xl font-bold">
            Powerful Features
          </h2>

          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

            {[
              "🧾 Sales",
              "📦 Inventory",
              "👥 Customers",
              "👨‍💼 Employees",
              "📈 Reports",
              "🤖 AI Assistant",
              "📱 Offline Mode",
              "☁ Cloud Sync",
            ].map((feature) => (

              <div
                key={feature}
                className="rounded-3xl border p-8 text-center hover:border-blue-500 hover:shadow-xl transition"
              >
                <p className="font-semibold">
                  {feature}
                </p>
              </div>

            ))}

          </div>

        </div>

      </section>

      {/* CTA */}

      <section className="bg-blue-600 py-24 text-center text-white">

        <h2 className="text-4xl font-bold">
          Ready to Grow Your Business?
        </h2>

        <p className="mt-5 text-lg text-blue-100">
          Join thousands of businesses already using DTTrack POS.
        </p>

        <div className="mt-10 flex flex-col gap-4 justify-center sm:flex-row">

          <Link
            to="/pricing"
            className="rounded-xl bg-white px-8 py-4 font-semibold text-blue-600"
          >
            View Pricing
          </Link>

          <a
            href="https://wa.me/234XXXXXXXXXX"
            className="rounded-xl bg-green-500 px-8 py-4 font-semibold"
          >
            WhatsApp
          </a>

        </div>

      </section>
    </>
  );
}