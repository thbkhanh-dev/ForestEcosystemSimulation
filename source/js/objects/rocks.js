import * as THREE from 'three';
import { materials } from '../materials.js';

export function createRock(x, z, scale = 1) {
    const rock = new THREE.Group();
    const rockMaterials = [materials.rockGray, materials.rockDark, materials.rockLight, materials.rockMossy];
    const material = rockMaterials[Math.floor(Math.random() * rockMaterials.length)];

    const mainRockGeometry = new THREE.IcosahedronGeometry(0.5 * scale, 0);
    const mainRock = new THREE.Mesh(mainRockGeometry, material);
    mainRock.rotation.set(
        Math.random() * Math.PI,
        Math.random() * Math.PI,
        Math.random() * Math.PI * 0.3
    );
    mainRock.scale.set(
        1 + Math.random() * 0.4,
        0.6 + Math.random() * 0.4,
        1 + Math.random() * 0.4
    );
    mainRock.position.y = 0.2 * scale;
    mainRock.castShadow = true;
    mainRock.receiveShadow = true;
    rock.add(mainRock);

    if (Math.random() > 0.5) {
        const smallRockGeometry = new THREE.IcosahedronGeometry(0.2 * scale, 0);
        const smallRock = new THREE.Mesh(smallRockGeometry, material);
        smallRock.position.set(
            (Math.random() - 0.5) * 0.6 * scale,
            0.1 * scale,
            (Math.random() - 0.5) * 0.6 * scale
        );
        smallRock.rotation.set(Math.random() * Math.PI, Math.random() * Math.PI, 0);
        smallRock.castShadow = true;
        rock.add(smallRock);
    }

    rock.position.set(x, 0, z);
    return rock;
}

export function createRockCluster(x, z, scale = 1) {
    const cluster = new THREE.Group();
    const rockCount = 3 + Math.floor(Math.random() * 3);
    const material = Math.random() > 0.5 ? materials.rockGray : materials.rockMossy;

    for (let i = 0; i < rockCount; i++) {
        const rockGeometry = new THREE.IcosahedronGeometry(
            (0.2 + Math.random() * 0.4) * scale, 0
        );
        const rock = new THREE.Mesh(rockGeometry, material);
        rock.position.set(
            (Math.random() - 0.5) * 1.5 * scale,
            0.15 * scale,
            (Math.random() - 0.5) * 1.5 * scale
        );
        rock.rotation.set(Math.random() * Math.PI, Math.random() * Math.PI, 0);
        rock.scale.y = 0.5 + Math.random() * 0.5;
        rock.castShadow = true;
        rock.receiveShadow = true;
        cluster.add(rock);
    }

    cluster.position.set(x, 0, z);
    return cluster;
}