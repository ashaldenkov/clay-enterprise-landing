import Link from 'next/link'
import clsx from 'clsx'
import { AnimatedArrow } from './ArrowIcon'

const VARIANTS = {
  primary: 'bg-black px-4 py-2 text-white hover:opacity-80',
  outline: 'border border-black px-4 py-2 hover:opacity-80',
  inverted: 'bg-white px-4 py-2 text-black',
  text: 'hover:opacity-80',
}

export function ArrowLink({
  href = '#',
  variant = 'primary',
  className,
  children,
}) {
  return (
    <Link
      href={href}
      className={clsx(
        'group flex h-fit w-fit items-center rounded-sm transition duration-300',
        VARIANTS[variant],
        className,
      )}
    >
      <span>{children}</span>
      <AnimatedArrow />
    </Link>
  )
}
