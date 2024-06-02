import React, { useState, useEffect } from 'react';
import '../css/MangU.css'
import axios from 'axios';
import { useParams } from 'react-router-dom';
import 
{ ResponsiveContainer } 
from 'recharts';
import FooterAdmin from '../FooterAdmin';

 
function ManageUsers() {
	let {id}= useParams();
	const initialUsers = [
		{
		  id: 1, name: 'Full name 1', role: 'Member', created: '2013/08/12', status: 'pending',
		  email: 'marlon@brando.com', image: 'https://bootdey.com/img/Content/user_1.jpg',
		  password: 'password1', phone: '123-456-7890', make: 'Toyota', model: 'Camry'
		},
		{
		  id: 2, name: 'Full name 2', role: 'Admin', created: '2013/08/12', status: 'active',
		  email: 'marlon@brando.com', image: 'https://bootdey.com/img/Content/user_3.jpg',
		  password: 'password2', phone: '098-765-4321', make: 'Honda', model: 'Civic'
		},
		{
		  id: 3, name: 'Full name 3', role: 'Member', created: '2013/08/12', status: 'inactive',
		  email: 'marlon@brando.com', image: 'https://bootdey.com/img/Content/user_2.jpg',
		  password: 'password3', phone: '555-555-5555', make: 'Ford', model: 'Focus'
		},
	  ];
	
	  const [users, setUsers] = useState(initialUsers);
	  const [editingId, setEditingId] = useState(null);
	  const [formData, setFormData] = useState({});
	  const handleCancel = () => {
		setEditingId(null);
		setFormData({});
	  };
	  
	

	  useEffect(() => {
       
        axios.get('/api/v1/users')
            .then(response => {
                setUsers(response.data.data);
				alert('fetch useres successfully');
            })
            .catch(error => {
                console.error('Error fetching users:', error);
				alert('error in fetch useres ');
            });
    }, []);

    const handleEdit = (user) => {
        setEditingId(user.id);
        setFormData(user);
    };

    
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

	   
const handleSave = () => {
    if (!id || id === 'undefined') {
        console.error('Invalid ID');
        alert('Invalid user ID');
        return;
    }
    
    const { name, email, phone, make, model } = formData;

    console.log('Form Data ID:', id);
    const updatedData = { name, email, phone, make, model };

    if (formData.password) {
        updatedData.password = formData.password;
    }

    axios.put(`/api/v1/users/${id}`, updatedData)
        .then(response => {
            console.log(response.data);
            setUsers(users.map(user => (user._id === id ? response.data.data : user)));
            setEditingId(null);
            alert('User updated successfully');
        })
        .catch(error => {
            console.error('Error updating user:', error);
            alert('Failed to update user');
        });
};

    const handleDelete = (userId) => {
		if (!userId) {
			console.error('Invalid user ID');
			alert('Invalid user ID');
			return;
		}
		if (window.confirm('Are you sure you want to delete this user?')) {
			axios.delete(`/api/v1/users/${userId}`)
				.then(() => {
					setUsers(users.filter(user => user.id !== userId));
					alert('User deleted successfully');
				})
				.catch(error => {
					console.error('Error deleting user:', error);
					alert('Failed to delete user');
				});
		}
	};
	

	const handleSubmit = async (e) => {
		e.preventDefault();
		
		const { name, email, password, passwordConfirm, phone, make, model } = formData;
	
		// Ensure all required fields are filled
		// if (!name || !email || !password || !passwordConfirm || !phone || !make || !model) {
		// 	alert('Please fill all required fields.');
		// 	return;
		// }
	
		// Check if password and confirm password match
		if (password !== passwordConfirm) {
			alert('Password and confirm password do not match.');
			return;
		}
	
		try {
			const response = await axios.post('/api/v1/users', {
				name,
				email,
				password,
				passwordConfirm,
				phone,
				make,
				model
			});
	
			const newUser = response.data.user;
			setUsers([...users, newUser]);
			setFormData({}); 
			alert('User added successfully');
		} catch (error) {
			console.error('Error adding user:', error);
			if (error.response && error.response.data && error.response.data.error) {
				alert(error.response.data.error);
			} else {
				alert('Failed to add user. Please try again later.');
			}
		}
	};
	
	
	  return (
		<div>
		<div className="container bootstrap snippets bootdey">
		  <div className="row">
			<div className="col-lg-12">
			  <div className="main-box no-header clearfix">
				<div className="main-box-body clearfix">
				  <div className="table-responsive">
					<table className="table user-list">
					  <thead>
						<tr>
						  <th><span>User</span></th>
						  <th><span>Created</span></th>
						  <th className="text-center"><span>Status</span></th>
						  <th><span>Email</span></th>
						  <th><span>Password</span></th>
						  <th><span>Phone</span></th>
						  <th><span>Make</span></th>
						  <th><span>Model</span></th>
						  <th>&nbsp;</th>
						</tr>
					  </thead>
					  <tbody>
						{users.map(user => (
						  <tr key={user.id}>
							<td>
							  <img src={user.image} alt="" />
							  {editingId === user.id ? (
								<input type="text" name="name" value={formData.name} onChange={handleChange} />
							  ) : (
								<>
								  <span className="user-link">{user.name}</span>
								  <span className="user-subhead">{user.role}</span>
								</>
							  )}
							</td>
							<td>
							  {editingId === user.id ? (
								<input type="text" name="created" value={formData.created} onChange={handleChange} />
							  ) : (
								user.created
							  )}
							</td>
							<td className="text-center">
							  {editingId === user.id ? (
								<input type="text" name="status" value={formData.status} onChange={handleChange} />
							  ) : (
								<span className={`label label-${user.status}`}>{user.status}</span>
							  )}
							</td>
							<td>
							  {editingId === user.id ? (
								<input type="text" name="email" value={formData.email} onChange={handleChange} />
							  ) : (
								<a href="#">{user.email}</a>
							  )}
							</td>
							<td>
							  {editingId === user.id ? (
								<input type="text" name="password" value={formData.password} onChange={handleChange} />
							  ) : (
								user.password
							  )}
							</td>
							<td>
							  {editingId === user.id ? (
								<input type="text" name="phone" value={formData.phone} onChange={handleChange} />
							  ) : (
								user.phone
							  )}
							</td>
							<td>
							  {editingId === user.id ? (
								<input type="text" name="make" value={formData.make} onChange={handleChange} />
							  ) : (
								user.make
							  )}
							</td>
							<td>
							  {editingId === user.id ? (
								<input type="text" name="model" value={formData.model} onChange={handleChange} />
							  ) : (
								user.model
							  )}
							</td>
							<td style={{ width: '20%' }}>
							  {editingId === user.id ? (
								<>
								  <button onClick={handleSave} className="table-link text-success">Save</button>
								  <button onClick={handleCancel} className="table-link text-danger">Cancel</button>
								</>
							  ) : (
								<>
								  <a href="#" onClick={() => handleEdit(user)} className="table-link text-info">
									<span className="fa-stack">
									  <i className="fa fa-square fa-stack-2x"></i>
									  <i className="fa fa-pencil fa-stack-1x fa-inverse"></i>
									</span>
								  </a>
								  <a href="#" onClick={() => handleDelete(user.id)} className="table-link danger">
									<span className="fa-stack">
									  <i className="fa fa-square fa-stack-2x"></i>
									  <i className="fa fa-trash-o fa-stack-1x fa-inverse"></i>
									</span>
								  </a>
								</>
							  )}
							</td>
						  </tr>
						))}
					  </tbody>
					</table>
				  </div>
				</div>
			  </div>
			</div>
		  </div>
		</div>

{/* add new user  */}
<div className='adduser'>
  <section className="vh-100 gradient-custom">
    <div className="container py-5 h-100">
      <div className="row justify-content-center align-items-center h-100">
        <div className="col-12 col-lg-9 col-xl-7" style={{ width: '100%' }}>
          <div className="card shadow-2-strong card-registration" style={{ borderRadius: '15px', backgroundColor: '#ffffff' }}>
            <div className="card-body p-4 p-md-5">
              <h3 className="mb-4 pb-2 pb-md-0 mb-md-5">Add New User</h3>
              <form>

                <div className="row">
                 
                  <div className="col-md-6 mb-4">
                    <div className="form-outline">
                      <input type="text" id="lastName" className="form-control form-control-lg" />
                      <label className="form-label" htmlFor="lastName">full Name</label>
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-6 mb-4 pb-2">
                    <div className="form-outline">
                      <input type="email" id="emailAddress" className="form-control form-control-lg" />
                      <label className="form-label" htmlFor="emailAddress">Email</label>
                    </div>
                  </div>
                  <div className="col-md-6 mb-4 pb-2">
                    <div className="form-outline">
                      <input type="tel" id="phoneNumber" className="form-control form-control-lg" />
                      <label className="form-label" htmlFor="phoneNumber">Phone Number</label>
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-6 mb-4 pb-2">
                    <div className="form-outline">
                      <input type="password" id="password" className="form-control form-control-lg" />
                      <label className="form-label" htmlFor="password">Password</label>
                    </div>
                  </div>
                  <div className="col-md-6 mb-4 pb-2">
                    <div className="form-outline">
                      <input type="password" id="confirmPassword" className="form-control form-control-lg" />
                      <label className="form-label" htmlFor="confirmPassword">Confirm Password</label>
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-6 mb-4 pb-2">
                    <div className="form-outline">
                      <input type="text" id="make" className="form-control form-control-lg" />
                      <label className="form-label" htmlFor="make">Make</label>
                    </div>
                  </div>
                  <div className="col-md-6 mb-4 pb-2">
                    <div className="form-outline">
                      <input type="text" id="model" className="form-control form-control-lg" />
                      <label className="form-label" htmlFor="model">Model</label>
                    </div>
                  </div>
                </div>

                <div className="mt-4 pt-2">
  <input className="btn btn-warning btn-lg" type="button" value="Submit" onClick={handleSubmit} />
</div>


              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</div>

<ResponsiveContainer><FooterAdmin/> </ResponsiveContainer>
        
    </div>

  )
}

export default ManageUsers