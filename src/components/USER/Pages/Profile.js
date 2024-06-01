//////

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Background from '../../../assests/imges/background.jpg';
import { Link } from 'react-router-dom';
// import '../css/Home.css';

function Profile() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [make, setMake] = useState('');
  const [model, setModel] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchUserProfile();
  }, []);

  const fetchUserProfile = async () => {
    setLoading(true);

    try {
      const token = localStorage.getItem('authToken');
      if (!token) {
        setError('User not authenticated');
        setLoading(false);
        return;
      }
      const response = await axios.get('/api/v1/users/getMe', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
       const userData = response.data.data; // Assuming user data is in 'data' field
      setName(userData.name);
      setEmail(userData.email);
      setPhone(userData.phone);
      setMake(userData.make);
      setModel(userData.model);
      setLoading(false);
      alert('Your profile data has been successfully fetched!');
    } catch (error) {
      alert('Failed to fetch profile data!');
      setError('An error occurred while fetching user profile.');
      console.error('Error fetching user profile:', error);
      setLoading(false);
    }
  };

  // const updateUserProfile = async () => {
  //   setLoading(true);

  //   try {
  //     const token = localStorage.getItem('authToken');
    
  //     if (!token) {
  //       setError('User not authenticated');
  //       setLoading(false);
  //       return;}
  //     const userData = { name, email, phone, carType };
  //     await axios.put('/api/v1/users/updateMe', userData, {
  //       headers: {
  //         Authorization: `Bearer ${token}`,
  //       },
  //     });
  //     alert('Your profile has been successfully updated!');
  //     setLoading(false);
  //   } catch (error) {
  //     alert('Your profile update failed!');
  //     setError('An error occurred while updating user profile.');
  //     console.error('Error updating user profile:', error);
  //     setLoading(false);
  //   }
  // };
  // useEffect(()=>{fetchUserProfile()},[])

  return (
    <div style={{ position: 'relative'}}>
      <div style={{ backgroundImage: `url(${Background})`, height: "300px" ,backgroundSize: "cover", backgroundPosition: "center" }}>
        {/* Background image */}
      </div>

      <section>
        <div className="container py-5" >
          <div className="row">
            <div className="col-lg-4">
              <div className="card mb-4" 
              style={{ marginTop: "-180px", background: "hsla(0, 0%, 100%, 0.8)", backdropFilter: "blur(1px)", borderRadius: '20px' }}>
                <div className="card-body text-center">
                  <img src="https://th.bing.com/th/id/OIP.Oo_9EZ_mdqBnbOIUVHbFAAHaHa?w=1200&h=1200&rs=1&pid=ImgDetMain" alt="avatar" className="rounded-circle img-fluid" style={{ width: '150px',height:'150px' }} />
                  {/* <h5 className="my-3">Mohamed Sallah</h5> */}
                  <div className="d-flex justify-content-center mb-2">
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-8">
              <div className="card mb-4"
              style={{  background: "hsla(0, 0%, 100%, 0.8)", backdropFilter: "blur(1px)", borderRadius: '20px' }}>
                <div className="card-body">
                  <div className="row">
                    <div className="col-sm-3">
                      <p className="mb-0">Full Name</p>
                    </div>
                    <div className="col-sm-9">
                      <p className="text-muted mb-0">{name}</p>
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-3">
                      <p className="mb-0">Email</p>
                    </div>
                    <div className="col-sm-9">
                      <p className="text-muted mb-0">{email}</p>
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-3">
                      <p className="mb-0">Phone</p>
                    </div>
                    <div className="col-sm-9">
                      <p className="text-muted mb-0">{phone}</p>
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-3">
                      <p className="mb-0">make</p>
                    </div>
                    <div className="col-sm-9">
                      <p className="text-muted mb-0">{make}</p>
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-3">
                      <p className="mb-0">model</p>
                    </div>
                    <div className="col-sm-9">
                      <p className="text-muted mb-0">{model}</p>
                    </div>
                  </div>
                  {/* <button onClick={updateUserProfile}>Update Profile</button> */}
                  <Link to="/user/EiditProfile">Update Profile</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Profile;



//////////////////////////////////////////
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import Background from '../assests/imges/background.jpg';
// import '../css/Home.css';

// function Profile() {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [phone, setPhone] = useState('');
//   const [carType, setCarType] = useState('');
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState('');

//   useEffect(() => {
//     fetchUserProfile();
//   }, []);

//   const fetchUserProfile = async () => {
//     setLoading(true);

//     try {
//       const token = localStorage.getItem('authToken');
//       if (!token) {
//         setError('User not authenticated');
//         setLoading(false);
//         return;
//       }
//       const response = await axios.get('/api/v1/users/getMe', {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       });
//       const userData = response.data;
//       setName(userData.name);
//       setEmail(userData.email);
//       setPhone(userData.phone);
//       setCarType(userData.carType);
//       setLoading(false);
//       alert('Your profile data has been successfully fetched!');
//     } catch (error) {
//       alert('Failed to fetch profile data!');
//       setError('An error occurred while fetching user profile.');
//       console.error('Error fetching user profile:', error);
//       setLoading(false);
//     }
//   };

//   const updateUserProfile = async () => {
//     setLoading(true);

//     try {
//       const token = localStorage.getItem('authToken');
    
//       // إذا لم يكن رمز المصادقة متاحًا، يمكن توجيه المستخدم إلى صفحة تسجيل الدخول أو إجراء إجراء آخر مناسب
//       if (!token) {
//         setError('User not authenticated');
//         setLoading(false);
//         return;}
//       const userData = { name, email, phone, carType };
//       await axios.put('/api/v1/users/updateMe', userData);
//       alert('Your profile has been successfully updated!');
//       setLoading(false);
//     } catch (error) {
//       alert('Your profile update failed!');
//       setError('An error occurred while updating user profile.');
//       console.error('Error updating user profile:', error);
//       setLoading(false);
//     }
//   };

//   return (
//     <div style={{ position: 'relative'}}>
//       <div style={{ backgroundImage: `url(${Background})`, height: "300px" ,backgroundSize: "cover", backgroundPosition: "center" }}>
//         {/* Background image */}
//       </div>

//       <section>
//         <div className="container py-5" >
//           <div className="row">
//             <div className="col-lg-4">
//               <div className="card mb-4" 
//               style={{ marginTop: "-180px", background: "hsla(0, 0%, 100%, 0.8)", backdropFilter: "blur(1px)", borderRadius: '20px' }}>
//                 <div className="card-body text-center">
//                   <img src="https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcQSbHGqlY_9yEZMtHtM2NY1k8nPMkJ1TOWZOH-VWR0zcAZHl6J7PRensZzTTna8DVz8I0AT8D2yCQdapUw" alt="avatar" className="rounded-circle img-fluid" style={{ width: '150px',height:'150px' }} />
//                   <h5 className="my-3">Mohamed Sallah</h5>
//                   <div className="d-flex justify-content-center mb-2">
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div className="col-lg-8">
//               <div className="card mb-4"
//               style={{  background: "hsla(0, 0%, 100%, 0.8)", backdropFilter: "blur(1px)", borderRadius: '20px' }}>
//                 <div className="card-body">
//                   <div className="row">
//                     <div className="col-sm-3">
//                       <p className="mb-0">Full Name</p>
//                     </div>
//                     <div className="col-sm-9">
//                       <p className="text-muted mb-0">{name}</p>
//                     </div>
//                   </div>
//                   <hr />
//                   <div className="row">
//                     <div className="col-sm-3">
//                       <p className="mb-0">Email</p>
//                     </div>
//                     <div className="col-sm-9">
//                       <p className="text-muted mb-0">{email}</p>
//                     </div>
//                   </div>
//                   <hr />
//                   <div className="row">
//                     <div className="col-sm-3">
//                       <p className="mb-0">Phone</p>
//                     </div>
//                     <div className="col-sm-9">
//                       <p className="text-muted mb-0">{phone}</p>
//                     </div>
//                   </div>
//                   <hr />
//                   <div className="row">
//                     <div className="col-sm-3">
//                       <p className="mb-0">Car Type</p>
//                     </div>
//                     <div className="col-sm-9">
//                       <p className="text-muted mb-0">{carType}</p>
//                     </div>
//                   </div>
//                   <button onClick={updateUserProfile}>Update Profile</button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }

// export default Profile;



//////////////////////////////
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import Background from '../assests/imges/background.jpg';
//  import '../css/Home.css'

// function Profile() {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [phone, setPhone] = useState('');
//   const [carType, setCarType] = useState('');
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState('');

//   useEffect(() => {
//     fetchUserProfile();
//   }, []);

//   const fetchUserProfile = async () => {
//   setLoading(true);

//   try {
//     const token = localStorage.getItem('authToken'); // Assuming you store the token in local storage
//     const response = await axios.get('/api/v1/users/getMe', {
//       headers: {
//         Authorization: `Bearer ${token}`,
//       },
//     });
//     const userData = response.data;
//     setName(userData.name);
//     setEmail(userData.email);
//     setPhone(userData.phone);
//     setCarType(userData.carType);
//     setLoading(false);
//     alert('Your profile data has been successfully fetched!');
//   } catch (error) {
//     alert('Failed to fetch profile data!');
//     setError('An error occurred while fetching user profile.');
//     console.error('Error fetching user profile:', error);
//     setLoading(false);
//   }
// };

//   const updateUserProfile = async () => {
//     setLoading(true); // Set loading state to true
  
//     try {
//       const userData = { name, email, phone, carType };
//       await axios.put('/api/v1/users/updateMe', userData);
//       alert('Your profile has been successfully updated!');
//       setLoading(false); // Set loading state to false on success
//     } catch (error) {
//       alert('Your profile has been failed updated!');
//       setError('An error occurred while updating user profile.');
//       console.error('Error updating user profile:', error);
//       setLoading(false); // Set loading state to false on error
//       alert('Your profile has been failed updated!');
//     }
//   };
  

//   // if (loading) {
//   //   return <p>Loading...</p>;
//   // }

//   // if (error) {
//   //   return <p>{error}</p>;
//   // }

  

//   return (
       
//     <div style={{ position: 'relative'}}>
//     <div style={{ backgroundImage: `url(${Background})`, height: "300px" ,backgroundSize: "cover", backgroundPosition: "center" }}>
//       {/* Background image */}
//     </div>
    


          
//     <section>
//       <div className="container py-5" >
    

//         <div className="row">
//           <div className="col-lg-4">
//             <div className="card mb-4" 
//              style={{ marginTop: "-180px", background: "hsla(0, 0%, 100%, 0.8)", backdropFilter: "blur(1px)", borderRadius: '20px' }}>
//               <div className="card-body text-center">
//                 <img src="https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcQSbHGqlY_9yEZMtHtM2NY1k8nPMkJ1TOWZOH-VWR0zcAZHl6J7PRensZzTTna8DVz8I0AT8D2yCQdapUw" alt="avatar" className="rounded-circle img-fluid" style={{ width: '150px',height:'150px' }} />
//                 <h5 className="my-3">Mohamed Sallah</h5>
//                 {/* <p className="text-muted mb-1">Full Stack Developer</p>
//                 <p className="text-muted mb-4">Bay Area, San Francisco, CA</p> */}
//                 <div className="d-flex justify-content-center mb-2">
        
//                 </div>
//               </div>
        
          
//             </div>
//           </div>
//           <div className="col-lg-8">
//             <div className="card mb-4"
//              style={{  background: "hsla(0, 0%, 100%, 0.8)", backdropFilter: "blur(1px)", borderRadius: '20px' }}>
//               <div className="card-body">
//                 <div className="row">
//                   <div className="col-sm-3">
//                     <p className="mb-0">Full Name</p>
//                   </div>
//                   <div className="col-sm-9">
//                     <p className="text-muted mb-0">{name}</p>
//                   </div>
//                 </div>
//                 <hr />
//                 <div className="row">
//                   <div className="col-sm-3">
//                     <p className="mb-0">Email</p>
//                   </div>
//                   <div className="col-sm-9">
//                     <p className="text-muted mb-0">{email}</p>
//                   </div>
//                 </div>
//                 <hr />
//                 <div className="row">
//                   <div className="col-sm-3">
//                     <p className="mb-0">Phone</p>
//                   </div>
//                   <div className="col-sm-9">
//                     <p className="text-muted mb-0">{phone}</p>
//                   </div>
//                 </div>
//                 <hr />
//                 <div className="row">
//                   <div className="col-sm-3">
//                     <p className="mb-0">Car Type</p>
//                   </div>
//                   <div className="col-sm-9">
//                     <p className="text-muted mb-0">{carType}</p>
//                   </div>
//                 </div>
//                   <button onClick={updateUserProfile}>Update Profile</button>
//                 {/* <div className="row">
//                   <div className="col-sm-3">
//                     <p className="mb-0">Car Type</p>
//                   </div>
//                   <div className="col-sm-9">
//                     <p className="text-muted mb-0">(098) 765-4321</p>
//                   </div>
//                 </div>
//                 <hr />
//                 <div className="row">
//                   <div className="col-sm-3">
//                     <p className="mb-0">Address</p>
//                   </div>
//                   <div className="col-sm-9">
//                     <p className="text-muted mb-0">Maadi,Cairo,Egypt</p>
//                   </div>
//                 </div> */}
//               </div>
//             </div>
           
//                   </div>
//                 </div>
//               </div>
            
        
        
    
//     </section>
    
//     </div>
//   );
// }

// export default Profile;
