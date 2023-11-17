import React from 'react';
import {ToastComponent, AlertComponent, Spinner} from 'amis';
/**
 * BrowserRouter: history 路由模式
 * HashRouter: hash 路由模式
 */
import {Route, Switch, Redirect, HashRouter as Router} from 'react-router-dom';
import {observer} from 'mobx-react';
import {IMainStore} from '../store/index';
// import Preview from './Preview';
// import Editor from './Editor';
import '../renderer/MyRenderer';
import {getToken} from '../utils/token';
const Preview = React.lazy(() => import('./Preview'));
const Editor = React.lazy(() => import('./Editor'));
const Login = React.lazy(() => import('./Login'));

export default observer(function ({store}: {store: IMainStore}) {
  let token = getToken();
  let isLogin = false;
  if (token) {
    isLogin = true;
  }

  return (
    <Router>
      <div className="routes-wrapper">
        <ToastComponent key="toast" position={'top-right'} />
        <AlertComponent key="alert" />
        <React.Suspense
          fallback={<Spinner overlay className="m-t-lg" size="lg" />}
        >
          <Switch>
            {/* <Redirect to={`/hello-world`} from={`/`} exact /> */}
            {/* <Route path="/about" component={About} /> */}
            <Route exact path="/login" component={Login} />
            {/* <Route path="/hello" component={Hello} /> */}
            <Route exact path="/edit/:id" component={Editor} />
            <Route component={Preview} />
          </Switch>
        </React.Suspense>
      </div>
    </Router>
  );
});
