import { useState } from "react";
import TableGeneric from "./TableGeneric";

const Tabs = ({ activeTab, handleTabClick }) => {
  
  return (
    <div>
      <div className=" mb-4">
        <button
          className={`mr-4 px-4 py-2 border-b-2 ${
            activeTab === "params" ? "border-blue-500" : "border-transparent"
          } focus:outline-none`}
          onClick={() => handleTabClick("params")}
        >
          Params
        </button>
        <button
          className={`mr-4 px-4 py-2 border-b-2 ${
            activeTab === "auth" ? "border-blue-500" : "border-transparent"
          } focus:outline-none`}
          onClick={() => handleTabClick("auth")}
        >
          Auth
        </button>
        <button
          className={`mr-4 px-4 py-2 border-b-2 ${
            activeTab === "headers" ? "border-blue-500" : "border-transparent"
          } focus:outline-none`}
          onClick={() => handleTabClick("headers")}
        >
          Headers
        </button>
        <button
          className={`mr-4 px-4 py-2 border-b-2 ${
            activeTab === "body" ? "border-blue-500" : "border-transparent"
          } focus:outline-none`}
          onClick={() => handleTabClick("body")}
        >
          Body
        </button>
      </div>
      {/* Agrega más pestañas según sea necesario */}
      {/* Contenido de las pestañas */}
      <div className="flex flex-col ">
        {activeTab === "params" && (
          <div>
            <TableGeneric title="Params" />
          </div>
        )}
        {activeTab === "auth" && (
          <div>{/* Contenido de la pestaña de autenticación */}</div>
        )}
        {activeTab === "headers" && (
          <div> <TableGeneric title="Header" /></div>
        )}
        {activeTab === "body" && (
          <div>{/* Contenido de la pestaña de cuerpo */}</div>
        )}
        {/* Agrega más secciones de contenido según sea necesario */}
      </div>
    </div>
  );
};

export default Tabs;
