import React, { useState, useEffect } from "react";
import {
  collection,
  onSnapshot,
  doc,
  updateDoc,
  getFirestore,
  query,
  where,
  getDocs,
} from "firebase/firestore";
import { db } from "../../firebase";
import { Dropdown } from "react-bootstrap";
import { FaBell } from "react-icons/fa";
import "./style.css";

// Interface representing the structure of a notification
interface Notification {
  id: string;
  message: string;
  read: boolean;
}

// Functional component to display and manage notifications
const NotificationComponent: React.FC = () => {
  // State to hold notifications and unread count
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const [unreadCount, setUnreadCount] = useState<number>(0);

  useEffect(() => {
    // Set up a real-time listener for changes in the "notifications" collection
    const unsubscribe = onSnapshot(
      collection(db, "notifications"),
      (snapshot) => {
        const notificationsData: Notification[] = [];
        let unread = 0;

        // Process each document snapshot
        snapshot.forEach((doc) => {
          const data = doc.data() as Omit<Notification, "id">; // Exclude 'id' from data
          const notification = { id: doc.id, ...data }; // Combine 'id' with other data
          if (!data.read) unread++; // Count unread notifications
          notificationsData.push(notification); // Add to notifications array
        });

        setNotifications(notificationsData);
        setUnreadCount(unread);
      }
    );

    return unsubscribe;
  }, []);

  // Function to mark a single notification as read
  const markAsRead = async (id: string) => {
    const notificationDoc = doc(getFirestore(), "notifications", id);
    await updateDoc(notificationDoc, { read: true });
  };

  // Function to mark all unread notifications as read
  const markAllAsRead = async () => {
    const unreadNotificationsQuery = query(
      collection(db, "notifications"),
      where("read", "==", false)
    );
    const querySnapshot = await getDocs(unreadNotificationsQuery);

    // Update each unread notification to be read
    querySnapshot.forEach(async (document) => {
      const notificationDoc = doc(db, "notifications", document.id);
      await updateDoc(notificationDoc, { read: true });
    });
  };

  return (
    <div className="notification-container">
      <Dropdown align="end">
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          <FaBell />
          {unreadCount > 0 && (
            <span className="notification-counter">{unreadCount}</span>
          )}
        </Dropdown.Toggle>

        <Dropdown.Menu className="dropdown-menu-right custom-dropdown-menu">
          {notifications.length > 0 && (
            <Dropdown.Item onClick={markAllAsRead} className="mark-all-read">
              Mark All Read
            </Dropdown.Item>
          )}

          <div className="notification-items">
            {notifications.map((notification) => (
              <Dropdown.Item
                key={notification.id}
                onClick={() => markAsRead(notification.id)}
                className={`notification-item ${
                  notification.read ? "read" : "unread"
                }`}
              >
                {notification.message}
              </Dropdown.Item>
            ))}

            {notifications.length === 0 && (
              <Dropdown.Item>No new notifications</Dropdown.Item>
            )}
          </div>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
};

export default NotificationComponent;
