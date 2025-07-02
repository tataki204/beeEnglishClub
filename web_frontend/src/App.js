import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './css/main.css';
import Header from './components/Header';
import Footer from './components/Footer';
// in an <h1> element. The component is exported as the default export of the module. 
// The code assumes that the backend API is running on localhost:8000 and has an endpoint
// at /api/hello/ that returns a JSON object with a "message" field.

function App() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    axios.get('http://localhost:8000/api/hello/')
      .then(response => setMessage(response.data.message))
      .catch(error => console.error(error));
  }, []);

  return (
    <div>
      <Header />
      <main style={{ padding: '20px' }}>
        <h1>Welcome to Bee English Club</h1>
        <p>{message}</p>
      </main>
      <Footer />
    </div>
  );
}

export default App;
// This is a simple React component that fetches a message from the backend API
// and displays it. It uses the useEffect hook to make the API call when the component
// mounts, and the useState hook to manage the message state. The axios library is used
// to make the HTTP GET request to the backend API endpoint. The message is displayed     