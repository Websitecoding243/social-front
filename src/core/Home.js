import React from 'react';
import Posts from '../post/Posts';
import '../styles.css';

const Home = () => (
  <div>
    <div className="jumbotron">
      <h2>Social network</h2>
      <p className="lead">Developed by: Saumit Bhide</p>
    </div>
    <div className="container">
      <Posts />
    </div>
  </div>
);

export default Home;
