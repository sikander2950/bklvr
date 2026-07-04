// HeroIllustration/types.ts

export interface Book {
  id: number;
  title: string;
  image: string;
}

export interface OrbitBookProps {
  image: string;
  title: string;
  x: number;
  y: number;
}

export interface OrbitProps {
  size: number;
  rotation: number;
}

export interface OrbitSystemProps {
  size: number;
}