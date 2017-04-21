import * as React from 'react';
const connect = require('react-redux').connect;

import { loadQueue } from '../actions/queue';

interface IAppProps extends React.Props<any> {
  queueId: any;
  load: () => void;
};

function mapStateToProps(state) {
  return {
    queueId: state.session,
    router: state.router,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    load: () => dispatch(loadQueue()),
  }
}

class App extends React.Component<IAppProps, void> {
  render() {
    const { queueId, load } = this.props;

    return (
      <div onClick={ load }> helloo World { queueId } </div>
    );

  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
