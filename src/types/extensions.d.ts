declare module '*.scss' {
  // eslint-disable-next-line @typescript-eslint/consistent-indexed-object-style
  const content: { readonly [K: string]: string };
  export = content;
}

declare module '*.gif' {
  const content: string;

  export default content;
}

declare module '*.jpg' {
  const content: string;

  export default content;
}

declare module '*.png' {
  const content: string;

  export default content;
}

declare module '*.svg' {
  const content: string;

  export default content;
}

declare module '*.md' {
  const content: string;

  export default content;
}

declare module '*.txt' {
  const content: string;

  export default content;
}

declare module '*.json' {
  const content: any;

  export default content;
}

declare module '*.frag' {
  const content: string;

  export default content;
}

declare module '*.vert' {
  const content: string;

  export default content;
}

declare module '*.glsl' {
  const content: string;

  export default content;
}
