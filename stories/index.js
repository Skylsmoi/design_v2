import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { Button, Welcome } from '@storybook/react/demo';

import InputGroupText from '../src/component/common/Input/InputGroupText.jsx'

storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

storiesOf('Button', module)
  .add('with text', () => <Button onClick={action('clicked')}>Hello Button</Button>)
  .add('with some emoji', () => <Button onClick={action('clicked')}>😀 😎 👍 💯</Button>);

storiesOf('InputGroupText', module)
  .add('normal', () => (
    <InputGroupText
      parentClassName=''
      value=''
      type='text'
      customClass=''
      icon=''
      placeHolder=''
      invalidMsg=''
      onChange={action('changed')}
    />
  ))
  .add('with error', () => (
    <InputGroupText
      parentClassName=''
      value=''
      type='text'
      customClass=''
      icon=''
      placeHolder=''
      invalidMsg='you failed'
      onChange={action('changed')}
    />
  ))
