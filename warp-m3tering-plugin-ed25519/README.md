# Warp M3tering Plugin - Ethers

This plugin attaches `verify` from the [@stablelib/ed25519](https://www.npmjs.com/package/@stablelib/ed25519) library v1.0.3 to the `SmartWeave` global object.  
It can be then used inside the contract like this:

```js
const provider = new SmartWeave.extensions.ed25519.verify(...);
```

## Installation

`yarn add warp-m3tering-plugin-ed25519`

```ts
import { Ed25519Extension } from 'warp-m3tering-plugin-ed25519';
import { WarpFactory } from 'warp-contracts';

const warp = WarpFactory.forMainnet().use(new Ed25519Extension());
```

Requires `warp-contracts` SDK ver. min. `1.2.30`.