'use client';

import { useState, useEffect } from 'react';
import { firebaseAuth, firebaseDb } from '@/lib/firebaseClient';
import { onAuthStateChanged } from 'firebase/auth';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

const ADMIN_EMAIL = 'eldadthukujr@gmail.com';

export default function AdminPage() {
  const [user, setUser] = useState(null);
  const [prescription, setPrescription] = useState('');
  const [alternatives, setAlternatives] = useState([{ name: '', source: '', use: '', dosage: '' }]);
  const [status, setStatus] = useState('');

  // ✅ Auth check
  useEffect(() => {
    const unsub = onAuthStateChanged(firebaseAuth, (u) => setUser(u));
    return () => unsub();
  }, []);

  // ✅ Restrict non-admins
  if (user && user.email !== ADMIN_EMAIL) {
    return (
      <main className="min-h-screen flex items-center justify-center text-white bg-[#0c0c2e]">
        <h1 className="text-2xl">❌ You are not authorized to access this page.</h1>
      </main>
    );
  }

  const addRow = () =>
    setAlternatives((prev) => [...prev, { name: '', source: '', use: '', dosage: '' }]);

  const updateAlt = (idx, field, value) =>
    setAlternatives((prev) => {
      const cp = [...prev];
      cp[idx][field] = value;
      return cp;
    });

  const removeAlt = (idx) => setAlternatives((prev) => prev.filter((_, i) => i !== idx));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Saving...');

    if (!user) {
      setStatus('Please log in.');
      return;
    }

    if (user.email !== ADMIN_EMAIL) {
      setStatus('❌ You are not authorized to add prescriptions.');
      return;
    }

    try {
      await addDoc(collection(firebaseDb, 'prescriptions'), {
        prescription,
        prescription_lc: prescription.toLowerCase(),
        alternatives,
        createdAt: serverTimestamp(),
        addedBy: user.uid,
      });

      setStatus('✅ Saved! Redirecting...');
      window.location.href = `/search?q=${encodeURIComponent(prescription)}`;
    } catch (err) {
      console.error(err);
      setStatus(`Error: ${err.message}`);
    }
  };

  return (
    <main className="min-h-screen bg-[#0c0c2e] text-white px-6 py-10">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-purple-300">Admin — Add Prescription</h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          <input
            type="text"
            placeholder="Prescription (e.g., modafinil)"
            value={prescription}
            onChange={(e) => setPrescription(e.target.value)}
            required
            className="w-full p-3 rounded-lg border border-purple-500 bg-[#1f1f3b] text-white focus:outline-none focus:ring-2 focus:ring-purple-600"
          />

          <h3 className="text-xl font-semibold text-purple-400">Alternatives</h3>
          {alternatives.map((alt, i) => (
            <div
              key={i}
              className="grid grid-cols-1 sm:grid-cols-5 gap-4 bg-[#1f1f3b] p-4 rounded-lg border border-purple-600"
            >
              <input
                placeholder="Name"
                value={alt.name}
                onChange={(e) => updateAlt(i, 'name', e.target.value)}
                required
                className="p-2 rounded bg-[#2a2a4d] text-white"
              />
              <input
                placeholder="Source"
                value={alt.source}
                onChange={(e) => updateAlt(i, 'source', e.target.value)}
                required
                className="p-2 rounded bg-[#2a2a4d] text-white"
              />
              <input
                placeholder="Use"
                value={alt.use}
                onChange={(e) => updateAlt(i, 'use', e.target.value)}
                required
                className="p-2 rounded bg-[#2a2a4d] text-white"
              />
              <input
                placeholder="Dosage"
                value={alt.dosage}
                onChange={(e) => updateAlt(i, 'dosage', e.target.value)}
                required
                className="p-2 rounded bg-[#2a2a4d] text-white"
              />
              <button
                type="button"
                onClick={() => removeAlt(i)}
                className="text-red-400 hover:text-red-300"
              >
                ✕
              </button>
            </div>
          ))}

          <div className="flex gap-4">
            <button
              type="button"
              onClick={addRow}
              className="px-4 py-2 bg-purple-600 rounded hover:bg-purple-700 transition"
            >
              ➕ Add Alternative
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-green-600 rounded hover:bg-green-700 transition"
            >
              ✅ Save & Go to Search
            </button>
          </div>

          {status && <p className="text-sm text-gray-400 mt-2">{status}</p>}
        </form>
      </div>
    </main>
  );
}
