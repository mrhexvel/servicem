"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export function Faq() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.2 });

  const faqs = [
    {
      question: "Сколько времени занимает ремонт?",
      answer:
        "Большинство ремонтов выполняется в течение 1-2 часов. Сложные случаи, требующие заказа запчастей, могут занять до 1-3 дней.",
    },
    {
      question: "Используете ли вы оригинальные запчасти?",
      answer:
        "Да, мы используем только оригинальные запчасти, что гарантирует высокое качество ремонта и сохранение всех функций устройства.",
    },
    {
      question: "Даете ли вы гарантию на ремонт?",
      answer:
        "Да, мы предоставляем гарантию на все виды ремонта от 3 месяцев до 1 года в зависимости от типа работ.",
    },
    {
      question: "Можно ли отремонтировать телефон после воды?",
      answer:
        "В большинстве случаев да. Важно как можно скорее обратиться в сервис и не включать устройство. Мы проведем специальную очистку и восстановим работоспособность.",
    },
    {
      question: "Сохраняются ли данные при ремонте?",
      answer:
        "Мы делаем всё возможное для сохранения данных, но рекомендуем делать резервные копии перед ремонтом. В некоторых случаях (например, при серьезных повреждениях) сохранение данных может быть невозможно.",
    },
    {
      question: "Где находится ваш сервисный центр?",
      answer:
        "Наш сервисный центр находится в Бишкеке по адресу: ул. Ибраимова, 108B. Мы работаем ежедневно с 10:00 до 19:00.",
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
    <section className="py-12 md:py-24 bg-muted/50">
      <div className="container mx-auto px-4 md:px-6 space-y-12">
        <motion.div
          className="text-center space-y-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
            Часто задаваемые вопросы
          </h2>
          <p className="text-muted-foreground md:text-xl max-w-3xl mx-auto">
            Ответы на самые популярные вопросы о ремонте устройства
          </p>
        </motion.div>

        <motion.div
          ref={containerRef}
          className="max-w-3xl mx-auto"
          variants={container}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
        >
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <motion.div key={index} variants={item}>
                <AccordionItem value={`item-${index}`}>
                  <AccordionTrigger className="text-left">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent>{faq.answer}</AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}
