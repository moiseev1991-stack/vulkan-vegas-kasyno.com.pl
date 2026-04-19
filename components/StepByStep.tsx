import JsonLd from './JsonLd'
import { howToSchema } from '@/lib/schema'

interface Step {
  name: string
  text: string
}

interface Props {
  title: string
  steps: Step[]
}

export default function StepByStep({ title, steps }: Props) {
  return (
    <>
      <JsonLd data={howToSchema(title, steps)} />
      <ol className="space-y-4 my-6">
        {steps.map((step, i) => (
          <li key={i} className="flex gap-4 items-start">
            <span className="flex-shrink-0 w-8 h-8 rounded-full bg-brand text-white font-bold text-sm flex items-center justify-center">
              {i + 1}
            </span>
            <div>
              <strong className="text-white block mb-1">{step.name}</strong>
              <p className="text-gray-300 text-sm leading-relaxed">{step.text}</p>
            </div>
          </li>
        ))}
      </ol>
    </>
  )
}
