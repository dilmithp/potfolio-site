"use client"

import { motion } from "framer-motion"
import { Calendar, GraduationCap, MapPin, Mail, Phone } from "lucide-react"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { personalInfo, education, skills } from "@/lib/data"

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-12 space-y-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-4 text-center"
      >
        <h1 className="text-4xl font-bold tracking-tight">About Me</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Getting to know my journey, education, and technical expertise.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Personal Info & Contact */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="md:col-span-1 space-y-6"
        >
          <Card>
            <CardHeader>
              <CardTitle>Personal Details</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center space-x-3 text-sm">
                <MapPin className="h-4 w-4 text-muted-foreground" />
                <span>{personalInfo.location}</span>
              </div>
              <div className="flex items-center space-x-3 text-sm">
                <Mail className="h-4 w-4 text-muted-foreground" />
                <a href={`mailto:${personalInfo.email}`} className="hover:text-primary transition-colors">
                  {personalInfo.email}
                </a>
              </div>
              <div className="flex items-center space-x-3 text-sm">
                <Phone className="h-4 w-4 text-muted-foreground" />
                <a href={`tel:${personalInfo.phone}`} className="hover:text-primary transition-colors">
                  {personalInfo.phone}
                </a>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Education</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {education.map((edu, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex items-start justify-between">
                    <h4 className="font-semibold">{edu.institution}</h4>
                    <span className="text-xs text-muted-foreground bg-secondary px-2 py-1 rounded-full">
                      {edu.duration}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground">{edu.degree}</p>
                  <p className="text-xs text-muted-foreground">{edu.details}</p>
                  {index < education.length - 1 && <Separator className="my-4" />}
                </div>
              ))}
            </CardContent>
          </Card>
        </motion.div>

        {/* Skills & Bio */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="md:col-span-2 space-y-8"
        >
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">Professional Summary</h2>
            <p className="text-muted-foreground leading-relaxed">
              {personalInfo.summary}
            </p>
          </div>

          <div className="space-y-6">
            <h2 className="text-2xl font-bold">Technical Skills</h2>

            <div className="space-y-4">
              <div>
                <h3 className="text-sm font-medium text-muted-foreground mb-2">Languages</h3>
                <div className="flex flex-wrap gap-2">
                  {skills.languages.map((skill) => (
                    <Badge key={skill} variant="secondary">{skill}</Badge>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-sm font-medium text-muted-foreground mb-2">Web Technologies</h3>
                <div className="flex flex-wrap gap-2">
                  {skills.web.map((skill) => (
                    <Badge key={skill} variant="secondary">{skill}</Badge>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-sm font-medium text-muted-foreground mb-2">Core Concepts</h3>
                <div className="flex flex-wrap gap-2">
                  {skills.core.map((skill) => (
                    <Badge key={skill} variant="outline">{skill}</Badge>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-sm font-medium text-muted-foreground mb-2">Databases & Tools</h3>
                <div className="flex flex-wrap gap-2">
                  {[...skills.databases, ...skills.tools].map((skill) => (
                    <Badge key={skill} variant="outline">{skill}</Badge>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
