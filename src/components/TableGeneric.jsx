import { useState } from "react";

const TableGeneric = ({ title }) => {
  const [rows, setRows] = useState([{ id: 1, key: "", value: "" }]);

  const handleAddRow = () => {
    setRows((prevRows) => [
      ...prevRows,
      { id: prevRows.length + 1, key: "", value: "" }
    ]);
  };

  const handleRemoveRow = (id) => {
    setRows((prevRows) => prevRows.filter((row) => row.id !== id));
  };

  const handleInputChange = (id, field, value) => {
    setRows((prevRows) =>
      prevRows.map((row) =>
        row.id === id ? { ...row, [field]: value } : row
      )
    );

    // Check if input is in the last row
    if (id === rows.length && field === "key" && value !== "") {
      handleAddRow(); // Add new row if input is in the last row and not empty
    }
  };

  return (
    <div className="bg-gray-800 p-6 text-white rounded-lg shadow-md">
      <h2 className="text-2xl mb-4">{title}</h2>
      <table className="min-w-full bg-gray-800 border">
        <thead>
          <tr>
            <th className="px-4 py-2 border">ID</th>
            <th className="px-4 py-2 border">Key</th>
            <th className="px-4 py-2 border">Value</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.id}>
              <td className="px-4 py-2 border">{row.id}</td>
              <td className=" border">
                <input
                  type="text"
                  value={row.key}
                  onChange={(e) =>
                    handleInputChange(row.id, "key", e.target.value)
                  }
                  className="w-full p-4 rounded bg-transparent"
                />
              </td>
              <td className="params border">
                <input
                  type="text"
                  value={row.value}
                  onChange={(e) =>
                    handleInputChange(row.id, "value", e.target.value)
                  }
                  className="w-full p-4 rounded bg-transparent"
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableGeneric;
