"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

export function ModelSelector() {
  const [selectedBrand, setSelectedBrand] = useState("Samsung");
  const [selectedModel, setSelectedModel] = useState("Galaxy S23");
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const brands = ["Samsung", "Xiaomi"];

  const modelsByBrand = {
    Samsung: [
      "Galaxy S23",
      "Galaxy S22",
      "Galaxy S21",
      "Galaxy Note 20",
      "Galaxy A53",
      "Galaxy Z Fold4",
    ],
    Xiaomi: [
      "Mi 13",
      "Mi 12",
      "Redmi Note 12",
      "Redmi Note 11",
      "POCO F5",
      "POCO X5",
    ],
  };

  useEffect(() => {
    setSelectedModel(
      modelsByBrand[selectedBrand as keyof typeof modelsByBrand][0]
    );
  }, [selectedBrand]);

  const phoneModels =
    modelsByBrand[selectedBrand as keyof typeof modelsByBrand];

  const modelData = {
    "Galaxy S23": {
      image: "/images/models/samsung/s23.webp",
      screen: [
        { name: "Замена экрана", price: "от 7 900 сом" },
        { name: "Замена стекла", price: "от 4 500 сом" },
        { name: "Замена сенсора", price: "от 5 200 сом" },
      ],
      battery: [
        { name: "Замена батареи", price: "от 2 900 сом" },
        { name: "Диагностика батареи", price: "Бесплатно" },
      ],
      other: [
        { name: "Замена камеры", price: "от 3 500 сом" },
        { name: "Замена разъема зарядки", price: "от 2 200 сом" },
        { name: "Ремонт после воды", price: "от 3 900 сом" },
      ],
    },
    "Galaxy S22": {
      image: "/images/models/samsung/s22.webp",
      screen: [
        { name: "Замена экрана", price: "от 6 800 сом" },
        { name: "Замена стекла", price: "от 3 900 сом" },
        { name: "Замена сенсора", price: "от 4 700 сом" },
      ],
      battery: [
        { name: "Замена батареи", price: "от 2 500 сом" },
        { name: "Диагностика батареи", price: "Бесплатно" },
      ],
      other: [
        { name: "Замена камеры", price: "от 3 200 сом" },
        { name: "Замена разъема зарядки", price: "от 1 900 сом" },
        { name: "Ремонт после воды", price: "от 3 500 сом" },
      ],
    },
    "Galaxy S21": {
      image: "/images/models/samsung/s21.webp",
      screen: [
        { name: "Замена экрана", price: "от 5 900 сом" },
        { name: "Замена стекла", price: "от 3 400 сом" },
        { name: "Замена сенсора", price: "от 4 100 сом" },
      ],
      battery: [
        { name: "Замена батареи", price: "от 2 300 сом" },
        { name: "Диагностика батареи", price: "Бесплатно" },
      ],
      other: [
        { name: "Замена камеры", price: "от 2 900 сом" },
        { name: "Замена разъема зарядки", price: "от 1 700 сом" },
        { name: "Ремонт после воды", price: "от 3 200 сом" },
      ],
    },
    "Galaxy Note 20": {
      image: "/images/models/samsung/note-20.avif",
      screen: [
        { name: "Замена экрана", price: "от 7 200 сом" },
        { name: "Замена стекла", price: "от 4 100 сом" },
        { name: "Замена сенсора", price: "от 4 900 сом" },
      ],
      battery: [
        { name: "Замена батареи", price: "от 2 700 сом" },
        { name: "Диагностика батареи", price: "Бесплатно" },
      ],
      other: [
        { name: "Замена камеры", price: "от 3 300 сом" },
        { name: "Замена разъема зарядки", price: "от 2 100 сом" },
        { name: "Ремонт стилуса S Pen", price: "от 1 800 сом" },
      ],
    },
    "Galaxy A53": {
      image: "/images/models/samsung/a53.avif",
      screen: [
        { name: "Замена экрана", price: "от 4 500 сом" },
        { name: "Замена стекла", price: "от 2 800 сом" },
        { name: "Замена сенсора", price: "от 3 200 сом" },
      ],
      battery: [
        { name: "Замена батареи", price: "от 1 900 сом" },
        { name: "Диагностика батареи", price: "Бесплатно" },
      ],
      other: [
        { name: "Замена камеры", price: "от 2 400 сом" },
        { name: "Замена разъема зарядки", price: "от 1 500 сом" },
        { name: "Ремонт после воды", price: "от 2 800 сом" },
      ],
    },
    "Galaxy Z Fold4": {
      image: "/images/models/samsung/z-fold-4.jpg",
      screen: [
        { name: "Замена внешнего экрана", price: "от 9 500 сом" },
        { name: "Замена внутреннего экрана", price: "от 18 900 сом" },
        { name: "Замена защитной пленки", price: "от 3 200 сом" },
      ],
      battery: [
        { name: "Замена батареи", price: "от 4 500 сом" },
        { name: "Диагностика батареи", price: "Бесплатно" },
      ],
      other: [
        { name: "Ремонт шарнира", price: "от 7 200 сом" },
        { name: "Замена разъема зарядки", price: "от 3 100 сом" },
        { name: "Ремонт после воды", price: "от 5 900 сом" },
      ],
    },

    "Mi 13": {
      image: "/images/models/xiaomi/13.webp",
      screen: [
        { name: "Замена экрана", price: "от 6 900 сом" },
        { name: "Замена стекла", price: "от 3 800 сом" },
        { name: "Замена сенсора", price: "от 4 500 сом" },
      ],
      battery: [
        { name: "Замена батареи", price: "от 2 400 сом" },
        { name: "Диагностика батареи", price: "Бесплатно" },
      ],
      other: [
        { name: "Замена камеры", price: "от 3 300 сом" },
        { name: "Замена разъема зарядки", price: "от 1 900 сом" },
        { name: "Ремонт после воды", price: "от 3 700 сом" },
      ],
    },
    "Mi 12": {
      image: "/images/models/xiaomi/12.webp",
      screen: [
        { name: "Замена экрана", price: "от 6 200 сом" },
        { name: "Замена стекла", price: "от 3 500 сом" },
        { name: "Замена сенсора", price: "от 4 200 сом" },
      ],
      battery: [
        { name: "Замена батареи", price: "от 2 200 сом" },
        { name: "Диагностика батареи", price: "Бесплатно" },
      ],
      other: [
        { name: "Замена камеры", price: "от 3 100 сом" },
        { name: "Замена разъема зарядки", price: "от 1 700 сом" },
        { name: "Ремонт после воды", price: "от 3 500 сом" },
      ],
    },
    "Redmi Note 12": {
      image: "/images/models/xiaomi/redmi-note-12.webp",
      screen: [
        { name: "Замена экрана", price: "от 4 900 сом" },
        { name: "Замена стекла", price: "от 2 900 сом" },
        { name: "Замена сенсора", price: "от 3 500 сом" },
      ],
      battery: [
        { name: "Замена батареи", price: "от 1 900 сом" },
        { name: "Диагностика батареи", price: "Бесплатно" },
      ],
      other: [
        { name: "Замена камеры", price: "от 2 500 сом" },
        { name: "Замена разъема зарядки", price: "от 1 500 сом" },
        { name: "Ремонт после воды", price: "от 2 900 сом" },
      ],
    },
    "Redmi Note 11": {
      image: "/images/models/xiaomi/redmi-note-11.webp",
      screen: [
        { name: "Замена экрана", price: "от 4 500 сом" },
        { name: "Замена стекла", price: "от 2 700 сом" },
        { name: "Замена сенсора", price: "от 3 300 сом" },
      ],
      battery: [
        { name: "Замена батареи", price: "от 1 800 сом" },
        { name: "Диагностика батареи", price: "Бесплатно" },
      ],
      other: [
        { name: "Замена камеры", price: "от 2 300 сом" },
        { name: "Замена разъема зарядки", price: "от 1 400 сом" },
        { name: "Ремонт после воды", price: "от 2 700 сом" },
      ],
    },
    "POCO F5": {
      image: "/images/models/xiaomi/poco-f5.webp",
      screen: [
        { name: "Замена экрана", price: "от 5 900 сом" },
        { name: "Замена стекла", price: "от 3 500 сом" },
        { name: "Замена сенсора", price: "от 4 200 сом" },
      ],
      battery: [
        { name: "Замена батареи", price: "от 2 100 сом" },
        { name: "Диагностика батареи", price: "Бесплатно" },
      ],
      other: [
        { name: "Замена камеры", price: "от 2 900 сом" },
        { name: "Замена разъема зарядки", price: "от 1 700 сом" },
        { name: "Ремонт после воды", price: "от 3 300 сом" },
      ],
    },
    "POCO X5": {
      image: "/images/models/xiaomi/poco-x5.webp",
      screen: [
        { name: "Замена экрана", price: "от 5 200 сом" },
        { name: "Замена стекла", price: "от 3 100 сом" },
        { name: "Замена сенсора", price: "от 3 800 сом" },
      ],
      battery: [
        { name: "Замена батареи", price: "от 1 900 сом" },
        { name: "Диагностика батареи", price: "Бесплатно" },
      ],
      other: [
        { name: "Замена камеры", price: "от 2 700 сом" },
        { name: "Замена разъема зарядки", price: "от 1 600 сом" },
        { name: "Ремонт после воды", price: "от 3 100 сом" },
      ],
    },
  };

  return (
    <section id="pricing" className="py-12 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          className="text-center space-y-4 mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
            Выберите модель телефона
          </h2>
          <p className="text-muted-foreground md:text-xl max-w-3xl mx-auto">
            Узнайте стоимость ремонта для вашего устройства
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {brands.map((brand, index) => (
            <motion.div
              key={brand}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index, duration: 0.4 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                variant={selectedBrand === brand ? "default" : "outline"}
                onClick={() => setSelectedBrand(brand)}
                className="transition-all text-lg"
                size="lg"
              >
                {brand}
              </Button>
            </motion.div>
          ))}
        </div>

        <div className="grid gap-8 md:grid-cols-2 items-center">
          <motion.div
            className="relative h-[500px] flex items-center justify-center bg-muted/30 rounded-lg p-8 overflow-hidden"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedModel}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="relative w-full h-full flex items-center justify-center"
              >
                <Image
                  src={
                    modelData[selectedModel as keyof typeof modelData]?.image ||
                    "/placeholder.svg"
                  }
                  alt={selectedModel}
                  width={250}
                  height={500}
                  className="object-contain"
                />
              </motion.div>
            </AnimatePresence>

            <motion.div
              className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
            />
          </motion.div>

          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="flex flex-wrap gap-2">
              {phoneModels.map((model, index) => (
                <motion.div
                  key={model}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index, duration: 0.4 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    variant={selectedModel === model ? "default" : "outline"}
                    onClick={() => setSelectedModel(model)}
                    className="transition-all"
                  >
                    {model}
                  </Button>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              <Card className="overflow-hidden">
                <CardContent className="p-6 space-y-4">
                  <AnimatePresence mode="wait">
                    <motion.h3
                      key={`title-${selectedModel}`}
                      className="text-2xl font-bold"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 20 }}
                      transition={{ duration: 0.3 }}
                    >
                      {selectedModel}
                    </motion.h3>
                  </AnimatePresence>

                  <Tabs defaultValue="screen">
                    <TabsList className="grid grid-cols-3 mb-4">
                      <TabsTrigger value="screen">Экран</TabsTrigger>
                      <TabsTrigger value="battery">Батарея</TabsTrigger>
                      <TabsTrigger value="other">Другое</TabsTrigger>
                    </TabsList>

                    <AnimatePresence mode="wait">
                      <TabsContent value="screen" className="space-y-4 mt-2">
                        {modelData[
                          selectedModel as keyof typeof modelData
                        ]?.screen.map((item, index) => (
                          <motion.div
                            key={`${selectedModel}-screen-${index}`}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1, duration: 0.3 }}
                            className="flex justify-between items-center"
                          >
                            <span>{item.name}</span>
                            <span className="font-bold">{item.price}</span>
                          </motion.div>
                        ))}
                      </TabsContent>

                      <TabsContent value="battery" className="space-y-4 mt-2">
                        {modelData[
                          selectedModel as keyof typeof modelData
                        ]?.battery.map((item, index) => (
                          <motion.div
                            key={`${selectedModel}-battery-${index}`}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1, duration: 0.3 }}
                            className="flex justify-between items-center"
                          >
                            <span>{item.name}</span>
                            <span className="font-bold">{item.price}</span>
                          </motion.div>
                        ))}
                      </TabsContent>

                      <TabsContent value="other" className="space-y-4 mt-2">
                        {modelData[
                          selectedModel as keyof typeof modelData
                        ]?.other.map((item, index) => (
                          <motion.div
                            key={`${selectedModel}-other-${index}`}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1, duration: 0.3 }}
                            className="flex justify-between items-center"
                          >
                            <span>{item.name}</span>
                            <span className="font-bold">{item.price}</span>
                          </motion.div>
                        ))}
                      </TabsContent>
                    </AnimatePresence>
                  </Tabs>

                  <motion.div
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    <Button className="w-full" asChild>
                      <a href="tel:+996227100100">Заказать ремонт</a>
                    </Button>
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
