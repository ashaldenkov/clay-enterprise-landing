import clsx from 'clsx'
import { ArrowLink } from './ArrowLink'

export function ContactButton({ className }) {
  return (
    <ArrowLink className={clsx('whitespace-nowrap', className)}>
      Talk to a GTM Engineer
    </ArrowLink>
  )
}
