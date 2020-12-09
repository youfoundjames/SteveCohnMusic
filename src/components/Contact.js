import React from 'react';
import pnoandbass from '../assets/pnoandbass.png';
import FadeIn from 'react-fade-in';

const Contact = () => {
    return (
       <div>
          <FadeIn>
                <div className="row">
                    <div className="columnPadded">
                        <img src={pnoandbass} style={{ width: "100%" }} alt="Steve Cohn playing piano with a bass player"/>
                    </div>
                    <div className="columnPadded">
                        <br /> <br />
                        louyk [at] hotmail [dot] com <br/>
                            stevecohn.bandcamp.com <br/>
                            steven.l.cohn on facebook<br/><br/>

                            Steve Cohn<br/>
                            P.O. Box 5861<br/>
                            Englewood, NJ 07631<br/>
                            (201) 647-4042
           
                    </div>
                </div>
            </FadeIn>
       </div>
    );
}
 
export default Contact;