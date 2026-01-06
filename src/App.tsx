import React, {useEffect} from 'react';
import {Provider} from 'mobx-react';
import {MainStore} from './store/index';
import RootRoute from './route/index';
import config from './utils/config';
import { useHistory } from 'react-router-dom';

export default function (): JSX.Element {
  const store = ((window as any).store = MainStore.create(
    {},
    {
      ...config
    }
  ));
  const history = useHistory();
  useEffect(() => {
    //   // Call this function when this hook is running. It isn't
    //   // and async function or the like, so a 'normal call' like this
    //   // is enough.
    store.initData();

    // 监听导航事件
    const handleNavigate = (event: CustomEvent) => {
      if (event.detail && event.detail.path) {
        history.push(event.detail.path);
      }
    };

    window.addEventListener('navigate', handleNavigate as EventListener);

    return () => {
      window.removeEventListener('navigate', handleNavigate as EventListener);
    };
  }, [history]);
  return (
    <Provider store={store}>
      <RootRoute store={store} />
    </Provider>
  );
}
