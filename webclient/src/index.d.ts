declare module 'the-handsomestnerd-internal'
declare module 'react-dom/client'
declare module "*.png" {
    const value: any;
    export = value;
}

declare module '*.jpeg' {
}

declare module '*.jpg' {
}

declare module '*.otf' {
}

declare module '*.ttf' {
}

declare module '*.svg' {
}

declare module '*.module.css' {
    const classes: { [key: string]: string }
    export default classes
}

declare module "*.html" {
    const content: string;
    export default content;
}