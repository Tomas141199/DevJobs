const Button = ({ value, color }) => {
  return (
    <div className="text-right">
      <input
        type="submit"
        value={value}
        className={`cursor-pointer px-3 py-1 my-4 text-white font-semibold ${color} rounded-sm duration-500 hover:scale-105`}
      />
    </div>
  );
};

export default Button;
