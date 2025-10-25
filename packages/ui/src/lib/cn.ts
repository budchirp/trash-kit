import { twMerge } from 'tailwind-merge'

export const cn = (...classnames: any[]): string => {
  return twMerge(classnames.filter(Boolean).join(' '))
}
