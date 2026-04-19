import type { Metadata } from 'next'
import Link from 'next/link'
import BreadcrumbList from '@/components/BreadcrumbList'
import LastUpdated from '@/components/LastUpdated'
import JsonLd from '@/components/JsonLd'
import { webPageSchema } from '@/lib/schema'
import { PUBLISHED_DATE, CONTACT_EMAIL, SITE_NAME } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'O Nas Vulkan Vegas Polska 2026: Zespół Recenzentów Kasyn',
  description: 'Poznaj zespół redakcyjny serwisu Vulkan Vegas Polska 2026. Jesteśmy niezależnymi ekspertami od hazardu online oraz afiliacji kasyn, piszącymi recenzje dla polskich graczy.',
  alternates: { canonical: '/o-nas' },
  openGraph: {
    title: 'O Nas Vulkan Vegas Polska 2026: Zespół Recenzentów Kasyn',
    description: 'Poznaj zespół redakcyjny serwisu Vulkan Vegas Polska 2026. Jesteśmy niezależnymi ekspertami od hazardu online oraz afiliacji kasyn, piszącymi recenzje dla polskich graczy.',
    url: 'https://vulkan-vegas-kasyno.com.pl/o-nas',
    type: 'article',
    locale: 'pl_PL',
  },
}

