"use client"
import React, { useEffect, useRef, useState } from 'react';

const SketchfabViewer = () => {
  const containerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Only load once
        }
      },
      {
        rootMargin: '0px',
        threshold: 0.2, // trigger when 20% visible
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="sketchfab-container mb-20!" ref={containerRef}>
      {isVisible ? (
        <iframe
          title="Sketchfab 3D Model"
          src="https://sketchfab.com/models/7f205e2fbfc14d209de9061be603b462/embed?autostart=1&ui_infos=0&ui_controls=0&ui_watermark=0&ui_hint=0&ui_theme=dark"
          width="100%"
          height="500"
          frameBorder="0"
          allow="autoplay; fullscreen; xr-spatial-tracking"
          allowFullScreen
          loading="lazy"
          execution-while-out-of-viewport=""
          execution-while-not-rendered=""
          web-share=""
        ></iframe>
      ) : (
        <div className="placeholder">Loading 3D model...</div>
      )}
    </div>
  );
};

export default SketchfabViewer;
