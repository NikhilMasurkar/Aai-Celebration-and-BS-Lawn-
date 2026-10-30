import SectionHeading from '@/components/SectionHeading'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { ruleHighlights, rules, ui } from '@/content'
import { useLang } from '@/lang'

export default function Rules() {
  const { t } = useLang()
  return (
    <section id="rules" aria-labelledby="rules-title" className="fade-up scroll-mt-16 bg-paper px-4 py-20">
      <div className="mx-auto max-w-3xl">
        <SectionHeading id="rules-title">{t(ui.rulesTitle)}</SectionHeading>

        <ul className="grid gap-3 sm:grid-cols-2">
          {ruleHighlights.map((h) => (
            <li key={h.en} className="rounded-sm border-l-2 border-gold bg-card px-4 py-3 font-medium">
              {t(h)}
            </li>
          ))}
        </ul>

        <Accordion type="single" collapsible className="mt-6">
          <AccordionItem value="all" className="border-b-0">
            <AccordionTrigger className="justify-center gap-2 text-base font-medium text-maroon hover:no-underline">
              {t(ui.rulesShowAll)}
            </AccordionTrigger>
            <AccordionContent>
              <ol className="list-decimal space-y-3 pt-2 pl-6 text-base leading-relaxed marker:text-gold">
                {rules.map((rule) => (
                  <li key={rule.en}>{t(rule)}</li>
                ))}
              </ol>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  )
}
