"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

export function Cta() {
  return (
    <section className="py-12 md:py-24 bg-primary text-primary-foreground overflow-hidden relative">
      <motion.div
        className="absolute -top-20 -left-20 w-40 h-40 rounded-full bg-white/10"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{ repeat: Number.POSITIVE_INFINITY, duration: 5, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -bottom-20 -right-20 w-60 h-60 rounded-full bg-white/10"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.1, 0.15, 0.1],
        }}
        transition={{ repeat: Number.POSITIVE_INFINITY, duration: 7, ease: "easeInOut", delay: 1 }}
      />

      <div className="container mx-auto px-4 md:px-6 text-center space-y-6 relative z-10">
        <motion.h2
          className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          Доверьте ремонт вашего устройства профессионалам
        </motion.h2>
        <motion.p
          className="text-primary-foreground/80 md:text-xl max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Быстрый и качественный ремонт Samsung, Apple, Xiaomi и других брендов с гарантией от авторизованного
          сервисного центра
        </motion.p>
        <motion.div
          className="flex justify-center pt-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button size="lg" variant="secondary" asChild>
              <a href="tel:+996227100100">Заказать ремонт</a>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

