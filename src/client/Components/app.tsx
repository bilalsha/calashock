import * as React from 'react';
import Header from './header';
import Product from '../Containers/product';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Product />
      </div>
    );
  }
}
