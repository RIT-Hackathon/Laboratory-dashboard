import React from "react";

const AuthForm = ({ isSignUp, user, setUser }) => {
  return (
    <div className="space-y-4">
      <input
        type="email"
        placeholder="Email"
        className="border px-4 py-2 rounded-lg w-full"
        value={user.email}
        onChange={(e) => setUser({ ...user, email: e.target.value })}
      />
      <input
        type="password"
        placeholder="Password"
        className="border px-4 py-2 rounded-lg w-full"
        value={user.password}
        onChange={(e) => setUser({ ...user, password: e.target.value })}
      />

      {isSignUp && (
        <>
          <input
            type="text"
            placeholder="Full Name"
            className="border px-4 py-2 rounded-lg w-full"
            value={user.name}
            onChange={(e) => setUser({ ...user, name: e.target.value })}
          />
          <input
            type="tel"
            placeholder="Phone"
            className="border px-4 py-2 rounded-lg w-full"
            value={user.phone}
            onChange={(e) => setUser({ ...user, phone: e.target.value })}
          />
        </>
      )}
    </div>
  );
};

export default AuthForm;
