"use client"

import { motion } from "framer-motion"
import { Briefcase } from "lucide-react"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { experience } from "@/lib/data"

export default function ExperiencePage() {
  return (
    <div className="container mx-auto px-4 py-12 space-y-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-4 text-center"
      >
        <h1 className="text-4xl font-bold tracking-tight">Experience</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          My professional journey and industry experience.
        </p>
      </motion.div>

      <div className="max-w-3xl mx-auto">
        {experience.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="relative pl-8 pb-12 last:pb-0 border-l border-border"
          >
            <div className="absolute left-[-9px] top-0 h-4 w-4 rounded-full bg-primary" />

            <Card className="mb-8">
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
                  <div>
                    <CardTitle className="text-xl">{exp.role}</CardTitle>
                    <p className="text-primary font-medium">{exp.company}</p>
                  </div>
                  <div className="flex flex-col items-start md:items-end gap-1">
                    <Badge variant="outline">{exp.duration}</Badge>
                    <span className="text-xs text-muted-foreground">{exp.type}</span>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside space-y-2 text-sm text-muted-foreground">
                  {exp.description.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
