'use client';
import { useState } from 'react';

export default function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState(null);

  const handle = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const submit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const json = await res.json();
      if (res.ok) {
        setStatus('success');
        setForm({ name: '', email: '', message: '' });
      } else {
        setStatus('error');
        console.error(json);
      }
    } catch (err) {
      setStatus('error');
      console.error(err);
    }
  };

  return (
    <form onSubmit={submit} className="space-y-3 bg-white p-4 rounded shadow">
      <input name="name" value={form.name} onChange={handle} required placeholder="Name" className="w-full border p-2 rounded" />
      <input name="email" value={form.email} onChange={handle} required type="email" placeholder="Email" className="w-full border p-2 rounded" />
      <textarea name="message" value={form.message} onChange={handle} required rows="4" placeholder="Message" className="w-full border p-2 rounded" />
      <button type="submit" className="w-full bg-[#78350f] text-white px-4 py-2 rounded">{status === 'loading' ? 'Sending...' : 'Send Message'}</button>
      {status === 'success' && <p className="text-green-600 text-sm">Message sent — we will contact you soon.</p>}
      {status === 'error' && <p className="text-red-600 text-sm">Something went wrong. Try again later.</p>}
    </form>
  );
}