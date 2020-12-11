import React from "react";
import * as H from "history";
import { Link, RouteComponentProps } from "react-router-dom";
import YoutubeVideo from "../components/YoutubeVideo";
import "./DiscographyDetails.css";

interface DiscographyDetailsProps extends RouteComponentProps {}

interface BackButtonProps {
    location: H.Location;
}

class BackButton extends React.Component<BackButtonProps> {
    render() {
        if (this.props.location.state) {
            return (
                <button
                    onClick={() => {
                        window.history.back();
                    }}
                    className="album-closer icon-times"
                    aria-label="back"
                ></button>
            );
        } else {
            return (
                <Link
                    to="../Discography"
                    className="album-closer icon-times"
                    aria-label="back"
                ></Link>
            );
        }
    }
}

export default class DiscographyDetails extends React.Component<
    DiscographyDetailsProps,
    {
        isLoading: boolean;
        activated: number | false;
        videoRevealed?: boolean;
        paused?: boolean;
        videoScrolled?: boolean;
        data?: discographyDetailJson;
    }
> {
    prevScroll: number;
    constructor(props: DiscographyDetailsProps) {
        super(props);
        this.prevScroll = 0;
        this.state = {
            isLoading: true,
            activated: false,
        };
    }

    componentDidMount() {
        const data = `${this.props.location.pathname.replace(
            "Discography",
            "data/albums"
        )}.json`;

        fetch(data)
            .then((response) => {
                const contentType = response.headers.get("content-type");

                if (contentType && contentType.includes("json")) {
                    return response.json();
                } else {
                    return "";
                }
            })
            .then((response) => {
                if (response) {
                    this.setState({
                        isLoading: false,
                        data: response,
                    });
                }
            });

        window.addEventListener(
            "scroll",
            () => {
                this.state.videoRevealed && this.shrinkVideo();
            },
            { passive: true }
        );
    }

    setActivated = (index: number) => {
        this.setState({
            activated: index,
        });
    };

    pauseVideo = () => {
        this.setState(
            {
                paused: true,
            },
            () => {
                window.player.pauseVideo();
            }
        );
    };

    playVideo = () => {
        this.setState(
            {
                paused: false,
            },
            () => {
                window.player.playVideo();
            }
        );
    };

    toggleVideo = () => {
        const { paused } = this.state;

        if (paused) {
            this.playVideo();
        } else {
            this.pauseVideo();
        }
    };

    shrinkVideo = () => {
        this.setState({
            videoScrolled: this.prevScroll < window.scrollY,
        });
        this.prevScroll = window.scrollY;
    };

    render() {
        const pathname = window.location.pathname;
        const albumTitle = decodeURI(
            pathname.slice(pathname.lastIndexOf("/") + 1, pathname.length)
        );
        const coverImageUrl = `${process.env.PUBLIC_URL}/assets/images/album_cover/${albumTitle}.jpg`;
        if (!this.state.isLoading && this.state.data) {
            const { data, activated, paused, videoRevealed } = this.state;
            return (
                <section
                    id="discographyDetail"
                    className={activated !== false ? "lyric-activated" : ""}
                >
                    <BackButton location={this.props.location} />
                    <div
                        className="back-to-tracklist icon-arrow-left"
                        onClick={() => {
                            this.setState({ activated: false });
                        }}
                    ></div>
                    <div
                        className="album-bg"
                        style={{
                            backgroundImage: `url("${coverImageUrl}")`,
                        }}
                    ></div>
                    <div className="album-art">
                        <div id="albumart">
                            <img
                                src={coverImageUrl}
                                className="album-art-img"
                                alt={data.name}
                            />
                        </div>
                        <div
                            id="bgmVid"
                            className={
                                activated !== false
                                    ? data.tracks[activated].music
                                        ? "reveal"
                                        : ""
                                    : ""
                            }
                        >
                            <YoutubeVideo
                                id={
                                    activated !== false
                                        ? data.tracks[activated].music
                                        : ""
                                }
                                vars={{
                                    rel: 0,
                                    loop: 1,
                                    playsinline: 1,
                                    controls: 0,
                                    showinfo: 0,
                                }}
                            />
                        </div>
                        {activated !== false && data.tracks[activated].music ? (
                            <div className="center">
                                <button
                                    id="rewind10"
                                    className="icon-backward"
                                    title="10초 되감기"
                                    aria-label="10초 되감기"
                                    onClick={() => {
                                        window.player.seekTo(
                                            Math.floor(
                                                window.player.getCurrentTime()
                                            ) - 10,
                                            false
                                        );
                                    }}
                                ></button>
                                <button
                                    id="playVideo"
                                    className={
                                        paused ? "icon-play" : "icon-pause"
                                    }
                                    title="일시 정지 / 재생"
                                    aria-label="일시 정지 / 재생"
                                    onClick={this.toggleVideo}
                                ></button>
                                <button
                                    id="forward10"
                                    className="icon-forward"
                                    title="10초 빨리 감기"
                                    aria-label="10초 빨리 감기"
                                    onClick={() => {
                                        window.player.seekTo(
                                            Math.floor(
                                                window.player.getCurrentTime()
                                            ) + 10,
                                            false
                                        );
                                    }}
                                ></button>
                            </div>
                        ) : (
                            ""
                        )}
                        <div className="song-info">
                            <div className="song-title">
                                {activated !== false &&
                                    data.tracks[activated].title}
                            </div>
                            <div className="song-artist">
                                {data.artist ? data.artist : "아이유"}
                            </div>
                            <div className="song-album">{data.name}</div>
                            {activated !== false &&
                            data.tracks[activated].video ? (
                                <div>
                                    <button
                                        className="icon-youtube-play"
                                        onClick={() => {
                                            this.pauseVideo();
                                            this.setState({
                                                videoRevealed: true,
                                            });
                                        }}
                                    ></button>
                                </div>
                            ) : (
                                ""
                            )}
                        </div>
                    </div>
                    <div className="detail">
                        <div
                            className="tracklist"
                            style={
                                activated !== false
                                    ? { maxHeight: 0 }
                                    : {
                                          maxHeight: `${
                                              data.tracks.length * 2.5 + 2.3
                                          }rem`,
                                      }
                            }
                        >
                            <h2 className="detail-title">Tracklist</h2>
                            <ul>
                                {data.tracks.map((track, index) => {
                                    return (
                                        <li
                                            key={index}
                                            onClick={() => {
                                                this.setActivated(index);
                                            }}
                                            className="song-list"
                                        >
                                            {track.title}
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>
                    </div>
                    <div
                        className={`lyrics ${
                            activated !== false ? "reveal" : ""
                        }`}
                    >
                        {data.lyrics.map((lyric, index) => {
                            return (
                                <div
                                    key={index}
                                    className={`lyric ${
                                        activated === index ? "reveal" : ""
                                    }`}
                                >
                                    {lyric}
                                </div>
                            );
                        })}
                    </div>

                    {activated !== false &&
                    data &&
                    data.tracks[activated].video &&
                    videoRevealed ? (
                        <div
                            className={`video-popup${
                                this.state.videoScrolled ? " scrolled" : ""
                            }`}
                        >
                            <div
                                className="video-popup-closer"
                                onClick={() => {
                                    this.playVideo();
                                    this.setState({
                                        videoRevealed: false,
                                        videoScrolled: false,
                                    });
                                }}
                            ></div>
                            <div className="video-wrapper">
                                <div className="iframe-wrapper">
                                    <iframe
                                        width="560"
                                        height="315"
                                        title="Music Video Popup"
                                        src={`https://youtube.com/embed/${data.tracks[activated].video}?rel=0&playsinline=1&autoplay=1`}
                                    ></iframe>
                                </div>
                            </div>
                        </div>
                    ) : (
                        ""
                    )}

                    <svg width="0" height="0">
                        <defs>
                            <filter
                                id="blur"
                                x="0"
                                y="0"
                                width="100%"
                                height="100%"
                            >
                                <feGaussianBlur stdDeviation="20" />
                                <feComponentTransfer>
                                    <feFuncA
                                        type="discrete"
                                        tableValues="1 1"
                                    />
                                </feComponentTransfer>
                            </filter>
                        </defs>
                    </svg>
                </section>
            );
        } else {
            return (
                <section id="discographyDetail" className="loading">
                    <BackButton location={this.props.location} />
                    <div
                        className="back-to-tracklist icon-arrow-left"
                        onClick={() => {
                            this.setState({ activated: false });
                        }}
                    ></div>
                    <div
                        className="album-bg"
                        style={{
                            backgroundImage: `url("${coverImageUrl}")`,
                        }}
                    ></div>
                    <div className="album-art">
                        <div id="albumart">
                            <img
                                src={coverImageUrl}
                                className="album-art-img"
                                alt={albumTitle}
                            />
                        </div>
                    </div>

                    <svg width="0" height="0">
                        <defs>
                            <filter
                                id="blur"
                                x="0"
                                y="0"
                                width="100%"
                                height="100%"
                            >
                                <feGaussianBlur stdDeviation="20" />
                                <feComponentTransfer>
                                    <feFuncA
                                        type="discrete"
                                        tableValues="1 1"
                                    />
                                </feComponentTransfer>
                            </filter>
                        </defs>
                    </svg>
                </section>
            );
        }
    }
}