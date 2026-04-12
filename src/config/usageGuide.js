/**
 * USAGE GUIDE FOR COLOR AND TEXT STYLES
 * 
 * This file demonstrates how to use the centralized color and text style system
 * in your portfolio components.
 */

// ============================================================================
// 1. IMPORTING THE CONFIGURATIONS
// ============================================================================

// Import colors
// import { colors } from './config/colors';

// Import text styles, widths, and alignment
// import { textStyles, textWidths, textAlignment } from './config/textStyles';

// Import the TextElement component
// import TextElement from './components/Common/TextElement';


// ============================================================================
// 2. USING COLORS IN TAILWIND CLASSES
// ============================================================================

// Example 1: Using predefined Tailwind color classes
// <div className="text-darkGrey bg-beige border-olive">Content</div>

// Example 2: Using color tints
// <div className="bg-lightOlive-30 border-olive-50">Content</div>

// Example 3: Using colors in inline styles (if needed)
// <div style={{ backgroundColor: colors.lightOlive, color: colors.darkGrey }}>Content</div>


// ============================================================================
// 3. USING TEXT STYLES
// ============================================================================

// Example 1: Using heading styles
// <h1 className={textStyles.heading.h1}>Main Title</h1>
// <h2 className={textStyles.heading.h2}>Subtitle</h2>
// <h3 className={textStyles.heading.h3}>Section Title</h3>

// Example 2: Using body text styles
// <p className={textStyles.body.normal}>Regular paragraph text</p>
// <p className={textStyles.body.large}>Large paragraph text</p>
// <p className={textStyles.body.small}>Small text</p>

// Example 3: Using section styles
// <h2 className={textStyles.section.title}>SECTION TITLE</h2>
// <p className={textStyles.section.description}>Section description text</p>

// Example 4: Using button text styles
// <button className={`${textStyles.button.primary} bg-olive`}>Primary Button</button>
// <button className={`${textStyles.button.secondary} bg-beige`}>Secondary Button</button>


// ============================================================================
// 4. USING THE TEXTELEMENT COMPONENT
// ============================================================================

// Example 1: Basic usage
/*
<TextElement
  title="About Me"
  description="I am a passionate developer with expertise in modern web technologies."
/>
*/

// Example 2: With custom widths
/*
<TextElement
  title="My Skills"
  description="A comprehensive overview of my technical abilities."
  titleWidth="wide"
  descriptionWidth="normal"
/>
*/

// Example 3: With left alignment
/*
<TextElement
  title="Contact"
  description="Get in touch with me for collaborations."
  alignment="left"
  titleWidth="narrow"
  descriptionWidth="wide"
/>
*/


// ============================================================================
// 5. COLOR PALETTE REFERENCE
// ============================================================================

/*
Core Colors:
- darkGrey: #343333 (Primary text, headings)
- olive: #8C8860 (Core brand color)
- lightOlive: #C3C186 (Accent color)
- beige: #DED0C3 (Secondary accent)

Text Colors:
- text-darkGrey: Primary text
- text-olive: Secondary text
- text-lightOlive: Accent text
- text-beige: Light text
- text-white: White text
- text-black: Black text

Background Colors:
- bg-darkGrey: Dark background
- bg-olive: Olive background
- bg-lightOlive: Light olive background
- bg-beige: Beige background
- bg-white: White background

Tints (opacity variations):
- lightOlive-80, lightOlive-50, lightOlive-30, lightOlive-10
- beige-80, beige-50, beige-30, beige-10
- olive-80, olive-50, olive-30, olive-10
*/


// ============================================================================
// 6. FONT FAMILIES
// ============================================================================

/*
Available Font Families:
- font-manrope: Manrope (for headings, titles)
- font-ibm: IBM Plex Sans (alternative sans-serif)
- font-sans: Default system sans-serif
*/


// ============================================================================
// 7. COMPLETE COMPONENT EXAMPLE
// ============================================================================

/*
import { textStyles } from '../../config/textStyles';

const MyComponent = () => {
  return (
    <section className="py-20 px-[7vw] bg-beige-10">
      <div className="max-w-4xl mx-auto">
        <h2 className={textStyles.heading.h2}>Welcome to My Portfolio</h2>
        <p className={`${textStyles.body.large} mt-4`}>
          This is a beautiful portfolio built with a consistent color scheme
          and typography system.
        </p>
        
        <button className={`mt-6 px-6 py-3 bg-olive text-white rounded-full ${textStyles.button.primary}`}>
          Get in Touch
        </button>
      </div>
    </section>
  );
};

export default MyComponent;
*/


// ============================================================================
// 8. MAINTENANCE TIPS
// ============================================================================

/*
1. Always use the predefined color classes (e.g., bg-olive, text-darkGrey)
   instead of hardcoding hex values

2. Use textStyles for consistent typography across all components

3. If you need to add a new color, add it to config/colors.js and
   tailwind.config.js

4. If you need a new text style, add it to config/textStyles.js

5. Keep the color palette limited to the brand colors for consistency

6. Use semantic color names (e.g., text.primary, background.dark) from
   colors.js when working with JavaScript/inline styles
*/

export {};
