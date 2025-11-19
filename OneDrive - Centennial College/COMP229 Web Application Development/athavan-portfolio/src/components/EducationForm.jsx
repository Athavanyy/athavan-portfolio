import { useState, useEffect } from 'react';
import { qualificationsAPI } from '../utils/api';
import { useAuth } from '../contexts/AuthContext';

export default function EducationForm() {
  const { user } = useAuth();
  const [qualifications, setQualifications] = useState([]);
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
    loadQualifications();
  }, []);

  const loadQualifications = async () => {
    try {
      setLoading(true);
      const data = await qualificationsAPI.getAll();
      setQualifications(data);
    } catch (err) {
      setError('Failed to load qualifications');
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
        await qualificationsAPI.update(editingId, formData);
        setSuccess('Qualification updated successfully!');
      } else {
        await qualificationsAPI.create(formData);
        setSuccess('Qualification added successfully!');
      }
      resetForm();
      loadQualifications();
    } catch (err) {
      setError(err.message || 'Operation failed');
    } finally {
      setLoading(false);
    }
  };

  const handleEdit = (qual) => {
    setEditingId(qual._id);
    setFormData({
      title: qual.title,
      firstname: qual.firstname,
      lastname: qual.lastname,
      email: qual.email,
      completion: qual.completion ? new Date(qual.completion).toISOString().split('T')[0] : '',
      description: qual.description
    });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure you want to delete this qualification?')) {
      return;
    }

    try {
      await qualificationsAPI.delete(id);
      setSuccess('Qualification deleted successfully!');
      loadQualifications();
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
      <h2>{editingId ? 'Edit Qualification' : 'Add Qualification'}</h2>
      
      {error && <div className="error-message">{error}</div>}
      {success && <div className="success-message">{success}</div>}

      <form onSubmit={handleSubmit} className="crud-form">
        <div className="form-group">
          <label>Title *</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
            placeholder="e.g., Bachelor of Science in Computer Science"
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
            placeholder="Describe your qualification..."
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
        <h3>My Qualifications</h3>
        {loading && qualifications.length === 0 ? (
          <p>Loading...</p>
        ) : qualifications.length === 0 ? (
          <p>No qualifications added yet.</p>
        ) : (
          <div className="list-items">
            {qualifications.map((qual) => (
              <div key={qual._id} className="list-item">
                <div className="item-content">
                  <h4>{qual.title}</h4>
                  <p><strong>Completed:</strong> {new Date(qual.completion).toLocaleDateString()}</p>
                  <p>{qual.description}</p>
                </div>
                <div className="item-actions">
                  <button onClick={() => handleEdit(qual)} className="btn-edit">Edit</button>
                  <button onClick={() => handleDelete(qual._id)} className="btn-delete">Delete</button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

