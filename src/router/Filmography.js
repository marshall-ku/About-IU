import React from "react";

class Filmography extends React.Component {
    constructor(props) {
        super(props);
        document.body.classList.remove("hideHeader", "home");
    }

    render() {
        return <section>Filmography</section>;
    }
}

export default Filmography;
