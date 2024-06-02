// import React, { useState } from 'react';
// import { Table, Button, Form } from 'react-bootstrap';
// import DatePicker from 'react-datepicker';
// import 'react-datepicker/dist/react-datepicker.css';

// const ManageCoupons = () => {
//   const [coupons, setCoupons] = useState([]);
//   const [newCoupon, setNewCoupon] = useState({ name: '', expire: new Date(), discount: '' });

//   const handleAddCoupon = () => {
//     setCoupons([...coupons, { ...newCoupon, id: Date.now() }]);
//     setNewCoupon({ name: '', expire: new Date(), discount: '' });
//   };

//   const handleDeleteCoupon = (id) => {
//     setCoupons(coupons.filter(coupon => coupon.id !== id));
//   };

//   return (
//     <div className="container mt-5">
//       <h2>Coupons Table</h2>
//       <Table striped bordered hover>
//         <thead>
//           <tr>
//             <th>Name</th>
//             <th>Expire</th>
//             <th>Discount</th>
//             <th>Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {coupons.map(coupon => (
//             <tr key={coupon.id}>
//               <td>{coupon.name}</td>
//               <td>{coupon.expire.toLocaleDateString()}</td>
//               <td>{coupon.discount}</td>
//               <td>
//                 <Button variant="danger" onClick={() => handleDeleteCoupon(coupon.id)}>Delete</Button>
//               </td>
//             </tr>
//           ))}
//           <tr>
//             <td>
//               <Form.Control
//                 type="text"
//                 value={newCoupon.name}
//                 onChange={e => setNewCoupon({ ...newCoupon, name: e.target.value })}
//               />
//             </td>
//             <td>
//               <DatePicker
//                 selected={newCoupon.expire}
//                 onChange={date => setNewCoupon({ ...newCoupon, expire: date })}
//               />
//             </td>
//             <td>
//               <Form.Control
//                 type="number"
//                 value={newCoupon.discount}
//                 onChange={e => setNewCoupon({ ...newCoupon, discount: e.target.value })}
//               />
//             </td>
//             <td>
//               <Button variant="success" onClick={handleAddCoupon}>Add Coupon</Button>
//             </td>
//           </tr>
//         </tbody>
//       </Table>
//     </div>
//   );
// };

// export default ManageCoupons;
import React, { useState } from 'react';
import { Table, Button, Form } from 'react-bootstrap';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const ManageCoupons = () => {
  const [coupons, setCoupons] = useState([]);
  const [newCoupon, setNewCoupon] = useState({ name: '', expire: new Date(), discount: '' });
  const [editCouponId, setEditCouponId] = useState(null);
  const [editCouponData, setEditCouponData] = useState({ name: '', expire: new Date(), discount: '' });

  const handleAddCoupon = () => {
    setCoupons([...coupons, { ...newCoupon, id: Date.now() }]);
    setNewCoupon({ name: '', expire: new Date(), discount: '' });
  };

  const handleDeleteCoupon = (id) => {
    setCoupons(coupons.filter(coupon => coupon.id !== id));
  };

  const handleEditClick = (coupon) => {
    setEditCouponId(coupon.id);
    setEditCouponData({ name: coupon.name, expire: new Date(coupon.expire), discount: coupon.discount });
  };

  const handleSaveEdit = () => {
    setCoupons(coupons.map(coupon =>
      coupon.id === editCouponId ? { ...coupon, ...editCouponData } : coupon
    ));
    setEditCouponId(null);
  };

  return (
    <div className="container mt-5">
      <h2>Coupons Table</h2>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Name</th>
            <th>Expire</th>
            <th>Discount</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {coupons.map(coupon => (
            <tr key={coupon.id}>
              {editCouponId === coupon.id ? (
                <>
                  <td>
                    <Form.Control
                      type="text"
                      value={editCouponData.name}
                      onChange={e => setEditCouponData({ ...editCouponData, name: e.target.value })}
                    />
                  </td>
                  <td>
                    <DatePicker
                      selected={editCouponData.expire}
                      onChange={date => setEditCouponData({ ...editCouponData, expire: date })}
                    />
                  </td>
                  <td>
                    <Form.Control
                      type="number"
                      value={editCouponData.discount}
                      onChange={e => setEditCouponData({ ...editCouponData, discount: e.target.value })}
                    />
                  </td>
                  <td>
                    <Button variant="success" onClick={handleSaveEdit}>Save</Button>
                    <Button variant="secondary" onClick={() => setEditCouponId(null)}>Cancel</Button>
                  </td>
                </>
              ) : (
                <>
                  <td>{coupon.name}</td>
                  <td>{new Date(coupon.expire).toLocaleDateString()}</td>
                  <td>{coupon.discount}</td>
                  <td>
                    <Button variant="warning" onClick={() => handleEditClick(coupon)}>Edit</Button>{' '}
                    <Button variant="danger" onClick={() => handleDeleteCoupon(coupon.id)}>Delete</Button>
                  </td>
                </>
              )}
            </tr>
          ))}
          <tr>
            <td>
              <Form.Control
                type="text"
                value={newCoupon.name}
                onChange={e => setNewCoupon({ ...newCoupon, name: e.target.value })}
              />
            </td>
            <td>
              <DatePicker
                selected={newCoupon.expire}
                onChange={date => setNewCoupon({ ...newCoupon, expire: date })}
              />
            </td>
            <td>
              <Form.Control
                type="number"
                value={newCoupon.discount}
                onChange={e => setNewCoupon({ ...newCoupon, discount: e.target.value })}
              />
            </td>
            <td>
              <Button variant="success" onClick={handleAddCoupon}>Add Coupon</Button>
            </td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

export default ManageCoupons;
