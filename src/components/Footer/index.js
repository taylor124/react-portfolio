import React from "react";

function Footer() {

    return (
        <footer className="footer">
            {/* <!-- Linkedin --> */}
            <a href="https://www.linkedin.com/in/taylor-van-scoy-519661200/" role="button" target="_blank" rel="noreferrer"
                        ><i className="fab fa-linkedin-in"></i
                    ></a>

                    {/* <!-- Github --> */}
                    <a href="https://github.com/taylor124" role="button" target="_blank" rel="noreferrer"
                        ><i className="fab fa-github"></i
                    ></a>

                    {/* Twitter */}
                    <a href="https://twitter.com/ScoyTaylor" role="button" target="_blank" rel="noreferrer"
                        ><i className="fab fa-twitter"></i
                    ></a>

        </footer>
    );
}

export default Footer;