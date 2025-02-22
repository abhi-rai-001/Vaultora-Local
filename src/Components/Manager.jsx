import { React, useState } from "react";
import CopyIcon from "../assets/copy.svg";
import EyeClosedIcon from "../assets/eye-closed.svg";
import EyeOpenIcon from "../assets/eye.svg";
import DeleteIcon from "../assets/delete.svg";
import EditIcon from "../assets/edit.svg";

import { ToastContainer, toast } from 'react-toastify';
const Manager = ({ passwordArray }) => {
  const [visiblePasswords, setVisiblePasswords] = useState({});

  const togglePasswordVisibility = (rowIndex) => {
    setVisiblePasswords(prev => ({
      ...prev,
      [rowIndex]: !prev[rowIndex]
    }));
  };

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text)
      .then(() => {
        toast.info('Copied to clipboard...', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light"
            });
      })
      .catch(err => {
        console.error('Failed to copy: ', err);
      });
  };

  return (
    
    <div>
        <ToastContainer
position="top-right"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick={false}
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="light"

/>
      <div className="container mx-auto mt-10 bg-white rounded-xl shadow-lg p-6 max-w-7xl">
        <h2 className="text-center font-bold text-2xl mb-10 w-full relative inline-block mx-auto">
          <span className="after:content-[''] after:block after:w-1/2 after:h-1 after:bg-blue-500 after:mx-auto after:mt-2 after:rounded-full">
            Saved Credentials
          </span>
        </h2>

        <div className="flex justify-between">
          {passwordArray.length === 0 && (
            <div className="text-center text-gray-500 w-full font-semibold text-xl py-10 animate-pulse">
              No passwords added yet
            </div>
          )}

          {passwordArray.length !== 0 && (
            <div className="w-full overflow-x-auto rounded-lg shadow">
              <table className="w-full divide-y divide-gray-200">
                <thead className="bg-gradient-to-r from-blue-600 to-blue-500">
                  <tr>
                    <th className="px-6 py-4 text-left text-xs font-medium text-white uppercase tracking-wider">
                      Sr. No
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-medium text-white uppercase tracking-wider">
                      Website
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-medium text-white uppercase tracking-wider">
                      Username
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-medium text-white uppercase tracking-wider">
                      Password
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-medium text-white uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {passwordArray.map((item, index) => (
                    <tr
                      key={index}
                      className="hover:bg-blue-50 transition-colors duration-150 ease-in-out"
                    >
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        {index + 1}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                        <div className="flex justify-between items-center">
                          <span>{item.website}</span>
                          <img
                            className="cursor-pointer opacity-20 hover:opacity-100 transition-opacity ml-2"
                            src={CopyIcon}
                            alt="copy website"
                            onClick={() => copyToClipboard(item.website)}
                          />
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                        <div className="flex justify-between items-center">
                          <span>{item.username}</span>
                          <img
                            className="cursor-pointer opacity-20 hover:opacity-100 transition-opacity ml-2"
                            src={CopyIcon}
                            alt="copy username"
                            onClick={() => copyToClipboard(item.username)}
                          />
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-mono bg-gray-50 rounded-md mx-2">
                        <div className="flex justify-between items-center">
                          <span>
                            {visiblePasswords[index] ? item.password : "••••••••"}
                          </span>
                          <div className="flex items-center">
                            <img
                              className="cursor-pointer opacity-20 hover:opacity-100 transition-opacity mr-2"
                              src={CopyIcon}
                              alt="copy password"
                              onClick={() => copyToClipboard(item.password)}
                            />
                            <img
                              className="w-5 cursor-pointer opacity-70 hover:opacity-100 transition-opacity"
                              src={visiblePasswords[index] ? EyeOpenIcon : EyeClosedIcon}
                              alt="toggle password visibility"
                              onClick={() => togglePasswordVisibility(index)}
                            />
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-mono bg-gray-50 rounded-md mx-2">
                        <div className="flex justify-between w-[80%]">
                          <img
                            className="cursor-pointer hover:scale-110 drop-shadow-md transition-all ease-in-out duration-300 opacity-80 hover:opacity-100"
                            src={EditIcon}
                            alt="Edit"
                          /> 
                          <img
                            className="cursor-pointer hover:scale-110 drop-shadow-md transition-all ease-in-out duration-300 opacity-80 hover:opacity-100"
                            src={DeleteIcon}
                            alt="delete"
                          />
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Manager;