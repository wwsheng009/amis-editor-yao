import {types, getEnv, applySnapshot, getSnapshot, flow} from 'mobx-state-tree';
import {PageStore} from './Page';
import {when, reaction} from 'mobx';
import {getToken} from '../utils/token';
let pagIndex = 1;

function getCookie(name: string) {
  const cookieValue = document.cookie.match(
    '(^|[^;]+)\\s*' + name + '\\s*=\\s*([^;]+)'
  );
  return cookieValue ? cookieValue.pop() : '';
}
function getStudioApiUrl() {
  // 使用Studio接口需要root授权
  return '/api/__yao/app/service/editor';
  // const urlSchema = window.location.protocol;
  // const urlHostname = window.location.hostname;
  // return `${urlSchema}//${urlHostname}:5077/service/editor`;

  //'http://localhost:5077/service/editor',
  // url: '/api/__yao/app/service/editor',
}
export const MainStore = types
  .model('MainStore', {
    // 当前编辑器的所有页面列表
    pages: types.optional(types.array(PageStore), [
      // {
      //   id: `${pagIndex}`,
      //   path: 'hello-world',
      //   label: 'Hello world',
      //   icon: 'fa fa-file',
      //   schema: {
      //     type: 'page',
      //     title: 'Hello world',
      //     body: '初始页面'
      //   }
      // }
    ]),
    theme: 'cxd',
    asideFixed: true,
    asideFolded: false,
    offScreen: false,
    addPageIsOpen: false,
    preview: false,
    isMobile: false,
    loading: false,
    schema: types.frozen() //当前编辑器编辑的页面源代码
  })
  .views(self => ({
    get fetcher() {
      return getEnv(self).fetcher;
    },
    get notify() {
      return getEnv(self).notify;
    },
    get alert() {
      return getEnv(self).alert;
    },
    get copy() {
      return getEnv(self).copy;
    }
  }))
  .actions(self => {
    let initialState = {};

    function toggleAsideFolded() {
      self.asideFolded = !self.asideFolded;
    }

    function toggleAsideFixed() {
      self.asideFixed = !self.asideFixed;
    }

    function toggleOffScreen() {
      self.offScreen = !self.offScreen;
    }

    function setAddPageIsOpen(isOpened: boolean) {
      self.addPageIsOpen = isOpened;
    }
    function savePagePageSchemaAt(index: number) {
      self.pages[index].updateSchema(self.schema);

      const updateData = flow(function* () {
        try {
          // 保存在数据库，不再需要studio接口
          const _ = yield self.fetcher({
            url: getStudioApiUrl(), //'http://localhost:5077/service/editor',
            // url: '/api/__yao/app/service/editor',
            method: 'post',
            data: {
              method: 'savePage',
              args: [self.pages[index].label, self.schema]
            }
          });
        } catch (err) {}
      });
      updateData();
    }

    function addPage(data: {
      label: string;
      path: string;
      icon?: string;
      schema?: any;
    }) {
      self.pages.push(
        PageStore.create({
          ...data,
          id: `${++pagIndex}`
        })
      );
    }

    function removePageAt(index: number) {
      const label = self.pages[index].label;
      self.pages.splice(index, 1);
      const deleteData = flow(function* () {
        try {
          // 保存在数据库，不再需要studio接口
          // const token = getCookie('studio');
          const _ = yield self.fetcher({
            url: getStudioApiUrl(),
            method: 'post',
            data: {
              method: 'deletePage',
              args: [label]
            }
          });
        } catch (err) {}
      });
      deleteData();
    }

    function updatePageSchemaAt(index: number) {
      self.pages[index].updateSchema(self.schema);

      // const updateData = flow(function* () {
      //   try {
      //     // const token = getCookie('studio');
      //     // 保存在数据库，不再需要studio接口
      //     const _ = yield self.fetcher({
      //       url: getStudioApiUrl(), //'http://localhost:5077/service/editor',
      //       // url: '/api/__yao/app/service/editor',
      //       method: 'post',
      //       data: {
      //         method: 'savePage',
      //         args: [self.pages[index].label, self.schema]
      //       }
      //       // config: {headers: {Authorization: 'Bearer ' + token}}
      //     });
      //   } catch (err) {}
      // });
      // updateData();
    }

    // 修改当前编辑器的源代码
    function updateSchema(value: any) {
      self.schema = value;
    }

    function setPreview(value: boolean) {
      self.preview = value;
    }

    function setIsMobile(value: boolean) {
      self.isMobile = value;
    }
    function initData() {
      applySnapshot(self, initialState);

      // window.localStorage.setItem('store', JSON.stringify({}));
      const getData = flow(function* () {
        try {
          let schemas: {[key: string]: string} = {};
          const token = getToken();

          if (token) {
            // 保存在数据库，不再需要studio接口
            const response = yield self.fetcher({
              url: getStudioApiUrl(), //'http://localhost:5077/service/editor',
              // url: '/api/__yao/app/service/editor',
              method: 'post',
              data: {
                method: 'getPages',
                args: []
              }
              // config: {headers: {Authorization: 'Bearer ' + token}}
            });
            schemas = response.data.data as any;
          }
          // applySnapshot(self, initialState);
          for (let property in schemas) {
            // console.log(schemas[property]);
            const data = {
              label: property,
              path: property,
              schema: schemas[property]
            };
            self.pages.push(
              PageStore.create({
                ...data,
                id: `${++pagIndex}`
              })
            );
            // code to be executed
          }
          // }
        } catch (err) {}
      });

      getData();
    }
    return {
      toggleAsideFolded,
      toggleAsideFixed,
      toggleOffScreen,
      setAddPageIsOpen,
      savePagePageSchemaAt,
      addPage,
      removePageAt,
      updatePageSchemaAt,
      updateSchema,
      setPreview,
      setIsMobile,
      initData,
      afterCreate: function () {
        initialState = getSnapshot(self);

        // persist store
        if (typeof window !== 'undefined' && window.localStorage) {
          const storeData = window.localStorage.getItem('store');
          if (storeData) applySnapshot(self, JSON.parse(storeData));

          reaction(
            () => getSnapshot(self),
            json => {
              window.localStorage.setItem('store', JSON.stringify(json));
            }
          );
        }
      }
    };
  });

export type IMainStore = typeof MainStore.Type;
