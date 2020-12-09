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
                            stevecohn.bandcamp.com 
                           
                    </div>
                </div>
            </FadeIn>
       </div>
    );
}
 
export default Contact;