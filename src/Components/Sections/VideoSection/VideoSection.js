import classes from "./VideoSection.module.css"
import Navbar from "../../Navbar/Navbar";


const VideoSection = () => {
    return (
        <section className={classes.sectionContainer}>
            <div className={classes.overlay}></div>
            <Navbar></Navbar>
            <video src=".\Images\Kordan_being_a_cracked_Leshrac_player.mp4" autoPlay loop muted></video>
            <div className={classes.headerContainer}>
                <div className={classes.logoContainer}>
                    <img src=".\Images\75e0a604-642a-4465-92ad-650807326ab9.webp"></img>
                    <h1 className={classes.KordanLogo}>KORDAN</h1>
                </div>
                <div className={classes.textContainer}>
                    <h2>RANK 1</h2>
                    <h2>DIV 1</h2>
                    <h2>13K MMR</h2>
                    <h2>TI WINNER</h2>
                </div>
                <div className={classes.blurColor}>

                </div>
            </div>
        </section>
    );
};

export default VideoSection;