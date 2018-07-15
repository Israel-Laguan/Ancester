import React, { Component } from 'react';
import gif from '../images/hmu.gif'

class Footer extends Component {
  render() {
    return (
      <a-scene embedded canvas="height: 50; width: 50">
    <a-assets>
      <a-asset-item id="optimerBoldFont" src="https://rawgit.com/mrdoob/three.js/dev/examples/fonts/optimer_bold.typeface.json"></a-asset-item>
    </a-assets>
 
    <a-entity text-geometry="value: What's up" color="black"></a-entity>
    <a-box position="-1 0.5 -3" rotation="0 45 0" color="#4CC3D9"></a-box>
      <a-sphere position="0 1.25 -5" radius="1.25" color="#EF2D5E"></a-sphere>
      <a-cylinder position="1 0.75 -3" radius="0.5" height="1.5" color="#FFC65D"></a-cylinder>
      <a-plane position="0 0 -4" rotation="-90 0 0" width="4" height="4" color="#7BC8A4"></a-plane>
      <a-sky color="#ECECEC"></a-sky>
    <a-entity text-geometry="value: Dog?; font: #optimerBoldFont"></a-entity>
  </a-scene>
    );
  }
}

export default Footer;