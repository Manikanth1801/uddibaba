import React, { Fragment } from 'react';
import './imagegrid.css'

 function ImageGrid() { 
  return (
    <Fragment>
       <div className="message">
  Sorry, your browser does not support CSS Grid. 😅
</div>
<section className="section my-0 py-0">
  {/* <h1>Nom Nom Gallery</h1> */}
  <div className="grid">
    {/* <div className="item">
      <div className="item__details">
        jelly-o brownie sweet
      </div>
    </div>
    <div className="item item--large">
      <div className="item__details">
        Muffin jelly gingerbread 
      </div>
    </div>
    <div className="item item--medium">
      <div className="item__details">
        sesame snaps chocolate
      </div>
    </div>
    <div className="item item--large">
      <div className="item__details">
        Oat cake
      </div>
    </div> */}
    {/* <div className="item item--full">
      <div className="item__details">
         jujubes cheesecake
      </div>
    </div> */}
    <div className="item">
      <div className="item__details">
        jelly-o brownie sweet
      </div>
    </div>
    <div className="item item--large">
      <div className="item__details">
        Muffin jelly gingerbread 
      </div>
    </div>
    <div className="item item--medium">
      <div className="item__details">
        sesame snaps chocolate
      </div>
    </div>
    
    <div className="item">
      <div className="item__details">
        jelly-o brownie sweet
      </div>
    </div>
    <div className="item item--medium">
      <div className="item__details">
        Dragée pudding brownie
      </div>
    </div>
    <div className="item item--medium">
      <div className="item__details">
        Oat 
      </div>
    </div>
    
    <div className="item ">
      <div className="item__details">
        Oat cake
      </div>
    </div>
    {/* <div className="item">
      <div className="item__details">
        powder toffee
      </div>
    </div>
    <div className="item item--medium">
      <div className="item__details">
        pudding cheesecake
      </div>
    </div>
    <div className="item item--large">
      <div className="item__details">
        toffee bear claw 
      </div>
    </div>
    <div className="item">
      <div className="item__details">
        cake cookie croissant
      </div>
    </div>
    <div className="item item--medium">
      <div className="item__details">
        liquorice sweet roll
      </div>
    </div>
    <div className="item item--medium">
      <div className="item__details">
        chocolate marzipan
      </div>
    </div>
    <div className="item item--large">
      <div className="item__details">
        danish dessert lollipop
      </div>
    </div>
    <div className="item">
      <div className="item__details">
        sugar plum dragée
      </div>
    </div> */}
  </div>
</section>

    </Fragment>
  );
}

export default ImageGrid;
