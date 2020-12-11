import React from 'react';
import './style.css';
import shocked from '../assets/shocked.png';
import roulette from '../assets/roulette.jpg';
import FadeIn from 'react-fade-in';

const Press = () => {
   return (
      <FadeIn className="main">
         <div style={{fontSize: "18px"}}>       
         "A 'total music' that is an emblem of what is the world of sounds today."<br/>
         <i>Vittorio Lo Conte, MusicZoom</i><br/><br/>

         “Steve Cohn is easily the most underrated improviser in America. His albums are unfailingly complex and fascinating, but what really sets Cohn apart is the depth of his inspiration and the passion of his music. Nobody and I mean nobody taps into their muse with more insight or creativity. Steve Cohn is the great hidden secret of American jazz.” <br/><i>Carl Baugher, Goldmine & Tracking Angle</i><br/><br/>
         <img src={shocked} style={{ width: "100%" }} alt="Steve Cohn is shocked"/><br/><br/>

         "I would say he is the Jackson Pollock of the Shakuhachi world, bravely brandishing wild energetic splashes of adventurous tones. His playing shows a kind of freedom that can happen when personal vision breaks the boundaries of tradition. Anyone with an open mind will benefit from his workshop.” <br/><i>Perry Yung, shakuhachi maker</i><br/><br/>
         
         "Moving and magical. There's Mary Lou Williams, Bud Powell, Ursula Oppens, and Steve Cohn."<br/>
         <i>Tony Martin, painter and new media artist</i><br/><br/>
         
         <img src={roulette} style={{ width: "100%" }} alt="Steve Cohn playing piano at Roulette"/><br/><br/>

         “Cohn’s intricate counterpoint and drama-infused harmonies are equally effective on muscular jazz-hued sprints and pointilistic passages. His cogent use of ethnic instruments goes well beyond stock poses of texture and transcendentalism. There are few American pianists who have Cohn’s talents” <br/><i>Bill Shoemaker, Downbeat Magazine</i><br/><br/>
    
         "If there are nine ways to play jazz, this guy plays the eleventh."<br/>
         <i>Barry Schaffer, saxophonist</i><br/><br/>

         "Passion is key and it's unmistakable in Cohn's performances on piano, percussion, and a handful of Asian wind instruments. Cohn organizes his sounds against sturdy concepts... [his] episodic adventures range from seemingly spontaneous melodies that magically harmonize to wide-open spaces that give birth to tension filled dramas."<br/>
         <i>Sam Prestiani, Jazziz</i><br/><br/>
         </div>
      </FadeIn>
   );
}

export default Press;
