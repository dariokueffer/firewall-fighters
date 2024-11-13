import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import './UserNotifications.css'; // Optional: Add a CSS file for better styling

const UserNotifications = () => {
    const notifications = useSelector((state) => state.user.notifications);

    return (
        <div className="user-notifications-container">
            <h4 className="heading text-primary text-center mt-4 mb-5">User Notifications</h4>
            <div className="notifications-list">
                {notifications && notifications.length > 0 ? (
                    notifications.map((notification) => (
                        <div
                            key={notification._id}
                            className={`notification-item ${notification.read ? 'read' : 'unread'}`}
                        >
                            <div className="notification-header">
                                <span className="notification-type badge">
                                    {notification.type.toUpperCase()}
                                </span>
                                <span className="notification-timestamp">
                                    {new Date(notification.timestamp).toLocaleString()}
                                </span>
                            </div>
                            <div className="notification-message">
                                {notification.message}
                            </div>
                        </div>
                    ))
                ) : (
                    <div className="no-notifications text-center">
                        <p>No notifications available.</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default UserNotifications;
