import { ButtonHTMLAttributes, forwardRef } from 'react'
import cn from 'classnames'
import Loading from '@/shared/assets/icons/common/loading.svg'
import { OptionalLinkWrapper } from '@/shared/lib'

export type Variant = 'primary' | 'secondary' | 'outlined' | 'icon' | 'inverse' | 'inverseOutlined'
export type Size = 'L' | 'M' | 'S'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant
  size?: Size
  loading?: boolean
  className?: string
  href?: string
  newTab?: boolean
  childrenClassName?: string
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { children, variant = 'primary', size = 'L', type = 'button', className = '', loading, childrenClassName, ...rest },
    ref
  ) => {
    return (
      <OptionalLinkWrapper {...rest} href={rest.href}>
        <button
          ref={ref}
          className={cn(
            `group px-14 flex items-center text-[#fff] hover:text-[#fff] active:text-[#fff] disabled:text-background-hover justify-center
          px-10 rounded transition-all duration-100  disabled:cursor-not-allowed
          will-change-contents outline-none focus:outline-none`,
            {
              'bg-primary hover:bg-primary/80 disabled:bg-primary/60': variant === 'primary',
              'bg-secondary hover:bg-secondary/80': variant === 'secondary' || variant === 'icon',
              [`bg-transparent border border-primary !text-white hover:!text-primary active:border-button-press-primary active:!text-button-press-primary
            disabled:border-gray disabled:!text-gray`]: variant === 'outlined',
              [`bg-[#fff] text-primary hover:shadow-[0px_1px_14px_#FFFFFF] active:bg-[#F1F3FF]
      disabled:text-gray disabled:hover:shadow-[transparent] disabled:active:bg-[#fff]`]: variant === 'inverse',
              [`bg-transparent border border-[#fff] text-[#fff] hover:shadow-[0px_1px_10px_#FFFFFF] active:border-button-press-primary
      active:text-button-press-primary disabled:border-gray disabled:hover:shadow-[transparent] disabled:active:border-gray
      disabled:active:text-[#fff]`]: variant === 'inverseOutlined',
              'px-[60px]': variant === 'inverse' || variant === 'inverseOutlined',
              '!p-[8px]': variant === 'icon',
              ' min-h-[60px]': size === 'L',
              'min-h-[40px]': size === 'M',
              'min-h-[32px]': size === 'S',
              'pointer-events-none bg-transparent': loading,
              [className]: className,
            }
          )}
          type={type}
          {...rest}
        >
          {
            <Loading
              data-testid='loading-button-icon'
              className={cn('absolute fill-[#fff] h-[39px] animate-spin', {
                '!fill-primary': variant === 'outlined' || variant === 'inverse',
                '!fill-gray':
                  rest.disabled && (variant === 'outlined' || variant === 'inverse' || variant === 'inverseOutlined'),
                'h-[20px]': variant === 'inverse' || variant === 'inverseOutlined',
                hidden: !loading,
              })}
            />
          }
          <span
            className={cn('transition-opacity duration-100', childrenClassName, {
              'opacity-0': loading,
            })}
          >
            {children}
          </span>
        </button>
      </OptionalLinkWrapper>
    )
  }
)
