import { useState, useEffect } from 'react';
import { projectsAPI } from '../utils/api';
import { useAuth } from '../contexts/AuthContext';

export default function ProjectForm() {
  const { user } = useAuth();
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [editingId, setEditingId] = useState(null);
  const [formData, setFormData] = useState({
    title: '',
    firstname: user?.name?.split(' ')[0] || '',
    lastname: user?.name?.split(' ').slice(1).join(' ') || '',
    email: user?.email || '',
    completion: '',
    description: ''
  });

  useEffect(() => {
    loadProjects();
  }, []);

  const loadProjects = async () => {
    try {
      setLoading(true);
      const data = await projectsAPI.getAll();
      setProjects(data);
    } catch (err) {
      setError(err.message || 'Failed to load projects');
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    setError('');
    setSuccess('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    setLoading(true);

    try {
      if (editingId) {
        await projectsAPI.update(editingId, formData);
        setSuccess('Project updated successfully!');
      } else {
        await projectsAPI.create(formData);
        setSuccess('Project added successfully!');
      }
      resetForm();
      loadProjects();
    } catch (err) {
      setError(err.message || 'Operation failed');
    } finally {
      setLoading(false);
    }
  };

  const handleEdit = (project) => {
    setEditingId(project._id);
    setFormData({
      title: project.title,
      firstname: project.firstname,
      lastname: project.lastname,
      email: project.email,
      completion: project.completion ? new Date(project.completion).toISOString().split('T')[0] : '',
      description: project.description
    });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure you want to delete this project?')) {
      return;
    }

    try {
      await projectsAPI.delete(id);
      setSuccess('Project deleted successfully!');
      loadProjects();
    } catch (err) {
      setError(err.message || 'Delete failed');
    }
  };

  const resetForm = () => {
    setEditingId(null);
    setFormData({
      title: '',
      firstname: user?.name?.split(' ')[0] || '',
      lastname: user?.name?.split(' ').slice(1).join(' ') || '',
      email: user?.email || '',
      completion: '',
      description: ''
    });
  };

  return (
    <div className="form-container">
      <h2>{editingId ? 'Edit Project' : 'Add Project'}</h2>
      
      {error && <div className="error-message">{error}</div>}
      {success && <div className="success-message">{success}</div>}

      <form onSubmit={handleSubmit} className="crud-form">
        <div className="form-group">
          <label>Project Title *</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
            placeholder="e.g., E-Commerce Website"
          />
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>First Name *</label>
            <input
              type="text"
              name="firstname"
              value={formData.firstname}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Last Name *</label>
            <input
              type="text"
              name="lastname"
              value={formData.lastname}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className="form-group">
          <label>Email *</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Completion Date *</label>
          <input
            type="date"
            name="completion"
            value={formData.completion}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Description *</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
            rows="4"
            placeholder="Describe your project..."
          />
        </div>

        <div className="form-actions">
          <button type="submit" disabled={loading} className="btn-primary">
            {loading ? 'Saving...' : editingId ? 'Update' : 'Add'}
          </button>
          {editingId && (
            <button type="button" onClick={resetForm} className="btn-secondary">
              Cancel
            </button>
          )}
        </div>
      </form>

      <div className="data-list">
        <h3>My Projects</h3>
        {loading && projects.length === 0 ? (
          <p>Loading...</p>
        ) : projects.length === 0 ? (
          <p>No projects added yet.</p>
        ) : (
          <div className="list-items">
            {projects.map((project) => (
              <div key={project._id} className="list-item">
                <div className="item-content">
                  <h4>{project.title}</h4>
                  <p><strong>Completed:</strong> {new Date(project.completion).toLocaleDateString()}</p>
                  <p>{project.description}</p>
                </div>
                <div className="item-actions">
                  <button onClick={() => handleEdit(project)} className="btn-edit">Edit</button>
                  <button onClick={() => handleDelete(project._id)} className="btn-delete">Delete</button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

