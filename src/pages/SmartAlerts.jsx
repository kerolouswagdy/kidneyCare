import React, { useState, useEffect } from "react";

// افتراضياً عندنا user من login


export default function SmartAlerts() {
  const [text, setText] = useState("");
  const [patientId, setPatientId] = useState(""); // ID يظهر تلقائي
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
  const savedPatientId =
    localStorage.getItem("patientId") || "demo_patient_001";

  setPatientId(savedPatientId);
}, []);

  const analyze = () => {
    if (!text.trim()) return;

    setLoading(true);

    setTimeout(() => {
      setResult({
        level: "EMERGENCY",
        conditions: "Possible kidney complication",
        recommendation: "راجع الطبيب فورًا للتشخيص والعلاج",
        patient: patientId
      });
      setLoading(false);
    }, 1200);
  };

return (
  <section className="min-h-screen bg-gradient-to-br from-[#eef2ff] via-white to-[#dbeafe] p-6 md:p-10">

    {/* HEADER */}
    <div className="text-center mb-14">
      <h1 className="text-5xl md:text-6xl font-extrabold text-[#274690] tracking-tight">
        Smart Alerts
      </h1>

      <p className="text-gray-500 mt-4 text-lg max-w-2xl mx-auto">
        AI-powered anomaly detection & symptom analysis for real-time patient monitoring
      </p>
    </div>

    {/* MAIN GRID */}
    {/* MAIN CARD (Merged) */}
    <div className="
      bg-white/70 backdrop-blur-xl
      border border-white/40
      shadow-2xl
      p-8 rounded-3xl
      max-w-4xl mx-auto
      space-y-10
      hover:scale-[1.01]
      transition
    ">

      {/* HEADER */}
      <div>
        <h2 className="text-2xl font-bold text-[#274690] mb-2">
          Smart Alerts Dashboard
        </h2>

        <p className="text-gray-600 leading-relaxed">
          Run anomaly detection and NLP symptom analysis to detect abnormal kidney patterns early.
        </p>
      </div>

      {/* SCAN BUTTON */}
      <button className="
        w-full
        bg-gradient-to-r from-[#274690] to-blue-500
        hover:from-[#1e3a8a] hover:to-blue-600
        text-white font-semibold
        px-6 py-3 rounded-2xl
        shadow-lg
        transition
      ">
        Scan for Anomalies
      </button>

      {/* NLP SECTION */}
      <div className="space-y-4">

        <h3 className="text-xl font-bold text-[#274690]">
          NLP Symptom Analysis
        </h3>

        <p className="text-gray-600">
          Enter patient symptoms (Arabic or English) and AI will classify urgency instantly.
        </p>
      {/* PATIENT ID (READ ONLY) */}
              <input
                value={patientId}
                readOnly
                className="
                  w-full p-3 rounded-2xl
                  bg-gray-100
                  border border-gray-200
                  text-gray-600
                  cursor-not-allowed
                  outline-none
                "
              />
        {/* TEXTAREA */}
        <textarea
          placeholder="Example: I feel swelling in my feet and extreme fatigue."
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="
            w-full h-32 p-4 rounded-2xl
            bg-white/80
            border border-gray-200
            focus:ring-4 focus:ring-blue-100
            focus:border-[#274690]
            outline-none
            resize-none
            shadow-sm
          "
        />

       

        {/* BUTTON */}
        <button
          onClick={analyze}
          disabled={loading}
          className="
            w-full
            bg-gradient-to-r from-[#274690] to-blue-500
            hover:from-[#1e3a8a] hover:to-blue-600
            text-white font-semibold
            py-3 rounded-2xl
            shadow-lg
            transition flex items-center justify-center gap-2
          "
        >
          {loading ? (
            <>
              <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
              Analyzing...
            </>
          ) : (
            "Analyze Symptoms"
          )}
        </button>

        {/* RESULT */}
        {result && (
          <div className="
            mt-6
            rounded-3xl
            p-6
            shadow-xl
            border border-blue-100
            bg-gradient-to-br from-white to-blue-50
          ">
            <div className="flex justify-between items-center mb-4">
              <span className="
                bg-red-100 text-red-600
                px-4 py-1 rounded-full
                text-sm font-bold
              ">
                {result.level}
              </span>

              <span className="text-gray-500 text-sm">
                Urgency Level
              </span>
            </div>

            <div className="space-y-3 text-sm">

              <p className="text-gray-700">
                <strong>Patient ID:</strong> {result.patient}
              </p>

              <p className="text-gray-700">
                <strong>Possible Condition:</strong> {result.conditions}
              </p>

              <div className="
                bg-blue-50
                border border-blue-100
                p-4
                rounded-2xl
              ">
                <p className="text-blue-800 font-semibold mb-2">
                  Recommendation:
                </p>

                <p className="text-blue-700">
                  {result.recommendation}
                </p>
              </div>

            </div>
          </div>
        )}

      </div>

    </div>
  </section>
);
  
}