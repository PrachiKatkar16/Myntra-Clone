import React from 'react';
import './ProfileBox.css';

function ProfileBox() {
  return (
    <div className="profile-box">
      <div className="profile-header">
        <h3>Welcome</h3>
        <p>To access account and manage orders</p>
        <button className="login-button">LOGIN / SIGNUP</button>
      </div>
      <div className="profile-content">
        <ul>
          <li>Orders</li>
          <li>Wishlist</li>
          <li>Gift Cards</li>
          <li>Contact Us</li>
          <li>Myntra Insider <span className="new-badge">New</span></li>
          <li>Myntra Credit</li>
          <li>Coupons</li>
          <li>Saved Cards</li>
          <li>Saved VPA</li>
          <li>Saved Addresses</li>
        </ul>
      </div>
    </div>
  );
}

export default ProfileBox;