import {useLocale, useTranslations} from 'next-intl';
import LocaleSwitcherSelect from './LocaleSwitcherSelect';
import {locales} from '../config';
import "/node_modules/flag-icons/css/flag-icons.min.css";
export default function LocaleSwitcher() {
  const t = useTranslations('LocaleSwitcher');
  const flag = useTranslations('flags');
  const locale = useLocale();


  return (
  <div className="flex items-center  cursor-pointer">
      <LocaleSwitcherSelect defaultValue={locale} label={t('label')}  >
      {locales.map((cur) => (
        <option className='cursor-pointer  bg-[#8EC63F]  outline-none border-none absolute md:text-[1rem] p-2 text-sm'  key={cur} value={cur}>
          {t('locale', {locale: cur})}
        </option>
      ))}
    </LocaleSwitcherSelect>
    <p className={`fi fi-${flag('flag')} text-[.9rem]  md:top-0 md:text-lg absolute `}  >

    </p>
  </div>
  );
}