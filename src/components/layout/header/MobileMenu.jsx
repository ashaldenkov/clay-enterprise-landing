'use client'
import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'
import { ChevronDownIcon } from '@/components/ui/ChevronDownIcon'
import useScrollLock from '@/hooks/useScrollLock'

const LINE = 'my-[2px] block h-[2px] w-4 bg-black transition duration-300'
const ROW = 'flex h-[56px] w-full items-center border-b p-4 md:h-[72px] md:p-6'

function Item({ item }) {
  const compact = !item.description
  return (
    <li
      className={clsx(
        'h-[50px] border-t border-borderClr',
        !compact && 'md:h-[95px] md:w-1/2 md:odd:border-r',
      )}
    >
      <Link href="#" className="flex h-full items-center">
        <span
          className={clsx(
            'flex h-full w-[49px] shrink-0 items-center justify-center border-r border-borderClr',
            compact ? 'md:ml-2' : 'md:w-[81px]',
          )}
        >
          {/* eager: the menu is mounted on first open, so icons are ready before a section expands */}
          <Image
            src={item.icon}
            width={24}
            height={24}
            loading="eager"
            alt=""
            className={clsx('size-4', !compact && 'md:size-6')}
          />
        </span>
        <span className="px-4">
          {item.title}
          {item.description && (
            <span className="hidden text-xs text-dropdownSubhead md:block">
              {item.description}
            </span>
          )}
        </span>
      </Link>
    </li>
  )
}

function Group({ group }) {
  return (
    <div className={clsx(group.stories && 'hidden md:block')}>
      <p className="bg-socials px-4 py-3 text-small font-bold text-textGray uppercase md:px-6">
        {group.title}
      </p>

      {group.items && (
        <ul className="bg-white md:flex md:flex-wrap">
          {group.items.map((item) => (
            <Item key={item.title} item={item} />
          ))}
        </ul>
      )}

      {group.links && (
        <ul className="bg-socials">
          {group.links.map((label) => (
            <li key={label} className="border-t border-borderClr">
              <Link
                href="#"
                className="flex h-[47px] items-center px-4 md:px-6"
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      )}

      {group.stories && (
        <ul className="flex bg-white">
          {group.stories.map((story) => (
            <li
              key={story.title}
              className="w-1/2 border-t border-borderClr not-last:border-r"
            >
              <Link href="#" className="block p-4">
                <span className="mb-2 block">{story.title}</span>
                <span className="relative block h-[298px] w-full overflow-hidden rounded-sm">
                  <Image
                    src={story.image}
                    width={744}
                    height={528}
                    sizes="50vw"
                    loading="eager"
                    alt=""
                  />
                </span>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default function MobileMenu({ items }) {
  const [isOpen, setIsOpen] = useState(false)
  const [hasOpened, setHasOpened] = useState(false)
  const [openSection, setOpenSection] = useState(null)
  useScrollLock(isOpen)

  useEffect(() => {
    if (!isOpen) return
    const closeOnEscape = (event) => event.key === 'Escape' && setIsOpen(false)
    document.addEventListener('keydown', closeOnEscape)
    return () => document.removeEventListener('keydown', closeOnEscape)
  }, [isOpen])

  const toggleMenu = () => {
    setHasOpened(true)
    setIsOpen((open) => !open)
  }

  return (
    <>
      <button
        type="button"
        aria-label={isOpen ? 'Close menu' : 'Open menu'}
        aria-expanded={isOpen}
        aria-controls="mobile-menu"
        onClick={toggleMenu}
        className="mx-6 flex size-6 flex-col items-center justify-center lg:hidden"
      >
        <span className={clsx(LINE, isOpen && 'translate-y-1 rotate-45')} />
        <span className={clsx(LINE, isOpen && 'opacity-0')} />
        <span className={clsx(LINE, isOpen && '-translate-y-2 -rotate-45')} />
      </button>

      {/* the wrapper starts below the header bar and clips the sliding panel */}
      <div
        id="mobile-menu"
        inert={!isOpen}
        className={clsx(
          'fixed inset-x-0 top-[76px] bottom-0 overflow-hidden transition-[visibility] duration-300 lg:hidden',
          !isOpen && 'invisible',
        )}
      >
        <div
          className={clsx(
            'h-full overflow-y-auto bg-white text-sm transition-transform duration-300',
            !isOpen && '-translate-y-full',
          )}
        >
          {hasOpened && (
            <nav aria-label="Mobile">
              {items.map((item) => {
                if (!item.groups) {
                  return (
                    <Link key={item.label} href="#" className={ROW}>
                      {item.label}
                    </Link>
                  )
                }
                const isExpanded = openSection === item.label
                const panelId = `mobile-menu-${item.label.toLowerCase()}`
                return (
                  <div key={item.label}>
                    <button
                      type="button"
                      aria-expanded={isExpanded}
                      aria-controls={panelId}
                      onClick={() =>
                        setOpenSection(isExpanded ? null : item.label)
                      }
                      className={ROW}
                    >
                      {item.label}
                      <ChevronDownIcon
                        className={clsx(
                          'ml-1 size-5 transition-transform duration-200',
                          isExpanded && 'rotate-180',
                        )}
                      />
                    </button>
                    <div id={panelId} hidden={!isExpanded}>
                      {item.groups.map((group) => (
                        <Group key={group.title} group={group} />
                      ))}
                    </div>
                  </div>
                )
              })}
              <Link
                href="#"
                className="m-4 inline-block h-10 rounded-sm bg-black px-4 py-2 text-white md:m-6"
              >
                Start building — for free
              </Link>
            </nav>
          )}
        </div>
      </div>
    </>
  )
}
