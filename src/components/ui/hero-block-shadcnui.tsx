import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import { hero } from "@/data/portfolioData";

export function HeroBlock() {
  return (
    <section
      id="top"
      className="relative flex min-h-[calc(100dvh-60px)] w-full items-center justify-center overflow-hidden rounded-none border border-slate-300/60 bg-white/70 px-6 py-16 shadow-[0_24px_58px_rgba(24,72,110,0.12)] backdrop-blur-sm md:px-10"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-sky-50/85 via-cyan-50/55 to-emerald-50/65" />

      <svg
        aria-hidden="true"
        viewBox="0 0 1200 560"
        className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.18] blur-[0.2px]"
      >
        <defs>
          <linearGradient id="flowLine" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#2f86bf" stopOpacity="0.25" />
            <stop offset="50%" stopColor="#20a6ad" stopOpacity="0.45" />
            <stop offset="100%" stopColor="#1ab489" stopOpacity="0.3" />
          </linearGradient>
        </defs>
        <path d="M80 420 C 260 360, 360 250, 540 270 S 860 380, 1120 220" stroke="url(#flowLine)" strokeWidth="2.2" fill="none" />
        <path d="M40 300 C 220 240, 320 170, 500 210 S 840 340, 1160 120" stroke="url(#flowLine)" strokeWidth="1.8" fill="none" />
        {[80, 280, 520, 760, 1020].map((x, i) => (
          <circle key={x} cx={x} cy={[420, 330, 265, 340, 240][i]} r="6" fill="#1f96aa" fillOpacity="0.28" />
        ))}
      </svg>

      <div className="pointer-events-none absolute -left-16 -top-20 h-52 w-52 rounded-full bg-cyan-300/30 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-20 -right-12 h-56 w-56 rounded-full bg-emerald-300/25 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-5xl text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="mb-6 inline-block"
          >
            <div className="mx-auto h-[16.8rem] w-[16.8rem] overflow-hidden rounded-full border-4 border-white shadow-lg">
              <img
                src={`${import.meta.env.BASE_URL}images/nyk.jpg`}
                alt={`${hero.name} profile`}
                className="block h-full w-full scale-[1.3] -translate-y-[8%] object-cover"
              />
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="mb-3 text-4xl font-bold tracking-tight text-slate-900 md:text-6xl"
          >
            {hero.name}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="mx-auto mb-8 max-w-3xl text-lg text-slate-600 md:text-2xl"
          >
            {hero.tagline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="mb-12 flex flex-wrap justify-center gap-4"
          >
            <a href="#contact">
              <Button size="lg" className="gap-2">
                <Mail className="h-4 w-4" />
                Get in Touch
              </Button>
            </a>
          </motion.div>

        </motion.div>
      </div>

    </section>
  );
}
