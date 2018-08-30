import React from 'react';
import UserList from '../containers/user-list';
import UserDetails from '../containers/user-detail';
require('../../scss/style.scss');
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

const App = () => (
	<Router>
    <div> 
        <Link to='/'>Home</Link>
        <h2>User List</h2>
        <h4> Kodra </h4>
        <UserList />
        <Link to='/about'>About</Link>
        <hr />
        <h1> Jona </h1>
        <Link to='/topics'>Topics</Link>
        <h2>User Details</h2>
        <UserDetails />
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/topics" component={Topics} />
    </div>
    </Router>
);

const Home = () => (
	<div>
	  <h2>Home</h2>
	</div>
);

const About = () => (
	<div>
	  <h2> About </h2>
    </div>
);

const Topics = () => (
	<div>
	   <h2> Topics </h2>
	</div>
);

export default App;
