import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { auth } from '../../firebase/firebase.utils';
import { selectCurrentUser } from '../../redux/user/user.selectors';


const Header = ({ currentUser }) => (
  <header>
    <div>
      {currentUser ? (
        <div as='div' onClick={() => auth.signOut()}>
          SIGN OUT
        </div>
      ) : (
        <div to='/signin'>SIGN IN</div>
      )}
    </div>
  </header>
);

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

export default connect(mapStateToProps)(Header);
