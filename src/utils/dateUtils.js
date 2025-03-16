export const formatDate = (date) => {
    const d = new Date(date);
    return d.toLocaleDateString();
  };
  
  export const formatTime = (date) => {
    const d = new Date(date);
    return d.toLocaleTimeString();
  };
  