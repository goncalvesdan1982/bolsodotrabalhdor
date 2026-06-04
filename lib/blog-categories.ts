export const CATEGORY_CONFIG: Record<string, {
  label: string
  color: string
  colorHex: string
  textColor: string
  gradient: string
}> = {
  'Dívidas': {
    label: 'Dívidas',
    color: 'bg-red-700',
    colorHex: '#b91c1c',
    textColor: 'text-white',
    gradient: 'from-red-800 to-red-600',
  },
  'Cartões': {
    label: 'Cartões',
    color: 'bg-indigo-700',
    colorHex: '#4338ca',
    textColor: 'text-white',
    gradient: 'from-indigo-800 to-indigo-600',
  },
  'Empréstimos': {
    label: 'Empréstimos',
    color: 'bg-amber-700',
    colorHex: '#b45309',
    textColor: 'text-white',
    gradient: 'from-amber-800 to-amber-600',
  },
  'Score': {
    label: 'Score',
    color: 'bg-blue-700',
    colorHex: '#1d4ed8',
    textColor: 'text-white',
    gradient: 'from-blue-800 to-blue-600',
  },
  'Organização Financeira': {
    label: 'Organização Financeira',
    color: 'bg-teal-700',
    colorHex: '#0f766e',
    textColor: 'text-white',
    gradient: 'from-teal-800 to-teal-600',
  },
  'Custo de Vida': {
    label: 'Custo de Vida',
    color: 'bg-violet-700',
    colorHex: '#6d28d9',
    textColor: 'text-white',
    gradient: 'from-violet-800 to-violet-600',
  },
}

export function getCategoryConfig(category: string) {
  return CATEGORY_CONFIG[category] ?? {
    label: category,
    color: 'bg-gray-700',
    colorHex: '#374151',
    textColor: 'text-white',
    gradient: 'from-gray-800 to-gray-600',
  }
}
