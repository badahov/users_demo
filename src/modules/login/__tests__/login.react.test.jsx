import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import pretty from 'pretty';

import LoginInbox from '../main';

let container = null;
beforeEach(() => {
  // подготавливаем DOM-элемент, куда будем рендерить
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  // подчищаем после завершения
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

describe('Login', () => {
  describe('Form', () => {
    it('Must show form', () => {
      act(() => {
        render(<LoginInbox />, container);
      });

      const formLogin = document.querySelector('.form-login');

      expect(pretty(formLogin.innerHTML)).toMatchInlineSnapshot(`
        "<div class=\\"ant-row ant-form-item item-input-login\\">
          <div class=\\"ant-col ant-form-item-control-wrapper ant-col-xs-24 ant-col-sm-24 ant-col-md-14 ant-col-md-offset-5 ant-col-lg-10 ant-col-lg-offset-7\\">
            <div class=\\"ant-form-item-control\\"><span class=\\"ant-form-item-children\\"><input placeholder=\\"Логин\\" type=\\"text\\" id=\\"login_login\\" data-__meta=\\"[object Object]\\" data-__field=\\"[object Object]\\" class=\\"ant-input\\" value=\\"\\"></span></div>
          </div>
        </div>
        <div class=\\"ant-row ant-form-item item-input-password\\">
          <div class=\\"ant-col ant-form-item-control-wrapper ant-col-xs-24 ant-col-sm-24 ant-col-md-14 ant-col-md-offset-5 ant-col-lg-10 ant-col-lg-offset-7\\">
            <div class=\\"ant-form-item-control\\"><span class=\\"ant-form-item-children\\"><span class=\\"ant-input-password ant-input-affix-wrapper\\"><input placeholder=\\"Пароль\\" action=\\"click\\" id=\\"login_password\\" data-__meta=\\"[object Object]\\" data-__field=\\"[object Object]\\" type=\\"password\\" class=\\"ant-input\\" value=\\"\\"><span class=\\"ant-input-suffix\\"><i aria-label=\\"icon: eye-invisible\\" tabindex=\\"-1\\" class=\\"anticon anticon-eye-invisible ant-input-password-icon\\"><svg viewBox=\\"64 64 896 896\\" focusable=\\"false\\" class=\\"\\" data-icon=\\"eye-invisible\\" width=\\"1em\\" height=\\"1em\\" fill=\\"currentColor\\" aria-hidden=\\"true\\"><path d=\\"M942.2 486.2Q889.47 375.11 816.7 305l-50.88 50.88C807.31 395.53 843.45 447.4 874.7 512 791.5 684.2 673.4 766 512 766q-72.67 0-133.87-22.38L323 798.75Q408 838 512 838q288.3 0 430.2-300.3a60.29 60.29 0 0 0 0-51.5zm-63.57-320.64L836 122.88a8 8 0 0 0-11.32 0L715.31 232.2Q624.86 186 512 186q-288.3 0-430.2 300.3a60.3 60.3 0 0 0 0 51.5q56.69 119.4 136.5 191.41L112.48 835a8 8 0 0 0 0 11.31L155.17 889a8 8 0 0 0 11.31 0l712.15-712.12a8 8 0 0 0 0-11.32zM149.3 512C232.6 339.8 350.7 258 512 258c54.54 0 104.13 9.36 149.12 28.39l-70.3 70.3a176 176 0 0 0-238.13 238.13l-83.42 83.42C223.1 637.49 183.3 582.28 149.3 512zm246.7 0a112.11 112.11 0 0 1 146.2-106.69L401.31 546.2A112 112 0 0 1 396 512z\\"></path><path d=\\"M508 624c-3.46 0-6.87-.16-10.25-.47l-52.82 52.82a176.09 176.09 0 0 0 227.42-227.42l-52.82 52.82c.31 3.38.47 6.79.47 10.25a111.94 111.94 0 0 1-112 112z\\"></path></svg></i></span></span></span></div>
          </div>
        </div>
        <div class=\\"ant-row ant-form-item\\">
          <div class=\\"ant-col ant-form-item-control-wrapper ant-col-xs-24 ant-col-xs-offset-0 ant-col-sm-24 ant-col-sm-offset-0\\">
            <div class=\\"ant-form-item-control\\"><span class=\\"ant-form-item-children\\"><button type=\\"submit\\" class=\\"ant-btn ant-btn-primary\\"><span>Войти</span></button></span></div>
          </div>
        </div>"
      `); /* ... автоматически заполняется Jest ... */
    });

    it('Form validation', () => {
      console.error = jest.fn();
      console.warn = jest.fn();
      console.log = jest.fn();

      act(() => {
        render(<LoginInbox />, container);
      });

      // получаем элемент button и кликаем на него несколько раз
      const button = document.querySelector('.ant-btn-primary');
      expect(button.textContent).toBe('Войти');

      act(() => {
        button.dispatchEvent(new MouseEvent('click', { bubbles: true }));
      });

      expect(
        container.querySelector('.item-input-login .show-help-enter')
          .textContent,
      ).toBe('Впишите логин');
      expect(
        container.querySelector('.item-input-password .show-help-enter')
          .textContent,
      ).toBe('Впишите пароль');
    });
  });
});
