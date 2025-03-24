import { Phone, Clock, MapPin } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export function Contact() {
  return (
    <section id="contact" className="py-8 sm:py-12 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-2xl mx-auto">
          <Card>
            <CardContent className="p-4 sm:p-6 space-y-4">
              <h3 className="text-xl font-bold">Заказать ремонт</h3>
              <form className="space-y-4">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">
                    Ваше имя
                  </label>
                  <Input id="name" placeholder="Введите ваше имя" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="phone" className="text-sm font-medium">
                    Телефон
                  </label>
                  <Input id="phone" placeholder="+996 (___) ___-___" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="model" className="text-sm font-medium">
                    Модель телефона
                  </label>
                  <Input id="model" placeholder="Например: Galaxy S23" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="problem" className="text-sm font-medium">
                    Опишите проблему
                  </label>
                  <Textarea id="problem" placeholder="Что случилось с вашим телефоном?" />
                </div>
                <Button type="submit" className="w-full" asChild>
                  <a href="tel:+996555123456">Отправить заявку</a>
                </Button>
              </form>
              <p className="text-xs text-muted-foreground text-center">
                Нажимая кнопку "Отправить заявку", вы соглашаетесь с политикой конфиденциальности
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

