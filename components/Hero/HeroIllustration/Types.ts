// HeroIllustration/types.ts

export interface Book {
  id: number;
  title: string;
  image: string;
}

export interface OrbitProps {
  size: number;
  rotation: number;
  time: number;
}

export interface OrbitBookProps {
  image: string;
  title: string;

  x: number;
  y: number;

  width: number;
  height: number;

  scale: number;
  opacity: number;
  zIndex: number;
}

export interface OrbitSystemProps {
  size: number;
}
