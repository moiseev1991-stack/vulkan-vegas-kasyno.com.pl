interface Props {
  pros: string[]
  cons: string[]
}

export default function ProsCons({ pros, cons }: Props) {
  return (
    <div className="grid md:grid-cols-2 gap-4 my-6">
      <div className="bg-green-950/30 border border-green-800/40 rounded-xl p-5">
        <h3 className="font-bold text-green-400 mb-3 flex items-center gap-2">
          <span>✓</span> Zalety
        </h3>
        <ul className="space-y-2">
          {pros.map((pro, i) => (
            <li key={i} className="flex items-start gap-2 text-sm text-gray-300">
              <span className="text-green-400 mt-0.5 flex-shrink-0">✓</span>
              {pro}
            </li>
          ))}
        </ul>
      </div>
      <div className="bg-red-950/30 border border-red-800/40 rounded-xl p-5">
        <h3 className="font-bold text-brand mb-3 flex items-center gap-2">
          <span>✗</span> Wady
        </h3>
        <ul className="space-y-2">
          {cons.map((con, i) => (
            <li key={i} className="flex items-start gap-2 text-sm text-gray-300">
              <span className="text-brand mt-0.5 flex-shrink-0">✗</span>
              {con}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
