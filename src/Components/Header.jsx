import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import {Link} from 'react-router-dom'
import { auth } from '../firebase/firebase.utils';
import { selectCurrentUser } from '../redux/user/user-selectors';
import './styles/Header.scss'

const Header = ({ currentUser }) => (
    <div className="header">
      <div className="nav-head">
        <h4>Hacker News</h4>
      </div>
      {currentUser ? (
        <div className="option">
        <Link onClick={() => auth.signOut()}>
          SIGN OUT
        </Link>
        </div>
        
      ) : (
        <div className="option">
        <Link to='/signin'>SIGN IN</Link>

        </div>
      )}
    </div>
);

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

export default connect(mapStateToProps)(Header);
