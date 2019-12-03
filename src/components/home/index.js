import React from 'react';
import {Grid} from 'semantic-ui-react';
import RomeLG from '../images/rome.jpeg';
import RomeSM from '../images/rm-sm.jpeg';
import {
  Magnifier,
  GlassMagnifier,
  SideBySideMagnifier,
  PictureInPictureMagnifier,
  MOUSE_ACTIVATION,
  TOUCH_ACTIVATION
} from "react-image-magnifiers";

const Home = () => (
  <>
  <h1>Segreta</h1>
  <h2>Glass Viewer</h2>
  <GlassMagnifier 
  imageSrc={RomeLG}
  imageAlt="Example"
  />

  <hr />
  <h2>Click To Zoom</h2>
  <Magnifier
  imageSrc={RomeLG}
  imageAlt="Example"
  largeImageSrc={RomeLG}
  mouseActivation={MOUSE_ACTIVATION.DOUBLE_CLICK} 
  touchActivation={TOUCH_ACTIVATION.DOUBLE_TAP} 
  />

  <hr />
  <h2>Hover Zoom</h2>
  <SideBySideMagnifier 
  imageSrc={RomeLG}
  imageAlt="Example"
  largeImageSrc={RomeLG} 
  />

  </>
)

export default Home