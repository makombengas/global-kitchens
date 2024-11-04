



import {useLocale, useTranslations} from 'next-intl';
import LocaleSwitcherSelect from './LocaleSwitcherSelect';
import {routing} from '../i18n/routing';

export default function LocaleSwitcher() {
  const t = useTranslations('LocaleSwitcher');
  const locale = useLocale();
  const flag = useTranslations('flags');

  return (
    <div className="flex items-center  cursor-pointer">

    <LocaleSwitcherSelect defaultValue={locale} label={t('label')}>
      {routing.locales.map((cur) => (
        <option key={cur} value={cur}>
          {t('locale', {locale: cur})}
        </option>
      ))}
    </LocaleSwitcherSelect>
    <p className={`fi fi-${flag('flag')} text-[.9rem]  md:top-0 md:text-lg absolute `}  >

    </p>
    </div>
  );
}