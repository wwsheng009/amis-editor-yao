import {schema2component} from '../component/AMISRenderer';
import config from '../utils/config';

const appInfo = await config.fetcher({
  method: 'get',
  url: '/api/__yao/app/setting'
});
const token_storage_type =
  appInfo.data?.data?.token?.storage || 'sessionStorage';

//@ts-ignore
__xgenSetTokenStorageType(token_storage_type);

export default schema2component({
  type: 'page',
  title: 'x1',
  body: [
    {
      type: 'flex',
      id: 'u:b966e0d731ee',
      className: 'p-1',
      items: [
        {
          type: 'container',
          body: [
            {
              type: 'container',
              body: [
                {
                  type: 'tpl',
                  tpl: '请登录系统',
                  inline: true,
                  wrapperComponent: 'h1',
                  id: 'u:984c8b793d59'
                }
              ],
              style: {
                'position': 'static',
                'display': 'block',
                'text-align': 'center'
              },
              wrapperBody: false,
              id: 'u:ca90e0af9a90',
              isFixedHeight: false,
              isFixedWidth: false
            },
            {
              type: 'form',
              title: '',
              data: {
                username: 'xiang@iqka.com',
                password: 'A123456p+'
              },
              api: {
                url: '/api/__yao/login/admin',
                method: 'post',
                data: {
                  password: '${password}',
                  captcha: {
                    id: '${captcha.id}',
                    code: '${code}'
                  },
                  email: '${username}'
                },
                dataType: 'json',
                requestAdaptor: '',
                adaptor: 'return yao_amis.login(payload,response,api,context)',
                messages: {}
              },
              redirect: '/amis-admin',
              body: [
                {
                  label: '用户名',
                  type: 'input-email',
                  name: 'username',
                  id: 'u:31e63ad3f078',
                  labelWidth: '25%',
                  required: true
                },
                {
                  type: 'input-password',
                  name: 'password',
                  id: 'u:1409ae59b46a',
                  label: '密码',
                  showCounter: false,
                  validations: {},
                  validationErrors: {},
                  size: 'full',
                  labelWidth: '25%',
                  required: true
                },
                {
                  type: 'flex',
                  className: 'p-1',
                  items: [
                    {
                      type: 'container',
                      body: [
                        {
                          type: 'input-text',
                          label: '验证码',
                          name: 'code',
                          id: 'u:ec84b7362fdc',
                          required: true
                        }
                      ],
                      size: 'xs',
                      style: {
                        position: 'static',
                        display: 'block',
                        flex: '1 1 auto',
                        flexGrow: 2,
                        flexBasis: 'auto'
                      },
                      wrapperBody: false,
                      isFixedHeight: false,
                      isFixedWidth: false,
                      id: 'u:ffb31fbc5a2f'
                    },
                    {
                      type: 'container',
                      body: [
                        {
                          type: 'service',
                          body: [
                            {
                              type: 'image',
                              id: 'u:ba0e071441b0',
                              height: 50,
                              src: '${captcha.code}',
                              enlargeAble: false,
                              clickAction: {
                                actionType: 'reload',
                                target: 'captcha'
                              }
                            }
                          ],
                          id: 'u:8397fdf65bcf',
                          api: 'get:/api/v1/amis/captcha?type=digit',
                          messages: {},
                          name: 'captcha'
                        }
                      ],
                      size: 'xs',
                      style: {
                        position: 'static',
                        display: 'block',
                        flex: '1 1 auto',
                        flexGrow: 1,
                        flexBasis: 'auto'
                      },
                      wrapperBody: false,
                      isFixedHeight: false,
                      isFixedWidth: false,
                      id: 'u:484e51667851'
                    }
                  ],
                  style: {
                    position: 'relative',
                    inset: 'auto',
                    flexWrap: 'nowrap',
                    justifyContent: 'flex-start',
                    alignItems: 'stretch'
                  },
                  id: 'u:964b6f951a7b',
                  isFixedHeight: false,
                  isFixedWidth: false
                },
                {
                  type: 'grid',
                  columns: [],
                  id: 'u:925c7b7627ca'
                }
              ],
              mode: 'horizontal',
              id: 'u:478b66087163',
              actions: [
                {
                  type: 'container',
                  body: [
                    {
                      type: 'button',
                      label: '登录',
                      onEvent: {
                        click: {
                          actions: [
                            {
                              actionType: 'submit',
                              componentId: 'u:478b66087163',
                              args: {}
                            }
                          ]
                        }
                      },
                      id: 'u:b4412e3fb86c',
                      themeCss: {
                        className: {
                          'width:default': '80%',
                          '--Panel-footerButtonMarginLeft:default': '0'
                        }
                      },
                      className:
                        'className-77438f42a265 className-b4412e3fb86c',
                      disabled: false,
                      level: 'primary'
                    }
                  ],
                  style: {
                    'position': 'static',
                    'display': 'block',
                    'text-align': 'center',
                    'marginLeft': '0'
                  },
                  wrapperBody: false,
                  id: 'u:67c274c06d4c',
                  isFixedHeight: false,
                  isFixedWidth: false
                }
              ],
              wrapWithPanel: true,
              className: '',
              name: 'login_form'
            }
          ],
          size: 'xs',
          style: {
            position: 'static',
            display: 'block',
            flex: '1 1 auto',
            flexGrow: '0',
            flexBasis: 'auto',
            maxWidth: '400px',
            overflowX: 'auto',
            minWidth: '400px'
          },
          wrapperBody: false,
          isFixedHeight: false,
          isFixedWidth: false,
          id: 'u:03d22f862544'
        }
      ],
      style: {
        position: 'relative',
        inset: 'auto',
        flexWrap: 'nowrap',
        height: '100%',
        overflowY: 'auto',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center'
      },
      isFixedHeight: true,
      isFixedWidth: false
    }
  ],
  id: 'u:a7238be79bbc',
  aside: [],
  regions: ['body'],
  asideResizor: false
});
