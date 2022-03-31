import React, { AnchorHTMLAttributes, ButtonHTMLAttributes } from 'react'

type ButtonTypes =
  | AnchorHTMLAttributes<HTMLAnchorElement>
  | ButtonHTMLAttributes<HTMLButtonElement>

export type ButtonProps = {
  size?: 'small' | 'medium'
  textColor?: 'black' | 'secondary' | 'gray'
  background?: 'black' | 'gradient' | 'gray'
  fullWidth?: boolean
  as?: React.ElementType
} & ButtonTypes
