"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import Image from "next/image";

export function Hero() {
  return (
    <section className="relative py-8 md:py-12 lg:py-24 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <motion.div
            className="space-y-4 md:space-y-6 max-w-2xl"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <motion.h1
              className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              Профессиональный ремонт смартфонов в Бишкеке
            </motion.h1>
            <motion.p
              className="text-muted-foreground md:text-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              Авторизованный сервисный центр с гарантией на все виды работ.
              Ремонт Samsung, Apple, Xiaomi и других брендов от 30 минут с
              бесплатной диагностикой.
            </motion.p>
            <motion.div
              className="flex flex-col sm:flex-row gap-3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button size="lg" className="w-full sm:w-auto" asChild>
                  <a href="tel:+996227100100">Заказать ремонт</a>
                </Button>
              </motion.div>
            </motion.div>
            <motion.div
              className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-6 pt-2 sm:pt-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              {[
                "Оригинальные запчасти",
                "Гарантия до 1 года",
                "Бесплатная диагностика",
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  className="flex items-center gap-2"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.7 + index * 0.1 }}
                >
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                  <span>{feature}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
          <motion.div
            className="relative h-[600px] w-[400px] rounded-lg overflow-hidden hidden md:block"
            initial={{ opacity: 0, x: 50, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            <Image
              src="/images/hero-bg.jpg"
              alt="Smartphone Repair"
              fill
              className="object-cover"
            />
          </motion.div>
        </div>
      </div>

      {/* Animated background elements */}
      <motion.div
        className="absolute top-20 left-0 w-64 h-64 bg-primary/5 rounded-full -z-10"
        initial={{ scale: 0, x: -100 }}
        animate={{ scale: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-40 h-40 bg-primary/5 rounded-full -z-10"
        initial={{ scale: 0, x: 100 }}
        animate={{ scale: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.4 }}
      />
    </section>
  );
}
