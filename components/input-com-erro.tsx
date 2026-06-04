import { AlertCircle } from 'lucide-react'

interface InputComErroProps {
  htmlFor: string
  label: string
  error?: string
  children: React.ReactNode
}

export function InputComErro({ htmlFor, label, error, children }: InputComErroProps) {
  return (
    <div className="space-y-2">
      <label htmlFor={htmlFor} className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
        {label}
      </label>
      {children}
      {error && (
        <p className="flex items-center gap-1 text-xs text-red-500 font-medium">
          <AlertCircle className="w-3 h-3" />
          {error}
        </p>
      )}
    </div>
  )
}
