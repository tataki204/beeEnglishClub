import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    axios.get('http://localhost:8000/api/hello/')
      .then(response => setMessage(response.data.message))
      .catch(error => console.error(error));
  }, []);

  return (
    <div>
      <h1>{message}</h1>
    </div>
  );
}

export default App;
// This is a simple React component that fetches a message from the backend API
// and displays it. It uses the useEffect hook to make the API call when the component
// mounts, and the useState hook to manage the message state. The axios library is used
// to make the HTTP GET request to the backend API endpoint. The message is displayed     