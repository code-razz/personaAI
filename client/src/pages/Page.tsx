import type React from "react"
import Head from "next/head"

const PersonAILanding: React.FC = () => {
  const currentYear = new Date().getFullYear()

  return (
    <>
      <Head>
        <title>personAI - Your Persona-Based AI Voice Assistant</title>
        <meta
          name="description"
          content="A personalized AI voice assistant with a unique persona tailored to your preferences."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <script src="https://cdn.tailwindcss.com"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
            tailwind.config = {
              theme: {
                extend: {
                  colors: {
                    primary: {
                      DEFAULT: '#8b5cf6',
                      foreground: '#ffffff',
                    },
                  }
                }
              }
            }
          `,
          }}
        />
        <style
          dangerouslySetInnerHTML={{
            __html: `
            @layer utilities {
              .animate-pulse {
                animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
              }
              @keyframes pulse {
                0%, 100% {
                  opacity: 1;
                }
                50% {
                  opacity: 0.5;
                }
              }
            }
          `,
          }}
        />
      </Head>

      <div className="bg-white text-gray-900 min-h-screen flex flex-col">
        {/* Header */}
        <header className="container mx-auto py-6 px-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-primary"
            >
              <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"></path>
              <path d="M19 10v2a7 7 0 0 1-14 0v-2"></path>
              <line x1="12" x2="12" y1="19" y2="22"></line>
            </svg>
            <span className="text-xl font-bold">personAI</span>
          </div>
          <nav className="hidden md:flex gap-6">
            <a href="#features" className="text-sm text-gray-500 hover:text-primary transition-colors">
              Features
            </a>
            <a href="#about" className="text-sm text-gray-500 hover:text-primary transition-colors">
              About
            </a>
            <a href="#contact" className="text-sm text-gray-500 hover:text-primary transition-colors">
              Contact
            </a>
          </nav>
          <button className="hidden md:flex px-4 py-2 text-sm border border-gray-300 rounded-md hover:bg-gray-50 transition-colors">
            Get Started
          </button>
        </header>

        <main className="flex-1">
          {/* Hero Section */}
          <section className="py-20 md:py-32 container mx-auto px-4 text-center relative overflow-hidden">
            <div className="absolute inset-0 -z-10">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-purple-300/5 rounded-full blur-3xl transform -translate-y-1/2"></div>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
              Meet <span className="text-primary">personAI</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-500 max-w-2xl mx-auto mb-10">
              Your personal AI voice assistant with a unique persona tailored to your preferences.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-6 py-3 bg-primary text-white rounded-md font-medium flex items-center justify-center gap-2">
                Try personAI
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14"></path>
                  <path d="m12 5 7 7-7 7"></path>
                </svg>
              </button>
              <button className="px-6 py-3 border border-gray-300 rounded-md font-medium">Learn More</button>
            </div>

            {/* AI Visualization */}
            <div className="mt-20 relative">
              <div className="bg-gradient-to-b from-white to-white/0 absolute top-0 left-0 right-0 h-20 z-10"></div>
              <div className="rounded-lg border bg-white shadow-sm overflow-hidden max-w-4xl mx-auto">
                <div className="p-1 bg-gray-100">
                  <div className="flex gap-1">
                    <div className="h-2 w-2 rounded-full bg-red-400"></div>
                    <div className="h-2 w-2 rounded-full bg-yellow-400"></div>
                    <div className="h-2 w-2 rounded-full bg-green-400"></div>
                  </div>
                </div>
                <div className="p-8 flex items-center justify-center">
                  <div className="relative w-64 h-64 bg-primary/10 rounded-full flex items-center justify-center">
                    <div className="absolute inset-0 bg-primary/5 rounded-full animate-pulse"></div>
                    <div className="w-48 h-48 bg-primary/10 rounded-full flex items-center justify-center z-10">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="64"
                        height="64"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-primary"
                      >
                        <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"></path>
                        <path d="M19 10v2a7 7 0 0 1-14 0v-2"></path>
                        <line x1="12" x2="12" y1="19" y2="22"></line>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Features Section */}
          <section id="features" className="py-20 bg-gray-50">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold text-center mb-12">Why Choose personAI?</h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-white p-6 rounded-lg border shadow-sm">
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-primary"
                    >
                      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                      <circle cx="9" cy="7" r="4"></circle>
                      <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                      <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                    </svg>
                  </div>
                  <h3 className="text-xl font-medium mb-2">Personalized Experience</h3>
                  <p className="text-gray-500">
                    Create custom personas that match your preferences and communication style.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg border shadow-sm">
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-primary"
                    >
                      <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"></path>
                    </svg>
                  </div>
                  <h3 className="text-xl font-medium mb-2">Advanced AI</h3>
                  <p className="text-gray-500">
                    Powered by cutting-edge voice recognition and natural language processing.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg border shadow-sm">
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-primary"
                    >
                      <path d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"></path>
                      <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1Z"></path>
                    </svg>
                  </div>
                  <h3 className="text-xl font-medium mb-2">Seamless Integration</h3>
                  <p className="text-gray-500">
                    Works with your favorite apps and services for a connected experience.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* About Section */}
          <section id="about" className="py-20 container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">About personAI</h2>
              <p className="text-lg text-gray-500 mb-8">
                personAI is a next-generation voice assistant that adapts to your unique preferences. Unlike traditional
                voice assistants, personAI learns your communication style and creates a persona that feels natural and
                intuitive to interact with.
              </p>
              <button className="px-6 py-3 border border-gray-300 rounded-md font-medium flex items-center justify-center gap-2 mx-auto">
                Learn Our Story
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14"></path>
                  <path d="m12 5 7 7-7 7"></path>
                </svg>
              </button>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-20 bg-primary/5">
            <div className="container mx-auto px-4 text-center">
              <h2 className="text-3xl font-bold mb-10">Ready to experience personAI?</h2>
              <button className="px-6 py-3 bg-primary text-white rounded-md font-medium flex items-center justify-center gap-2 mx-auto">
                Get Started Today
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14"></path>
                  <path d="m12 5 7 7-7 7"></path>
                </svg>
              </button>
            </div>
          </section>
        </main>

        {/* Footer */}
        <footer className="bg-gray-100 py-12">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="flex items-center gap-2 mb-6 md:mb-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-primary"
                >
                  <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"></path>
                  <path d="M19 10v2a7 7 0 0 1-14 0v-2"></path>
                  <line x1="12" x2="12" y1="19" y2="22"></line>
                </svg>
                <span className="font-bold">personAI</span>
              </div>
              <div className="flex gap-8">
                <a href="#" className="text-sm text-gray-500 hover:text-primary transition-colors">
                  Privacy
                </a>
                <a href="#" className="text-sm text-gray-500 hover:text-primary transition-colors">
                  Terms
                </a>
                <a href="#" className="text-sm text-gray-500 hover:text-primary transition-colors">
                  Contact
                </a>
              </div>
            </div>
            <div className="mt-8 pt-8 border-t text-center text-sm text-gray-500">
              © {currentYear} personAI. All rights reserved.
            </div>
          </div>
        </footer>
      </div>
    </>
  )
}

export default PersonAILanding