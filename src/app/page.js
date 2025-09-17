"use client";
import React, { useState } from "react";

import Image from "next/image";
import Header from './components/Header';
import Products from "@/components/Products";

export default function Home() {
  const [sending, setSending] = useState(false);
const [status, setStatus] = useState(null);

async function handleSubmit(e) {
  e.preventDefault();
  setStatus(null);
  setSending(true);

  const form = e.currentTarget;
  const fd = new FormData(form);

  const products = fd.getAll("products");
  const payload = Object.fromEntries(fd.entries());
  payload.products = products;

  try {
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    const data = await res.json(); // ✅ Parse JSON response

    if (!res.ok) throw new Error(data.error || "Request failed");

    setStatus("success");
    form.reset();
  } catch (err) {
    console.error("❌ Request failed:", err);
    setStatus("error");
  } finally {
    setSending(false);
  }
}
  return (
    <main className="min-h-screen bg-white text-[#422006] font-sans scroll-smooth">
      <Header />
      <div className="pt-20">

        {/* Hero Section */}
        <section id="hero" className="relative py-20 overflow-hidden">
  {/* Background Image */}
  <div className="absolute inset-0 z-0 animate-zoomSlow">
    <Image
  src="/images/hero-cow-v2.jpg"
  alt="Hero Cow"
  fill
  className="object-cover object-right sm:object-center scale-180 sm:scale-100"
  priority
/>
  </div>

  {/* Dark Overlay */}
  <div className="absolute inset-0 bg-black/50 z-10"></div>

  {/* Hero Content */}
  <div className="relative z-20 max-w-7xl mx-auto px-6 text-center text-white">
    <h1 className="text-5xl md:text-7xl font-extrabold tracking-wide drop-shadow-lg font-serif">
      Pure & Organic Cow Dung Products
    </h1>
    <p className="mt-4 text-lg md:text-2xl font-medium max-w-3xl mx-auto">
      Sourced from our farms in India — trusted by customers worldwide.
    </p>
    <a
      href="#contact"
      className="mt-8 inline-block bg-gradient-to-r from-green-700 to-green-500 text-white px-8 py-4 rounded-xl shadow-xl hover:from-green-800 hover:to-green-600 transition-transform transform hover:scale-105 font-semibold"
    >
      Get a Quote
    </a>
  </div>
</section>

{/* Contact & Request Information Box */}
<section className="py-16 bg-white">
  <div className="max-w-7xl mx-auto px-6">
    <div className="bg-green-50 rounded-lg shadow-lg p-8 grid md:grid-cols-2 gap-12">
      
      {/* Left Column - SEO Text */}
      <div>
        <h2 className="text-3xl font-bold text-green-900 mb-4">Get in Touch</h2>
        <p className="text-gray-700 mb-6">
          Interested in our premium cow dung products? Fill out this form and we&apos;ll contact you with more
          information on pricing, shipping, and product specifications.
        </p>

        <ul className="space-y-4 text-gray-700">
          <li>
            <span className="block font-semibold text-green-800">Quality Guaranteed</span>
            100% organic cow dung products from ethical sources
          </li>
          <li>
            <span className="block font-semibold text-green-800">Bulk Discounts</span>
            Special pricing for wholesale and large orders
          </li>
          <li>
            <span className="block font-semibold text-green-800">Global Shipping</span>
            Reliable delivery to UAE, Qatar, Kenya, UK, Nepal, Middle East and USA markets
          </li>
        </ul>
      </div>

      {/* Right Column - Request Information Form */}
<div>
  <h3 className="text-2xl font-bold text-green-900 mb-4">Request Information</h3>
  <form className="space-y-4" onSubmit={handleSubmit}>
  {/* Honeypot (hidden) */}
  <input type="text" name="company" className="hidden" tabIndex={-1} autoComplete="off" />

  <div>
    <input
      type="text"
      name="fullName"
      placeholder="Full Name"
      required
      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-green-500"
    />
  </div>

  {/* Email + Phone in same row */}
  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
    <input
      type="email"
      name="email"
      placeholder="Email"
      required
      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-green-500"
    />
    <input
      type="tel"
      name="phone"
      placeholder="Phone Number"
      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-green-500"
    />
  </div>

  <div>
    <input
      type="text"
      name="country"
      placeholder="Country"
      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-green-500"
    />
  </div>

  {/* Product Selection - Checkboxes in Row */}
  <div>
    <label className="block text-sm font-medium text-gray-700 mb-2">
      Select Product(s)
    </label>
    <div className="flex flex-wrap gap-6">
      <label className="flex items-center space-x-2">
        <input type="checkbox" name="products" value="Cow Dung Cake" className="text-green-600" />
        <span>Cow Dung Cake</span>
      </label>
      <label className="flex items-center space-x-2">
        <input type="checkbox" name="products" value="Cow Dung Powder" className="text-green-600" />
        <span>Cow Dung Powder</span>
      </label>
      <label className="flex items-center space-x-2">
        <input type="checkbox" name="products" value="Cow Dung Compost" className="text-green-600" />
        <span>Cow Dung Compost</span>
      </label>
    </div>
  </div>

  <div>
    <textarea
      name="message"
      placeholder="Message"
      rows={4}
      required
      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-green-500"
    />
  </div>

  {/* Submit + status */}
  <button
    type="submit"
    disabled={sending}
    className={`w-full bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition ${sending ? "opacity-60 cursor-not-allowed" : ""}`}
  >
    {sending ? "Sending..." : "Submit"}
  </button>

  {status === "success" && (
    <p className="text-green-700 text-sm pt-2">Thanks! Your message has been sent.</p>
  )}
  {status === "error" && (
    <p className="text-red-600 text-sm pt-2">Sorry, something went wrong. Please try again.</p>
  )}
</form>
</div>

    </div>
  </div>
</section>

<Products />

{/* Export & Shipping */}
<section id="export" className="py-20 bg-amber-50 px-6 max-w-7xl mx-auto text-center">
  <h2 className="text-4xl font-extrabold text-[#2c4a0f] mb-12">Export & Shipping</h2>
  <p className="max-w-3xl mx-auto text-gray-700 text-lg mb-12">
    We currently export to <strong>UAE, Qatar, Kenya, UK, Nepal</strong> and more.
    Our dedicated team manages all export formalities and delivers to your preferred port with complete documentation and logistics support.
  </p>

  <div className="grid gap-8 md:grid-cols-3 max-w-5xl mx-auto">
    <div className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition">
      <div className="text-6xl mb-4">🌍</div>
      <h3 className="text-2xl font-semibold mb-3 text-[#2c4a0f]">Global Reach</h3>
      <p className="text-gray-600 text-lg">
        Supplying premium cow dung products reliably across multiple countries worldwide.
      </p>
    </div>

    <div className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition">
      <div className="text-6xl mb-4">📦</div>
      <h3 className="text-2xl font-semibold mb-3 text-[#2c4a0f]">Hassle-Free Logistics</h3>
      <p className="text-gray-600 text-lg">
        End-to-end logistics management ensuring timely delivery and smooth customs clearance.
      </p>
    </div>

    <div className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition">
      <div className="text-6xl mb-4">📜</div>
      <h3 className="text-2xl font-semibold mb-3 text-[#2c4a0f]">Complete Documentation</h3>
      <p className="text-gray-600 text-lg">
        Transparent handling of all export and shipping paperwork.
      </p>
    </div>
  </div>
</section>

{/* Why Choose Us */}
        <section id="why" className="py-20 px-6 bg-white text-center max-w-7xl mx-auto">
  <h2 className="text-4xl font-extrabold text-[#2c4a0f] mb-12">Why Choose Us</h2>
  <div className="grid gap-10 md:grid-cols-3 max-w-6xl mx-auto">
    <div className="p-8 rounded-3xl border border-green-200 shadow-lg hover:shadow-2xl transition">
      <div className="text-7xl mb-5">🌿</div>
      <h3 className="text-2xl font-semibold mb-4 text-[#2c4a0f]">100% Organic</h3>
      <p className="text-gray-600 text-lg">
        Sourced from healthy cows and sun-dried naturally. No chemicals or additives.
      </p>
    </div>

    <div className="p-8 rounded-3xl border border-green-200 shadow-lg hover:shadow-2xl transition">
      <div className="text-7xl mb-5">🌏</div>
      <h3 className="text-2xl font-semibold mb-4 text-[#2c4a0f]">Global Export</h3>
      <p className="text-gray-600 text-lg">
        Trusted by buyers in over 10+ countries for reliability and quality.
      </p>
    </div>

    <div className="p-8 rounded-3xl border border-green-200 shadow-lg hover:shadow-2xl transition">
      <div className="text-7xl mb-5">🔥</div>
      <h3 className="text-2xl font-semibold mb-4 text-[#2c4a0f]">Eco-Friendly Fuel</h3>
      <p className="text-gray-600 text-lg">
        Clean alternative to firewood or coal, used in homes, temples, and farms.
      </p>
    </div>
  </div>
</section>

{/* Benefits Section */}
<section id="benefits" className="py-20 px-6 bg-amber-50 text-center max-w-7xl mx-auto">
  <h2 className="text-4xl font-extrabold text-[#2c4a0f] mb-12">Key Benefits</h2>
  <div className="grid gap-10 md:grid-cols-3 max-w-6xl mx-auto">
    <div className="p-8 rounded-3xl border border-green-200 bg-white shadow-lg hover:shadow-2xl transition">
      <div className="text-7xl mb-5">🌱</div>
      <h3 className="text-2xl font-semibold mb-4 text-[#2c4a0f]">Soil Enhancement</h3>
      <p className="text-gray-600 text-lg">
        Boosts soil fertility and microbial activity for healthy, sustainable farming.
      </p>
    </div>

    <div className="p-8 rounded-3xl border border-green-200 bg-white shadow-lg hover:shadow-2xl transition">
      <div className="text-7xl mb-5">♻️</div>
      <h3 className="text-2xl font-semibold mb-4 text-[#2c4a0f]">Zero Waste</h3>
      <p className="text-gray-600 text-lg">
        Completely biodegradable, making it an ideal solution for waste-free agriculture.
      </p>
    </div>

    <div className="p-8 rounded-3xl border border-green-200 bg-white shadow-lg hover:shadow-2xl transition">
      <div className="text-7xl mb-5">💰</div>
      <h3 className="text-2xl font-semibold mb-4 text-[#2c4a0f]">Cost-Effective</h3>
      <p className="text-gray-600 text-lg">
        Affordable alternative to chemical fertilizers and synthetic fuels.
      </p>
    </div>
  </div>
</section>

{/* Samples Available */}
<section id="samples" className="py-20 px-6 bg-white text-center max-w-7xl mx-auto">
  <h2 className="text-4xl font-extrabold text-[#2c4a0f] mb-8">Samples Available on Request</h2>
  <p className="text-gray-700 max-w-3xl mx-auto mb-12 text-lg leading-relaxed">
    We understand the importance of trust in international trade. That’s why we offer{' '}
    <strong>free product samples</strong> (shipping charges apply) to serious buyers who want to verify quality before placing bulk orders.
  </p>

  <div className="grid gap-10 md:grid-cols-3 max-w-6xl mx-auto">
    <div className="p-8 bg-amber-50 rounded-3xl shadow-lg hover:shadow-2xl transition cursor-pointer">
      <h3 className="font-semibold text-2xl mb-3 text-[#2c4a0f]">🪵 Cow Dung Cakes</h3>
      <p className="text-gray-600 text-lg">
        Sun-dried, smoke-free, clean, and perfect for rituals or fuel.
      </p>
    </div>

    <div className="p-8 bg-amber-50 rounded-3xl shadow-lg hover:shadow-2xl transition cursor-pointer">
      <h3 className="font-semibold text-2xl mb-3 text-[#2c4a0f]">🌾 Cow Dung Powder</h3>
      <p className="text-gray-600 text-lg">
        Ideal for compost, fertilizers, and soil enrichment.
      </p>
    </div>

    <div className="p-8 bg-amber-50 rounded-3xl shadow-lg hover:shadow-2xl transition cursor-pointer">
      <h3 className="font-semibold text-2xl mb-3 text-[#2c4a0f]">🌱 Composted Manure</h3>
      <p className="text-gray-600 text-lg">
        Fully aged, nutrient-rich, and pest-free for organic farming.
      </p>
    </div>
  </div>

  <p className="mt-12 text-gray-600 text-lg max-w-3xl mx-auto">
    Samples are shipped globally via air/express courier.
  </p>
</section>

        {/* Gallery Section */}
        {/* About Us */}
<section id="about" className="py-20 px-6 max-w-6xl mx-auto">
  <h3 className="text-3xl font-bold text-[#2c4a0f] mb-12 text-center uppercase tracking-wide">
    About Us
  </h3>

  {/* Intro */}
  <div className="bg-green-50 rounded-lg shadow-lg p-8 text-gray-700 leading-relaxed mb-12">
    <p className="mb-6">
      I&apos;m <strong>Avinash Nalubola</strong>, Founder of <strong>Farm Dung Exporter</strong>, 
      a division of <strong>Abhi Groups Pvt. Ltd.</strong>, co-founded with <strong>Prem Kumar Reddy Sandi</strong>. 
      After completing my MSc in Management in the UK, I returned to India with a clear mission: 
      to bring global recognition to one of our most traditional yet undervalued natural resources — 
      organic cow and buffalo dung.
    </p>
    <p className="mb-6">
      Headquartered in Warangal, Telangana (India) and operating internationally from London, United Kingdom (E16 1FH), 
      Farm Dung Exporter specializes in the export of 100% pure, organic cow and buffalo dung for agricultural use, 
      composting, and spiritual practices. 
    </p>
    <p>
      Together, Prem and I are proud to lead a company that stays true to our roots while embracing modern innovation — 
      delivering trusted, eco-friendly products that reconnect the world with India’s natural resources and promote 
      sustainable farming for a better tomorrow.
    </p>
  </div>

  {/* Vision, Mission, Commitment, Certifications */}
  <div className="grid md:grid-cols-2 gap-8">
    {/* Vision */}
    <div className="bg-white border-l-4 border-green-600 rounded-lg shadow-md p-8">
      <h4 className="text-xl font-bold text-[#2c4a0f] mb-4 uppercase">Our Vision</h4>
      <p className="text-gray-700 leading-relaxed">
        To become a global leader in organic and sustainable agricultural products by reconnecting 
        the world with India’s natural resources — fostering a future where traditional farming, 
        environmental responsibility, and modern innovation work hand in hand to create lasting 
        positive impact.
      </p>
    </div>

    {/* Mission */}
    <div className="bg-white border-l-4 border-green-600 rounded-lg shadow-md p-8">
      <h4 className="text-xl font-bold text-[#2c4a0f] mb-4 uppercase">Our Mission</h4>
      <p className="text-gray-700 leading-relaxed">
        To deliver pure, eco-friendly, and reliable organic products to customers across the globe — 
        while upholding the highest standards of quality, supporting rural livelihoods, and promoting 
        sustainable agricultural practices for a better tomorrow.
      </p>
    </div>

    {/* Commitment */}
    <div className="bg-white border-l-4 border-green-600 rounded-lg shadow-md p-8">
      <h4 className="text-xl font-bold text-[#2c4a0f] mb-4 uppercase">Our Commitment</h4>
      <p className="text-gray-700 leading-relaxed">
        We source our products directly from trusted local farmers, ensuring the dung is fresh, 
        chemical-free, and naturally collected.  
        This model supports rural livelihoods and strengthens traditional farming communities.  
        We follow strict hygiene protocols and quality control processes, maintaining 
        international export standards.
      </p>
    </div>

    {/* Certifications */}
    <div className="bg-white border-l-4 border-green-600 rounded-lg shadow-md p-8">
      <h4 className="text-xl font-bold text-[#2c4a0f] mb-4 uppercase">Certifications & Quality</h4>
      <p className="text-gray-700 leading-relaxed">
         Products tested for purity and quality before shipment  
         Compliant with relevant organic and export regulations  
         Transparent supply chain with traceability back to the source  
      </p>
    </div>
  </div>
</section>

        {/* Contact Information */}
        <section
  id="contact"
  className="py-20 px-6 max-w-5xl mx-auto"
>
  <h3 className="text-3xl font-semibold text-[#2c4a0f] mb-2 text-center uppercase tracking-wide">
    Contact Us
  </h3>
  <p className="text-center text-gray-700 max-w-xl mx-auto mb-12 text-lg">
    Interested in our products? Reach out to us for inquiries, quotes, or any questions you might have.
  </p>

  <div className="grid md:grid-cols-2 gap-12">
    {/* Left Side - Form in Box */}
    <div className="bg-green-50 rounded-lg p-6 shadow-md text-gray-700">
  <h4 className="text-xl font-semibold mb-6 text-[#2c4a0f]">Get in Touch</h4>
  <form
  className="space-y-6"
  onSubmit={async (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const data = {
      company: formData.get("company") || "", // if you want company field
      fullName: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      country: formData.get("country") || "", // if you add country later
      products: [], // can be updated if you add product checkboxes
      message: formData.get("message"),
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        alert("✅ Message sent successfully!");
        e.currentTarget.reset();
      } else {
        alert("❌ Failed to send message.");
      }
    } catch (err) {
      console.error(err);
      alert("⚠️ Something went wrong.");
    }
  }}
>
        <div>
          <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            placeholder="Your full name"
            required
            className="w-full border border-gray-300 rounded-md px-4 py-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#3a7a1e] transition"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="you@example.com"
              required
              className="w-full border border-gray-300 rounded-md px-4 py-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#3a7a1e] transition"
            />
          </div>
          <div>
            <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">
              Phone
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              placeholder="+91 98765 43210"
              className="w-full border border-gray-300 rounded-md px-4 py-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#3a7a1e] transition"
            />
          </div>
        </div>

        <div>
          <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            placeholder="Write your message here..."
            required
            className="w-full border border-gray-300 rounded-md px-4 py-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#3a7a1e] transition resize-none"
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full bg-[#3a7a1e] hover:bg-[#255b13] text-white font-semibold py-3 rounded-md transition"
        >
          Send Message
        </button>
      </form>
    </div>

    {/* Right Side - Two Boxes stacked */}
    <div className="flex flex-col gap-8">
      {/* Contact Info Box */}
<div className="bg-green-50 rounded-lg p-6 shadow-md text-gray-700">
  <h4 className="text-xl font-semibold mb-6 text-[#2c4a0f]">Contact Info</h4>
  <ul className="space-y-6">
    <li>
      <strong>Address:</strong><br />
      32-1-67/1, Pavelipula, Hanamkonda,<br />
      Warangal, Telangana, India 506015
    </li>
    <li>
      <strong>Phone:</strong><br />
      <a href="tel:+919876543210" className="text-[#2c4a0f] hover:underline">
        +91 80747 58938 | +44 75875 43911
      </a>
    </li>
    <li>
      <strong>Email:</strong><br />
      <a href="mailto:farmdungexpoter@gmail.com" className="text-[#2c4a0f] hover:underline">
        farmdungexpoter@gmail.com
      </a>
    </li>
  </ul>
</div>

      {/* Business Hours */}
  <div className="bg-green-50 rounded-lg p-6 shadow-md text-gray-700">
    <h4 className="text-xl font-semibold mb-4 text-[#2c4a0f]">Business Hours</h4>
    <ul className="space-y-1">
      <li><strong>Monday - Friday:</strong> 9:00 AM - 6:00 PM</li>
      <li><strong>Saturday:</strong> 10:00 AM - 4:00 PM</li>
      <li><strong>Sunday:</strong> Closed</li>
      <li className="text-sm text-gray-500 mt-2">All times are in Indian Standard Time (IST)</li>
    </ul>
  </div>
    </div>
  </div>
</section>

        {/* Footer */}
        <footer className="bg-[#2c4a0f] text-white">
  <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-12">
    {/* About / Brand + Social */}
    <div>
      <h3 className="text-xl font-bold mb-4">Farm Dung Exporter</h3>
      <p className="text-gray-300 leading-relaxed">
        Delivering pure, organic cow dung products globally with trust, quality, and sustainability at heart.
      </p>
      <div className="mt-6 flex space-x-6">
        {/* Twitter */}
        <a href="https://twitter.com/yourprofile" target="_blank" rel="noopener noreferrer" className="hover:text-green-400 transition" aria-label="Twitter">
          <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24"><path d="M23 3a10.9 10.9 0 01-3.14.86 4.48 4.48 0 001.98-2.48 9.06 9.06 0 01-2.88 1.1A4.52 4.52 0 0016.67 2c-2.5 0-4.52 2.12-4.52 4.74 0 .37.04.73.12 1.07-3.75-.2-7.08-2.04-9.3-4.85a4.7 4.7 0 00-.61 2.39c0 1.64.84 3.09 2.13 3.93a4.48 4.48 0 01-2.05-.57v.06c0 2.3 1.61 4.22 3.74 4.66a4.41 4.41 0 01-2.04.07 4.52 4.52 0 004.22 3.3A9.06 9.06 0 013 19.6a12.9 12.9 0 006.92 2.02c8.3 0 12.84-7.17 12.84-13.39 0-.2 0-.39-.02-.58A9.18 9.18 0 0023 3z"/></svg>
        </a>
        {/* Facebook */}
        <a href="https://facebook.com/yourprofile" target="_blank" rel="noopener noreferrer" className="hover:text-green-400 transition" aria-label="Facebook">
          <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24"><path d="M22 12a10 10 0 10-11.54 9.87v-6.99h-2.9v-2.88h2.9v-2.2c0-2.87 1.7-4.45 4.3-4.45 1.25 0 2.56.23 2.56.23v2.82h-1.44c-1.42 0-1.86.89-1.86 1.8v2.4h3.16l-.51 2.88h-2.65v6.99A10 10 0 0022 12z"/></svg>
        </a>
        {/* Instagram */}
        <a href="https://instagram.com/yourprofile" target="_blank" rel="noopener noreferrer" className="hover:text-green-400 transition" aria-label="Instagram">
          <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24"><path d="M7.75 2h8.5A5.75 5.75 0 0122 7.75v8.5A5.75 5.75 0 0116.25 22h-8.5A5.75 5.75 0 012 16.25v-8.5A5.75 5.75 0 017.75 2zm0 2A3.75 3.75 0 004 7.75v8.5A3.75 3.75 0 007.75 20h8.5a3.75 3.75 0 003.75-3.75v-8.5A3.75 3.75 0 0016.25 4h-8.5zM12 7a5 5 0 110 10 5 5 0 010-10zm0 2a3 3 0 100 6 3 3 0 000-6zm4.5-.75a1.25 1.25 0 112.5 0 1.25 1.25 0 01-2.5 0z"/></svg>
        </a>
        {/* LinkedIn */}
        <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className="hover:text-green-400 transition" aria-label="LinkedIn">
          <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24"><path d="M20.45 20.45h-3.56v-5.4c0-1.29-.03-2.95-1.8-2.95-1.8 0-2.07 1.4-2.07 2.85v5.5h-3.56V9h3.42v1.56h.05c.48-.91 1.66-1.87 3.42-1.87 3.66 0 4.34 2.4 4.34 5.52v6.3zM5.34 7.43a2.07 2.07 0 112.07-2.07 2.06 2.06 0 01-2.07 2.07zm1.78 13.02H3.56V9h3.56zM22.22 0H1.78A1.78 1.78 0 000 1.78v20.44A1.78 1.78 0 001.78 24h20.44A1.78 1.78 0 0024 22.22V1.78A1.78 1.78 0 0022.22 0z"/></svg>
        </a>
      </div>
    </div>

    {/* Quick Links */}
    <div>
      <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
      <ul className="space-y-2 text-gray-300">
        <li><a href="#hero" className="hover:text-green-400 transition">Home</a></li>
        <li><a href="#products" className="hover:text-green-400 transition">Products</a></li>
        <li><a href="#about" className="hover:text-green-400 transition">About Us</a></li>
        <li><a href="#contact" className="hover:text-green-400 transition">Contact</a></li>
        <li><a href="#export" className="hover:text-green-400 transition">Export & Shipping</a></li>
      </ul>
    </div>

    {/* Contact Info */}
    <div>
      <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
      <ul className="space-y-3 text-gray-300">
        <li>
          <strong>Address:</strong><br />
          32-1-67/1, Pavelipula, Hanamkonda,<br />
          Warangal, Telangana, India 506015
        </li>
        <li>
          <strong>Phone:</strong><br />
          <a href="tel:+91 80747 58938 | +44 75875 43911" className="hover:text-green-400 transition">+91 80747 58938 | +44 75875 43911</a>
        </li>
        <li>
          <strong>Email:</strong><br />
          <a href="mailto:farmdungexpoter@gmail.com" className="hover:text-green-400 transition">farmdungexpoter@gmail.com</a>
        </li>
      </ul>
    </div>
  </div>

  {/* Bottom Bar */}
  <div className="border-t border-green-700 mt-12 py-6 text-center text-gray-300 text-sm flex flex-col md:flex-row items-center justify-center gap-4">
    <p>© {new Date().getFullYear()} Pure Farm Dung. All rights reserved.</p>
    
  </div>
</footer>
      </div>
    </main>
  );
}