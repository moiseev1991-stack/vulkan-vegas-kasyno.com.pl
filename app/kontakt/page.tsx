'use client'

import BreadcrumbList from '@/components/BreadcrumbList'
import LastUpdated from '@/components/LastUpdated'
import { CONTACT_EMAIL, PUBLISHED_DATE } from '@/lib/constants'

export default function KontaktPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <BreadcrumbList items={[
        { name: 'Home', url: '/' },
        { name: 'Kontakt', url: '/kontakt' },
      ]} />

      <LastUpdated date={PUBLISHED_DATE} reviewedBy="Marek Kowalski" />

      <h1 className="text-3xl md:text-4xl font-extrabold text-white mb-4 leading-tight">
        Kontakt z Redakcją Vulkan Vegas Polska: Email oraz Formularz
      </h1>

      <p className="text-gray-300 leading-relaxed mb-8">
        Skontaktuj się z redakcją serwisu vulkan-vegas-kasyno.com.pl. Odpowiadamy na wszystkie wiadomości
        w ciągu 48 godzin roboczych. Pytania dotyczące treści, afiliacji lub błędów w artykułach
        kieruj na adres email lub przez poniższy formularz.
      </p>

      <div className="grid md:grid-cols-2 gap-8 mb-10">
        <div>
          <h2 className="text-xl font-bold text-white mb-4">Dane kontaktowe</h2>
          <div className="space-y-3 text-sm">
            <div>
              <span className="text-gray-400 block">Email redakcji</span>
              <a href={`mailto:${CONTACT_EMAIL}`} className="text-brand hover:underline font-medium">{CONTACT_EMAIL}</a>
            </div>
            <div>
              <span className="text-gray-400 block">Czas odpowiedzi</span>
              <span className="text-gray-200">Do 48 godzin roboczych</span>
            </div>
            <div>
              <span className="text-gray-400 block">Godziny pracy redakcji</span>
              <span className="text-gray-200">Poniedziałek – Piątek, 9:00 – 17:00</span>
            </div>
          </div>

          <div className="mt-6">
            <h3 className="text-white font-semibold mb-2">W jakich sprawach możesz pisać?</h3>
            <ul className="space-y-1 text-sm text-gray-300">
              <li className="flex gap-2"><span className="text-brand">→</span> Błędy w artykułach lub nieaktualne informacje</li>
              <li className="flex gap-2"><span className="text-brand">→</span> Pytania dotyczące afiliacji</li>
              <li className="flex gap-2"><span className="text-brand">→</span> Propozycje tematów artykułów</li>
              <li className="flex gap-2"><span className="text-brand">→</span> Współpraca medialna</li>
              <li className="flex gap-2"><span className="text-brand">→</span> Naruszenia praw autorskich</li>
            </ul>
          </div>
        </div>

        <div>
          <h2 className="text-xl font-bold text-white mb-4">Formularz kontaktowy</h2>
          <form
            onSubmit={(e) => {
              e.preventDefault()
              alert('Dziękujemy za wiadomość! Odpiszemy w ciągu 48 godzin roboczych.')
            }}
            className="space-y-4"
          >
            <div>
              <label htmlFor="name" className="block text-sm text-gray-400 mb-1">Imię *</label>
              <input
                id="name"
                type="text"
                required
                className="w-full bg-surface border border-white/20 rounded-lg px-4 py-2.5 text-white text-sm focus:outline-none focus:border-brand"
                placeholder="Jan Kowalski"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm text-gray-400 mb-1">Email *</label>
              <input
                id="email"
                type="email"
                required
                className="w-full bg-surface border border-white/20 rounded-lg px-4 py-2.5 text-white text-sm focus:outline-none focus:border-brand"
                placeholder="jan@example.com"
              />
            </div>
            <div>
              <label htmlFor="subject" className="block text-sm text-gray-400 mb-1">Temat *</label>
              <input
                id="subject"
                type="text"
                required
                className="w-full bg-surface border border-white/20 rounded-lg px-4 py-2.5 text-white text-sm focus:outline-none focus:border-brand"
                placeholder="Temat wiadomości"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm text-gray-400 mb-1">Wiadomość *</label>
              <textarea
                id="message"
                required
                rows={5}
                className="w-full bg-surface border border-white/20 rounded-lg px-4 py-2.5 text-white text-sm focus:outline-none focus:border-brand resize-none"
                placeholder="Twoja wiadomość..."
              />
            </div>
            <div className="flex items-start gap-3">
              <input
                id="rodo"
                type="checkbox"
                required
                className="mt-1 flex-shrink-0"
              />
              <label htmlFor="rodo" className="text-xs text-gray-400 leading-relaxed">
                Wyrażam zgodę na przetwarzanie moich danych osobowych przez redakcję vulkan-vegas-kasyno.com.pl
                w celu odpowiedzi na moją wiadomość, zgodnie z{' '}
                <a href="/polityka-prywatnosci" className="text-brand hover:underline">polityką prywatności</a>. *
              </label>
            </div>
            <button
              type="submit"
              className="w-full bg-brand hover:bg-brand-dark text-white font-bold py-3 rounded-lg transition-colors"
            >
              Wyślij wiadomość
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
