'use client';

import clsx from 'clsx';
import {useParams} from 'next/navigation';
import { useState, useTransition} from 'react';
import {useRouter, usePathname} from '../navigation';

import { useTranslations } from 'next-intl';

export default function LocaleSwitcherSelect({
  children,
  defaultValue,
  label,
 
}) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const pathname = usePathname();
  const params = useParams();
  const flags = useTranslations('flags');



  function onSelectChange(event) {
    event.preventDefault();
    const nextLocale = event.target.value;
  
    startTransition(() => {
      router.replace(
        // @ts-expect-error -- TypeScript will validate that only known `params`
        // are used in combination with a given `pathname`. Since the two will
        // always match for the current route, we can skip runtime checks.
        {pathname, params},
        {locale: nextLocale,  scroll: false }
        
      );
    });
   
  }



  return (
    <div className="flex justify-center items-center">
        <label
      className={clsx(
        'relative text-gray-800',
        isPending && 'transition-opacity [&:disabled]:opacity-30'
      )}
    >
      <p className="sr-only">{label}</p>
      <select
        className=" outline-none bg-[#8EC63F] border-none  cursor-pointer inline-flex appearance-none bg-transparent text-[.7rem] md:text-lg  pl-2 "
        defaultValue={defaultValue}
        disabled={isPending}
        onChange={onSelectChange}
      >
        {children}
      </select>
    </label>
     
    </div>
  );
}