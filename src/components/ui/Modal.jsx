const Modal = ({ isOpen, onClose, children }) => {
    if (!isOpen) return null;
  
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div className="bg-white p-6 rounded shadow-lg w-1/2">
          <button className="float-right text-gray-500" onClick={onClose}>✖</button>
          {children}
        </div>
      </div>
    );
  };
  
  export default Modal;
  