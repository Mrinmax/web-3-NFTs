import React from 'react';
import instagramLogo from "../assets/owner/instagram.png";
import twitterLogo from "../assets/owner/twitter.png";
import moreIcon from "../assets/owner/more.png";
import "./Main.css";

function Main() {
    return (
        <div className="main">
            <div className="mainContent">
                <di className="punkHighlight">
                    <div className="punkContainer">
                        <img 
                        className="slectedPunk"
                        src={"https://nftlabs.mypinata.cloud/ipfs/bafybeihw4b6et5cbggprg7vecvchxokn347eda4wk273io3que5kfk54ii"} 
                        alt="" 
                        />
                    </div>
                </di>
                <div className="punkDetails" style={{ color: "#fff "}}>
                    <div className="title">Ekko Punk</div>
                    <span className="itemNumber">.#3</span>
                    <div className="owner">
                        <div className="ownerImageContainer">
                            <img src={"https://nftlabs.mypinata.cloud/ipfs/bafybeihw4b6et5cbggprg7vecvchxokn347eda4wk273io3que5kfk54ii"} alt="" />
                        </div>

                        <div className="ownerDetails">
                            <div className="ownerNameAndHandle">
                                 <div>0877r6843rt349</div>
                                 <div className="ownerHandle">@Mrinalkantisardar</div>
                            </div>
                            <div className="ownerLink">
                                <img src={instagramLogo} alt="" />
                            </div>
                            <div className="ownerLink">
                                <img src={twitterLogo} alt="" />
                            </div>
                            <div className="ownerLink">
                                <img src={moreIcon} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main;
