// src/pages/ScanProductPage.tsx
import React, { useState } from "react";
import axios from "axios";

const ScanProductPage: React.FC = () => {
  const [barcode, setBarcode] = useState("");
  const [timestamp, setTimestamp] = useState("");
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
const [response, setResponse] = useState<any>(null);

  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  // opțional: generează timestamp automat
  React.useEffect(() => {
    setTimestamp(new Date().toISOString());
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setResponse(null);
    setLoading(true);

    try {
      const res = await axios.post(
  "https://192.168.56.1:8092/api/scanner/product_scan/product_scan",
  {
    barcode,
    scan_timestamp: timestamp,
  }
);


      setResponse(res.data);
    } catch (err: unknown) {
  if (err instanceof Error) {
    setError(err.message);
  } else {
    setError("A apărut o eroare la trimiterea datelor.");
  }
}
 finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-lg mx-auto mt-10 p-6 bg-white rounded-lg shadow-lg">
      <h1 className="text-2xl font-bold mb-6 text-center">Scanează produs</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block mb-1 font-semibold">Cod de bare (barcode):</label>
          <input
            type="text"
            value={barcode}
            onChange={(e) => setBarcode(e.target.value)}
            required
            className="w-full border rounded px-3 py-2"
            placeholder="Ex: 1234567890123"
          />
        </div>
        <div>
          <label className="block mb-1 font-semibold">Data/ora scanare:</label>
          <input
            type="datetime-local"
            value={timestamp.slice(0, 16)}
            onChange={(e) =>
              setTimestamp(new Date(e.target.value).toISOString())
            }
            required
            className="w-full border rounded px-3 py-2"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
          disabled={loading}
        >
          {loading ? "Se trimite..." : "Trimite"}
        </button>
      </form>

      {error && (
        <div className="mt-4 text-red-600 text-center font-semibold">
          {error}
        </div>
      )}

      {response && (
        <div className="mt-6 bg-gray-100 p-4 rounded">
          <h2 className="font-semibold mb-2">Răspuns server:</h2>
          <pre className="text-sm">{JSON.stringify(response, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default ScanProductPage;