export default function ONasPage() {
  return (
    <>
      <JsonLd data={webPageSchema('O Nas Vulkan Vegas Polska 2026: Zespół Recenzentów Kasyn', '/o-nas')} />

      <div className="max-w-4xl mx-auto px-4 py-8">
        <BreadcrumbList items={[
          { name: 'Home', url: '/' },
          { name: 'O nas', url: '/o-nas' },
        ]} />

        <LastUpdated date={PUBLISHED_DATE} reviewedBy="Marek Kowalski" />

        <h1 className="text-3xl md:text-4xl font-extrabold text-white mb-4 leading-tight">
          O Nas: Redakcja vulkan-vegas-kasyno.com.pl i Nasz Sposób Pracy
        </h1>

        <h2 className="text-2xl font-bold text-white mb-4">Misja serwisu</h2>
        <p className="text-gray-300 leading-relaxed mb-4">
          {SITE_NAME} to niezależny portal informacyjno-afiliacyjny stworzony z myślą o polskich graczach
          szukających rzetelnych, sprawdzonych informacji o kasynie Vulkan Vegas. Tworzymy treści,
          które pomagają podjąć świadomą decyzję — bez ukrytych interesów i bez koloryzowania rzeczywistości.
        </p>
        <p className="text-gray-300 leading-relaxed mb-8">
          Nie jesteśmy właścicielem kasyna Vulkan Vegas ani jego oddziałem marketingowym.
          Oceniamy je tak samo, jak każdy inny niezależny recenzent — z perspektywy gracza,
          który chce wiedzieć, co naprawdę otrzyma po rejestracji.
        </p>

        <h2 className="text-2xl font-bold text-white mb-4">Kim jesteśmy</h2>
        <p className="text-gray-300 leading-relaxed mb-4">
          Nasz zespół to specjaliści z łącznie ponad 12 lat praktycznego doświadczenia w branży
          kasyn online. Testowaliśmy setki ofert bonusowych, weryfikowaliśmy procesy wypłat
          i analizowaliśmy warunki licencyjne — zanim zaczęliśmy pisać o Vulkan Vegas.
        </p>
        <p className="text-gray-300 leading-relaxed mb-4">
          W skład redakcji wchodzą: doświadczeni recenzenci kasyn, specjaliści ds. płatności
          i bezpieczeństwa cyfrowego oraz redaktorzy z rodowodem prawniczym, którzy dbają
          o precyzję informacji dotyczących regulacji i licencji.
        </p>
        <p className="text-gray-300 leading-relaxed mb-8">
          Każdy materiał przechodzi wewnętrzny proces weryfikacji przed publikacją.
          Poznaj naszych autorów: <Link href="/zespol" className="text-brand hover:underline">Zespół redakcyjny</Link>.
        </p>

        <h2 className="text-2xl font-bold text-white mb-4">Jak pracujemy</h2>
        <p className="text-gray-300 leading-relaxed mb-4">
          Recenzje i artykuły tworzone są w oparciu o naszą opracowaną{' '}
          <Link href="/metodologia-recenzji" className="text-brand hover:underline">metodologię recenzji kasyn</Link>,
          obejmującą 10 kryteriów z przypisanymi wagami. Testujemy kasyno na realnych kontach
          — sprawdzamy szybkość wypłat, reagowanie supportu i faktyczne warunki bonusów, nie tylko
          to, co pisze operator w regulaminie.
        </p>
        <p className="text-gray-300 leading-relaxed mb-4">
          Wszystkie twierdzenia dotyczące prawa i regulacji opieramy na oficjalnych dokumentach:
          Dzienniku Ustaw, komunikatach Ministerstwa Finansów RP oraz bazach licencji regulatorów
          (Curaçao eGaming, MGA, UKGC). Nie powielamy informacji z niepewnych źródeł.
        </p>
        <p className="text-gray-300 leading-relaxed mb-8">
          Treści aktualizujemy regularnie — zazwyczaj co kwartał lub przy każdej istotnej zmianie
          w ofercie kasyna. Data ostatniej aktualizacji jest widoczna na każdej stronie.
        </p>

        <h2 className="text-2xl font-bold text-white mb-4">Standardy jakości</h2>
        <div className="space-y-3 mb-8">
          {[
            { title: 'Transparentność afiliacyjna', desc: 'Jasno informujemy, które linki są afiliacyjne. Szczegóły w informacji afiliacyjnej.' },
            { title: 'Niezależność ocen', desc: 'Prowizja afiliacyjna nie wpływa na oceny. Opisujemy wady kasyna równie szczegółowo jak zalety.' },
            { title: 'Aktualność informacji', desc: 'Każdy artykuł zawiera datę ostatniej aktualizacji i jest regularnie przeglądany.' },
            { title: 'Polska perspektywa', desc: 'Piszemy wyłącznie po polsku, z uwzględnieniem specyfiki polskiego prawa i rynku płatności.' },
          ].map((s) => (
            <div key={s.title} className="bg-surface-card border border-white/10 rounded-lg p-4">
              <p className="text-white font-semibold text-sm mb-1">{s.title}</p>
              <p className="text-gray-400 text-sm">{s.desc}</p>
            </div>
          ))}
        </div>

        <h2 className="text-2xl font-bold text-white mb-4">Niezależność redakcji</h2>
        <p className="text-gray-300 leading-relaxed mb-4">
          Serwis utrzymuje się z modelu afiliacyjnego — otrzymujemy prowizję od operatora kasyna
          za użytkowników, którzy zarejestrują się przez nasze linki. Pełne szczegóły tego
          mechanizmu znajdziesz w{' '}
          <Link href="/informacja-afiliacyjna" className="text-brand hover:underline">informacji afiliacyjnej</Link>.
        </p>
        <p className="text-gray-300 leading-relaxed mb-8">
          To finansowanie redakcji w żaden sposób nie modyfikuje naszych ocen. Piszemy otwarcie
          o braku polskiej licencji kasyna, o długich czasach oczekiwania na wypłaty w określonych
          metodach płatności i o rygorystycznych warunkach obrotu bonusami.
        </p>

        <h2 className="text-2xl font-bold text-white mb-4">Kontakt z redakcją</h2>
        <p className="text-gray-300 leading-relaxed mb-4">
          Znalazłeś błąd? Masz propozycję artykułu? Chcesz nawiązać współpracę mediową?
          Czekamy na Twoją wiadomość:
        </p>
        <ul className="space-y-2 text-sm text-gray-300 mb-8">
          <li>Email: <a href={`mailto:${CONTACT_EMAIL}`} className="text-brand hover:underline">{CONTACT_EMAIL}</a></li>
          <li>Formularz: <Link href="/kontakt" className="text-brand hover:underline">strona kontaktowa</Link></li>
          <li>Czas odpowiedzi: do 48 godzin roboczych (pn–pt)</li>
        </ul>
      </div>
    </>
  )
}
