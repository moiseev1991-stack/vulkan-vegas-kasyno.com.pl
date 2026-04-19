interface Props {
  name: string
  logo?: string
  minDeposit: string
  maxWithdrawal: string
  processingTime: string
  fee: string
}

export default function PaymentMethodCard({ name, logo, minDeposit, maxWithdrawal, processingTime, fee }: Props) {
  return (
    <div className="bg-surface-card border border-white/10 rounded-xl p-4 flex flex-col gap-3">
      <div className="flex items-center gap-3">
        {logo ? (
          <img src={logo} alt={name} className="h-8 w-auto object-contain" />
        ) : (
          <div className="w-10 h-8 bg-surface rounded flex items-center justify-center text-lg">💳</div>
        )}
        <span className="font-bold text-white">{name}</span>
      </div>
      <dl className="grid grid-cols-2 gap-2 text-sm">
        <div>
          <dt className="text-gray-500 text-xs">Min depozyt</dt>
          <dd className="text-gray-200 font-medium">{minDeposit}</dd>
        </div>
        <div>
          <dt className="text-gray-500 text-xs">Maks wypłata</dt>
          <dd className="text-gray-200 font-medium">{maxWithdrawal}</dd>
        </div>
        <div>
          <dt className="text-gray-500 text-xs">Czas realizacji</dt>
          <dd className="text-gray-200 font-medium">{processingTime}</dd>
        </div>
        <div>
          <dt className="text-gray-500 text-xs">Prowizja</dt>
          <dd className="text-gray-200 font-medium">{fee}</dd>
        </div>
      </dl>
    </div>
  )
}
