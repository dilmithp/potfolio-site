"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { ArrowRight, Github, Linkedin } from "lucide-react"
import {
  SiReact, SiNextdotjs, SiTailwindcss, SiTypescript, SiJavascript, SiPython, SiMysql, SiPostgresql, SiDocker, SiAmazon, SiGit, SiNodedotjs, SiPhp, SiCplusplus, SiGooglecloud
} from "react-icons/si"
import { FaJava } from "react-icons/fa"
import { VscAzure } from "react-icons/vsc"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { personalInfo, projects } from "@/lib/data"

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  "React": SiReact,
  "Next.js": SiNextdotjs,
  "Tailwind": SiTailwindcss,
  "TypeScript": SiTypescript,
  "JavaScript": SiJavascript,
  "Python": SiPython,
  "Java": FaJava,
  "MySQL": SiMysql,
  "PostgreSQL": SiPostgresql,
  "Docker": SiDocker,
  "AWS (Basics)": SiAmazon,
  "Azure (Basics)": VscAzure,
  "GCP (Basics)": SiGooglecloud,
  "Git/GitHub": SiGit,
  "Node.js": SiNodedotjs,
  "PHP": SiPhp,
  "C++": SiCplusplus,
}

export default function Home() {
  return (
    <div className="flex flex-col min-h-[calc(100vh-4rem)]">
      {/* Hero Section */}
      <section className="flex-1 flex flex-col justify-center items-center text-center px-4 py-20 md:py-32 bg-gradient-to-b from-background to-secondary/20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-6 max-w-3xl flex flex-col items-center"
        >
          <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-primary/20 shadow-xl mb-4">
            <Image
              src="/profile.png"
              alt={personalInfo.name}
              fill
              className="object-cover"
              priority
            />
          </div>

          <Badge variant="secondary" className="px-4 py-2 text-sm">
            Available for Hire
          </Badge>
          <div className="flex flex-col items-center gap-2">
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-2 text-xl md:text-2xl font-medium text-muted-foreground"
            >
              <span>Hi there</span>
              <motion.span
                animate={{ rotate: [0, 14, -8, 14, -4, 10, 0, 0] }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  repeatDelay: 1,
                  ease: "easeInOut",
                }}
                className="origin-bottom-right inline-block"
              >
                👋
              </motion.span>
              <span>, I'm</span>
            </motion.div>

            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-foreground">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-purple-500 to-pink-600 animate-gradient-x">
                {personalInfo.name}
              </span>
            </h1>
          </div>
          <p className="text-xl md:text-2xl text-muted-foreground font-medium">
            {personalInfo.role}
          </p>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            {personalInfo.summary}
          </p>

          <div className="flex flex-wrap justify-center gap-4 pt-4">
            <Button size="lg" asChild>
              <Link href="/projects">
                View My Work <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/contact">
                Contact Me
              </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <Link href={personalInfo.github} target="_blank">
                <Github className="h-5 w-5" />
              </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <Link href={personalInfo.linkedin} target="_blank">
                <Linkedin className="h-5 w-5" />
              </Link>
            </Button>
          </div>
        </motion.div>
      </section>

      {/* Featured Skills */}
      <section className="py-20 px-4 container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="space-y-8"
        >
          <h2 className="text-3xl font-bold text-center">Tech Stack</h2>
          <div className="flex flex-wrap justify-center gap-6 max-w-4xl mx-auto">
            {Object.entries(iconMap).map(([name, Icon], index) => (
              <div key={index} className="flex flex-col items-center gap-2 group">
                <div className="p-4 rounded-full bg-secondary/50 group-hover:bg-primary/10 transition-colors">
                  <Icon className="w-8 h-8 text-muted-foreground group-hover:text-primary transition-colors" />
                </div>
                <span className="text-xs font-medium text-muted-foreground group-hover:text-foreground transition-colors">{name}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Featured Projects Preview */}
      <section className="py-20 px-4 bg-secondary/20">
        <div className="container mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-bold">Featured Projects</h2>
            <p className="text-muted-foreground">Some of my recent work</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.slice(0, 3).map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full flex flex-col hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle>{project.title}</CardTitle>
                    <CardDescription>{project.tech.join(" • ")}</CardDescription>
                  </CardHeader>
                  <CardContent className="flex-1">
                    <p className="text-sm text-muted-foreground">{project.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <Button variant="outline" asChild>
              <Link href="/projects">View All Projects</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
