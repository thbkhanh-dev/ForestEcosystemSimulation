import * as THREE from 'three';
import { materials } from '../materials.js';

export function createPineTree(x, z, scale = 1) {
    const tree = new THREE.Group();
    const trunkMaterial = Math.random() > 0.5 ? materials.trunkBrown : materials.trunkDark;
    const foliageMaterial = Math.random() > 0.5 ? materials.foliageGreen : materials.foliageDarkGreen;

    const trunkHeight = 2.5 * scale;
    const trunkGeometry = new THREE.CylinderGeometry(
        0.12 * scale, 0.22 * scale, trunkHeight, 8
    );
    const trunk = new THREE.Mesh(trunkGeometry, trunkMaterial);
    trunk.position.y = trunkHeight / 2;
    trunk.castShadow = true;
    trunk.receiveShadow = true;
    tree.add(trunk);

    const layers = 4;
    for (let i = 0; i < layers; i++) {
        const layerScale = 1 - (i * 0.2);
        const coneGeometry = new THREE.ConeGeometry(
            1.3 * scale * layerScale,
            1.4 * scale,
            8
        );
        const cone = new THREE.Mesh(coneGeometry, foliageMaterial);
        cone.position.y = trunkHeight + (i * 0.8 * scale) + 0.3 * scale;
        cone.castShadow = true;
        tree.add(cone);
    }

    tree.position.set(x, 0, z);
    return tree;
}

export function createRoundTree(x, z, scale = 1) {
    const tree = new THREE.Group();
    const trunkMaterial = Math.random() > 0.5 ? materials.trunkLight : materials.trunkBrown;
    const foliageMaterial = Math.random() > 0.5 ? materials.foliageLime : materials.foliageGreen;

    const trunkHeight = 1.8 * scale;
    const trunkGeometry = new THREE.CylinderGeometry(
        0.18 * scale, 0.28 * scale, trunkHeight, 8
    );
    const trunk = new THREE.Mesh(trunkGeometry, trunkMaterial);
    trunk.position.y = trunkHeight / 2;
    trunk.castShadow = true;
    tree.add(trunk);

    const mainFoliage = new THREE.Mesh(
        new THREE.SphereGeometry(1.4 * scale, 8, 6),
        foliageMaterial
    );
    mainFoliage.position.y = trunkHeight + 0.9 * scale;
    mainFoliage.castShadow = true;
    tree.add(mainFoliage);

    const offsets = [
        [0.5, 0.3, 0.3],
        [-0.4, 0.2, -0.4],
        [0.2, 0.5, -0.5],
        [-0.3, -0.2, 0.5]
    ];
    offsets.forEach(offset => {
        const smallFoliage = new THREE.Mesh(
            new THREE.SphereGeometry(0.6 * scale, 6, 5),
            foliageMaterial
        );
        smallFoliage.position.set(
            offset[0] * scale,
            trunkHeight + 0.9 * scale + offset[1] * scale,
            offset[2] * scale
        );
        smallFoliage.castShadow = true;
        tree.add(smallFoliage);
    });

    tree.position.set(x, 0, z);
    return tree;
}

export function createTallPine(x, z, scale = 1) {
    const tree = new THREE.Group();

    const trunkHeight = 4 * scale;
    const trunkGeometry = new THREE.CylinderGeometry(
        0.1 * scale, 0.2 * scale, trunkHeight, 8
    );
    const trunk = new THREE.Mesh(trunkGeometry, materials.trunkDark);
    trunk.position.y = trunkHeight / 2;
    trunk.castShadow = true;
    tree.add(trunk);

    const layers = 6;
    for (let i = 0; i < layers; i++) {
        const layerScale = 1 - (i * 0.12);
        const coneGeometry = new THREE.ConeGeometry(
            0.9 * scale * layerScale,
            1.2 * scale,
            6
        );
        const cone = new THREE.Mesh(coneGeometry, materials.foliageOlive);
        cone.position.y = trunkHeight * 0.4 + (i * 0.7 * scale);
        cone.castShadow = true;
        tree.add(cone);
    }

    tree.position.set(x, 0, z);
    return tree;
}

export function createShrubTree(x, z, scale = 1) {
    const tree = new THREE.Group();

    const trunkHeight = 0.8 * scale;
    const trunkGeometry = new THREE.CylinderGeometry(
        0.1 * scale, 0.15 * scale, trunkHeight, 6
    );
    const trunk = new THREE.Mesh(trunkGeometry, materials.trunkBrown);
    trunk.position.y = trunkHeight / 2;
    trunk.castShadow = true;
    tree.add(trunk);

    const sphereCount = 5;
    for (let i = 0; i < sphereCount; i++) {
        const sphereGeometry = new THREE.SphereGeometry(
            (0.4 + Math.random() * 0.3) * scale, 6, 5
        );
        const sphere = new THREE.Mesh(sphereGeometry, materials.foliageLime);
        sphere.position.set(
            (Math.random() - 0.5) * 0.6 * scale,
            trunkHeight + Math.random() * 0.4 * scale,
            (Math.random() - 0.5) * 0.6 * scale
        );
        sphere.castShadow = true;
        tree.add(sphere);
    }

    tree.position.set(x, 0, z);
    return tree;
}

export const treeFunctions = [createPineTree, createRoundTree, createTallPine, createShrubTree];
