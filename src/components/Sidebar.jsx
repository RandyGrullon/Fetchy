import { addRequest, selectRequest, selectRequests, removeRequest } from '@/store/requestSlice';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const Sidebar = () => {
  const dispatch = useDispatch();
  const requests = useSelector(selectRequests);
  const [hoveredId, setHoveredId] = useState(null);

  const handleNewRequest = () => {
    dispatch(addRequest());
  };

  const handleRemoveRequest = (id) => {
    dispatch(removeRequest(id));
  };

  return (
    <div className="bg-gray-800 w-64 p-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">History</h2>
        <button
          onClick={handleNewRequest}
          className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
        >
          New
        </button>
      </div>
      <ul>
        {requests.map((request) => (
          <li
            key={request.id}
            onClick={() => dispatch(selectRequest(request.id))}
            className="flex justify-between cursor-pointer duration-300 relative mb-2 p-2 bg-gray-600 rounded-lg shadow hover:text-black hover:bg-gray-200"
            onMouseEnter={() => setHoveredId(request.id)}
            onMouseLeave={() => setHoveredId(null)}
          >
            <span>{request.name || `Request ${request.id}`}</span>
            {hoveredId === request.id && (
              <button
                onClick={(e) => {
                  e.stopPropagation(); // Prevents the click from propagating to the li
                  handleRemoveRequest(request.id);
                }}
                className="absolute right-2 top-2 hover:text-red-500"
              >
                <FontAwesomeIcon icon={faTrash} />
              </button>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
