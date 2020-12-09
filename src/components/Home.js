import React from 'react';
import './style.css';
import profile from '../assets/profile.jpg';
import FadeIn from 'react-fade-in';

const home = () => {
    return (
        <div className="mainExtra">
            <FadeIn>
                <div className="row" style={{ marginTop: "5%" }}>
                    <div className="columnPadded">
                        <img src={profile} style={{ width: "90%" }} alt="Steve Cohn staring pensively"/>
                    </div>
                    <div className="columnPadded" style={{ marginRight: "25px" }}>
                        <br /> <br />
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Ever innovative, Steve Cohn (piano, shakuhachi, hichiriki, trombone) has developed a unique style of improvisation over the course of his career which has taken him across styles of jazz as well as around the world. With over 35 recordings in his name, Steve has played with the likes of Eddie Henderson, Sonny Simmons, Reggie Workman, Barry Altschul, Oliver Lake, Fred Hopkins, Bruce Ditmas, Denis Charles, William Parker, Bob Stewart, Frank Lowe, Karl Berger, and Steve Lacy, among many others. He has performed his own works at venues such as New York City’s Miller Theatre, the Newport JVC Festival, the Great American Music Hall, World Shakuhachi Festivals and other festivals and tours in Europe, Estonia, Japan, Canada, Mexico and the USA.<br /><br />
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Two of his recordings, SUFI DANCERS and ITTEKIMASU, received four-star ratings in Downbeat Magazine. THE BEGGAR AND THE ROBOT IN DIAMONDS was also chosen on the “Top Ten List of 1997” by Tracking Angle.<br /><br /><br /><br />
“Cohn’s intricate counterpoint and drama-infused harmonies are equally effective on muscular jazz-hued sprints and pointilistic passages. His cogent use of ethnic instruments goes well beyond stock poses of texture and transcendentalism. There are few American pianists who have Cohn’s talents.” <br /><i>— Bill Shoemaker, Downbeat Magazine</i><br />“Cohn’s playing is hypnotic and remarkable throughout. He is a true original.”<br /><i>– Robert Spencer, Cadence Magazine</i>


                    </div>
                </div>
            </FadeIn>
        </div>
    );
}

export default home;