import "./button.css";

const Button = (props) => {
    const { type, title, onClick, disable } = props;

    return (
        <button
            onClick={onClick}
            disabled={disable}
            className={`btn ${(type === "add" && "add") ||
                (type === "remove" && "remove") ||
                (type === "checkout" && "checkout")
                } ${disable === true && 'disabled'}`}
        >
            {title}
        </button>
    );
};

export default Button;
