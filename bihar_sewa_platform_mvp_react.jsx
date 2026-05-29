export default function BiharSewaMVP() {
  const backendModules = [
    {
      title: "Authentication API",
      desc: "Phone OTP login for customers and workers.",
    },
    {
      title: "Booking Engine",
      desc: "Real-time booking creation and status updates.",
    },
    {
      title: "Worker Verification",
      desc: "Admin approval and Aadhaar verification workflow.",
    },
    {
      title: "Payments System",
      desc: "UPI and Razorpay integration for secure payments.",
    },
  ];

  const databaseModels = [
    "Users",
    "Workers",
    "Bookings",
    "Payments",
    "Reviews",
    "Cities",
    "Notifications",
    "Support Tickets",
  ];

  const roadmap = [
    {
      phase: "Phase 1",
      title: "MVP Launch",
      items: [
        "Single city launch",
        "WhatsApp booking",
        "50 verified workers",
      ],
    },
    {
      phase: "Phase 2",
      title: "Scale Operations",
      items: [
        "Android app release",
        "Digital payments",
        "Referral system",
      ],
    },
    {
      phase: "Phase 3",
      title: "Bihar Expansion",
      items: [
        "Multi-city operations",
        "Customer subscriptions",
        "Local partnerships",
      ],
    },
  ];
  const bookingFlow = [
    {
      step: "1",
      title: "Search Service",
      desc: "Customer selects service and city.",
    },
    {
      step: "2",
      title: "Choose Worker",
      desc: "Verified workers appear with ratings.",
    },
    {
      step: "3",
      title: "Book Instantly",
      desc: "Booking confirmation through OTP and WhatsApp.",
    },
    {
      step: "4",
      title: "Pay Securely",
      desc: "UPI and cash payment support.",
    },
  ];

  const customerReviews = [
    {
      name: "Priya Devi",
      city: "Patna",
      review: "Fast electrician service and trusted worker.",
    },
    {
      name: "Manish Kumar",
      city: "Darbhanga",
      review: "Very easy booking through WhatsApp.",
    },
    {
      name: "Rahul Raj",
      city: "Gaya",
      review: "Good plumber service at affordable cost.",
    },
  ];
  const stats = [
    { label: "Verified Workers", value: "1,200+" },
    { label: "Cities", value: "12" },
    { label: "Bookings Completed", value: "8,500+" },
    { label: "Average Rating", value: "4.8★" },
  ];
  const services = [
    "Electrician",
    "Plumber",
    "AC Repair",
    "RO Repair",
    "Carpenter",
    "Painter",
    "Home Cleaning",
    "CCTV Installation",
  ];

  const cities = [
    "Patna",
    "Muzaffarpur",
    "Gaya",
    "Darbhanga",
    "Bhagalpur",
    "Purnia",
  ];

  const workers = [
    {
      name: "Rakesh Kumar",
      skill: "Electrician",
      rating: "4.8",
      verified: true,
      city: "Patna",
    },
    {
      name: "Amit Singh",
      skill: "Plumber",
      rating: "4.6",
      verified: true,
      city: "Muzaffarpur",
    },
    {
      name: "Sonu Raj",
      skill: "AC Repair",
      rating: "4.9",
      verified: true,
      city: "Gaya",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      {/* Header */}
      <header className="bg-blue-700 text-white p-5 shadow-lg">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold">Bihar Sewa</h1>
            <p className="text-sm opacity-90">
              Trusted Local Services for Bihar
            </p>
          </div>

          <button className="bg-white text-blue-700 px-4 py-2 rounded-xl font-semibold shadow hover:scale-105 transition">
            Become a Worker
          </button>
        </div>
      </header>

      {/* Hero */}
      <section className="max-w-6xl mx-auto px-4 py-12 grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h2 className="text-5xl font-bold leading-tight mb-5">
            Find Trusted Workers Near You
          </h2>

          <p className="text-lg text-gray-600 mb-6">
            Verified electricians, plumbers, AC repair technicians, carpenters,
            and more across Bihar.
          </p>

          <div className="flex gap-3 flex-wrap">
            <div className="flex flex-wrap gap-3">
              <input
                type="text"
                placeholder="Search service or city"
              className="px-4 py-3 rounded-2xl border w-72"
              />

              <select className="px-4 py-3 rounded-2xl border bg-white">
                <option>Select City</option>
                {cities.map((city) => (
                  <option key={city}>{city}</option>
                ))}
              </select>
            </div>

            <button className="bg-blue-700 text-white px-6 py-3 rounded-2xl font-semibold hover:scale-105 transition shadow-lg">
              Search
            </button>
          </div>
        </div>

        <div className="bg-white rounded-3xl shadow-2xl p-6">
          <h3 className="text-2xl font-bold mb-4">Why Bihar Sewa?</h3>

          <div className="space-y-4">
            <div className="p-4 rounded-2xl bg-gray-50">
              ✔ Aadhaar Verified Workers
            </div>

            <div className="p-4 rounded-2xl bg-gray-50">
              ✔ Hindi Friendly Platform
            </div>

            <div className="p-4 rounded-2xl bg-gray-50">
              ✔ Direct WhatsApp Contact
            </div>

            <div className="p-4 rounded-2xl bg-gray-50">
              ✔ Local City-Based Services
            </div>
          </div>
        </div>
      </section>

      {{/* Stats */}
      <section className="max-w-6xl mx-auto px-4 py-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
          {stats.map((item) => (
            <div
              key={item.label}
              className="bg-white rounded-3xl p-6 shadow-xl text-center"
            >
              <h3 className="text-3xl font-bold text-blue-700 mb-2">
                {item.value}
              </h3>
              <p className="text-gray-600">{item.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Services */}}
      <section className="max-w-6xl mx-auto px-4 py-10">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-3xl font-bold">Popular Services</h3>
          <button className="text-blue-700 font-semibold">
            View All
          </button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
          {services.map((service) => (
            <div
              key={service}
              className="bg-white p-6 rounded-2xl shadow hover:shadow-xl transition cursor-pointer"
            >
              <div className="text-xl font-semibold">{service}</div>
            </div>
          ))}
        </div>
      </section>

      {{/* Worker Registration */}
      <section className="max-w-6xl mx-auto px-4 py-10">
        <div className="bg-white rounded-3xl shadow-2xl p-8 grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="text-4xl font-bold mb-4">
              Become a Verified Worker
            </h3>

            <p className="text-gray-600 text-lg mb-6">
              Join Bihar Sewa and receive customer leads directly from nearby
              families and businesses.
            </p>

            <ul className="space-y-3 text-gray-700">
              <li>✔ Aadhaar Verification</li>
              <li>✔ City-Based Leads</li>
              <li>✔ WhatsApp Notifications</li>
              <li>✔ Ratings & Reviews</li>
            </ul>
          </div>

          <div className="bg-gray-50 rounded-3xl p-6 space-y-4">
            <input
              placeholder="Full Name"
              className="w-full border rounded-2xl px-4 py-3"
            />

            <input
              placeholder="Phone Number"
              className="w-full border rounded-2xl px-4 py-3"
            />

            <select className="w-full border rounded-2xl px-4 py-3">
              <option>Select Service</option>
              <option>Electrician</option>
              <option>Plumber</option>
              <option>AC Repair</option>
              <option>RO Repair</option>
            </select>

            <input
              placeholder="City"
              className="w-full border rounded-2xl px-4 py-3"
            />

            <button className="w-full bg-blue-700 text-white py-3 rounded-2xl font-semibold hover:scale-105 transition shadow-lg">
              Register as Worker
            </button>
          </div>
        </div>
      </section>

      {/* Workers */}}
      <section className="max-w-6xl mx-auto px-4 py-10">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-3xl font-bold">Verified Workers</h3>
          <button className="text-blue-700 font-semibold">
            See More
          </button>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {workers.map((worker) => (
            <div
              key={worker.name}
              className="bg-white rounded-3xl shadow-xl p-6"
            >
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h4 className="text-xl font-bold">{worker.name}</h4>
                  <p className="text-gray-500">{worker.skill}</p>
                </div>

                {worker.verified && (
                  <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-semibold">
                    Verified
                  </span>
                )}
              </div>

              <div className="space-y-2 text-gray-600 mb-5">
                <p>⭐ Rating: {worker.rating}</p>
                <p>📍 {worker.city}</p>
              </div>

              <div className="flex gap-3">
                <button className="flex-1 bg-blue-700 text-white py-3 rounded-2xl font-semibold hover:scale-105 transition">
                  Book Now
                </button>

                <button className="flex-1 border py-3 rounded-2xl font-semibold hover:bg-gray-100 transition">
                  WhatsApp
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Business Model */}
      <section className="max-w-6xl mx-auto px-4 py-10">
        <div className="bg-blue-700 text-white rounded-3xl p-8 shadow-2xl">
          <h3 className="text-3xl font-bold mb-5">
            Initial Monetization Plan
          </h3>

          <div className="grid md:grid-cols-4 gap-5">
            <div className="bg-white/10 rounded-2xl p-5">
              <h4 className="font-bold text-xl mb-2">Lead Fees</h4>
              <p>Charge workers per customer lead.</p>
            </div>

            <div className="bg-white/10 rounded-2xl p-5">
              <h4 className="font-bold text-xl mb-2">Verification Badge</h4>
              <p>Monthly verified worker subscription.</p>
            </div>

            <div className="bg-white/10 rounded-2xl p-5">
              <h4 className="font-bold text-xl mb-2">Priority Listing</h4>
              <p>Workers pay for top placement.</p>
            </div>

            <div className="bg-white/10 rounded-2xl p-5">
              <h4 className="font-bold text-xl mb-2">Commission</h4>
              <p>Future service booking commission.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Roadmap */}
      <section className="max-w-6xl mx-auto px-4 py-10">
        <h3 className="text-3xl font-bold mb-6">90-Day Launch Roadmap</h3>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-3xl shadow-xl">
            <h4 className="text-2xl font-bold mb-3">Month 1</h4>
            <ul className="space-y-2 text-gray-600 list-disc list-inside">
              <li>Choose one city</li>
              <li>Collect 50 workers</li>
              <li>Launch WhatsApp booking</li>
              <li>Verify worker identities</li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-3xl shadow-xl">
            <h4 className="text-2xl font-bold mb-3">Month 2</h4>
            <ul className="space-y-2 text-gray-600 list-disc list-inside">
              <li>Launch Android app</li>
              <li>Enable ratings & reviews</li>
              <li>Run local marketing</li>
              <li>Partner with shops</li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-3xl shadow-xl">
            <h4 className="text-2xl font-bold mb-3">Month 3</h4>
            <ul className="space-y-2 text-gray-600 list-disc list-inside">
              <li>Paid subscriptions</li>
              <li>Expand to nearby city</li>
              <li>Customer referral system</li>
              <li>Build operations team</li>
            </ul>
          </div>
        </div>
      </section>

      {{{{/* Booking Workflow */}
      <section className="max-w-6xl mx-auto px-4 py-10">
        <h3 className="text-3xl font-bold mb-8 text-center">
          How Bihar Sewa Works
        </h3>

        <div className="grid md:grid-cols-4 gap-6">
          {bookingFlow.map((item) => (
            <div
              key={item.step}
              className="bg-white rounded-3xl shadow-xl p-6 text-center"
            >
              <div className="w-14 h-14 mx-auto mb-4 bg-blue-700 text-white rounded-full flex items-center justify-center text-2xl font-bold">
                {item.step}
              </div>

              <h4 className="text-xl font-bold mb-3">{item.title}</h4>

              <p className="text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Mobile App Features */}}
      <section className="max-w-6xl mx-auto px-4 py-10">
        <h3 className="text-3xl font-bold mb-6">
          Mobile App Features
        </h3>

        <div className="grid md:grid-cols-4 gap-5">
          <div className="bg-white rounded-3xl shadow-xl p-6">
            <h4 className="text-xl font-bold mb-3">Live Tracking</h4>
            <p className="text-gray-600">
              Customers can track worker arrival in real time.
            </p>
          </div>

          <div className="bg-white rounded-3xl shadow-xl p-6">
            <h4 className="text-xl font-bold mb-3">OTP Verification</h4>
            <p className="text-gray-600">
              Secure customer and worker verification system.
            </p>
          </div>

          <div className="bg-white rounded-3xl shadow-xl p-6">
            <h4 className="text-xl font-bold mb-3">Digital Payments</h4>
            <p className="text-gray-600">
              UPI and wallet support for quick payments.
            </p>
          </div>

          <div className="bg-white rounded-3xl shadow-xl p-6">
            <h4 className="text-xl font-bold mb-3">Hindi Support</h4>
            <p className="text-gray-600">
              Full Hindi-first experience for Bihar users.
            </p>
          </div>
        </div>
      </section>

      {{/* Customer Reviews */}
      <section className="max-w-6xl mx-auto px-4 py-10">
        <h3 className="text-3xl font-bold mb-6">Customer Reviews</h3>

        <div className="grid md:grid-cols-3 gap-6">
          {customerReviews.map((review) => (
            <div
              key={review.name}
              className="bg-white rounded-3xl shadow-xl p-6"
            >
              <div className="mb-4">
                <h4 className="text-xl font-bold">{review.name}</h4>
                <p className="text-gray-500">{review.city}</p>
              </div>

              <p className="text-gray-700">“{review.review}”</p>

              <div className="mt-4 text-yellow-500 text-lg">★★★★★</div>
            </div>
          ))}
        </div>
      </section>

      {/* Technical Architecture */}}
      <section className="max-w-6xl mx-auto px-4 py-10">
        <div className="bg-gray-900 text-white rounded-3xl p-8 shadow-2xl">
          <h3 className="text-3xl font-bold mb-6">
            Technical Stack
          </h3>

          <div className="grid md:grid-cols-4 gap-5">
            <div className="bg-white/10 rounded-2xl p-5">
              <h4 className="font-bold text-xl mb-2">Frontend</h4>
              <p>React + Tailwind CSS</p>
            </div>

            <div className="bg-white/10 rounded-2xl p-5">
              <h4 className="font-bold text-xl mb-2">Backend</h4>
              <p>Firebase / Node.js API</p>
            </div>

            <div className="bg-white/10 rounded-2xl p-5">
              <h4 className="font-bold text-xl mb-2">Authentication</h4>
              <p>Phone OTP + Aadhaar Verification</p>
            </div>

            <div className="bg-white/10 rounded-2xl p-5">
              <h4 className="font-bold text-xl mb-2">Payments</h4>
              <p>Razorpay + UPI Integration</p>
            </div>
          </div>
        </div>
      </section>

      {/* Admin Dashboard Preview */}}
      <section className="max-w-6xl mx-auto px-4 py-10">
        <h3 className="text-3xl font-bold mb-6">
          Admin Dashboard Preview
        </h3>

        <div className="bg-white rounded-3xl shadow-2xl p-8 overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b">
                <th className="py-3">Worker</th>
                <th className="py-3">Service</th>
                <th className="py-3">City</th>
                <th className="py-3">Status</th>
                <th className="py-3">Leads</th>
              </tr>
            </thead>

            <tbody>
              <tr className="border-b">
                <td className="py-4">Rakesh Kumar</td>
                <td>Electrician</td>
                <td>Patna</td>
                <td>
                  <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">
                    Verified
                  </span>
                </td>
                <td>24</td>
              </tr>

              <tr className="border-b">
                <td className="py-4">Amit Singh</td>
                <td>Plumber</td>
                <td>Muzaffarpur</td>
                <td>
                  <span className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full text-sm">
                    Pending
                  </span>
                </td>
                <td>11</td>
              </tr>

              <tr>
                <td className="py-4">Sonu Raj</td>
                <td>AC Repair</td>
                <td>Gaya</td>
                <td>
                  <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">
                    Verified
                  </span>
                </td>
                <td>32</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Footer */}}
      {{/* Backend System Architecture */}
      <section className="max-w-6xl mx-auto px-4 py-10">
        <h3 className="text-3xl font-bold mb-6">
          Backend Production Modules
        </h3>

        <div className="grid md:grid-cols-4 gap-6">
          {backendModules.map((module) => (
            <div
              key={module.title}
              className="bg-white rounded-3xl shadow-xl p-6"
            >
              <h4 className="text-xl font-bold mb-3">{module.title}</h4>
              <p className="text-gray-600">{module.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Database Models */}
      <section className="max-w-6xl mx-auto px-4 py-10">
        <div className="bg-white rounded-3xl shadow-2xl p-8">
          <h3 className="text-3xl font-bold mb-6">
            Database Architecture
          </h3>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {databaseModels.map((model) => (
              <div
                key={model}
                className="bg-gray-100 rounded-2xl p-4 text-center font-semibold"
              >
                {model}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Referral & Growth System */}
      <section className="max-w-6xl mx-auto px-4 py-10">
        <div className="bg-gradient-to-r from-blue-700 to-indigo-700 text-white rounded-3xl p-8 shadow-2xl">
          <h3 className="text-3xl font-bold mb-6">
            Growth & Referral Engine
          </h3>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white/10 rounded-2xl p-5">
              <h4 className="text-xl font-bold mb-3">Customer Referrals</h4>
              <p>
                Reward customers for inviting family and neighbors.
              </p>
            </div>

            <div className="bg-white/10 rounded-2xl p-5">
              <h4 className="text-xl font-bold mb-3">Worker Incentives</h4>
              <p>
                Bonus system for high ratings and successful bookings.
              </p>
            </div>

            <div className="bg-white/10 rounded-2xl p-5">
              <h4 className="text-xl font-bold mb-3">Local Partnerships</h4>
              <p>
                Tie-ups with hardware shops and local service centers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Deployment Pipeline */}
      <section className="max-w-6xl mx-auto px-4 py-10">
        <h3 className="text-3xl font-bold mb-6">
          Deployment & Scaling Pipeline
        </h3>

        <div className="grid md:grid-cols-4 gap-5">
          <div className="bg-white rounded-3xl shadow-xl p-6">
            <h4 className="font-bold text-xl mb-2">Frontend Hosting</h4>
            <p className="text-gray-600">Vercel Deployment</p>
          </div>

          <div className="bg-white rounded-3xl shadow-xl p-6">
            <h4 className="font-bold text-xl mb-2">Backend Hosting</h4>
            <p className="text-gray-600">Firebase + Cloud Functions</p>
          </div>

          <div className="bg-white rounded-3xl shadow-xl p-6">
            <h4 className="font-bold text-xl mb-2">Android Release</h4>
            <p className="text-gray-600">Play Store APK Deployment</p>
          </div>

          <div className="bg-white rounded-3xl shadow-xl p-6">
            <h4 className="font-bold text-xl mb-2">Analytics</h4>
            <p className="text-gray-600">Booking & Revenue Dashboard</p>
          </div>
        </div>
      </section>

      {/* Startup Expansion Roadmap */}
      <section className="max-w-6xl mx-auto px-4 py-10">
        <h3 className="text-3xl font-bold mb-8 text-center">
          Startup Expansion Roadmap
        </h3>

        <div className="grid md:grid-cols-3 gap-6">
          {roadmap.map((item) => (
            <div
              key={item.phase}
              className="bg-white rounded-3xl shadow-2xl p-6"
            >
              <div className="text-blue-700 font-bold text-lg mb-2">
                {item.phase}
              </div>

              <h4 className="text-2xl font-bold mb-4">{item.title}</h4>

              <ul className="space-y-2 text-gray-600 list-disc list-inside">
                {item.items.map((sub) => (
                  <li key={sub}>{sub}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Final CTA */}}
      <section className="max-w-6xl mx-auto px-4 py-14">
        <div className="bg-blue-700 text-white rounded-3xl shadow-2xl p-10 text-center">
          <h3 className="text-4xl font-bold mb-5">
            Bihar's Trusted Local Service Network
          </h3>

          <p className="text-lg opacity-90 mb-8 max-w-3xl mx-auto">
            Bihar Sewa is building a trusted ecosystem for workers,
            households, and local businesses through verified services,
            digital booking, and Hindi-first technology.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-white text-blue-700 px-8 py-4 rounded-2xl font-bold shadow-xl hover:scale-105 transition">
              Launch Android App
            </button>

            <button className="border border-white px-8 py-4 rounded-2xl font-bold hover:bg-white hover:text-blue-700 transition">
              Partner With Us
            </button>
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 text-white mt-10">
        <div className="max-w-6xl mx-auto px-4 py-8 text-center">
          <h4 className="text-2xl font-bold mb-2">Bihar Sewa</h4>
          <p className="text-gray-400">
            Building Bihar's Trusted Local Services Network.
          </p>
        </div>
      </footer>
    </div>
  );
}
