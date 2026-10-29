import React from 'react';
import {
  Compass,
  Scale,
  Layers,
  Gem,
  Sun,
  Orbit,
  Droplets,
  Trees,
  Wind,
  Recycle,
  ThermometerSun,
  Wheat,
  Factory,
  Users,
  Landmark,
} from 'lucide-react';
import { Topic } from '../types';

export function renderTopicIcon(iconName: Topic['iconName'], className = 'w-5 h-5'): React.ReactNode {
  switch (iconName) {
    case 'Compass':
      return <Compass className={className} />;
    case 'Scale':
      return <Scale className={className} />;
    case 'Layers':
      return <Layers className={className} />;
    case 'Gem':
      return <Gem className={className} />;
    case 'Sun':
      return <Sun className={className} />;
    case 'Orbit':
      return <Orbit className={className} />;
    case 'Droplets':
      return <Droplets className={className} />;
    case 'Trees':
      return <Trees className={className} />;
    case 'Wind':
      return <Wind className={className} />;
    case 'Recycle':
      return <Recycle className={className} />;
    case 'ThermometerSun':
      return <ThermometerSun className={className} />;
    case 'Wheat':
      return <Wheat className={className} />;
    case 'Factory':
      return <Factory className={className} />;
    case 'Users':
      return <Users className={className} />;
    case 'Landmark':
      return <Landmark className={className} />;
    default:
      return <Compass className={className} />;
  }
}
