/**
 * Color Palette Configuration
 * Based on brand guidelines - September 2024
 * 
 * Core Colors:
 * - Dark Grey: Primary text and headings
 * - Olive: Core brand color
 * - Light Olive: Accent color (80%, 50%, 30% tints)
 * - Beige: Secondary accent color (80%, 50%, 30% tints)
 */

export const colors = {
  // Core Colors
  darkGrey: '#343333',
  olive: '#8C8860',
  lightOlive: '#C3C186',
  beige: '#DED0C3',
  
  // Neutral Colors
  white: '#FFFFFF',
  black: '#000000',
  
  // Tints - Light Olive (for backgrounds and accents)
  lightOlive80: 'rgba(195, 193, 134, 0.8)',
  lightOlive50: 'rgba(195, 193, 134, 0.5)',
  lightOlive30: 'rgba(195, 193, 134, 0.3)',
  lightOlive10: 'rgba(195, 193, 134, 0.1)',
  
  // Tints - Beige (for backgrounds and accents)
  beige80: 'rgba(222, 208, 195, 0.8)',
  beige50: 'rgba(222, 208, 195, 0.5)',
  beige30: 'rgba(222, 208, 195, 0.3)',
  beige10: 'rgba(222, 208, 195, 0.1)',
  
  // Tints - Olive (for backgrounds and accents)
  olive80: 'rgba(140, 136, 96, 0.8)',
  olive50: 'rgba(140, 136, 96, 0.5)',
  olive30: 'rgba(140, 136, 96, 0.3)',
  olive10: 'rgba(140, 136, 96, 0.1)',
  
  // Text Colors (semantic naming)
  text: {
    primary: '#343333',      // Dark Grey for main text
    secondary: '#8C8860',    // Olive for secondary text
    accent: '#C3C186',       // Light Olive for accents
    light: '#DED0C3',        // Beige for light text
    white: '#FFFFFF',
    black: '#000000',
  },
  
  // Background Colors (semantic naming)
  background: {
    primary: '#FFFFFF',
    dark: '#343333',
    olive: '#8C8860',
    lightOlive: '#C3C186',
    beige: '#DED0C3',
  },
  
  // Border Colors
  border: {
    primary: '#343333',
    olive: '#8C8860',
    light: '#C3C186',
  },
};

export default colors;
