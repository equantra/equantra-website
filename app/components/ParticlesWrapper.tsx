"use client";

import React from 'react';
import { lazyLoadComponent } from '../utils/lazyLoad';

// Lazy load the ParticlesComponent with ssr:false in a client component
const ParticlesComponent = lazyLoadComponent(
  () => import('../LandingPage/ParticlesComponent'),
  <div className="w-full h-full bg-black"></div>,
  false // ssr: false
);

export default function ParticlesWrapper() {
  return <ParticlesComponent />;
} 