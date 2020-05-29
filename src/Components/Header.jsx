import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import {Link} from 'react-router-dom'
import { auth } from '../firebase/firebase.utils';
import { selectCurrentUser } from '../redux/user/user-selectors';


const Header = ({ currentUser }) => (
  <header>
    <div>
      {currentUser ? (
        <Link onClick={() => auth.signOut()}>
          SIGN OUT
        </Link>
      ) : (
        <Link to='/signin'>SIGN IN</Link>
      )}
    </div>
  </header>
);

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

export default connect(mapStateToProps)(Header);
