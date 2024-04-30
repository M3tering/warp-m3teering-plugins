# Custom Warp Contracts Plugins

This is a monorepo that includes all the M3tering custom warp plugins and examples.

## Installation

```bash
yarn add m3tering-ed25519
yarn add m3tering-ethers
```

## Usage

All you need to do is import the plugin as you normally do with packages installed with npm or yarn.

```js
import { WarpFactory } from "warp-contracts";
import { EthersExtension } from "m3tering-ethers";
import { Ed25519Extension } from "m3tering-ed25519";

const warp = WarpFactory.forMainnet().use(new EthersExtension());
```

You can cascade the plugins (use multiple plugins) like this,

```js
const let warp = WarpFactory.forMainnet()
  .use(new EthersExtension())
  .use(new Ed25519Extension());
```

Check the [example folder](./example/) for example usage.
