# Tailwind CSS PurgeCSS Issue with Dynamic Classes

This repository demonstrates a common issue encountered when using Tailwind CSS with dynamic class names.  The problem arises when PurgeCSS, Tailwind's utility for removing unused CSS, fails to correctly identify classes generated dynamically, resulting in larger-than-necessary CSS bundles.

## Problem

The `bug.js` file contains a Next.js component using dynamic classes based on the `isActive` prop.  Even if the component only renders with one state, both classes will be present in the final CSS output.

## Solution

The `bugSolution.js` file provides a solution using the `@apply` directive or explicitly listing all possible class combinations in the Tailwind configuration file. This ensures that all used classes are correctly identified by PurgeCSS.

This example highlights the importance of careful configuration when using PurgeCSS with dynamic class names in Tailwind CSS to prevent unnecessary CSS bloat and improve performance.