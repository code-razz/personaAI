import { useState } from "react";
import { useRouter } from "next/router";
import Head from "next/head";

export default function PersonaSelection() {
  const [showForm, setShowForm] = useState(false);
  const [selectedPersona, setSelectedPersona] = useState(null);
  const [persona, setPersona] = useState({
    // type:"",
    persona_name: "",
    sex: "",
    traits: "",
    tone: "",
    purpose: "",
    response_type: "",
    backstory: "",
    // avatar:"",
  });

  const router = useRouter();
  const currentYear = new Date().getFullYear();

  const prebuiltPersonas = [
    // { type: "librarian", persona_name: "Frustrated Librarian", avatar: "/avatars/librarian.png" },
    // { type: "judge", persona_name: "Sarcastic Judge", avatar: "/avatars/judge.png" },
    // { type: "einstein", persona_name: "Albert Einstein", avatar: "/avatars/einstein.png" },
    // { type: "coach", persona_name: "Motivational Coach", avatar: "/avatars/coach.png" },
    // { type: "detective", persona_name: "Sherlock Holmes", avatar: "/avatars/detective.png" },
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
    console.log(selected)
    // console.log("thype",type)
    while (!selected) {
      console.log("in loop not selected any persona",selected)
    }
    // console.log("out loop ",selected)
    setPersona(selected);
    // setSelectedPersona(type);
    setShowForm(false);
    // setErrors({});
    router.push({
      pathname: '/home',
      query: { persona: JSON.stringify(selected) },
    });
    // setSelectedPersona(type);
    // setShowForm(false);
  };

  const handleCustomSelection = () => {
    setSelectedPersona("custom");
    setShowForm(true);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPersona((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    // console.log("submit custom",persona)
    e.preventDefault();
    console.log("Custom Persona Created:", persona);
    router.push({
      pathname: '/home',
      query: { persona: JSON.stringify(persona) },
    });
  };

  return (
    <>
      <Head>
        <title>personAI - Select Your Persona</title>
        <meta name="description" content="Choose or create a personalized AI persona." />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <div className="bg-white text-gray-900 min-h-screen flex flex-col font-sans">
        {/* Header */}
        <header className="container mx-auto py-6 px-4 flex justify-between items-center">
          <div className="flex items-center gap-2 -ml-6">
            {/* Logo */}
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#8B5CF6]">
              <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"></path>
              <path d="M19 10v2a7 7 0 0 1-14 0v-2"></path>
              <line x1="12" x2="12" y1="19" y2="22"></line>
            </svg>
            <span className="text-3xl font-bold text-black">personAI</span>
          </div>
          <nav className="flex gap-6">
            <a href="/" className="text-sm text-gray-500 hover:text-[#8B5CF6] transition">Home</a>
          </nav>
        </header>

        <main className="flex-1 flex flex-col items-center overflow-y-auto pb-24 px-6">
          {!showForm ? (
            <>
              <h1 className="text-4xl font-bold mb-8">
                <span className="text-black">Choose Your</span> <span className="text-[#8B5CF6]">Persona</span>
              </h1>

              {/* Persona Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-12">
                {prebuiltPersonas.map((p) => {
                  const words = p.persona_name.split(" ");
                  const firstPart = words.slice(0, -1).join(" ");
                  const lastWord = words[words.length - 1];

                  return (
                    <button
                      key={p.type}
                      onClick={() => handlePrebuiltSelection(p.type)}
                      className="persona-card border-2 border-[#8B5CF6] bg-white w-72 h-96 p-6 rounded-lg flex flex-col items-center transition hover:scale-105"
                    >
                      <div className="w-full h-72 rounded-lg bg-gray-200 flex items-center justify-center">
                        <img src={p.avatar} alt={p.persona_name} className="w-5/6 h-5/6 object-cover rounded-lg" />
                      </div>
                      <p className="mt-4 text-xl font-bold">
                        <span className="text-black">{firstPart}</span> <span className="text-[#8B5CF6]">{lastWord}</span>
                      </p>
                    </button>
                  );
                })}

                {/* Custom Persona Card */}
                <button
                  onClick={handleCustomSelection}
                  className="persona-card border-2 border-[#8B5CF6] bg-white w-72 h-96 p-6 rounded-lg flex flex-col items-center transition hover:scale-105"
                >
                  <div className="w-full h-72 rounded-lg bg-gray-200 flex items-center justify-center">
                    <span className="text-7xl font-bold text-[#8B5CF6]">+</span>
                  </div>
                  <p className="mt-4 text-xl font-bold">
                    <span className="text-black">Custom</span> <span className="text-[#8B5CF6]">Persona</span>
                  </p>
                </button>
              </div>

            </>
          ) : (
            /* Custom Persona Form */
            <form onSubmit={handleSubmit} className="w-full max-w-lg bg-white p-8 rounded-lg shadow-lg border-2 border-[#8B5CF6]">
              <h1 className="text-4xl font-bold mb-8">
                <span className="text-black">Create</span> <span className="text-[#8B5CF6]">Persona</span>
              </h1>
              <div className="space-y-5">
                {[
                  { name: "persona_name", placeholder: "e.g., Friendly AI" },
                  { name: "sex", placeholder: "e.g., Male/Female/Other" },
                  { name: "traits", placeholder: "e.g., Helpful, Witty" },
                  { name: "tone", placeholder: "e.g., Professional, Casual" },
                  { name: "purpose", placeholder: "e.g., AI tutor, Assistant" },
                  { name: "response_type", placeholder: "e.g., Short, Detailed" },
                  { name: "backstory", placeholder: "e.g., AI created in 2030 to help users" },
                ].map(({ name, placeholder }) => (
                  <div key={name}>
                    <label className="block text-gray-700 font-medium">{name.replace("_", " ").toUpperCase()}</label>
                    <input
                      type="text"
                      name={name}
                      value={persona[name]}
                      onChange={handleInputChange}
                      placeholder={placeholder}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8B5CF6]"
                    />
                  </div>
                ))}
              </div>

              <div className="flex justify-between mt-6">
                <button type="button" onClick={() => setShowForm(false)} className="px-6 py-3 border border-gray-500 text-gray-700 rounded-md font-medium hover:bg-gray-100 transition">
                  Back
                </button>
                <button type="submit" className="px-6 py-3 bg-[#8B5CF6] text-white rounded-md font-medium hover:bg-purple-700 transition">
                  Save Persona
                </button>
              </div>
            </form>
          )}
        </main>

        {/* Footer */}
        <footer className="py-4 bg-gray-900 text-white text-center w-full">
          <p className="text-sm">© {currentYear} personAI. All rights reserved.</p>
        </footer>
      </div>
    </>
  );
}