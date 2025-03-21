import router from 'next/router'
import React from 'react'

function Landing() {
  return (
    <div className="h-screen flex flex-col items-center justify-center bg-base text-black">
      <h1 className="text-4xl font-bold mb-6">Welcome to Persona Builder</h1>
      <button
        onClick={() => router.push("/form")}
        className="bg-accent text-black px-6 py-3 rounded-xl font-semibold hover:bg-black hover:text-white transition-all"
      >
        Get Started
      </button>
    </div>
  )
}

export default Landing