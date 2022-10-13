import * as CheckboxPrimititve from '@radix-ui/react-checkbox';
import { Check } from "phosphor-react";

export interface CheckboxProps {}

export function Checkbox({}: CheckboxProps) {
  return (
    <CheckboxPrimititve.Root className='flex flex-row justify-center items-center gap-[10px] w-6 h-6 p-[2x] bg-gray-800 rounded'>
      <CheckboxPrimititve.Indicator asChild>
        <Check weight='bold' className='h-5 w-5 text-cyan-500' />
      </CheckboxPrimititve.Indicator>
    </CheckboxPrimititve.Root>
  )
}
