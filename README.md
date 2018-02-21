# nat-ts
Type-level natural numbers for Typescript.

```typescript
import { Nat, Z, S, Lit } from "nat-ts";

type Zero = Z;
type One = S<Z>;
type Two = S<S<Z>>; // also = S<One>;

type AnyNat<N extends Nat> = N;
type Zero_b = AnyNat<Z>;
type One_b = AnyNat<S<Z>>;
// type Two_b = AnyNat<2>; // type error: 2 is not a Nat.

type Zero_c = Lit._0;
type One_c = Lit._1;
// ...
type OneHundredTwentyThree = Lit._123;
// ...
type OneThousand = Lit._1000;
```

