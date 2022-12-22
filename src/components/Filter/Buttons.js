const Buttons = (props) => {
    const [active, setActive] = useState();

    const handleClick = (event) => {
        event.preventDefault();
        setActive(event.target.id);
    }

    const buttons = props.buttons.map((btn, index) => {
        return (
            <button
                key={btn.id}
                className={active === btn.id ? "active" : undefined}
                id={btn.id}
                onClick={handleClick}
            >
                {btn.name}
            </button>
        );
    });
    return <div>{buttons}</div>;
};

export default Buttons