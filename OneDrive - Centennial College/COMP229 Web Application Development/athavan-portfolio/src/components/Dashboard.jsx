import { useState, useEffect } from 'react';
import { contactsAPI, projectsAPI, qualificationsAPI } from '../utils/api';
import { useAuth } from '../contexts/AuthContext';

export default function Dashboard() {
  const { user, isAdmin } = useAuth();
  const [activeTab, setActiveTab] = useState('contacts');
  const [contacts, setContacts] = useState([]);
  const [projects, setProjects] = useState([]);
  const [qualifications, setQualifications] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    if (isAdmin()) {
      loadAllData();
    }
  }, [isAdmin]);

  const loadAllData = async () => {
    setLoading(true);
    setError('');
    try {
      const [contactsData, projectsData, qualificationsData] = await Promise.all([
        contactsAPI.getAll(),
        projectsAPI.getAll(),
        qualificationsAPI.getAll()
      ]);
      setContacts(contactsData);
      setProjects(projectsData);
      setQualifications(qualificationsData);
    } catch (err) {
      setError('Failed to load data');
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (type, id) => {
    if (!window.confirm(`Are you sure you want to delete this ${type}?`)) {
      return;
    }

    try {
      switch (type) {
        case 'contact':
          await contactsAPI.delete(id);
          break;
        case 'project':
          await projectsAPI.delete(id);
          break;
        case 'qualification':
          await qualificationsAPI.delete(id);
          break;
      }
      loadAllData();
    } catch (err) {
      setError(err.message || 'Delete failed');
    }
  };

  if (!isAdmin()) {
    return (
      <div className="dashboard-container">
        <div className="dashboard-card">
          <h2>Access Denied</h2>
          <p>You need admin privileges to access this page.</p>
        </div>
      </div>
    );
  }

  const renderContent = () => {
    if (loading) return <p>Loading...</p>;
    if (error) return <div className="error-message">{error}</div>;

    switch (activeTab) {
      case 'contacts':
        return (
          <div className="data-table">
            <h3>Contacts ({contacts.length})</h3>
            {contacts.length === 0 ? (
              <p>No contacts found.</p>
            ) : (
              <table>
                <thead>
                  <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Email</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {contacts.map((contact) => (
                    <tr key={contact._id}>
                      <td>{contact.firstname}</td>
                      <td>{contact.lastname}</td>
                      <td>{contact.email}</td>
                      <td>
                        <button
                          onClick={() => handleDelete('contact', contact._id)}
                          className="btn-delete"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        );

      case 'projects':
        return (
          <div className="data-table">
            <h3>Projects ({projects.length})</h3>
            {projects.length === 0 ? (
              <p>No projects found.</p>
            ) : (
              <table>
                <thead>
                  <tr>
                    <th>Title</th>
                    <th>Email</th>
                    <th>Completion</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {projects.map((project) => (
                    <tr key={project._id}>
                      <td>{project.title}</td>
                      <td>{project.email}</td>
                      <td>{new Date(project.completion).toLocaleDateString()}</td>
                      <td>
                        <button
                          onClick={() => handleDelete('project', project._id)}
                          className="btn-delete"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        );

      case 'qualifications':
        return (
          <div className="data-table">
            <h3>Qualifications ({qualifications.length})</h3>
            {qualifications.length === 0 ? (
              <p>No qualifications found.</p>
            ) : (
              <table>
                <thead>
                  <tr>
                    <th>Title</th>
                    <th>Email</th>
                    <th>Completion</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {qualifications.map((qual) => (
                    <tr key={qual._id}>
                      <td>{qual.title}</td>
                      <td>{qual.email}</td>
                      <td>{new Date(qual.completion).toLocaleDateString()}</td>
                      <td>
                        <button
                          onClick={() => handleDelete('qualification', qual._id)}
                          className="btn-delete"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="dashboard-container">
      <div className="dashboard-header">
        <h1>Admin Dashboard</h1>
        <p>Welcome, {user?.name}!</p>
      </div>

      <div className="dashboard-tabs">
        <button
          className={activeTab === 'contacts' ? 'active' : ''}
          onClick={() => setActiveTab('contacts')}
        >
          Contacts
        </button>
        <button
          className={activeTab === 'projects' ? 'active' : ''}
          onClick={() => setActiveTab('projects')}
        >
          Projects
        </button>
        <button
          className={activeTab === 'qualifications' ? 'active' : ''}
          onClick={() => setActiveTab('qualifications')}
        >
          Qualifications
        </button>
      </div>

      <div className="dashboard-content">
        {renderContent()}
      </div>
    </div>
  );
}

