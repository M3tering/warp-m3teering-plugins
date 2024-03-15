# Warp M3tering Plugin - Ethers

This plugin attaches `ethers` from the [ethers](https://www.npmjs.com/package/ethers) library v6.11.1 to the `SmartWeave` global object.  
It can be then used inside the contract like this:

```js
const provider = new SmartWeave.extensions.ethers.JsonRpcProvider("https://gnosis-rpc.publicnode.com");
```

## Installation

`yarn add warp-m3tering-plugin-ethers`

```ts
import { EthersExtension } from 'warp-m3tering-plugin-ethers;
import { WarpFactory } from 'warp-contracts';

const warp = WarpFactory.forMainnet().use(new EthersExtension());
```

Requires `warp-contracts` SDK ver. min. `1.2.30`.