import { useState } from "react";
import { useRouter } from "next/router";
// import sendDataToFirebase from "../components/firebase/firebase";

export default function Form() {
  const [showForm, setShowForm] = useState(false);
  const [selectedPersona, setSelectedPersona] = useState(null);
  const [errors, setErrors] = useState({});
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

  // Define pre-built personas as an array of objects
  const prebuiltPersonas = [
    {
      type: "guardian",
      persona_name: "The Guardian",
      sex: "Male",
      traits: "Brave, Kind",
      tone: "Motivational",
      purpose: "To protect and inspire",
      response_type: "Detailed",
      backstory: "A noble warrior trained to fight for justice.",
    },
    {
      type: "strategist",
      persona_name: "The Strategist",
      sex: "Female",
      traits: "Intelligent, Cunning",
      tone: "Calm and Analytical",
      purpose: "To solve complex problems",
      response_type: "Concise",
      backstory: "A former spy with unmatched strategic skills.",
    },
    
  ];

  const handlePrebuiltSelection = (type) => {
    const selected = prebuiltPersonas.find((p) => p.type === type);
    if (selected) {
      setPersona(selected);
      setSelectedPersona(type);
      setShowForm(false);
      setErrors({});
    }
  };

  const validateForm = () => {
    let newErrors = {};
    Object.keys(persona).forEach((key) => {
      if (!persona[key]) newErrors[key] = "This field is required.";
    });
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async () => {
    if (showForm && !validateForm()) return;

    // await sendDataToFirebase(persona,identity)
    
    // router.push("/home");

    router.push({
      pathname: '/home',
      query: { persona: JSON.stringify(persona) },
    });
  };

  return (
    <div className="min-h-screen bg-[#F5E7DE] p-6 flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-6 text-black">Create Your Persona</h1>

      <div className="flex gap-4">
        <button
          onClick={() => {
            setShowForm(true);
            setSelectedPersona(null);
            setPersona({
              persona_name: "",
              sex: "",
              traits: "",
              tone: "",
              purpose: "",
              response_type: "",
              backstory: "",
            });
            setErrors({});
          }}
          className={`px-4 py-2 rounded-xl font-semibold transition-all ${
            showForm ? "bg-black text-white" : "bg-[#F2BFA4] hover:bg-black hover:text-white"
          }`}
        >
          Custom Persona
        </button>
        <button
          onClick={() => {
            setShowForm(false);
            setSelectedPersona(null);
          }}
          className={`px-4 py-2 rounded-xl font-semibold transition-all ${
            !showForm && selectedPersona === null ? "bg-black text-white" : "bg-[#F2BFA4] hover:bg-black hover:text-white"
          }`}
        >
          Pre-built Personas
        </button>
      </div>

      {!showForm && (
        <div className="flex gap-6 mt-4">
          {prebuiltPersonas.map((p) => (
            <button
              key={p.type}
              onClick={() => handlePrebuiltSelection(p.type)}
              className={`w-40 h-40 flex items-center justify-center text-lg font-semibold rounded-lg transition-all ${
                selectedPersona === p.type ? "bg-black text-white" : "bg-[#F2BFA4] hover:bg-black hover:text-white"
              }`}
            >
              {p.persona_name}
            </button>
          ))}
        </div>
      )}

      {selectedPersona && (
        <div className="mt-4 p-4 bg-white rounded-lg shadow-lg w-96">
          <h2 className="text-xl font-semibold text-black mb-2">{persona.persona_name}</h2>
          <p className="text-black"><strong>Sex:</strong> {persona.sex}</p>
          <p className="text-black"><strong>Traits:</strong> {persona.traits}</p>
          <p className="text-black"><strong>Tone:</strong> {persona.tone}</p>
          <p className="text-black"><strong>Purpose:</strong> {persona.purpose}</p>
          <p className="text-black"><strong>Response Type:</strong> {persona.response_type}</p>
          <p className="text-black"><strong>Backstory:</strong> {persona.backstory}</p>
        </div>
      )}

      {showForm && (
        <div className="mt-6 bg-white p-6 rounded-lg shadow-lg w-96">
          {Object.keys(persona).map((key) => (
            <div key={key} className="mb-2">
              <input
                className={`w-full p-2 border rounded-md ${
                  errors[key] ? "border-red-500" : "border-gray-300"
                }`}
                type="text"
                placeholder={key.replace("_", " ").toUpperCase()}
                value={persona[key]}
                onChange={(e) => setPersona({ ...persona, [key]: e.target.value })}
              />
              {errors[key] && <p className="text-red-500 text-sm">{errors[key]}</p>}
            </div>
          ))}
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
