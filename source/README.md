# 🌲 Forest Ecosystem Simulation

### Three.js – Computer Graphics Course Project

---

## 1. Project Overview

**Forest Ecosystem Simulation** is a 3D interactive environment simulation developed using **Three.js**, aiming to visualize a forest ecosystem with dynamic lighting, procedural vegetation generation, and a real-time **day–night cycle**.

This project focuses on **computer graphics techniques** rather than biological accuracy, emphasizing scene construction, lighting models, animation, and user interaction in a web-based 3D environment.

---

## 2. Objectives

The main objectives of this project are:

* Construct a **3D forest scene** using procedural geometry
* Simulate a **realistic day–night cycle** with dynamic lighting and sky transitions
* Apply **lighting, shadows, fog, and tone mapping** techniques
* Enable **interactive camera control and time manipulation**
* Design a **graphical user interface (GUI)** for user interaction
* Demonstrate clear **code organization and extensibility**

---

## 3. Technologies Used

* **Three.js** – 3D rendering engine
* **JavaScript (ES6)** – Core logic
* **HTML5 / CSS3** – UI and layout
* **WebGL** – Hardware-accelerated graphics via browser

---

## 4. Project Structure

> 🔹 **Note:**
> For demonstration and submission purposes, the current version of the project is implemented as a **single `index.html` file** containing all HTML, CSS, and JavaScript code.
>
> The following structure describes the **intended modular organization** after refactoring for better maintainability and scalability.

```
ForestEcosystemSimulation/
│
├── index.html                # Main entry file (all-in-one version)
│
├── README.md                 # Project documentation
│
├── css/
│   └── styles.css  
│
└── js/
    ├── objects/                  
    │   ├── bushes.js  
    │   ├── rocks.js
    │   ├── trees.js
    │   └── vegetation.js                 
    ├── dayNightCycle.js 
    ├── main.js
    ├── materials.js
    ├── scene.js
    └── utils.js  

```
---

## 5. Core Features

### 5.1 Scene Construction

* Perspective camera with orbit controls
* Large terrain plane representing forest ground
* Fog effects to enhance depth perception
* Shadow mapping for realism

---

### 5.2 Procedural Vegetation Generation

* Multiple types of trees (pine, tall pine, round canopy)
* Bushes, shrubs, grass patches, flowers, mushrooms
* Rocks and rock clusters
* Randomized placement with **collision avoidance** to ensure natural distribution

---

### 5.3 Day–Night Cycle Simulation

* Time-based system (0–1440 minutes)
* Dynamic transition between:

  * Night
  * Dawn
  * Morning
  * Noon
  * Sunset
  * Dusk
* Continuous adjustment of:

  * Light color and intensity
  * Sun and moon positions
  * Fog color
  * Scene background
  * Tone mapping exposure

---

### 5.4 Lighting System

* Ambient Light
* Directional Light (Sun)
* Directional Light (Moon)
* Hemisphere Light (Sky–Ground simulation)

---

### 5.5 User Interaction & GUI

* Orbit controls (rotate, zoom, pan)
* Time slider to control simulation time
* Play / pause simulation
* Speed control
* Real-time clock display
* Visual indication of sun and moon states

---

## 6. Design Considerations

* **Performance:**
  Use of low-poly geometry and procedural generation for efficiency.

* **Extensibility:**
  Modular design allows future expansion (weather system, animals, seasons).

* **Maintainability:**
  Clear separation of concerns after refactoring.

---

## 7. Limitations

* The project does **not** simulate biological behaviors such as:

  * Plant growth
  * Animal movement
  * Ecosystem interactions
* Weather effects (rain, wind, snow) are not implemented.
* Physics-based interactions are minimal.

---

## 8. Future Improvements

* Seasonal changes (spring, summer, autumn, winter)
* Weather system (rain, fog density, wind)
* Dynamic vegetation animation (wind sway)
* Importing optimized external 3D models
* Sound integration for immersive experience

---

## 9. How to Run

1. Open `index.html` in any modern web browser.
2. Ensure an active internet connection (for Three.js CDN).
3. Interact using mouse and GUI controls.

---

## 10. Conclusion

This project demonstrates the application of **computer graphics principles** using Three.js to create an interactive 3D forest environment. It highlights key concepts such as lighting models, procedural modeling, animation, and user interaction, making it suitable as a **course project for Computer Graphics or Web-based 3D Visualization**.

