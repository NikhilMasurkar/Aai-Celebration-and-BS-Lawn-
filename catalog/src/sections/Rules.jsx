import SectionHeading from '@/components/SectionHeading'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { ruleHighlights, rules, ui } from '@/content'
import { useLang } from '@/lang'

export default function Rules() {
  const { t } = useLang()
  return (
    <section id="rules" aria-labelledby="rules-title" className="scroll-mt-16 px-4 py-20 sm:py-28">
      <div className="mx-auto max-w-3xl">
        <SectionHeading id="rules-title">{t(ui.rulesTitle)}</SectionHeading>

        <ul className="divide-y divide-border rounded-md bg-mist px-5">
          {ruleHighlights.map((h) => (
            <li key={h.en} className="flex items-baseline gap-3 py-4 text-lg">
              <span aria-hidden="true" className="size-2 shrink-0 -translate-y-0.5 rotate-45 bg-gold" />
              {t(h)}
            </li>
          ))}
        </ul>

        <Accordion type="single" collapsible className="mt-4">
          <AccordionItem value="all" className="border-b-0">
            <AccordionTrigger className="min-h-11 flex-none justify-start gap-2 text-base font-semibold text-maroon hover:no-underline [&_svg]:ml-0">
              {t(ui.rulesShowAll)}
            </AccordionTrigger>
            <AccordionContent>
              <ol className="list-decimal space-y-3 pt-2 pl-6 text-base leading-relaxed marker:font-semibold marker:text-gold">
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
