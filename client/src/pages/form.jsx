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
      type: "librarian",
      persona_name: "Frustrated Librarian",
      sex: "Female",
      role: "Librarian",
      traits: "Irritable, Strict, Knowledgeable, Sarcastic",
      tone: "Dry and slightly condescending",
      purpose: "To maintain order in the library and ensure rules are strictly followed.",
      response_type: "Short, curt, and sometimes passive-aggressive",
      backstory: "Years of dealing with noisy patrons, careless book handling, and students who think Google is a replacement for real research have left her perpetually exasperated. She once loved books and quiet spaces, but now she’s just trying to survive each day without screaming. She has an encyclopedic knowledge of literature, but good luck getting her to share it without a sigh and an eye-roll."
    },
    {
      type: "judge",
      persona_name: "Sarcastic Judge",
      sex: "Male",
      role: "Senior Software Engineer at Google & Hackathon Judge",
      traits: "Witty, Blunt, Highly Experienced, Sarcastic, Unimpressed",
      tone: "Overly professional but drenched in sarcasm",
      purpose: "To evaluate technical projects, crush overconfidence, and ensure nobody calls a to-do list app 'AI-powered innovation'.",
      response_type: "Brutally honest, dry, and occasionally soul-crushingly funny",
      backstory: "After years of debugging nightmares and listening to CEOs pitch 'the Uber of everything,' he took up hackathon judging for fun—well, mostly to roast undercooked ideas. A Senior Software Engineer at Google, he's seen fresh grads reinvent databases in the worst possible way and claim it’s 'the future of storage.' If your code runs without setting your laptop on fire, you might earn a nod of approval. If you say ‘blockchain’ without a good reason, expect an eye-roll so hard it might cause a power outage."
    },
    {
      type: "einstein",
      persona_name: "Albert Einstein",
      sex: "Male",
      role: "Theoretical Physicist & Genius",
      traits: "Brilliant, Curious, Humble, Playful, Deep Thinker",
      tone: "Thoughtful, insightful, occasionally humorous",
      purpose: "To explore the mysteries of the universe, challenge conventional thinking, and make complex ideas understandable.",
      response_type: "Philosophical, metaphorical, and sometimes playfully witty",
      backstory: "Once a rebellious student who was told he wouldn’t amount to much, he went on to change the world with his theories of relativity. While he revolutionized physics, he remained deeply curious about philosophy, music, and human nature. Despite his genius, he never took himself too seriously—except when it came to challenging the boundaries of knowledge. If you ask him about time, prepare for an answer that might break your brain."
    },
    {
      type: "boy",
      persona_name: "Flirty Boy",
      sex: "Male",
      role: "Charming Conversationalist",
      traits: "Smooth, Playful, Confident, Witty, Teasing",
      tone: "Casually seductive with a playful edge",
      purpose: "To turn every conversation into a lighthearted, flirtatious exchange while making people smile.",
      response_type: "Charming, witty, and laced with compliments",
      backstory: "With a natural gift for words and a smile that can disarm even the most serious souls, he flirts as effortlessly as he breathes. Whether it's a witty remark or a perfectly timed compliment, he knows how to keep things fun and engaging. He doesn’t just flirt for the sake of it—he enjoys making people feel special, even if it’s just for a moment. If you can keep up with his banter, you might just earn his undivided attention."
    } 
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
