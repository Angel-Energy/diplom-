import HomePageClient from '@/components/home-page-client';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion';

export default function Home() {
  return (
    <>
      <HomePageClient diagramsCount={58} />
      <section className="my-8">
        <h2 className="text-xl font-bold mb-4">🗂️ Преимущества модульной архитектуры</h2>
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger>Отдельные файлы</AccordionTrigger>
            <AccordionContent>
              Каждая диаграмма хранится в собственном <code>.mmd</code>-файле, что обеспечивает удобное управление и прозрачную структуру проекта.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>Простое управление</AccordionTrigger>
            <AccordionContent>
              Любую диаграмму легко найти, отредактировать или обновить — не нужно искать её в большом монолитном файле.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>Масштабируемость</AccordionTrigger>
            <AccordionContent>
              Добавление новых диаграмм не требует изменений в основном коде приложения — просто добавьте новый <code>.mmd</code>-файл и обновите каталог.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        <a href="/docs/diagrams" className="text-cyan-500 underline mt-2 inline-block">Каталог всех диаграмм</a>
      </section>
    </>
  );
}
