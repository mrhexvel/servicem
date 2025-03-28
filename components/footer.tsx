"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Instagram, Phone, Youtube } from "lucide-react";
import Link from "next/link";
import { ServiceLogo } from "./service-logo";

export function Footer() {
  const apps = [
    {
      name: "IN",
      href: "",
      icon: Instagram,
    },
    {
      name: "TG",
      href: "",
      icon: Phone,
    },
    {
      name: "YT",
      href: "",
      icon: Youtube,
    },
  ];

  return (
    <footer className="border-t bg-muted/30" id="contact">
      <div className="container mx-auto px-4 md:px-6 py-8 md:py-12">
        <div className="flex md:items-center justify-between flex-col md:flex-row gap-8 md:gap-0">
          <motion.div
            className="space-y-4 max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center">
              <ServiceLogo className="h-8 w-auto" />
            </div>
            <p className="text-muted-foreground">
              Авторизованный сервисный центр с гарантией на все виды работ.
              Ремонт смартфонов любых моделей.
            </p>
            <div className="flex items-center gap-3">
              <Phone className="h-4 w-4 text-primary" />
              <a
                href="tel:+996227100100"
                className="hover:text-primary transition-colors"
              >
                +996 (227) 10-01-00
              </a>
            </div>
          </motion.div>

          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="font-medium">Подпишитесь на нас</h3>
            <div className="flex gap-4">
              {apps.map((social, index) => (
                <motion.div
                  key={social.name}
                  whileHover={{ y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                >
                  <Button variant="outline" size="icon">
                    <social.icon width={24} height={24} />
                  </Button>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          className="border-t mt-8 pt-8 flex flex-col sm:flex-row justify-between gap-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Service Center. Все права
            защищены.
          </p>
          <div className="flex gap-4">
            <Link
              href="#"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Политика конфиденциальности
            </Link>
            <Link
              href="#"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Условия использования
            </Link>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
