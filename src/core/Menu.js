import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { signout, isAuthenticated } from '../auth';

const isActive = (history, path) => {
  if (history.location.pathname === path) return { color: '#ff9900' };
  else return { color: '#ffffff' };
};

const Menu = ({ history }) => (
  <div>
    <ul className="nav nav-tabs bg-primary">
      <li className="nav-item">
        <Link className="nav-link" style={isActive(history, '/')} to="/">
          Home
        </Link>
      </li>

      <li className="nav-item">
        <Link
          className="nav-link"
          style={isActive(history, '/users')}
          to="/users"
        >
          Users
        </Link>
      </li>

      <li className="nav-item">
        <Link
          to={`/post/create`}
          style={isActive(history, `/post/create`)}
          className="nav-link"
        >
          Create Post
        </Link>
      </li>

      {!isAuthenticated() && (
        <>
          <li className="nav-item">
            <Link
              className="nav-link"
              style={isActive(history, '/signin')}
              to="/signin"
            >
              Signin
            </Link>
          </li>

          <li className="nav-item">
            <Link
              className="nav-link"
              style={isActive(history, '/signup')}
              to="/signup"
            >
              Signup
            </Link>
          </li>
        </>
      )}

      {isAuthenticated() && (
        <>
          <li className="nav-item">
            <Link
              className="nav-link"
              to={`/findpeople`}
              style={isActive(history, `/findpeople`)}
            >
              Find People
            </Link>
          </li>

          <li className="nav-item">
            <Link
              className="nav-link"
              to={`user/${isAuthenticated().user._id}`}
              style={isActive(history, `/user/${isAuthenticated().user._id}`)}
            >
              {`${isAuthenticated().user.name}'s Profile`}
            </Link>
          </li>

          <li className="nav-item">
            <span
              className="nav-link"
              style={
                (isActive(history, '/signout'),
                { cursor: 'pointer', color: '#fff' })
              }
              onClick={() => signout(() => history.push('/'))}
            >
              Signout
            </span>
          </li>
        </>
      )}
    </ul>
  </div>
);

export default withRouter(Menu);
