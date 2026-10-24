import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'
import { ChevronDownIcon } from '@/components/ui/ChevronDownIcon'

function CardItem({ item, isRightColumn }) {
  const compact = !item.description
  return (
    <li
      className={clsx(
        'group/item border-t border-borderClr hover:bg-gray-100',
        compact ? 'h-[48px]' : 'h-[96px]',
        isRightColumn && 'border-l',
      )}
    >
      <Link href="#" className="flex h-full items-center">
        <span
          className={clsx(
            'flex h-full shrink-0 items-center justify-center border-r border-borderClr',
            compact ? 'w-[49px]' : 'w-[73px]',
          )}
        >
          <Image
            src={item.icon}
            width={24}
            height={24}
            alt=""
            className={clsx(
              'transition-transform duration-500 group-hover/item:scale-120',
              compact ? 'size-4' : 'size-6',
            )}
          />
        </span>
        <span className="px-4">
          <span className="block">{item.title}</span>
          {item.description && (
            <span className="block text-xs text-dropdownSubhead">
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
    <div
      className={clsx(
        'flex flex-col border-l border-borderClr first:border-l-0',
        group.width,
      )}
    >
      <p className="bg-socials px-4 py-3 text-small font-bold text-textGray uppercase">
        {group.title}
      </p>

      {group.items && (
        <ul
          className={clsx(
            'grid bg-white',
            group.columns === 2 && 'grid-cols-2',
          )}
        >
          {group.items.map((item, index) => (
            <CardItem
              key={item.title}
              item={item}
              isRightColumn={group.columns === 2 && index % 2 === 1}
            />
          ))}
        </ul>
      )}

      {group.links && (
        <ul className="flex-1 bg-socials">
          {group.links.map((label) => (
            <li
              key={label}
              className="border-t border-borderClr hover:bg-gray-100"
            >
              <Link href="#" className="flex h-[47px] items-center px-4">
                {label}
              </Link>
            </li>
          ))}
        </ul>
      )}

      {group.stories && (
        <ul className="flex h-[288px] bg-white">
          {group.stories.map((story) => (
            <li
              key={story.title}
              className="group/item w-1/2 border-t border-borderClr not-last:border-r hover:bg-gray-100"
            >
              <Link
                href="#"
                className="flex h-full flex-col justify-between p-4"
              >
                {story.title}
                <span className="relative h-[180px] w-full overflow-hidden rounded-sm">
                  <Image
                    src={story.image}
                    width={256}
                    height={182}
                    alt=""
                    className="transition-transform duration-500 group-hover/item:scale-120"
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

function UnderlinedLink({ children }) {
  return (
    <Link href="#" className="group py-4 pr-2.5 pl-4">
      {children}
      <span className="block h-px max-w-0 bg-black transition-all duration-300 group-hover:max-w-full" />
    </Link>
  )
}

export default function DesktopNav({ items }) {
  return (
    <nav aria-label="Main" className="flex h-full items-center max-lg:hidden">
      {items.map((item) =>
        item.groups ? (
          // no `relative` here: the panel is centered in the header, not under the trigger
          <div key={item.label} className="group flex h-full items-center">
            <button
              type="button"
              aria-haspopup="true"
              className="flex h-full items-center pr-2.5 pl-4"
            >
              {item.label}
              <ChevronDownIcon className="ml-1 size-5 transition-transform duration-200 group-focus-within:rotate-180 group-hover:rotate-180" />
            </button>
            <div className="invisible absolute top-[63px] right-1/2 z-10 translate-x-1/2 cursor-default group-focus-within:visible group-hover:visible">
              <div className="mt-[16px] border border-borderDrop bg-borderBg p-[6.4px]">
                <div className="flex border border-borderDrop bg-white">
                  {item.groups.map((group) => (
                    <Group key={group.title} group={group} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        ) : (
          <UnderlinedLink key={item.label}>{item.label}</UnderlinedLink>
        ),
      )}
    </nav>
  )
}
