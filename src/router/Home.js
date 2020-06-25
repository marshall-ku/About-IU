import React from "react";
import Instagram from "../components/Instagram";
import YoutubeVideo from "../components/YoutubeVideo";
import "./Home.css";

class Home extends React.Component {
    constructor(props) {
        super(props);
        document.body.classList.add("home");
        this.state = {
            scrolled: window.scrollY > 0,
        };
    }

    componentDidMount() {
        window.addEventListener("scroll", () => {
            window.scrollY === 0
                ? this.setState({
                      scrolled: false,
                  })
                : this.state.scrolled ||
                  this.setState({
                      scrolled: true,
                  });
        });
    }

    render() {
        return (
            <section id="home">
                <div id="homeVideo">
                    <div className="videoWrapper">
                        <YoutubeVideo
                            id="TgOu00Mf3kI"
                            vars={{
                                rel: 0,
                                muted: 1,
                                loop: 1,
                                playsinline: 1,
                                playlist: "TgOu00Mf3kI",
                                controls: 0,
                                showinfo: 0,
                            }}
                        />
                    </div>
                </div>
                <div
                    id="ringWrap"
                    style={this.state.scrolled ? { opacity: 0 } : {}}
                >
                    <ul className="text-ring">
                        <li>아</li>
                        <li>이</li>
                        <li>유</li>
                        <li>
                            <span role="img" aria-label="purple heart">
                                💜
                            </span>
                        </li>
                        <li>유</li>
                        <li>애</li>
                        <li>나</li>
                    </ul>
                </div>
                <Instagram />
            </section>
        );
    }
}

export default Home;
