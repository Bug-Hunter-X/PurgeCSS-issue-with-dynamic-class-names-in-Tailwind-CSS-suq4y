This solution demonstrates how to solve the issue by explicitly listing the possible class variations in Tailwind's `purge` configuration or using `@apply` to statically apply the classes:

**Method 1:  Modifying Tailwind Configuration**

Update your Tailwind CSS configuration file (e.g., `tailwind.config.js`):

```javascript
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [],
  purge: {
    content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
    options: {
      safelist: ['bg-red-500', 'bg-blue-500'] // Add the dynamic classes
    }
  }
}
```

**Method 2: Using `@apply` directive**

Modify your component to use `@apply`:

```javascript
function MyComponent({isActive}) {
  return (
    <div className={`p-4 ${isActive ? '@apply bg-red-500' : '@apply bg-blue-500'}`}>
      {isActive ? 'Active' : 'Inactive'}
    </div>
  );
}
```
This ensures that the classes are statically applied at compile time, addressing the PurgeCSS issue.