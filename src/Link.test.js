import React from 'react';
import ReactDOM from 'react-dom';
import {Link} from './Link';

const LinkWrapper = props => <a {...props} />;

it('has a href attribute when rendering with LinkWrapper', () => {
 const text = `Link Text`
 const url = `https://learnstorybook.com`
 const div = document.createElement('div');
  ReactDOM.render(
    <Link href={`${url}`} LinkWrapper={LinkWrapper}>
      {text}
    </Link>,
    div
  );

  expect(div.querySelector(`a[href="${url}"]`)).not.toBeNull();
  expect(div.textContent).toEqual(`${text}`);

  ReactDOM.unmountComponentAtNode(div);
})