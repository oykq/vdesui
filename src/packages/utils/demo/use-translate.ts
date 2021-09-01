import Locale from '@/packages/__VUE/locale';
import { camelize } from '@/packages/utils/format/string';
import { createTranslate } from '@/packages/utils/create/translate';

let demoUid = 0;

export function useTranslate(i18n: Record<string, any>) {
  const demoName = `demo-i18n-${demoUid++}`;

  if (i18n) {
    const locales: Record<string, any> = {};
    const camelizedName = camelize(demoName);

    Object.keys(i18n).forEach((key) => {
      locales[key] = { [camelizedName]: i18n[key] };
    });

    Locale.add(locales);
  }

  return createTranslate(demoName);
}
