import { FC, InputHTMLAttributes } from 'react'
import NumericInput from 'react-numeric-input'

export const NumberInput: FC<InputHTMLAttributes<HTMLInputElement>> = ({ ...rest }) => {
  return <NumericInput className='counter' defaultValue={1} min={1} strict mobile max={10} />
}
