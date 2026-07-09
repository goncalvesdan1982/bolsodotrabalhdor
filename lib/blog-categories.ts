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
    color: 'bg-orange-700',
    colorHex: '#c2410c',
    textColor: 'text-white',
    gradient: 'from-orange-800 to-orange-600',
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
    color: 'bg-cyan-700',
    colorHex: '#0e7490',
    textColor: 'text-white',
    gradient: 'from-cyan-800 to-cyan-600',
  },
}

export function getCategorySlug(category: string): string {
  const slugs: Record<string, string> = {
    'Dívidas': 'dividas',
    'Cartões': 'cartoes',
    'Empréstimos': 'emprestimos',
    'Score': 'score',
    'Organização Financeira': 'organizacao-financeira',
    'Custo de Vida': 'custo-de-vida',
  }
  return slugs[category] || category
    .toLowerCase()
    .normalize('NFD').replace(/[\u0300-\u036f]/g, '')
    .replace(/\s+/g, '-')
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
