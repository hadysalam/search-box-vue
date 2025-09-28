export interface Article {
  id: number;
  title: string;
  content: string;
}

export const ARTICLES: Article[] = [
  {
    id: 1,
    title: "Introduction to Vue 3",
    content: "Vue 3 is the latest version of the progressive JavaScript framework. It introduces Composition API, better TypeScript support, and improved performance through the new reactivity system."
  },
  {
    id: 2,
    title: "Getting Started with TypeScript",
    content: "TypeScript is a superset of JavaScript that adds static typing. It helps catch errors during development and provides better tooling support for large applications."
  },
  {
    id: 3,
    title: "Responsive Design Principles",
    content: "Responsive web design ensures your application looks great on all devices. Use flexible grids, media queries, and mobile-first approaches to create adaptable layouts."
  },
  {
    id: 4,
    title: "DaisyUI Component Library",
    content: "DaisyUI is a Tailwind CSS component library that provides ready-to-use components with built-in themes. It simplifies UI development while maintaining customization flexibility."
  },
  {
    id: 5,
    title: "State Management in Vue",
    content: "Vuex and Pinia are popular state management solutions for Vue applications. They help manage global state in a predictable way, especially in complex applications."
  }
];