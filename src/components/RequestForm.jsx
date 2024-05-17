import React from "react";

const RequestForm = ({ method, url, handleMethodChange, handleUrlChange, handleSubmit }) => {
  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col md:flex-row items-center bg-gray-600 p-4 shadow-md rounded-lg mb-4 space-y-2 md:space-y-0 md:space-x-4"
    >
      <select
        className="border border-white p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white bg-gray-600"
        value={method}
        onChange={handleMethodChange}
      >
        <option value="GET">GET</option>
        <option value="POST">POST</option>
        <option value="PUT">PUT</option>
        <option value="DELETE">DELETE</option>
        {/* Agrega más métodos según sea necesario */}
      </select>
      <input
        type="text"
        className="border border-white text-white bg-gray-600 p-2 rounded-lg flex-grow focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Ingrese la URL"
        value={url}
        onChange={handleUrlChange}
      />
      <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
        Enviar
      </button>
    </form>
  );
};

export default RequestForm;
