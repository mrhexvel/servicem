"use client";

import { Card, CardContent } from "@/components/ui/card";
import { motion, useInView } from "framer-motion";
import { Star } from "lucide-react";
import { useRef } from "react";

export function Testimonials() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.2 });

  const testimonials = [
    {
      name: "Азамат К.",
      model: "Смартфон",
      rating: 5,
      text: "Отличный сервис! Заменили экран на моем телефоне за час. Качество отличное, цена адекватная. Рекомендую!",
    },
    {
      name: "Айгуль М.",
      model: "Смартфон премиум-класса",
      rating: 5,
      text: "Думала, что ремонт будет стоить целое состояние, но цена оказалась вполне разумной. Спасибо за профессионализм!",
    },
    {
      name: "Бакыт Т.",
      model: "Смартфон",
      rating: 4,
      text: "Быстро заменили батарею, телефон снова работает весь день. Единственный минус - пришлось подождать запчасть пару дней.",
    },
    {
      name: "Гульнара О.",
      model: "Смартфон",
      rating: 5,
      text: "Уронила телефон в воду, думала всё. Но в сервисе спасли и телефон, и все данные! Огромное спасибо мастерам!",
    },
    {
      name: "Эрмек Д.",
      model: "Смартфон",
      rating: 5,
      text: "Обращался с проблемой камеры. Диагностику провели при мне, всё объяснили и быстро устранили проблему. Рекомендую!",
    },
    {
      name: "Айнура С.",
      model: "Планшет",
      rating: 5,
      text: "Профессиональный подход, вежливый персонал. Заменили экран с сохранением всех функций. Всё отлично!",
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
    <section id="testimonials" className="py-12 md:py-24">
      <div className="container mx-auto px-4 md:px-6 space-y-12">
        <motion.div
          className="text-center space-y-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
            Отзывы клиентов
          </h2>
          <p className="text-muted-foreground md:text-xl max-w-3xl mx-auto">
            Что говорят о нас наши клиенты
          </p>
        </motion.div>

        <motion.div
          ref={containerRef}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          variants={container}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div key={index} variants={item}>
              <Card className="h-full hover:shadow-lg transition-shadow">
                <CardContent className="p-6 space-y-4 flex flex-col h-full">
                  <div className="flex items-center gap-2">
                    {Array(testimonial.rating)
                      .fill(0)
                      .map((_, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, scale: 0 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.1 * i, type: "spring" }}
                        >
                          <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                        </motion.div>
                      ))}
                    {Array(5 - testimonial.rating)
                      .fill(0)
                      .map((_, i) => (
                        <Star
                          key={i}
                          className="h-5 w-5 text-muted-foreground"
                        />
                      ))}
                  </div>
                  <p className="text-muted-foreground flex-1">
                    {testimonial.text}
                  </p>
                  <div className="pt-4 border-t">
                    <div className="font-medium">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">
                      {testimonial.model}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
