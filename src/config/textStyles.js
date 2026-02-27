/**
 * Text Styles Configuration
 * Centralized text styling for consistent typography across the application
 * 
 * Usage:
 * import { textStyles } from '@/config/textStyles';
 * <h1 className={textStyles.heading.h1}>Title</h1>
 */

export const textStyles = {
  // Headings
  heading: {
    h1: 'text-4xl md:text-5xl lg:text-6xl font-thin font-manrope tracking-tight text-beige',
    h2: 'text-3xl md:text-4xl lg:text-5xl font-thin font-manrope tracking-tight text-beige',
    h3: 'text-2xl md:text-3xl lg:text-4xl font-semibold font-manrope text-beige',
    h4: 'text-xl md:text-2xl font-semibold font-manrope text-beige',
    h5: 'text-lg md:text-xl font-semibold font-manrope text-beige',
    h6: 'text-base md:text-lg font-semibold font-manrope text-beige',
  },
  
  // Body Text
  body: {
    large: 'text-base md:text-lg leading-relaxed font-light font-sans text-lightOlive',
    normal: 'text-sm md:text-base leading-relaxed font-light font-sans text-lightOlive',
    small: 'text-xs md:text-sm leading-relaxed font-light font-sans text-lightOlive',
  },
  
  // Section Headers
  section: {
    title: 'text-4xl font-thin font-manrope tracking-tight text-beige',
    description: 'text-sm md:text-base leading-relaxed font-light font-sans text-lightOlive',
  },
  
  // Buttons
  button: {
    primary: 'text-sm md:text-base font-medium font-sans text-white',
    secondary: 'text-sm md:text-base font-medium font-sans text-darkGrey',
    outline: 'text-sm md:text-base font-medium font-sans text-beige',
  },
  
  // Labels and Tags
  label: {
    default: 'text-xs font-medium font-sans text-beige',
    light: 'text-xs font-medium font-sans text-lightOlive',
  },
  
  // Links
  link: {
    default: 'text-sm md:text-base font-normal font-sans text-lightOlive hover:text-beige transition-colors',
    underlined: 'text-sm md:text-base font-normal font-sans text-lightOlive hover:text-beige underline transition-colors',
  },
};

// Width utilities for text containers
export const textWidths = {
  narrow: 'max-w-sm',
  normal: 'max-w-xl',
  wide: 'max-w-3xl',
  extraWide: 'max-w-5xl',
  full: 'max-w-full',
};

// Alignment utilities
export const textAlignment = {
  left: 'text-left',
  center: 'text-center',
  right: 'text-right',
  justify: 'text-justify',
};

export default textStyles;
