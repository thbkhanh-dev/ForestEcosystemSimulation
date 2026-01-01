import * as THREE from 'three';

export const materials = {
    trunkBrown: new THREE.MeshStandardMaterial({
        color: 0x8B4513,
        roughness: 0.9,
        metalness: 0.0
    }),
    trunkDark: new THREE.MeshStandardMaterial({
        color: 0x654321,
        roughness: 0.9,
        metalness: 0.0
    }),
    trunkLight: new THREE.MeshStandardMaterial({
        color: 0xA0522D,
        roughness: 0.85,
        metalness: 0.0
    }),
    foliageGreen: new THREE.MeshStandardMaterial({
        color: 0x228B22,
        roughness: 0.8,
        metalness: 0.0,
        flatShading: true
    }),
    foliageDarkGreen: new THREE.MeshStandardMaterial({
        color: 0x006400,
        roughness: 0.8,
        metalness: 0.0,
        flatShading: true
    }),
    foliageLime: new THREE.MeshStandardMaterial({
        color: 0x32CD32,
        roughness: 0.8,
        metalness: 0.0,
        flatShading: true
    }),
    foliageOlive: new THREE.MeshStandardMaterial({
        color: 0x556B2F,
        roughness: 0.8,
        metalness: 0.0,
        flatShading: true
    }),
    rockGray: new THREE.MeshStandardMaterial({
        color: 0x696969,
        roughness: 0.9,
        metalness: 0.1,
        flatShading: true
    }),
    rockDark: new THREE.MeshStandardMaterial({
        color: 0x4a4a4a,
        roughness: 0.95,
        metalness: 0.05,
        flatShading: true
    }),
    rockLight: new THREE.MeshStandardMaterial({
        color: 0x808080,
        roughness: 0.85,
        metalness: 0.1,
        flatShading: true
    }),
    rockMossy: new THREE.MeshStandardMaterial({
        color: 0x5a6b4a,
        roughness: 0.9,
        metalness: 0.05,
        flatShading: true
    }),
    bushGreen: new THREE.MeshStandardMaterial({
        color: 0x2E8B57,
        roughness: 0.8,
        metalness: 0.0,
        flatShading: true
    }),
    bushDark: new THREE.MeshStandardMaterial({
        color: 0x1a4d1a,
        roughness: 0.8,
        metalness: 0.0,
        flatShading: true
    }),
    flowerRed: new THREE.MeshStandardMaterial({
        color: 0xFF6B6B,
        roughness: 0.6,
        metalness: 0.0
    }),
    flowerYellow: new THREE.MeshStandardMaterial({
        color: 0xFFD93D,
        roughness: 0.6,
        metalness: 0.0
    }),
    flowerWhite: new THREE.MeshStandardMaterial({
        color: 0xFFFAFA,
        roughness: 0.6,
        metalness: 0.0
    }),
    flowerPurple: new THREE.MeshStandardMaterial({
        color: 0x9B59B6,
        roughness: 0.6,
        metalness: 0.0
    }),
    flowerStem: new THREE.MeshStandardMaterial({
        color: 0x228B22,
        roughness: 0.8,
        metalness: 0.0
    }),
    mushroomCap: new THREE.MeshStandardMaterial({
        color: 0xCD5C5C,
        roughness: 0.7,
        metalness: 0.0,
        flatShading: true
    }),
    mushroomCapBrown: new THREE.MeshStandardMaterial({
        color: 0x8B4513,
        roughness: 0.7,
        metalness: 0.0,
        flatShading: true
    }),
    mushroomStem: new THREE.MeshStandardMaterial({
        color: 0xFAF0E6,
        roughness: 0.8,
        metalness: 0.0
    }),
    grass: new THREE.MeshStandardMaterial({
        color: 0x3CB371,
        roughness: 0.9,
        metalness: 0.0,
        flatShading: true
    })
};
