import { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const getGreeting = async () => {
    if (!name) {
      setMessage("Name is required.");
      return;
    }
    const response = await fetch(
      `http://localhost:5000/api/greet?name=${name}`
    );
    const data = await response.json();
    setMessage(data.message || data.error);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <h2 className="text-2xl font-bold mb-4 text-center text-blue-600">
          Greeting App
        </h2>
        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full px-4 py-2 border rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <button
          onClick={getGreeting}
          className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition"
        >
          Get Greeting
        </button>
        {message && (
          <h3 className="mt-4 text-lg text-center font-semibold text-gray-700">
            {message}
          </h3>
        )}
      </div>
    </div>
  );
}

export default App;
