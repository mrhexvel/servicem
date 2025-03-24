"use client";

import { Card, CardContent } from "@/components/ui/card";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

export function Services() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.2 });

  const services = [
    {
      title: "Замена экрана",
      description:
        "Замена разбитого или неисправного дисплея на оригинальный экран с сохранением всех функций.",
      icon: "/images/phone-break.png",
    },
    {
      title: "Замена батареи",
      description:
        "Установка новой батареи с восстановлением полной емкости и времени автономной работы.",
      icon: "/images/battery-break.png",
    },
    {
      title: "Ремонт после воды",
      description:
        "Восстановление телефонов после попадания влаги с полной очисткой и заменой поврежденных компонентов.",
      icon: "/images/phone-in-water.png",
    },
    {
      title: "Замена камеры",
      description:
        "Устранение проблем с камерой, замена модуля на оригинальный с сохранением качества фото и видео.",
      icon: "/images/phone-camera.png",
    },
    {
      title: "Ремонт материнской платы",
      description:
        "Диагностика и устранение неисправностей на компонентном уровне с использованием микропаяльных станций.",
      icon: "/images/motherboard.png",
    },
    {
      title: "Программный ремонт",
      description:
        "Решение проблем с программным обеспечением, разблокировка, восстановление данных.",
      icon: "/images/program.png",
    },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } },
  };

  return (
    <section id="services" className="py-12 md:py-24 bg-muted/50">
      <div className="container mx-auto px-4 md:px-6 space-y-12">
        <motion.div
          className="text-center space-y-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Наши услуги
          </h2>
          <p className="text-muted-foreground md:text-xl max-w-3xl mx-auto">
            Мы предлагаем полный спектр услуг по ремонту телефонов с
            использованием оригинальных запчастей и профессионального
            оборудования.
          </p>
        </motion.div>

        <motion.div
          ref={containerRef}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          variants={container}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
        >
          {services.map((service, index) => (
            <motion.div key={index} variants={item} whileHover={{ y: -5 }}>
              <Card className="group overflow-hidden transition-all hover:shadow-lg">
                <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                  <motion.div
                    className="relative h-20 w-20 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors"
                    whileHover={{ rotate: 5, scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <Image
                      src={service.icon || "/placeholder.svg"}
                      alt={service.title}
                      width={40}
                      height={40}
                    />
                  </motion.div>
                  <h3 className="text-xl font-bold">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
