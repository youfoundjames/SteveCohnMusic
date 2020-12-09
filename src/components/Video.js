import React from 'react';
import './style.css';
import FadeIn from 'react-fade-in';

const Video = () => {
   return (
      <FadeIn className="main">
         <div>
         <iframe width="560" height="315" src="https://www.youtube.com/embed/alkNDTEHd9Q" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
         <iframe width="560" height="315" src="https://www.youtube.com/embed/PdP4epQIUrU" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
         <iframe width="560" height="315" src="https://www.youtube.com/embed/3X7k2D_Zsvo" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
         <iframe width="560" height="315" src="https://www.youtube.com/embed/KueL2N_CsAo" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>    </div>
      </FadeIn>
   );
}

export default Video;