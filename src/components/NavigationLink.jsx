'use client';

import clsx from 'clsx';
import {useSelectedLayoutSegment} from 'next/navigation';
import {ComponentProps} from 'react';

import {Link} from '../i18n/routing';	

export default function NavigationLink({href, ...rest}) {
  const selectedLayoutSegment = useSelectedLayoutSegment();
  const pathname = selectedLayoutSegment ? `/${selectedLayoutSegment}` : '/';

  const isActive = pathname === href;

  return (
    <Link
      aria-current={isActive ? 'page' : undefined}
      className={clsx(
        isActive ? 'text-gray-100 border-b-2 border-[#8EC63F]   text-xl sm:text-[.7rem] lg:text-md xl:text-xl uppercase' : 'text-gray-100  hover:text-gray-400 text-xl sm:text-[.7rem] lg:text-md xl:text-xl uppercase'
      )}
      href={href}
      {...rest}
    />
  );
}