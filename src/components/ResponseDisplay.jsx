import React from "react";
import { InputTextarea } from "primereact/inputtextarea";

const ResponseDisplay = ({ response }) => {
  return (
    <div className="mt-4 p-4 bg-gray-900 rounded shadow text-white border-t-2">
      <div className="text-gray-500 mb-2">Response:</div>
      <InputTextarea
        rows={10} // Número de filas para mostrar
        value={response} // Valor del texto
        autoResize // Permitir el redimensionamiento automático
        readOnly // Hacer el área de texto de solo lectura
        className="w-full bg-gray-900 text-white" // Clase para ajustar el ancho al 100%
      />
    </div>
  );
};

export default ResponseDisplay;
