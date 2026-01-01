import * as THREE from 'three';

export const skyColors = {
    night: new THREE.Color(0x0a0a1a),
    dawn: new THREE.Color(0xff6b35),
    morning: new THREE.Color(0x87CEEB),
    noon: new THREE.Color(0x87CEEB),
    evening: new THREE.Color(0xff6b35),
    dusk: new THREE.Color(0x2a1a4a)
};

export function updateDayNightCycle(minutes, sceneObjects) {
    const { scene, sunLight, moonLight, ambientLight, hemiLight, sunMesh, moonMesh, sunMaterial, renderer } = sceneObjects;

    const hours = minutes / 60;
    const sunAngle = ((hours - 6) / 24) * Math.PI * 2;

    const sunRadius = 50;
    const sunX = Math.cos(sunAngle) * sunRadius;
    const sunY = Math.sin(sunAngle) * sunRadius;

    sunMesh.position.set(sunX, sunY, 0);
    sunLight.position.set(sunX, sunY, 0);

    moonMesh.position.set(-sunX, -sunY, 0);
    moonLight.position.set(-sunX, -sunY, 0);

    let skyColor, sunIntensity, moonIntensity, ambientIntensity;
    let sunColor = new THREE.Color(0xfffacd);

    if (hours >= 5 && hours < 7) {
        const t = (hours - 5) / 2;
        skyColor = skyColors.night.clone().lerp(skyColors.dawn, t);
        sunIntensity = t * 0.5;
        moonIntensity = (1 - t) * 0.3;
        ambientIntensity = 0.1 + t * 0.2;
        sunColor = new THREE.Color(0xff8844);
    } else if (hours >= 7 && hours < 9) {
        const t = (hours - 7) / 2;
        skyColor = skyColors.dawn.clone().lerp(skyColors.morning, t);
        sunIntensity = 0.5 + t * 0.5;
        moonIntensity = 0;
        ambientIntensity = 0.3 + t * 0.1;
        sunColor = new THREE.Color(0xff8844).lerp(new THREE.Color(0xfffacd), t);
    } else if (hours >= 9 && hours < 17) {
        skyColor = skyColors.noon;
        sunIntensity = 1.0;
        moonIntensity = 0;
        ambientIntensity = 0.4;
    } else if (hours >= 17 && hours < 19) {
        const t = (hours - 17) / 2;
        skyColor = skyColors.noon.clone().lerp(skyColors.evening, t);
        sunIntensity = 1.0 - t * 0.5;
        moonIntensity = 0;
        ambientIntensity = 0.4 - t * 0.1;
        sunColor = new THREE.Color(0xfffacd).lerp(new THREE.Color(0xff6644), t);
    } else if (hours >= 19 && hours < 21) {
        const t = (hours - 19) / 2;
        skyColor = skyColors.evening.clone().lerp(skyColors.dusk, t);
        sunIntensity = 0.5 - t * 0.5;
        moonIntensity = t * 0.2;
        ambientIntensity = 0.3 - t * 0.1;
        sunColor = new THREE.Color(0xff4422);
    } else if (hours >= 21 || hours < 5) {
        skyColor = skyColors.night;
        sunIntensity = 0;
        moonIntensity = 0.3;
        ambientIntensity = 0.1;
    } else {
        skyColor = skyColors.noon;
        sunIntensity = 1.0;
        moonIntensity = 0;
        ambientIntensity = 0.4;
    }

    scene.background = skyColor;
    scene.fog.color = skyColor;

    sunLight.intensity = sunIntensity;
    sunLight.color = sunColor;
    moonLight.intensity = moonIntensity;
    ambientLight.intensity = ambientIntensity;

    const hemiSkyColor = skyColor.clone();
    hemiLight.color = hemiSkyColor;
    hemiLight.intensity = ambientIntensity * 0.5;

    sunMesh.visible = sunY > -5;
    moonMesh.visible = -sunY > -5;

    const sunScale = sunY > 0 ? 1 : Math.max(0.3, 1 + sunY / 20);
    sunMesh.scale.setScalar(sunScale);

    if (sunY < 0 && sunY > -20) {
        const orangeFactor = Math.abs(sunY) / 20;
        sunMaterial.color.setHex(0xFFFF00).lerp(new THREE.Color(0xFF4400), orangeFactor);
    } else {
        sunMaterial.color.setHex(0xFFFF00);
    }

    renderer.toneMappingExposure = 0.5 + sunIntensity * 0.7;
}

export function formatTime(minutes) {
    const hours = Math.floor(minutes / 60) % 24;
    const mins = Math.floor(minutes % 60);
    return `${hours.toString().padStart(2, '0')}:${mins.toString().padStart(2, '0')}`;
}

export function updateTimeDisplay(currentTime) {
    const timeDisplay = document.getElementById('time-display');
    const slider = document.getElementById('time-slider');
    const indicator = document.getElementById('sun-moon-indicator');

    timeDisplay.textContent = formatTime(currentTime);
    slider.value = currentTime;

    const hours = currentTime / 60;
    if (hours >= 6 && hours < 18) {
        indicator.textContent = '☀️';
    } else if (hours >= 18 && hours < 20) {
        indicator.textContent = '🌅';
    } else if (hours >= 4 && hours < 6) {
        indicator.textContent = '🌄';
    } else {
        indicator.textContent = '🌙';
    }
}
