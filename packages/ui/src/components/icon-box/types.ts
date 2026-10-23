import type { ComponentProps } from 'react'

import type { VariantProps } from 'class-variance-authority'

import type { iconBoxStyle } from '@/components/icon-box/icon-box.style'

export type IconBoxProps = Omit<ComponentProps<'div'>, 'color'> & VariantProps<typeof iconBoxStyle>
