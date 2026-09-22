"use client";

import React, { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const particlesOptions = {
  fullScreen: { enable: true, zIndex: -1 },
  background: {
    color: "#000",
    repeat: "no-repeat",
    size: "40%",
    position: "60% 50%",
  },
  interactivity: {
    events: {
      onHover: { enable: true, mode: "bubble" },
    },
    modes: {
      bubble: { distance: 200, duration: 2, opacity: 0, size: 0, speed: 3 },
    },
  },
  particles: {
    color: { value: "#ffffff" },
    move: {
      direction: "none",
      enable: true,
      outModes: "out",
      random: true,
      speed: 0.3,
    },
    number: { density: { enable: true }, value: 600 },
    opacity: {
      animation: { enable: true, speed: 5 },
      value: { min: 0.3, max: 0.6 },
    },
    shape: { type: "circle" },
    size: { value: 1 },
  },
};

export default function ParticlesBackground({ children }) {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  return (
    <>
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={particlesOptions}
      />
      {children}
    </>
  );
}
