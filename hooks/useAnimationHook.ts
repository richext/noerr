import { useEffect, RefObject } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

/**
 * Custom hook for common animations to reduce code duplication 
 * @param containerRef - The container reference to scope GSAP animations
 * @param cardSelector - CSS selector for items to animate (e.g., '.service-card')
 * @param options - Optional animation configuration
 */
export const useAnimationHook = (
  containerRef: RefObject<HTMLElement>,
  cardSelector: string,
  options: {
    staggerAmount?: number;
    duration?: number;
    yOffset?: number;
    ease?: string;
    once?: boolean;
  } = {}
) => {
  const {
    staggerAmount = 0.2,
    duration = 0.8,
    yOffset = 30,
    ease = 'power2.out',
    once = true
  } = options;

  useEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      // Get all items matching the selector
      const items = gsap.utils.toArray<HTMLElement>(cardSelector);
      
      // Create animation for each item
      items.forEach((item, index) => {
        gsap.from(item, {
          scrollTrigger: {
            trigger: item,
            start: 'top bottom-=50',
            end: 'bottom top+=200',
            toggleActions: 'play none none reverse',
            once: once
          },
          opacity: 0,
          y: yOffset,
          duration: duration,
          delay: index * staggerAmount,
          ease: ease
        });
      });

      // Text reveal animation if present
      const textElements = gsap.utils.toArray('.animated-text');
      if (textElements.length > 0) {
        gsap.from(textElements, {
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 70%',
            end: 'center center',
            toggleActions: 'play none none reverse',
          },
          y: 20,
          opacity: 0,
          duration: 1,
          stagger: 0.2,
          ease: 'power3.out'
        });
      }
    }, containerRef);

    // Clean up animations when component unmounts
    return () => ctx.revert();
  }, [containerRef, cardSelector, staggerAmount, duration, yOffset, ease, once]);
};

/**
 * Hook for section background parallax effects
 */
export const useParallaxBackground = (
  containerRef: RefObject<HTMLElement>,
  backgroundSelector: string,
  amount: number = 15
) => {
  useEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      gsap.to(backgroundSelector, {
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1.5
        },
        y: `${amount}%`,
        ease: 'none'
      });
    }, containerRef);

    return () => ctx.revert();
  }, [containerRef, backgroundSelector, amount]);
};

/**
 * Hook for staggered item reveals
 */
export const useStaggeredReveal = (
  containerRef: RefObject<HTMLElement>,
  itemSelector: string,
  options: {
    direction?: 'y' | 'x';
    amount?: number;
    stagger?: number;
    threshold?: string;
  } = {}
) => {
  const {
    direction = 'y',
    amount = 30,
    stagger = 0.1,
    threshold = '60%'
  } = options;

  useEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      const items = gsap.utils.toArray(itemSelector);
      
      gsap.from(items, {
        scrollTrigger: {
          trigger: containerRef.current,
          start: `top ${threshold}`,
          toggleActions: 'play none none reverse'
        },
        opacity: 0,
        [direction]: amount,
        duration: 0.8,
        stagger: stagger,
        ease: 'power2.out'
      });
    }, containerRef);

    return () => ctx.revert();
  }, [containerRef, itemSelector, direction, amount, stagger, threshold]);
};
