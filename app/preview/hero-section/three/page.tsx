'use client';

import Link from 'next/link';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { motion, type Variants } from 'framer-motion';

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const badgeVariants: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
};

const lineVariants: Variants = {
  hidden: { scaleX: 0 },
  visible: {
    scaleX: 1,
    transition: {
      duration: 0.8,
      ease: 'easeInOut',
    },
  },
};

const headingVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      delay: 0.2,
      ease: 'easeOut',
    },
  },
};

const descriptionVariants: Variants = {
  hidden: { opacity: 0, y: 15 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      delay: 0.3,
      ease: 'easeOut',
    },
  },
};

const buttonVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: 0.4,
      ease: 'easeOut',
    },
  },
};

const imageVariants: Variants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.8,
      delay: 0.5,
      ease: 'easeOut',
    },
  },
};

export default function FullHeroPage() {
  return (
    <main>
      <section className="bg-muted/50 dark:bg-background overflow-hidden">
        <div className="relative mx-auto max-w-5xl px-6 pt-28 lg:pt-24">
          <motion.div
            className="relative z-10 mx-auto max-w-2xl text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={containerVariants}
          >
            {/* Badge */}
            <motion.div
              className="flex items-center justify-center gap-2 sm:gap-3 mb-6 sm:mb-8"
              variants={containerVariants}
            >
              <motion.div className="flex items-center" variants={lineVariants}>
                <div className="w-12 sm:w-20 h-px bg-gradient-to-l from-primary/30 to-transparent" />
              </motion.div>

              <motion.div variants={badgeVariants}>
                <Badge variant="hero" className="group">
                  <span className="text-sm font-normal">Join us</span>
                </Badge>
              </motion.div>

              <motion.div className="flex items-center" variants={lineVariants}>
                <div className="w-12 sm:w-20 h-px bg-gradient-to-r from-primary/30 to-transparent" />
              </motion.div>
            </motion.div>

            {/* Heading */}
            <motion.h1
              className="text-balance text-4xl font-semibold md:text-5xl lg:text-6xl"
              variants={headingVariants}
            >
              Modern Software testing reimagined
            </motion.h1>

            {/* Description */}
            <motion.p
              className="text-muted-foreground mx-auto my-8 max-w-2xl text-xl"
              variants={descriptionVariants}
            >
              Streamline your testing process with our all-in-one platform, designed to boost
              efficiency and collaboration across teams.
            </motion.p>

            {/* CTA Button */}
            <motion.div variants={buttonVariants}>
              <Button asChild size="lg" className="rounded-full">
                <Link href="#">
                  <span>Get Started</span>
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>

        {/* Dashboard Image */}
        <motion.div
          className="mx-auto 2xl:max-w-7xl"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={imageVariants}
        >
          <div className="perspective-distant pl-8 lg:pl-44">
            <div className="lg:h-176 rotate-x-20 mask-b-from-55% mask-b-to-100% mask-r-from-75% skew-x-12 pl-6 pt-6">
              <img
                className="rounded-lg border shadow-xl"
                src="https://opencal-nextjs.vercel.app/12.png"
                alt="Dashboard preview"
              />
            </div>
          </div>
        </motion.div>
      </section>
    </main>
  );
}