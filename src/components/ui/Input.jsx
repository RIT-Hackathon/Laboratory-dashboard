const Input = ({ label, type = 'text', value, onChange, placeholder = '', className = '' }) => (
    <div className="mb-4">
      {label && <label className="block text-sm font-medium mb-1">{label}</label>}
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300 ${className}`}
      />
    </div>
  );
  
  export default Input;
  