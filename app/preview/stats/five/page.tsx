"use client"

import { Badge } from "@/components/ui/badge"
import { motion, type Variants } from "framer-motion"

const stats = [
  {
    percentage: "95%",
    title: "Fast-Track Results",
    description: "Accelerate your growth journey with cutting-edge analytics and insights.",
  },
  {
    percentage: "20%",
    title: "Increased Efficiency",
    description: "Uncover hidden opportunities in your data with automated intelligence.",
  },
  {
    percentage: "36%",
    title: "Performance Leap",
    description: "Elevate your workflows and outpace the competition with advanced features.",
  },
  {
    percentage: "54%",
    title: "Strategic Advantage",
    description: "Gain a competitive edge through powerful, data-driven strategies.",
  },
]

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const headerVariants: Variants = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
}

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
}

const StatsHero = () => {
  return (
    <section className="relative overflow-hidden py-16 sm:py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          {/* Left Side - Header */}
          <motion.div className="flex flex-col gap-8" variants={headerVariants}>
            <div className="flex items-center gap-2 sm:gap-3">
              <Badge variant="hero" className="group">
                <span className="text-xs sm:text-sm font-normal">Our statistics</span>
              </Badge>

              <div className="flex items-center">
                <div className="w-8 sm:w-12 md:w-20 h-px bg-gradient-to-r from-primary/30 to-transparent"></div>
              </div>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[60px] font-normal leading-[1.2] text-foreground">
              The numbers that
              <br />
              define our success
            </h2>

            <p className="text-muted-foreground text-sm sm:text-base font-normal leading-relaxed max-w-xl">
              Our track record speaks for itself. See how we've helped businesses achieve remarkable growth and
              transformation.
            </p>
          </motion.div>

          {/* Right Side - Stats Grid */}
          <motion.div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:gap-6" variants={containerVariants}>
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="group relative flex flex-col rounded-2xl border border-border/50 bg-card/50 p-6 shadow-lg backdrop-blur-sm transition-all duration-300 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-1"
                variants={cardVariants}
              >
                {/* Gradient Overlay on hover */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/10 via-primary/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                {/* Subtle corner accent */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-primary/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Content */}
                <div className="relative z-10">
                  <div className="mb-12 text-5xl font-normal text-primary transition-all duration-300 group-hover:scale-105">
                    {stat.percentage}
                  </div>

                  <h3 className="mb-3 text-base font-normal text-foreground transition-colors duration-300">
                    {stat.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm leading-relaxed font-normal text-muted-foreground">{stat.description}</p>
                </div>

                {/* Bottom accent line */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary/0 via-primary to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-b-2xl" />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default StatsHero
