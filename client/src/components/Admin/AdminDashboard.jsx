import { useState } from 'react';
import './admin-dashboard.css';
import BookManagement from '../bookmanagement/BookManagement';
import Sidebar from '../sidebar/sidebar';


const AdminDashboard = () => {
  const [selectedComponent, setSelectedComponent] = useState('BookManagement'); // Default to BookManagement

  const renderComponent = () => {
    switch (selectedComponent) {
      case 'BookManagement':
        return <BookManagement />;
      // Add other cases if you have additional components
      default:
        return <div>Please select a component from the sidebar.</div>;
    }
  };

  return (
    <div className="dashboard">
      <Sidebar onSelect={setSelectedComponent} selected={selectedComponent} />
      <div className="content">
        <h1>Admin Dashboard</h1>
        {renderComponent()}
      </div>
    </div>
  );
};

export default AdminDashboard;
