import { useState } from "react";
import { useRouter } from "next/router";

export default function Form() {
  const [showForm, setShowForm] = useState(false);
  const [prebuilt, setPrebuilt] = useState(null);
  const [persona, setPersona] = useState({
    persona_name: "",
    sex: "",
    traits: "",
    tone: "",
    purpose: "",
    response_type: "",
    backstory: "",
  });

  const router = useRouter();

  const handlePrebuiltSelection = (type) => {
    if (type === "hero") {
      setPersona({
        persona_name: "The Guardian",
        sex: "Male",
        traits: "Brave, Kind",
        tone: "Motivational",
        purpose: "To protect and inspire",
        response_type: "Detailed",
        backstory: "A noble warrior trained to fight for justice.",
      });
    } else {
      setPersona({
        persona_name: "The Strategist",
        sex: "Female",
        traits: "Intelligent, Cunning",
        tone: "Calm and Analytical",
        purpose: "To solve complex problems",
        response_type: "Concise",
        backstory: "A former spy with unmatched strategic skills.",
      });
    }
    setPrebuilt(type);
    setShowForm(false);
  };

  const handleSubmit = async () => {
    await fetch("http://localhost:5000/create-persona", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(persona),
    });
    router.push("/home");
  };

  return (
    <div className="min-h-screen bg-base p-6 flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-4">Create Your Persona</h1>
      <div className="flex gap-4">
        <button
          onClick={() => {
            setShowForm(true);
            setPrebuilt(null);
          }}
          className="bg-accent px-4 py-2 rounded-xl font-semibold hover:bg-black hover:text-white transition-all"
        >
          Custom Persona
        </button>
        <button
          onClick={() => {
            setShowForm(false);
            setPrebuilt(null);
          }}
          className="bg-accent px-4 py-2 rounded-xl font-semibold hover:bg-black hover:text-white transition-all"
        >
          Pre-built Personas
        </button>
      </div>

      {prebuilt === null && !showForm && (
        <div className="flex gap-6 mt-4">
          <button
            onClick={() => handlePrebuiltSelection("hero")}
            className="w-40 h-40 bg-accent flex items-center justify-center text-lg font-semibold rounded-lg hover:bg-black hover:text-white"
          >
            The Guardian
          </button>
          <button
            onClick={() => handlePrebuiltSelection("strategist")}
            className="w-40 h-40 bg-accent flex items-center justify-center text-lg font-semibold rounded-lg hover:bg-black hover:text-white"
          >
            The Strategist
          </button>
        </div>
      )}

      {showForm && (
        <div className="mt-6 bg-white p-6 rounded-lg shadow-lg w-96">
          <input
            className="w-full mb-2 p-2 border border-gray-300 rounded-md"
            type="text"
            placeholder="Persona Name"
            onChange={(e) => setPersona({ ...persona, persona_name: e.target.value })}
          />
          <input
            className="w-full mb-2 p-2 border border-gray-300 rounded-md"
            type="text"
            placeholder="Sex"
            onChange={(e) => setPersona({ ...persona, sex: e.target.value })}
          />
          <input
            className="w-full mb-2 p-2 border border-gray-300 rounded-md"
            type="text"
            placeholder="Traits"
            onChange={(e) => setPersona({ ...persona, traits: e.target.value })}
          />
          <input
            className="w-full mb-2 p-2 border border-gray-300 rounded-md"
            type="text"
            placeholder="Tone"
            onChange={(e) => setPersona({ ...persona, tone: e.target.value })}
          />
          <input
            className="w-full mb-2 p-2 border border-gray-300 rounded-md"
            type="text"
            placeholder="Purpose"
            onChange={(e) => setPersona({ ...persona, purpose: e.target.value })}
          />
          <input
            className="w-full mb-2 p-2 border border-gray-300 rounded-md"
            type="text"
            placeholder="Response Type"
            onChange={(e) => setPersona({ ...persona, response_type: e.target.value })}
          />
          <textarea
            className="w-full mb-4 p-2 border border-gray-300 rounded-md"
            placeholder="Backstory"
            onChange={(e) => setPersona({ ...persona, backstory: e.target.value })}
          ></textarea>
        </div>
      )}

      <button
        onClick={handleSubmit}
        className="mt-6 bg-black text-white px-6 py-3 rounded-xl font-semibold hover:bg-gray-800 transition-all"
      >
        Create Persona
      </button>
    </div>
  );
}
