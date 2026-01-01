import * as THREE from 'three';
import { materials } from '../materials.js';

export function createBush(x, z, scale = 1) {
    const bush = new THREE.Group();
    const material = Math.random() > 0.5 ? materials.bushGreen : materials.bushDark;

    const sphereCount = 4 + Math.floor(Math.random() * 3);
    for (let i = 0; i < sphereCount; i++) {
        const sphereGeometry = new THREE.SphereGeometry(
            (0.25 + Math.random() * 0.25) * scale, 6, 5
        );
        const sphere = new THREE.Mesh(sphereGeometry, material);
        sphere.position.set(
            (Math.random() - 0.5) * 0.6 * scale,
            0.2 * scale + Math.random() * 0.3 * scale,
            (Math.random() - 0.5) * 0.6 * scale
        );
        sphere.castShadow = true;
        bush.add(sphere);
    }

    bush.position.set(x, 0, z);
    return bush;
}

export function createLargeBush(x, z, scale = 1) {
    const bush = new THREE.Group();
    const material = materials.bushGreen;

    const mainSphere = new THREE.Mesh(
        new THREE.SphereGeometry(0.6 * scale, 8, 6),
        material
    );
    mainSphere.position.y = 0.4 * scale;
    mainSphere.castShadow = true;
    bush.add(mainSphere);

    for (let i = 0; i < 6; i++) {
        const angle = (i / 6) * Math.PI * 2;
        const sphere = new THREE.Mesh(
            new THREE.SphereGeometry(0.35 * scale, 6, 5),
            material
        );
        sphere.position.set(
            Math.cos(angle) * 0.4 * scale,
            0.3 * scale,
            Math.sin(angle) * 0.4 * scale
        );
        sphere.castShadow = true;
        bush.add(sphere);
    }

    bush.position.set(x, 0, z);
    return bush;
}
