type Props = {
  label: string
  value: number
}

export function Progress({ label, value }: Props) {
  const safe = Math.max(0, Math.min(100, value))
  return (
    <div className="progressRow">
      <div className="progressLabel">{label}</div>
      <div className="muted2">{safe}%</div>
      <div className="progress" role="progressbar" aria-valuenow={safe} aria-valuemin={0} aria-valuemax={100}>
        <div className="progressFill" style={{ width: `${safe}%` }} />
      </div>
    </div>
  )
}

