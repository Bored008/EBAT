'use client';
import React, { useEffect, useRef, useState } from 'react';
import { useInView, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { motion } from 'framer-motion';

export function AnimatedCounter({ 
  value,
}: { 
  value: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  
  // Parse the value
  const isDouble = value === '24-48hr';
  const isPercentage = value.includes('%');
  const isPlus = value.includes('+');
  const numbers = value.match(/\d+/g)?.map(Number) || [0];

  const motionValue1 = useMotionValue(0);
  const motionValue2 = useMotionValue(0);

  const spring1 = useSpring(motionValue1, { damping: 40, stiffness: 80 });
  const spring2 = useSpring(motionValue2, { damping: 40, stiffness: 80 });

  useEffect(() => {
    if (isInView) {
      if (isDouble && numbers.length > 1) {
        motionValue1.set(numbers[0]);
        motionValue2.set(numbers[1]);
      } else {
        motionValue1.set(numbers[0]);
      }
    }
  }, [isInView, isDouble, numbers, motionValue1, motionValue2]);

  const display1 = useTransform(spring1, (latest) => Math.floor(latest));
  const display2 = useTransform(spring2, (latest) => Math.floor(latest));

  return (
    <span ref={ref} className="inline-flex">
      {isDouble ? (
        <>
          <motion.span>{display1}</motion.span>
          <span>-</span>
          <motion.span>{display2}</motion.span>
          <span>hr</span>
        </>
      ) : (
        <>
          <motion.span>{display1}</motion.span>
          {isPlus && <span>+</span>}
          {isPercentage && <span>%</span>}
        </>
      )}
    </span>
  );
}