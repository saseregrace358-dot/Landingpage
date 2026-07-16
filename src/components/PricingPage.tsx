import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { initializePayment } from "../api/payment";
const plans = [
  {
    name: "Free",
    price: "₦0",
    period: "14 Days",
    description: "Perfect for trying DTTrack POS.",
    features: [
      "100 Products",
      "100 Sales",
      "1 Employee",
      "Basic Inventory",
      "Email Support",
    ],
    button: "Start Free Trial",
    featured: false,
  },
  {
    name: "Starter",
    price: "₦5,000",
    period: "/month",
    description: "For small businesses.",
    features: [
      "500 Products",
      "Unlimited Sales",
      "3 Employees",
      "Inventory Management",
      "Reports",
    ],
    button: "Choose Starter",
    featured: false,
  },
  {
    name: "Professional",
    price: "₦15,000",
    period: "/month",
    description: "Our most popular plan.",
    features: [
      "5,000 Products",
      "20 Employees",
      "Advanced Reports",
      "AI Assistant",
      "Export & Backup",
      "Priority Support",
    ],
    button: "Go Professional",
    featured: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    description: "For large organizations.",
    features: [
      "Unlimited Products",
      "Unlimited Employees",
      "Unlimited Branches",
      "Dedicated Support",
      "Custom Integrations",
      "Everything Included",
    ],
    button: "Contact Sales",
    featured: false,
  },
];

export default function PricingPage() {
    const handlePayment = async (plan: string) => {
  try {
    if (plan === "Free") {
      window.location.href = "https://postrack-khaki.vercel.app";
      return;
    }

    
const email = prompt("Enter your email");

if (!email) return;

const { data } = await initializePayment(plan, email);
window.location.href = data.authorization_url;
    window.location.href = data.authorization_url;
  } catch (error) {
    console.error(error);
    alert("Unable to initialize payment.");
  }
};
  return (
    
    <section className="bg-slate-50 py-4 sm:py-10 lg:py-7 px-4 sm:px-6">
        <div className="mx-auto mb-1 max-w-7xl">
  <Link
    to="/"
    className="inline-flex items-center  rounded-lg px-1 py-1 text-slate-700 transition hover:bg-slate-200"
  >
    <ArrowLeft size={20} />
    
  </Link>
</div>
      {/* Header */}
      <div className="mx-auto max-w-3xl text-center">

        <span className="inline-flex rounded-full bg-blue-100 px-4 py-2 text-xs sm:text-sm font-semibold text-blue-700">
          Pricing
        </span>

        <h2 className="mt-5 text-3xl font-bold text-slate-900 sm:text-4xl lg:text-5xl">
          Choose the perfect plan
        </h2>

        <p className="mt-4 text-base text-slate-600 sm:text-lg">
          Start for free and upgrade whenever your business grows.
        </p>

      </div>

      {/* Pricing Cards */}

      <div className="mx-auto mt-12 grid max-w-7xl grid-cols-1 gap-6 sm:mt-16 md:grid-cols-2 xl:grid-cols-4">

        {plans.map((plan) => (

          <div
            key={plan.name}
            className={`relative flex flex-col rounded-3xl bg-white p-6 shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-2xl ${
              plan.featured
                ? "border-2 border-blue-600 ring-4 ring-blue-100"
                : "border border-slate-200"
            }`}
          >

            {plan.featured && (
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-blue-600 px-4 py-2 text-xs font-bold tracking-wide text-white shadow-lg">
                MOST POPULAR
              </div>
            )}

            <h3 className="text-2xl font-bold text-slate-900">
              {plan.name}
            </h3>

            <div className="mt-5 flex items-end gap-1">
              <span className="text-4xl font-extrabold text-blue-600 sm:text-5xl">
                {plan.price}
              </span>

              <span className="pb-1 text-sm text-slate-500">
                {plan.period}
              </span>
            </div>

            <p className="mt-4 text-sm leading-7 text-slate-600">
              {plan.description}
            </p>

            <ul className="mt-8 flex-1 space-y-4">

              {plan.features.map((feature) => (

                <li
                  key={feature}
                  className="flex items-start gap-3"
                >
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-green-100 text-sm font-bold text-green-600">
                    ✓
                  </span>

                  <span className="text-sm text-slate-700">
                    {feature}
                  </span>

                </li>

              ))}

            </ul>

            <button
            onClick={() => handlePayment(plan.name)}
            className={`mt-8 flex w-full items-center justify-center rounded-xl px-6 py-3.5 text-sm font-semibold transition ${
                plan.featured
                ? "bg-blue-600 text-white hover:bg-blue-700"
                : "border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white"
            }`}
            >
            {plan.button}
            </button>

          </div>

        ))}

      </div>
    </section>
  );
}