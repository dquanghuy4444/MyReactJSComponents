import React, {useState} from 'react';

import {FormattedMessage} from "react-intl";

import { I18nPropvider, LOCALES } from './i18nProvider';
import translate from "./i18nProvider/translate";


function MultiLanguageWithI18Next() {
  const [locale, setLocale] = useState(LOCALES.ENGLISH);

  return (
    <I18nPropvider locale={locale}>
      <div className="">
        <header className="">
          <h1>
            <FormattedMessage id="hello" />
          </h1>
          <h2>
            Not translated part. {translate('hello')}
          </h2>
          <p>
            {translate('edit-file', {file: <code>src/App.js</code>})}
          </p>

          <hr/>

          <button onClick={() => setLocale(LOCALES.ENGLISH)}>English</button>
          <button onClick={() => setLocale(LOCALES.FRENCH)}>French</button>
          <button onClick={() => setLocale(LOCALES.GERMAN)}>German</button>
        </header>
      </div>
    </I18nPropvider>
  );
}

export default MultiLanguageWithI18Next;
