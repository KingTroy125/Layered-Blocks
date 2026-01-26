"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, ChevronDown } from "lucide-react"

const Navbar2 = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  const navItems = [
    { label: "Home", href: "#" },
    { label: "Pricing", href: "#" },
    { label: "Blog", href: "#" },
    { label: "Pages", href: "#", hasDropdown: true },
  ]

  return (
    <nav className="relative bg-white">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="flex h-24 items-center justify-between">
          {/* Logo */}
          <div className="logo-container group">
            <span className="logo-text">Finova</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item, index) => (
              <div
                key={item.label}
                className="nav-item-wrapper"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <a href={item.href} className="nav-item flex items-center gap-1">
                  {item.label}
                  {item.hasDropdown && <ChevronDown className="w-4 h-4" />}
                </a>
                {hoveredIndex === index && (
                  <>
                    <div className="nav-item-underline" />
                    <div className="nav-item-bg" />
                  </>
                )}
              </div>
            ))}
          </div>

          <div className="hidden md:block">
            <div className="cta-wrapper">
              <Button variant="hero" size="default" className="cta-button rounded-full">
                Get Started
              </Button>
              <div className="cta-pulse rounded-full" />
            </div>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-muted-foreground hover:text-foreground transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="mobile-menu">
            <div className="space-y-2 py-4">
              {navItems.map((item) => (
                <a key={item.label} href={item.href} className="mobile-nav-link flex items-center justify-between">
                  {item.label}
                  {item.hasDropdown && <ChevronDown className="w-4 h-4" />}
                </a>
              ))}
            </div>
            <div className="border-t border-border pt-4 pb-4">
              <Button variant="hero" size="default" className="w-full rounded-full">
                Get Started
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar2