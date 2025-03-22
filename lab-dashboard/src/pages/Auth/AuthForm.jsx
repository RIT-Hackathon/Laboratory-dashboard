import React, { useState } from "react";

const AuthForm = ({ isSignUp, user, setUser, role }) => {
  const [showTestDropdown, setShowTestDropdown] = useState(false);
  
  // Available test types
  const availableTests = [
    "BLOOD_TEST",
    "X_RAY",
    "MRI",
    "CT_SCAN",
    "URINE_TEST",
    "ECG"
  ];

  const handleChange = (e) => setUser({ ...user, [e.target.name]: e.target.value });
  
  // Handle test type selection
  const handleTestTypeChange = (testType) => {
    // Parse existing test types from string to array
    const currentTests = user.testTypes ? user.testTypes.split(', ') : [];
    
    // Toggle the test type (add or remove)
    let updatedTests;
    if (currentTests.includes(testType)) {
      updatedTests = currentTests.filter(test => test !== testType);
    } else {
      updatedTests = [...currentTests, testType];
    }
    
    // Update the user object with the new comma-separated string
    setUser({ ...user, testTypes: updatedTests.join(', ') });
  };

  // Get role-specific colors for focus states
  const getRoleFocusColor = () => {
    switch (role) {
      case "admin":
        return "focus:border-indigo-500 focus:ring-indigo-500";
      case "staff":
        return "focus:border-green-500 focus:ring-green-500";
      default: // patient
        return "focus:border-blue-500 focus:ring-blue-500";
    }
  };

  const inputClasses = `w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-300 ${getRoleFocusColor()} focus:outline-none focus:ring-2 focus:ring-opacity-50 transition duration-200`;
  const labelClasses = "block text-sm font-medium text-gray-700 mb-1";

  return (
    <form className="space-y-5">
      {isSignUp && (
        <div className="group">
          <label htmlFor="name" className={labelClasses}>Full Name</label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </div>
            <input 
              id="name"
              type="text" 
              name="name" 
              value={user.name} 
              onChange={handleChange} 
              className={`${inputClasses} pl-10`}
              placeholder="Enter your full name" 
              required 
            />
          </div>
        </div>
      )}

      <div className="group">
        <label htmlFor="email" className={labelClasses}>Email Address</label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </div>
          <input 
            id="email"
            type="email" 
            name="email" 
            value={user.email} 
            onChange={handleChange} 
            className={`${inputClasses} pl-10`}
            placeholder="your.email@example.com" 
            required 
          />
        </div>
      </div>

      {isSignUp && (
        <div className="group">
          <label htmlFor="phone" className={labelClasses}>Phone Number</label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </div>
            <input 
              id="phone"
              type="tel" 
              name="phone" 
              value={user.phone} 
              onChange={handleChange} 
              className={`${inputClasses} pl-10`}
              placeholder="(123) 456-7890" 
              required 
            />
          </div>
        </div>
      )}

      <div className="group">
        <label htmlFor="password" className={labelClasses}>Password</label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
          </div>
          <input 
            id="password"
            type="password" 
            name="password" 
            value={user.password} 
            onChange={handleChange} 
            className={`${inputClasses} pl-10`}
            placeholder={isSignUp ? "Create a strong password" : "Enter your password"} 
            required 
          />
        </div>
        {isSignUp && (
          <p className="mt-1 text-xs text-gray-500">Password should be at least 8 characters</p>
        )}
      </div>

      {isSignUp && role === "admin" && (
        <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 mt-6">
          <h3 className="text-sm font-semibold text-gray-700 mb-3">Laboratory Information</h3>
          
          <div className="space-y-4">
            <div className="group">
              <label htmlFor="labName" className={labelClasses}>Laboratory Name</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                  </svg>
                </div>
                <input 
                  id="labName"
                  type="text" 
                  name="labName" 
                  value={user.labName} 
                  onChange={handleChange} 
                  className={`${inputClasses} pl-10`}
                  placeholder="Enter laboratory name" 
                  required 
                />
              </div>
            </div>

            <div className="group">
              <label htmlFor="labAddress" className={labelClasses}>Laboratory Address</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <input 
                  id="labAddress"
                  type="text" 
                  name="labAddress" 
                  value={user.labAddress} 
                  onChange={handleChange} 
                  className={`${inputClasses} pl-10`}
                  placeholder="Enter laboratory address" 
                  required 
                />
              </div>
            </div>

            <div className="group">
              <label htmlFor="testTypes" className={labelClasses}>Available Test Types</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                </div>
                <div 
                  className="relative"
                  onClick={() => setShowTestDropdown(!showTestDropdown)}
                >
                  <input 
                    id="testTypes"
                    type="text" 
                    name="testTypes" 
                    value={user.testTypes || ""} 
                    onChange={handleChange} 
                    className={`${inputClasses} pl-10 cursor-pointer`}
                    placeholder="Select available test types" 
                    required 
                    readOnly
                  />
                  <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
                
                {/* Dropdown menu for selecting test types */}
                {showTestDropdown && (
                  <div className="absolute z-10 mt-1 w-full bg-white shadow-lg rounded-md border border-gray-200">
                    <ul className="py-1 max-h-60 overflow-auto">
                      {availableTests.map((test) => {
                        const isSelected = user.testTypes?.includes(test);
                        
                        return (
                          <li 
                            key={test}
                            className={`px-4 py-2 cursor-pointer hover:bg-gray-100 flex items-center
                              ${isSelected ? 'bg-indigo-50' : ''}`}
                            onClick={(e) => {
                              e.stopPropagation();
                              handleTestTypeChange(test);
                            }}
                          >
                            <div className={`w-5 h-5 mr-3 border rounded flex items-center justify-center
                              ${isSelected ? 'bg-indigo-500 border-indigo-500' : 'border-gray-300'}`}
                            >
                              {isSelected && (
                                <svg className="w-4 h-4 text-white" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                                  <path d="M5 13l4 4L19 7"></path>
                                </svg>
                              )}
                            </div>
                            {test.replace(/_/g, ' ')}
                          </li>
                        );
                      })}
                    </ul>
                    <div className="border-t border-gray-200 px-4 py-2">
                      <button
                        type="button"
                        className="w-full px-3 py-1.5 text-sm text-white bg-indigo-600 rounded-md hover:bg-indigo-700"
                        onClick={(e) => {
                          e.stopPropagation();
                          setShowTestDropdown(false);
                        }}
                      >
                        Done
                      </button>
                    </div>
                  </div>
                )}
              </div>
              <p className="mt-1 text-xs text-gray-500">Click to select multiple test types</p>
            </div>
          </div>
        </div>
      )}
    </form>
  );
};

export default AuthForm;