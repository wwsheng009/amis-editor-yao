import React, {useEffect} from 'react';
import {Provider} from 'mobx-react';
import {MainStore} from './store/index';
import RootRoute from './route/index';
import {checkLogin} from './utils/token';
import config from './utils/config';

export default function (): JSX.Element {
  const store = ((window as any).store = MainStore.create({}, config));
  useEffect(() => {
    //   // Call this function when this hook is running. It isn't
    //   // and async function or the like, so a 'normal call' like this
    //   // is enough.
    store.initData();
  }, []);

  return (
    <Provider store={store}>
      <RootRoute store={store} />
    </Provider>
  );
}
