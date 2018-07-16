import React from 'react';
import {
  Route,
  BrowserRouter as Router,
  hashHistory,
  Redirect,
  // Link,
} from 'react-router-dom';

import TopicList from '../views/topic-list/index';
import TopicDetail from '../views/topic-detail/index';

export default () => (
  <Router history={hashHistory}>
    <div>
      <Route path="/" render={() => <Redirect to="list" />} exact key="topic-index" />
      <Route path="/list" component={TopicList} exact key="topic-list" />
      <Route path="/detail" component={TopicDetail} key="topic-detail" />
    </div>
  </Router>
)
