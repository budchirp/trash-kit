import { twMerge } from 'tailwind-merge'

type ClassName = Parameters<typeof twMerge>[number]

export const cn = (...classnames: ClassName[]): string => {
  return twMerge(...classnames)
}
