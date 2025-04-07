// Button.js
const Button = ({ text, onClick }) => {
    return (
      <button
        className="bg-white text-black text-lg font-semibold px-32 py-3 transition duration-300 hover:bg-blue-500 hover:text-white"
        onClick={onClick}
      >
        {text}
      </button>
    );
  };
  
  export default Button;
  