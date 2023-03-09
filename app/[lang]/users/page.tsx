import { getTranslator, ValidLanguage } from '@/i18n';
import { dictionaries } from './dictionaries';

type UsersParams = {
  lang: ValidLanguage;
};

export default async function Users({
  params: { lang },
}: {
  params: UsersParams;
}) {
  const translate = getTranslator(dictionaries[lang]);
  return <h1>{translate('users')}</h1>;
}
