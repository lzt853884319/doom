import React from 'react';
import {
  Link,
  BrowserRouter as Router,
} from 'react-router-dom';
import Routes from '../config/router';

export default class App extends React.Component {
  componentDidMount() {
    // dosomething
  }

  render() {
    return [
      <Router key="router-link">
        <div>
          <Link to="/">首页</Link>
          <br />
          <Link to="/detail">详情页</Link>
        </div>
      </Router>,
      <Routes key="router-list" />,
    ]
  }
}
