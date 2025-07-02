// src/pages/ScanProductPage.tsx
import React, { useState, useCallback } from "react";
import useFetch from "../hooks/useFetch";
import { postProductScan } from "../services/scanService";
import type { ProductScanPayload, ProductScanResponse } from "../types/scan";

/**
 * Renders a page for scanning a product by entering its barcode.
 *
 * This component provides a form to submit a barcode and timestamp.
 * It uses a fetch hook to handle the API call and displays the
 * loading state and server response or error.
 *
 * @returns {React.ReactElement} The scan product page component.
 */
const ScanProductPage: React.FC = () => {
  const [payload, setPayload] = useState<ProductScanPayload>({
    barcode: "",
    scan_timestamp: new Date().toISOString(),
  });

  const scanApiCall = useCallback(() => {
    return postProductScan(payload);
  }, [payload]);

  const { data: response, loading, error, execute } = useFetch<ProductScanResponse>(scanApiCall, false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    execute();
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const finalValue = name === 'scan_timestamp' ? new Date(value).toISOString() : value;
    setPayload(prev => ({ ...prev, [name]: finalValue }));
  };

  return (
    <div className="max-w-lg mx-auto mt-10 p-6 bg-white rounded-lg shadow-lg">
      <h1 className="text-2xl font-bold mb-6 text-center">Scanează produs</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="barcode" className="block mb-1 font-semibold">Cod de bare (barcode):</label>
          <input
            id="barcode"
            name="barcode"
            type="text"
            value={payload.barcode}
            onChange={handleInputChange}
            required
            className="w-full border rounded px-3 py-2"
            placeholder="Ex: 1234567890123"
          />
        </div>
        <div>
          <label htmlFor="scan_timestamp" className="block mb-1 font-semibold">Data/ora scanare:</label>
          <input
            id="scan_timestamp"
            name="scan_timestamp"
            type="datetime-local"
            value={payload.scan_timestamp.slice(0, 16)}
            onChange={handleInputChange}
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
          {error.message || "A apărut o eroare la trimiterea datelor."}
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
