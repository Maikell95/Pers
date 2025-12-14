import * as THREE from 'three';

function createHeart(particleIndex, totalParticles){
    const t = (particleIndex / totalParticles) * Math.PI * 2;
    const scale = 2.2;

    let x = 16 * Math.pow(Math.sin(t), 3);
    let y = 13 * Math.cos(t) - 5 * Math.cos(2 * t) - 2 * Math.cos(3 * t) - Math.cos(4 * t);

    const finalX = x * scale;
    const finalY = y * scale;
    const z = Math.sin(t * 4) * 2;

    const jitterstrength = 0.2;
    return new THREE.Vector3(
        finalX + (Math.random() - 0.5) * jitterstrength,
        finalY + (Math.random() - 0.5) * jitterstrength,
        z + (Math.random() * jitterstrength * 0.5)
    );

}