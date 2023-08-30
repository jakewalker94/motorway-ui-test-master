import "../../styles/layout.scss";

// header component
const Header = (props) => {
    return (
        <header className="app__header">
            <div className="app__header_title"><img src={"/logo192.png"} alt="logo"/>{props.name}</div>
        </header>
    )
}

export default Header;