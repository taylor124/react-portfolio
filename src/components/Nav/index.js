import React from "react";

function Nav(props) {
    const {
        itemSelected,
        setItemSelected
    } = props;

    return (
        <header className="flex-row px-1">
            <h2>
                <a data-testid="link" href="/">
                    Taylor Van Scoy
                </a>
            </h2>
            <nav>
                <ul className="flex-row">
                    <li className={`mx-2 ${itemSelected && 'navActive'}`}>
                        <span onClick={() => setItemSelected("about")}>
                            About me
            </span>
                    </li>
                    <li className={`mx-2 ${itemSelected && 'navActive'}`}>
                        <span onClick={() => setItemSelected("contact")}>
                            Contact
            </span>
                    </li>
                    <li className={`mx-2 ${itemSelected && 'navActive'}`}>
                        <span onClick={() => setItemSelected("resume")}>
                            Resume
            </span>
                    </li>
                    <li className={`mx-2 ${itemSelected && 'navActive'}`}>
                        <span onClick={() => setItemSelected("portfolio")}>
                            Portfolio
            </span>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Nav;