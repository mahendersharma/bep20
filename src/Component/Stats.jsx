import React from 'react'
import { FaClock, FaLock } from "react-icons/fa";
import { BsBank } from "react-icons/bs";

export function Stats() {
  const stats = [
    { value: "99.9%", label: "Success Rate", color: "text-yellow-400" },
    { value: "2.3s", label: "Avg Speed", color: "text-green-400" },
    { value: "50M+", label: "Reports Generated", color: "text-blue-400" },
  ];

  const secondaryStats = [
    { icon: <BsBank />, label: "Bank-Grade Security", color: "text-yellow-400" },
    { icon: <FaClock />, label: "24/7 Real-Time Support", color: "text-green-400" },
    { icon: <FaLock />, label: "Privacy Protected", color: "text-blue-400" }
  ]

  return (
    <section className="bg-black py-12">
      {/* Top Stats */}
      <div className="max-w-5xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-3 gap-4">
        {stats.map((s) => (
          <div
            key={s.label}
            className="bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 rounded-2xl p-6 text-center"
          >
            <div className={`text-2xl font-bold ${s.color}`}>{s.value}</div>
            <div className="text-gray-400 text-sm mt-1">{s.label}</div>
          </div>
        ))}
      </div>

      {/* Secondary Stats (Improved UI) */}
      <div className="max-w-5xl mx-auto px-4 mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4">
        {secondaryStats.map((s) => (
          <div
            key={s.label}
            className="flex items-center justify-center gap-3 bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 rounded-full px-5 py-3 text-sm text-gray-300 hover:border-yellow-400/40 hover:shadow-[0_0_20px_rgba(250,204,21,0.15)] transition"
          >
            <span className={`text-lg ${s.color}`}>
              {s.icon}
            </span>
            <span>{s.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
