declare module '@splidejs/react-splide' {
  import React from 'react';

  export interface SplideProps extends React.HTMLAttributes<HTMLDivElement> {
    options?: Record<string, unknown>;
    hasTrack?: boolean;
    tag?: string;
    ariaLabel?: string;
  }

  export interface SplideSlideProps extends React.HTMLAttributes<HTMLDivElement> {
    tag?: string;
  }

  export const Splide: React.FC<SplideProps>;
  export const SplideSlide: React.FC<SplideSlideProps>;
}

declare module '*.css' {
  const content: { [className: string]: string };
  export default content;
}

declare module '@splidejs/splide/css';