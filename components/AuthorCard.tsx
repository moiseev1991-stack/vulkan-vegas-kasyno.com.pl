import JsonLd from './JsonLd'
import { personSchema } from '@/lib/schema'

interface Props {
  name: string
  jobTitle: string
  bio: string
  specialization: string
  photo?: string
  linkedin?: string
  email?: string
}

export default function AuthorCard({ name, jobTitle, bio, specialization, photo, linkedin, email }: Props) {
  return (
    <>
      <JsonLd data={personSchema(name, jobTitle, bio)} />
      <div className="bg-surface-card border border-white/10 rounded-xl p-6 flex flex-col sm:flex-row gap-5">
        <div className="flex-shrink-0">
          {photo ? (
            <img
              src={photo}
              alt={name}
              className="w-20 h-20 rounded-full object-cover border-2 border-brand/40"
            />
          ) : (
            <div className="w-20 h-20 rounded-full bg-surface border-2 border-brand/40 flex items-center justify-center text-3xl">
              👤
            </div>
          )}
        </div>
        <div className="flex-1">
          <h3 className="text-white font-bold text-lg">{name}</h3>
          <p className="text-brand text-sm font-medium mb-1">{jobTitle}</p>
          <p className="text-gray-500 text-xs mb-3">Specjalizacja: {specialization}</p>
          <p className="text-gray-300 text-sm leading-relaxed mb-3">{bio}</p>
          <div className="flex gap-3 text-xs">
            {linkedin && (
              <a href={linkedin} className="text-blue-400 hover:underline" rel="noopener noreferrer" target="_blank">
                LinkedIn
              </a>
            )}
            {email && (
              <a href={`mailto:${email}`} className="text-gray-400 hover:text-white">
                {email}
              </a>
            )}
          </div>
        </div>
      </div>
    </>
  )
}
