import React from 'react'

export function Features() {
  return (
    <section className="bg-gradient-to-b from-black to-slate-900 py-20">
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
        
        {/* Left */}
        <div className="space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Enterprise-Grade Security
          </h2>
          <p className="text-gray-400">
            Protect your digital assets with military-grade encryption and advanced threat detection systems.
          </p>

          <div className="space-y-4">
            <FeatureItem title="Multi-Layer Protection" desc="Advanced security protocols with real-time monitoring and instant threat response." />
            <FeatureItem title="Privacy First" desc="Zero-knowledge architecture ensures your data remains completely private and secure." />
            <FeatureItem title="24/7 Monitoring" desc="Continuous surveillance with instant alerts for any suspicious activities." />
          </div>
        </div>

        {/* Right */}
        <div className="bg-slate-800/40 border border-slate-700 rounded-2xl p-6 space-y-3">
          <StatRow label="Total Assets Secured" value="2.3B+" />
          <StatRow label="Active Users" value="150K+" />
          <StatRow label="Threats Blocked" value="2.1M+" />
        </div>
      </div>
    </section>
  );
}

function FeatureItem({ title, desc }) {
  return (
    <div className="flex gap-4">
      <div className="w-10 h-10 rounded-xl bg-yellow-400/10 text-yellow-400 flex items-center justify-center">
        ✓
      </div>
      <div>
        <h4 className="text-white font-semibold">{title}</h4>
        <p className="text-gray-400 text-sm">{desc}</p>
      </div>
    </div>
  );
}

function StatRow({ label, value }) {
  return (
    <div className="flex items-center justify-between bg-slate-900/60 rounded-xl px-4 py-3 text-white">
      <span className="text-gray-300">{label}</span>
      <span className="font-semibold">{value}</span>
    </div>
  );
}
