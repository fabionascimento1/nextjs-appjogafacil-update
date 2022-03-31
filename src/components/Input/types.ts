import { InputHTMLAttributes } from 'react'

export type InputProps = {
  placeholder: string
  type: 'text' | 'password'
  icon?: string
  togglePassword?: boolean
  disabled?: boolean
  error?: string
} & InputHTMLAttributes<HTMLInputElement>
