import Image from 'next/image'

export default function Home() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-16">
      <h1 className="mb-12 text-5xl font-extrabold tracking-tight md:text-6xl">Welcome!</h1>

      <section className="flex flex-col items-center gap-12 md:flex-row md:items-start">
        {/* Photo on the left side */}
        <div className="shrink-0">
          <Image
            src="/images/banff_headshot.jpg"
            alt="Olivia Ma headshot"
            width={380}
            height={380}
            className="rounded-xl shadow-2xl"
            priority
          />
        </div>

        <div className="flex flex-col space-y-6">
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Hi, I’m Olivia</h2>
            <p className="text-lg text-gray-500 italic">Robotics • Control • Autonomy</p>

            {/* Main Intro Text */}
            <p className="text-lg leading-relaxed text-gray-600 dark:text-gray-400">
              I’m a robotics engineer interested in autonomy, control systems, and energy-efficient
              robotic platforms. I work across simulation, hardware, and optimization-based control.
            </p>

            {/* Indented Timeline List */}
            <ul className="ml-4 space-y-3 text-lg text-gray-700 dark:text-gray-300">
              <li className="flex items-start gap-3">
                <span className="shrink-0">🎓</span>
                <span>
                  Master’s in Robotics at the University of Michigan - Ann Arbor (May 2026)
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="shrink-0">✈️</span>
                <span>GNC Intern at Reliable Robotics (2025)</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="shrink-0">🤖</span>
                <span>Hardware Engineering Co-op at Amazon Robotics (2024)</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="shrink-0">🚗</span>
                <span>Motor Controls Intern at Stellantis (2023)</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="shrink-0">📈</span>
                <span>Undergraduate Research Assistant at the A2Sys Lab</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="shrink-0">🔨</span>
                <span>Structures team lead for Michigan Autonomous Aerial Vehicles (MAAV)</span>
              </li>
            </ul>

            <p className="text-lg leading-relaxed text-gray-600 dark:text-gray-400">
              This site showcases my projects, research, and recent reading material. Don't hesitate
              to reach out!
            </p>
          </div>

          {/* Download Resume button */}
          <div className="pt-4">
            <a
              href="/static/resume.pdf"
              download="Olivia_Ma_Resume.pdf"
              className="inline-block w-full rounded-lg bg-black px-8 py-3 text-center text-base font-semibold text-white transition hover:bg-gray-800 md:w-auto dark:bg-white dark:text-black dark:hover:bg-gray-200"
            >
              Download Resume
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
