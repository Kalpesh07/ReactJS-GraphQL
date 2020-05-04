import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux'
import { registerNav } from './modules/Navigation'
import DashboardContainer from './pages/dashboard/DashboardContainer'
//import './App.scss'
// const App = () => (
//     <div className="container">
//         <h1>Hello World, React!</h1>
//     </div>
// )

// export default App;

class App extends Component {
    componentDidMount() {
      //this.props.insertToken()
    }
    render() {
      return (
        <div>
          <Router ref={registerNav}>
            <Switch>
              <Route key="dashboard" path="/dashboard" component={DashboardContainer} />,
              <Route exact path="/" component={DashboardContainer} />           
            </Switch>
          </Router>
        </div>
      );
    }
  }
  const mapStoreToProps = state => ({})
  const mapDispatchToProps = {}
  export default connect(mapStoreToProps, mapDispatchToProps)(App);