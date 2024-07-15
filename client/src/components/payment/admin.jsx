// AdminPage.js
import React, { useContext } from 'react';
import RoleBasedComponent from './RoleBasedComponent';
import { UserContext } from '../context/UserContext';

const AdminPage = () => {
  const { user } = useContext(UserContext);

  return (
    <RoleBasedComponent user={user} roles={['admin']}>
      <div>
        <h1>Admin Dashboard</h1>
        {/* Admin-only content */}
      </div>
    </RoleBasedComponent>
  );
};

export default AdminPage;