// https://discourse.threejs.org/t/particle-wave-code/67327

import * as THREE from "three";
import { SimplexNoise } from "three/addons/math/SimplexNoise.js";


// general setup, boring, skip to the next comment


var scene = new THREE.Scene();
    scene.background = null;

var camera = new THREE.PerspectiveCamera( 15, innerWidth/innerHeight );
    camera.position.set( 4, 2, 8 );
    camera.lookAt( scene.position );

var renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize( innerWidth, 600 );
    renderer.setAnimationLoop( animationLoop );
    document.querySelector('.hero').appendChild( renderer.domElement );
			
window.addEventListener( "resize", (event) => {
    camera.aspect = 1.5;
    camera.updateProjectionMatrix( );
    renderer.setSize( innerWidth, 200 );
});


// next comment

// some waves with simplex noise

var geometry = new THREE.PlaneGeometry( 6, 4, 150, 100 ),
		pos = geometry.getAttribute( 'position' ),
		simplex = new SimplexNoise( );

var waves = new THREE.Points(
			geometry,
    	new THREE.PointsMaterial( {size: 0.03,color:'gray'} )
    );	
		waves.rotation.x = -Math.PI/2;
		scene.add( waves );



// that's all folks

function animationLoop( t )
{
		for( var i=0; i<pos.count; i++ )
		{
			var x = pos.getX( i ),	
					y = pos.getY( i ),	
					z = 0.5*simplex.noise3d( x/2, y/2, t/5000 );

			pos.setZ( i, z );
		}
		pos.needsUpdate = true;
	
    renderer.render( scene, camera );
    document.querySelector('.hero').style.color='transparent'
}