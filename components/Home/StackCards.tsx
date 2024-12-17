"use client";

import React, { useEffect, useRef, useState } from "react";
import { useInView } from "react-intersection-observer";

interface StackCardsProps {
  children: React.ReactNode[];
  gap?: number;
}

const StackCards: React.FC<StackCardsProps> = ({ children, gap = 44 }) => {
  const [ref, inView] = useInView({
    threshold: [0, 1],
    triggerOnce: false,
  });

  const containerRef = useRef<HTMLUListElement | null>(null);
  // const [marginY, setMarginY] = useState(gap);
  const [elementHeight, setElementHeight] = useState(0);
  const [cardHeight, setCardHeight] = useState(0);
  const [windowHeight, setWindowHeight] = useState(0);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const updateDimensions = () => {
      setElementHeight(container.offsetHeight);
      const firstCard = container.firstElementChild as HTMLElement;
      if (firstCard) {
        setCardHeight(firstCard.offsetHeight);
      }
      setWindowHeight(window.innerHeight);
    };

    updateDimensions();

    const resizeObserver = new ResizeObserver(updateDimensions);
    resizeObserver.observe(container);

    const handleResize = () => {
      updateDimensions();
      container.dispatchEvent(new CustomEvent("resize-stack-cards"));
    };

    window.addEventListener("resize", handleResize);

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.style.paddingBottom = `${gap * (children.length - 1)}px`;
    }
  }, [gap, children.length]);

  const hasReducedMotion = (): boolean => {
    if (typeof window === "undefined" || !window.matchMedia) return false;
    const matchMediaObj = window.matchMedia("(prefers-reduced-motion: reduce)");
    return matchMediaObj ? matchMediaObj.matches : false;
  };

  return (
    <ul
      ref={(el) => {
        if (ref) {
          ref(el);
        }
        containerRef.current = el as HTMLUListElement;
      }}
      className="relative"
    >
      {React.Children.map(children, (child, index) => (
        <StackCard
          key={index}
          index={index}
          inView={inView}
          total={children.length}
          marginY={gap}
          elementHeight={elementHeight}
          cardHeight={cardHeight}
          windowHeight={windowHeight}
          hasReducedMotion={hasReducedMotion()}
        >
          {child}
        </StackCard>
      ))}
    </ul>
  );
};

interface StackCardProps {
  children: React.ReactNode;
  index: number;
  inView: boolean;
  total: number;
  marginY: number;
  elementHeight: number;
  cardHeight: number;
  windowHeight: number;
  hasReducedMotion: boolean;
}

const StackCard: React.FC<StackCardProps> = ({
  children,
  index,
  inView,
  total,
  marginY,
  elementHeight,
  cardHeight,
  windowHeight,
  hasReducedMotion,
}) => {
  const cardRef = useRef<HTMLLIElement>(null);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    if (hasReducedMotion) return;

    const handleScroll = () => {
      if (!cardRef.current || !inView) return;

      const card = cardRef.current;
      const cardRect = card.getBoundingClientRect();
      const scrolling = cardRect.top;

      if (
        cardRect.top -
          scrolling +
          windowHeight -
          elementHeight -
          cardHeight +
          marginY +
          marginY * total >
        0
      ) {
        setScale(1);
        return;
      }

      if (scrolling > 0 && index !== total - 1) {
        const newScale = (cardHeight - scrolling * 0.05) / cardHeight;
        setScale(Math.max(newScale, 1));
      } else {
        setScale(1);
      }
    };

    if (inView) {
      window.addEventListener("scroll", handleScroll);
      handleScroll();
    }

    return () => window.removeEventListener("scroll", handleScroll);
  }, [
    inView,
    index,
    total,
    marginY,
    elementHeight,
    cardHeight,
    windowHeight,
    hasReducedMotion,
  ]);

  return (
    <li
      ref={cardRef}
      className="sticky top-40 w-full rounded-[12px] bg-white shadow-md overflow-hidden"
      style={{
        transform: `translateY(${marginY * index}px) scale(${scale})`,
        transformOrigin: "center top",
        transition: hasReducedMotion
          ? "none"
          : "transform 0.1s ease-out, opacity 0.3s ease-out",
      }}
    >
      <div className="">{children}</div>
    </li>
  );
};

export default StackCards;
