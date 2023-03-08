import { I18nContext } from '@/context/I18n/I18nContext';
import { ValidLanguage } from '@/i18n';

import React from 'react';
import { LanguageSelector } from './LanguageSelector';

const mountComponent = (language: ValidLanguage) => {
  cy.mount(
    <I18nContext.Provider
      value={{ currentLanguage: language, t: (key) => key }}
    >
      <LanguageSelector />
    </I18nContext.Provider>,
  );
};

describe('<LanguageSelector />', () => {
  it('renders', () => {
    mountComponent('en');
  });
});
