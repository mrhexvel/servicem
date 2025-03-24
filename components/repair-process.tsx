"use client";

import { Card, CardContent } from "@/components/ui/card";
import { motion, useInView } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { useRef } from "react";

export function RepairProcess() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.2 });

  const processes = [
    {
      step: "01",
      title: "Заявка",
      description:
        "Оставьте заявку на сайте или позвоните нам. Мы ответим на все ваши вопросы.",
    },
    {
      step: "02",
      title: "Диагностика",
      description:
        "Проведем бесплатную диагностику и определим причину неисправности.",
    },
    {
      step: "03",
      title: "Ремонт",
      description: "Выполним ремонт с использованием оригинальных запчастей.",
    },
    {
      step: "04",
      title: "Гарантия",
      description: "Выдадим гарантию на все выполненные работы до 1 года.",
    },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } },
  };

  return (
    <section id="process" className="py-12 md:py-24 bg-muted/50">
      <div className="container mx-auto px-4 md:px-6 space-y-12">
        <motion.div
          className="text-center space-y-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
            Как мы работаем
          </h2>
          <p className="text-muted-foreground md:text-xl max-w-3xl mx-auto">
            Простой и прозрачный процесс ремонта вашего устройства
          </p>
        </motion.div>

        <motion.div
          ref={containerRef}
          className="grid gap-8 md:grid-cols-4"
          variants={container}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
        >
          {processes.map((process, index) => (
            <motion.div key={index} variants={item}>
              <Card className="relative overflow-hidden group h-full">
                <CardContent className="p-6 space-y-4">
                  <motion.div
                    className="text-6xl font-bold text-primary/20 group-hover:text-primary/30 transition-colors"
                    whileHover={{ scale: 1.1, x: 5 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    {process.step}
                  </motion.div>
                  <h3 className="text-xl font-bold">{process.title}</h3>
                  <p className="text-muted-foreground">{process.description}</p>
                </CardContent>
                {index < 3 && (
                  <motion.div
                    className="absolute top-1/2 -right-4 transform -translate-y-1/2 hidden md:block"
                    animate={{ x: [0, 5, 0] }}
                    transition={{
                      repeat: Number.POSITIVE_INFINITY,
                      duration: 1.5,
                      ease: "easeInOut",
                    }}
                  >
                    <ChevronRight className="h-8 w-8 text-muted-foreground/50" />
                  </motion.div>
                )}
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
