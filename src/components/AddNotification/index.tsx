import React, { useState } from "react";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../../firebase";
import "./style.css";

// Array of predefined notification messages
const predefinedMessages = [
  "Notification 1: Important update!",
  "Notification 2: Check this out!",
  "Notification 3: Don’t miss this!",
];

// Functional component for adding notifications
const AddNotification: React.FC = () => {
  // State for managing error and success messages
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  // Function to handle adding a notification
  const handleAddNotification = async (message: string) => {
    try {
      // Add a new document to the "notifications" collection with the provided message
      await addDoc(collection(db, "notifications"), { message, read: false });
      // Set success message upon successful addition
      setSuccess("Notification added successfully.");
      setError(null); // Clear any existing error message
    } catch (error) {
      // Set error message if adding the notification fails
      setError("Failed to add notification.");
    }
  };

  return (
    <div className="add-notification-container">
      <h2>Add New Notification</h2>
      <div className="button-group">
        {predefinedMessages.map((msg, index) => (
          <button
            key={index}
            onClick={() => handleAddNotification(msg)}
            className="notification-button"
          >
            {msg}
          </button>
        ))}
      </div>

      {error && <p className="error-message">{error}</p>}
      {success && <p className="success-message">{success}</p>}
    </div>
  );
};

export default AddNotification;
