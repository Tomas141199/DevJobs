const ErrorMessage = ({ message }) => {
  return (
    <div className="text-red-500 border-l-2 border-l-red-600 bg-red-100 text-xs mt-tiny px-2 rounded-sm">
      {message}
    </div>
  );
};

export default ErrorMessage;
