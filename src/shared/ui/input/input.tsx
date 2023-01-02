import { forwardRef, InputHTMLAttributes, useState } from 'react'
import CloseEye from '@/shared/assets/icons/common/closeEye.svg'
import OpenEye from '@/shared/assets/icons/common/openEye.svg'
import cn from 'classnames'
import { MEDIUM_PASSWORD_REG_EXP, STRONG_PASSWORD_REG_EXP } from '@/shared/config'

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string
  label?: string
  error?: boolean
  errorMessage?: string
  passwordStrength?: boolean
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ name, label, error, errorMessage, className = '', type = 'text', passwordStrength, ...rest }, ref) => {
    const [isFocused, setIsFocused] = useState(false)
    const [isOpen, onOpen] = useState(false)

    const SuffixIcon = isOpen ? OpenEye : CloseEye

    const getPasswordStrength = (value: string) => {
      if (STRONG_PASSWORD_REG_EXP.test(value)) {
        return <span className='text-green'>Сильный</span>
      }
      if (MEDIUM_PASSWORD_REG_EXP.test(value)) {
        return <span className='text-orange'>Средний</span>
      }
      return <span className='text-red'>Слабый</span>
    }

    return (
      <div
        className={cn('group flex flex-col w-full text-subtext', {
          [className]: className,
        })}
      >
        <label
          htmlFor={name}
          className={cn('text-hard', {
            '!text-error group-hover:text-error': error,
            'group-hover:text-gray': rest.disabled,
          })}
        >
          {label}
        </label>
        <div
          className={cn('flex items-center h-10 rounded-base px-4 gap-base border bg-surface border-light', {
            '!border-secondary': isFocused,
            'border-transparent': !isFocused,
            '!bg-ligtest ': rest.disabled,
            '!border-error': error,
          })}
        >
          <input
            {...rest}
            ref={ref}
            id={name}
            name={name}
            type={isOpen ? 'text' : type}
            className={cn(
              `focus:outline-none w-full
                text-white caret-secondary focus:text-white bg-surface disabled:bg-ligtest
                border border-transparent disabled:cursor-not-allowed disabled:text-gray disabled:group-hover:text-gray`,
              {
                'group-hover:text-error focus:text-error caret-error': error,
              }
            )}
            onFocus={e => {
              setIsFocused(true)
              rest.onFocus?.(e)
            }}
            onBlur={e => {
              setIsFocused(false)
              rest?.onBlur?.(e)
            }}
          />
          {type === 'password' && (
            <button
              type='button'
              className={cn('input-focus focus-visible:ring-primary', {
                'focus-visible:ring-red': error,
              })}
              onClick={() => !rest.disabled && onOpen(prev => !prev)}
            >
              <SuffixIcon
                className={cn('stroke-primary w-[18px] h-[18px] cursor-pointer', {
                  'stroke-red': error,
                  'stroke-gray !cursor-not-allowed': rest.disabled,
                })}
              />
            </button>
          )}
        </div>
        {error && <p className='text-red mt-[3px]'>{errorMessage}</p>}
        {passwordStrength && type === 'password' && rest.value && (
          <div className='flex items-center gap-1 text-subtext mt-base'>
            <span className='text-white'>Надежность пароля:</span>
            {getPasswordStrength(rest.value as string)}
          </div>
        )}
      </div>
    )
  }
)
