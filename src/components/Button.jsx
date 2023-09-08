import './Button.css';

const Button = ({ text, styling, handleClick }) => {
  return (
    <button className={styling} onClick={handleClick}>
      {text}
    </button>
  );
};

export default Button;

