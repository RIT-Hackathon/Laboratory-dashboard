const AuthButtons = ({ isSignUp, handleLogin, handleSignup, setIsSignUp, role }) => {
  return (
    <div className="mt-4">
      <button
        type="button"
        onClick={isSignUp ? handleSignup : handleLogin}
        className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition-all"
      >
        {isSignUp ? "Sign Up" : "Login"}
      </button>

      {/* Show toggle option only if the user is not staff */}
      {role !== "staff" && (
        <button
          type="button"
          onClick={() => setIsSignUp(!isSignUp)}
          className="w-full mt-2 text-blue-600 hover:underline"
        >
          {isSignUp ? "Already have an account? Login" : "Don't have an account? Sign up"}
        </button>
      )}
    </div>
  );
};

export default AuthButtons;
