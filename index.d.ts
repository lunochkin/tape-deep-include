declare module 'tape' {
  interface Test {
    deepInclude (actual: any, expected: any, msg?: string): void;
  }
}
