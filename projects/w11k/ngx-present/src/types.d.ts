// referencing the declaration file does not work
// because of file copy to higher level during angular lib build
// -> copy the declaration here

declare namespace tydux_types {
  export type ViewTreeState<T> = any;
}

// above code works, below doesn't
// and I don't know why

// import {Store} from '@w11k/tydux';
//
// declare namespace tydux_types {
//
//   export type ViewTreeState<T> = {
//     [K in keyof T]
//     : T[K] extends Store<any, infer S> ? S
//       : T[K] extends object ? ViewTreeState<T[K]>
//         : never;
//   };
//
// }