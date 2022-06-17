import React from "react";
import { Carousel1 } from "./Carousels/Carousel";
import './landing.css';
const Landing = () =>{

    const Circledata = [
        {image : "https://lmsin.net/cdn-cgi/image/w=288,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC-1-Desktop-Men-17May2022.jpg" , title : "T-shirt"},
        {image : "https://lmsin.net/cdn-cgi/image/w=300,q=40,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC-2-Desktop-Men-17May2022.jpg"  , title : "Casual Shirt"},
        {image : "https://lmsin.net/cdn-cgi/image/w=300,q=40,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC-3-Desktop-Men-17May2022.jpg" , title : "TrackPants"},
        {image : "https://lmsin.net/cdn-cgi/image/w=288,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC-4-Desktop-Men-17May2022.jpg"  , title : "Jeans"},
        {image : "https://lmsin.net/cdn-cgi/image/w=288,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC-5-Desktop-Men-17May2022.jpg" , title : "Watches"},
        {image : "https://lmsin.net/cdn-cgi/image/w=300,q=40,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC-6-Desktop-Men-17May2022.jpg"  , title : "Shorts"},
        {image : "https://lmsin.net/cdn-cgi/image/w=300,q=40,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC-7-Desktop-Men-17May2022.jpg" , title : "Shoes"},
        {image : "https://lmsin.net/cdn-cgi/image/w=300,q=40,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC-8-Desktop-Men-17May2022.jpg"  , title : "Casual Trousers"},
        {image : "https://lmsin.net/cdn-cgi/image/w=300,q=40,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC-9-Desktop-Men-17May2022.jpg" , title : "Formal Shirt"},
        {image : "https://lmsin.net/cdn-cgi/image/w=300,q=40,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC-10-Desktop-Men-17May2022.jpg"  , title : "Innerwear"},
        {image : "https://lmsin.net/cdn-cgi/image/w=300,q=40,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC-11-Desktop-Men-17May2022.jpg" , title : "Sportsware"},
        {image : "https://lmsin.net/cdn-cgi/image/w=300,q=40,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC-12-Desktop-Men-17May2022.jpg"  , title : "Ethniwear"},
      
        ]
    

    const Squaredata = [
        {image : "https://lmsin.net/cdn-cgi/image/w=288,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC5-Banner1-men-Desktop-08June2022.jpg" },
        {image : "https://lmsin.net/cdn-cgi/image/w=300,q=40,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC5-Banner2-men-Desktop-08June2022.jpg"  },
        {image : "https://lmsin.net/cdn-cgi/image/w=288,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC5-Banner3-men-Desktop-08June2022.jpg"  },
        {image : "https://lmsin.net/cdn-cgi/image/w=288,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC5-Banner4-men-Desktop-08June2022.jpg"  },
        {image : "https://lmsin.net/cdn-cgi/image/w=288,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC5-Banner5-men-Desktop-08June2022.jpg"  },
        {image : "https://lmsin.net/cdn-cgi/image/w=300,q=40,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC5-Banner6-men-Desktop-08June2022.jpg"  },    
    ]
       
    const Squaredata2 = [
        {image : "https://lmsin.net/cdn-cgi/image/w=500,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/desktop-Men-3modblck-1-oneBythreeA-04March2022.jpg" },
        {image : "https://lmsin.net/cdn-cgi/image/w=500,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/desktop-Men-3modblck-2-oneBythreeA-29April2022A.jpg"  },
        {image : "https://lmsin.net/cdn-cgi/image/w=500,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/desktop-Men-3modblck-3-oneBythreeA-04March2022.jpg"  },
     ]

     const Squaredata3 = [
        {image : "https://lmsin.net/cdn-cgi/image/w=500,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-MEN-11modularblock-oneBythree-A-Men-27April2022.jpg"  },
        {image : "https://lmsin.net/cdn-cgi/image/w=500,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-MEN-11modularblock-oneBythree-B-Men-04March2022.jpg"  },
        {image : "https://lmsin.net/cdn-cgi/image/w=500,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-MEN-11modularblock-oneBythree-C-Men-11March2022.jpg"  },
     ]


     const Squaredata4 = [
        {image : "https://lmsin.net/cdn-cgi/image/w=500,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/desktop-Men-4modularblock-1-oneBythree-06Mar2022.jpg"  },
        {image : "https://lmsin.net/cdn-cgi/image/w=500,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/desktop-Men-4modularblock-2-oneBythree-10May2022.gif"  },
        {image : "https://lmsin.net/cdn-cgi/image/w=500,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/desktop-Men-4modularblock-3-oneBythree-30Mar2022.jpg"  },
     ]

     
     const Squaredata5 = [
        {image : "https://lmsin.net/cdn-cgi/image/w=616,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/desktop-LS-MEN-5modularblock-oneBytwo1C-Men-20May2022.jpg"  },
        {image : "https://lmsin.net/cdn-cgi/image/w=616,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/desktop-LS-MEN-5modularblock-oneBytwo1D-Men-06Mar2022.jpg"  },
    ]


     
     const Squaredata6 = [
        {image : "https://lmsin.net/cdn-cgi/image/w=616,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/desktop-LS-MEN-10modularblock-oneBythree-A-Men-06Mar2022.jpg"  },
        {image : "https://lmsin.net/cdn-cgi/image/w=616,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/desktop-LS-MEN-10modularblock-oneBythree-B-Men-06Mar2022.jpg"  },
     ]


     const Squaredata7 = [
        {image : "https://lmsin.net/cdn-cgi/image/w=500,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-MEN-6modularblock-oneBythree-A-Men-04March2022A.jpg"  },
        {image : "https://lmsin.net/cdn-cgi/image/w=500,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-MEN-6modularblock-oneBythree-B-Men-04March2022A.jpg"  },
        {image : "https://lmsin.net/cdn-cgi/image/w=500,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-MEN-6modularblock-oneBythree-C-Men-04March2022A.jpg"  },
     ]




    return <div id="Container">
       <div id="Main">

       <Carousel1></Carousel1>
       <hr  className="imgC"></hr>
       <img className="wid"  src="https://lmsin.net/cdn-cgi/image/w=1232,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/desktop-dept-10modblock-oneBythree-A-menstripbanner1-08June2022.gif"></img>
       <hr  className="imgC"></hr>
       <img className="wid" src="https://lmsin.net/cdn-cgi/image/w=1232,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/desktop-men-8modblock-oneBythree-D-16June2022.jpg"></img>
       <hr  className="imgC"></hr>
       <img className="wid" src="https://lmsin.net/cdn-cgi/image/w=1232,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/desktop-men-9modblock-StripBanner2-D-15June2022.gif"></img>
       <hr  className="imgC"></hr>
       <h1 className="textc">Shop By Category</h1>
       <div className='homecircle'>

        {Circledata.map((e) => (
                <div className='homeCircleinner'>
                <>
                    <img className='homeCircleimg' src={e.image} alt=""></img>
                    <h5>{e.title}</h5>
                </>
                </div>
                ))}
        </div>

        <hr  className="imgC"></hr>
        <h1 className="textc">Top Trending Brands</h1>

        <div className='homeSquare'>
        {Squaredata.map((e) => (
                <div className='homeSquareinner'>
             
                    <img className='homeSquareimg' src={e.image} alt=""></img>   
               
                </div>
                ))}
        </div>

        <hr  className="imgC"></hr>
        <img className="wid" src="https://lmsin.net/cdn-cgi/image/w=1232,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/desktop-dept-12modblock-oneBythree-A-Men-10June2022.jpg"></img>
        <hr  className="imgC"></hr>

        <h1 className="textc">Top Picks </h1>


        
        <div className='homeSquare'>
        {Squaredata2.map((e) => (
                <div className='homeSquareinner'>
             
                    <img className='homeSquareimg2' src={e.image} alt=""></img>   
               
                </div>
                ))}
        </div>

        <hr  className="imgC"></hr>
        <h2 className="textc">New, Cool & Trendy </h2>

        
        <div className='homeSquare'>
        {Squaredata3.map((e) => (
                <div className='homeSquareinner'>
             
                    <img className='homeSquareimg2' src={e.image} alt=""></img>   
               
                </div>
                ))}
        </div>
  
        <hr  className="imgC"></hr>
        <h1 className="textc">Highlights of the Day</h1>

        <div className='homeSquare'>
        {Squaredata4.map((e) => (
                <div className='homeSquareinner'>
             
                    <img className='homeSquareimg2' src={e.image} alt=""></img>   
               
                </div>
                ))}
        </div>
  
        <hr  className="imgC"></hr>
        <h1 className="textc">Flash Sale for Today</h1>
        <img className="wid" src="https://lmsin.net/cdn-cgi/image/w=1232,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/desktop-LS-MEN-modularblock7-oneBythree-A-Men-10June2022.jpg"></img>
        <hr  className="imgC"></hr>
        
        <h1 className="textc">Fashion Favourites</h1>
        <div className='homeSquare'>
        {Squaredata5.map((e) => (
                <div className='homeSquareinner'>
             
                    <img className='homeSquareimgX' src={e.image} alt=""></img>   
               
                </div>
                ))}
        </div>
        <hr  className="imgC"></hr>

        <h1 className="textc">Essentials For You</h1>
        <div className='homeSquare'>
    
        {Squaredata6.map((e) => (
                <div className='homeSquareinner'>
             
                    <img className='homeSquareimgX' src={e.image} alt=""></img>   
               
                </div>
                ))}
        </div>

       
        <hr  className="imgC"></hr>
        <h1 className="textc"> Shop By Department</h1>
       
        <div className='homeSquare'>
        {Squaredata7.map((e) => (
                <div className='homeSquareinner'>
             
                    <img className='homeSquareimg2' src={e.image} alt=""></img>   
               
                </div>
                ))}
        </div>



       </div>  
    </div>
}

export default Landing;