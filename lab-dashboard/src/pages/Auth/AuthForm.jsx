const AuthForm = ({ isSignUp, user, setUser, role }) => {
  const handleChange = (e) => setUser({ ...user, [e.target.name]: e.target.value });

  return (
    <form className="space-y-4">
      {isSignUp && (
        <div>
          <label className="block text-sm font-medium text-gray-600">Name</label>
          <input type="text" name="name" value={user.name} onChange={handleChange} className="w-full px-3 py-2 border rounded" required />
        </div>
      )}

      <div>
        <label className="block text-sm font-medium text-gray-600">Email</label>
        <input type="email" name="email" value={user.email} onChange={handleChange} className="w-full px-3 py-2 border rounded" required />
      </div>

      {isSignUp && (
        <div>
          <label className="block text-sm font-medium text-gray-600">Phone</label>
          <input type="text" name="phone" value={user.phone} onChange={handleChange} className="w-full px-3 py-2 border rounded" required />
        </div>
      )}

      <div>
        <label className="block text-sm font-medium text-gray-600">Password</label>
        <input type="password" name="password" value={user.password} onChange={handleChange} className="w-full px-3 py-2 border rounded" required />
      </div>

      {isSignUp && role === "admin" && (
        <>
          <div>
            <label className="block text-sm font-medium text-gray-600">Lab Name</label>
            <input type="text" name="labName" value={user.labName} onChange={handleChange} className="w-full px-3 py-2 border rounded" required />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-600">Lab Address</label>
            <input type="text" name="labAddress" value={user.labAddress} onChange={handleChange} className="w-full px-3 py-2 border rounded" required />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-600">Test Types</label>
            <input
              type="text"
              placeholder="Enter test types (comma separated)"
              value={user.testTypes}
              onChange={(e) => setUser({ ...user, testTypes: e.target.value })}
            />
          </div>
        </>
      )}
    </form>
  );
};

export default AuthForm;
