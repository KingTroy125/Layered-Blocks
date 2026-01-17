'use client'

import { ChevronRight } from 'lucide-react'
import Link from 'next/link'

export function Hero2() {
  return (
    <section className="mx-4 max-w-7xl border-x px-4 py-16 [--color-border:color-mix(in_oklab,var(--color-zinc-200)_75%,transparent)] md:mx-auto dark:[--color-border:color-mix(in_oklab,var(--color-zinc-800)_60%,transparent)]">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-24 overflow-hidden">
        <div className="z-10 flex flex-col">
          <div className="grid grid-cols-1">
            <div className="flex flex-col items-center gap-8 text-center">
              {/* Badge/Announcement */}
              <a
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gray-200 dark:border-gray-800 bg-white dark:bg-black hover:border-gray-400 dark:hover:border-gray-600 transition-all text-sm"
              >
                <span className="text-black dark:text-white font-medium">Introducing Latest Components</span>
                <ChevronRight className="w-4 h-4 text-gray-600 dark:text-gray-400" />
              </a>

              {/* Main Heading */}
              <div className="flex flex-col gap-4 items-center">
                <div className="w-full">
                  <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-black dark:text-white leading-tight text-center">
                    Layered Blocks for
                  </h1>
                  <div className="flex items-center justify-center gap-2 mt-4 flex-col">
                    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-black dark:text-white">
                      Design Engineers
                    </h1>
                    <div className="w-full max-w-sm overflow-hidden">
                      <svg aria-hidden="true" className="w-full h-auto" height="22" viewBox="0 0 283 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1.24715 19.3744C72.4051 10.3594 228.122 -4.71194 281.724 7.12332" stroke="url(#paint0_linear_pl)" strokeWidth="4"></path>
                        <defs>
                          <linearGradient id="paint0_linear_pl" x1="282" y1="5.49999" x2="40" y2="13" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#fa1515"></stop>
                            <stop offset="1" stopColor="#5560f7"></stop>
                          </linearGradient>
                        </defs>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>

              {/* Description */}
              <p className="text-gray-600 dark:text-gray-400 max-w-2xl text-base md:text-lg leading-relaxed">
                Free and open-source component blocks and layouts built with{' '}
                <span className="font-semibold text-black dark:text-white">React</span>,{' '}
                <span className="font-semibold text-black dark:text-white">Typescript</span>,{' '}
                <span className="font-semibold text-black dark:text-white">Tailwind CSS</span>, and{' '}
                <span className="font-semibold text-black dark:text-white">Motion</span>.
                <br />
                Perfect companion for{' '}
                <span className="font-semibold text-black dark:text-white">shadcn/ui</span>.
              </p>

              {/* Designed By */}
              <div className="mt-8 flex flex-wrap gap-1 overflow-hidden text-sm font-medium text-gray-700 dark:text-gray-300 justify-center">
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/hero-section"
                  className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-lg bg-black dark:bg-white text-white dark:text-black font-medium hover:opacity-90 transition-all"
                >
                  Browse Components
                  <ChevronRight className="w-4 h-4" />
                </a>
                <a
                  href="#"
                  className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-lg border border-gray-200 dark:border-gray-800 text-black dark:text-white font-medium hover:bg-gray-50 dark:hover:bg-gray-900 transition-all"
                >
                  Browse Templates
                  <ChevronRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}