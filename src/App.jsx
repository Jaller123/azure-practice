import { useEffect, useState } from "react";

export default function App() {
  const [msg, setMsg] = useState("...");

  useEffect(() => {
    fetch("/api/hello")       // Static Web Apps proxies this to the Function
      .then(r => r.json())
      .then(data => setMsg(data.message))
      .catch(() => setMsg("API call failed"));
  }, []);

  return (
    <main style={{ padding: 24 }}>
      <h1>React + Azure Functions</h1>
      <p>API says: {msg}</p>
    </main>
  );
}