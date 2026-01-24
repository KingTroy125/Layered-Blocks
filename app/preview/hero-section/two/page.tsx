import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import { Sparkles } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative py-12 sm:py-16 md:py-20 lg:py-28 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-x-3 sm:inset-x-4 md:inset-x-6 lg:inset-x-8 top-2 sm:top-4 bottom-24 sm:bottom-32 md:bottom-40 lg:bottom-56 bg-muted rounded-2xl sm:rounded-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center gap-4 sm:gap-6 md:gap-8">
          {/* Badge */}
          <Link
            href="#"
            className="group flex items-center justify-center gap-2 sm:gap-3 hover:opacity-80 transition-opacity"
          >
            <div className="hidden sm:flex items-center">
              <div className="w-12 sm:w-20 h-px bg-gradient-to-l from-primary/30 to-transparent" />
            </div>

            <Badge variant="hero" className="group flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm">
              <span className="font-normal">Introducing Layered UI Agents</span>
            </Badge>

            <div className="hidden sm:flex items-center">
              <div className="w-12 sm:w-20 h-px bg-gradient-to-r from-primary/30 to-transparent" />
            </div>
          </Link>

          {/* Heading */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-normal leading-tight text-foreground max-w-4xl text-balance">
            Build 10x Faster with Layered UI
          </h1>

          {/* Description */}
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-xl text-balance px-2">
            Craft. Build. Ship Modern Websites With AI Support.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 w-full sm:w-auto px-4 sm:px-0">
            <Button asChild size="lg" className="rounded-full px-6 w-full sm:w-auto">
              <Link href="#link">
                <span className="text-nowrap">Start Building</span>
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="rounded-full px-6 bg-transparent w-full sm:w-auto">
              <Link href="#link">
                <span className="text-nowrap">Watch Video</span>
              </Link>
            </Button>
          </div>
        </div>

        {/* Hero Image */}
        <div className="mt-8 sm:mt-10 md:mt-12 lg:mt-16">
          <div className="relative bg-card rounded-xl sm:rounded-2xl md:rounded-3xl overflow-hidden border border-border shadow-lg shadow-primary/5">
            <Image
              src="/assets/12.png"
              alt="App dashboard preview"
              width={2880}
              height={1842}
              className="w-full h-auto"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
