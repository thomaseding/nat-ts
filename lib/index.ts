

export type Nat = Z | S<any>;


export interface Z {
    readonly __Z: void;
}


export interface S<N extends Nat> {
    readonly __S: N & void;
}


export type N0  = Z;
export type N1  = S<N0>;
export type N2  = S<N1>;
export type N3  = S<N2>;
export type N4  = S<N3>;
export type N5  = S<N4>;
export type N6  = S<N5>;
export type N7  = S<N6>;
export type N8  = S<N7>;
export type N9  = S<N8>;
export type N10 = S<N9>;
export type N11 = S<N10>;
export type N12 = S<N11>;
export type N13 = S<N12>;
export type N14 = S<N13>;
export type N15 = S<N14>;
export type N16 = S<N15>;
export type N17 = S<N16>;
export type N18 = S<N17>;
export type N19 = S<N18>;
export type N20 = S<N19>;


