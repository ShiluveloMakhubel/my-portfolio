import React, { useRef, useEffect, useState } from 'react';
import * as THREE from 'three';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './DataStructuresVisualization.css';

const DataStructuresVisualization = () => {
  const mountRef = useRef(null);
  const controls = useAnimation();
  const { ref, inView } = useInView({ triggerOnce: false });
  const [isScattered, setIsScattered] = useState(false);
  const scatterDuration = 2; // Duration for scattering animation
  const bounceDuration = 5; // Duration for bouncing animation

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    } else {
      controls.start('hidden');
    }
  }, [controls, inView]);

  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, mountRef.current.clientWidth / mountRef.current.clientHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(mountRef.current.clientWidth, mountRef.current.clientHeight);
    mountRef.current.appendChild(renderer.domElement);

    const geometry = new THREE.SphereGeometry(1, 32, 32);
    const material = new THREE.PointsMaterial({
      size: 0.05,
      color: 0x00ff00,
    });

    const points = new THREE.Points(geometry, material);
    scene.add(points);

    camera.position.z = 5;

    const originalPositions = [...geometry.attributes.position.array];

    const scatterPoints = () => {
      for (let i = 0; i < geometry.attributes.position.array.length; i += 3) {
        const randomDirection = new THREE.Vector3(
          Math.random() - 0.5,
          Math.random() - 0.5,
          Math.random() - 0.5
        ).normalize();
        const randomDistance = Math.random() * 20 + 10; // Scatter further away from the sphere

        geometry.attributes.position.array[i] += randomDirection.x * randomDistance;
        geometry.attributes.position.array[i + 1] += randomDirection.y * randomDistance;
        geometry.attributes.position.array[i + 2] += randomDirection.z * randomDistance;
      }

      geometry.attributes.position.needsUpdate = true;
    };

    const gatherPoints = () => {
      for (let i = 0; i < geometry.attributes.position.array.length; i++) {
        geometry.attributes.position.array[i] = originalPositions[i];
      }
      geometry.attributes.position.needsUpdate = true;
    };

    const animate = () => {
      if (!isScattered) {
        points.rotation.x += 0.01;
        points.rotation.y += 0.01;
      }

      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    };

    animate();

    window.addEventListener('resize', () => {
      const width = mountRef.current.clientWidth;
      const height = mountRef.current.clientHeight;
      renderer.setSize(width, height);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
    });

    mountRef.current.addEventListener('click', () => {
      if (!isScattered) {
        setIsScattered(true);
        scatterPoints();
        setTimeout(() => {
          gatherPoints();
          setIsScattered(false);
        }, (scatterDuration + bounceDuration) * 1000);
      }
    });

    return () => {
      mountRef.current.removeChild(renderer.domElement);
    };
  }, [isScattered]);

  const variants = {
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    hidden: { opacity: 0, y: 100 },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={variants}
      className="visualization-container"
    >
      <div ref={mountRef} className="visualization" />
    </motion.div>
  );
};

export default DataStructuresVisualization;
