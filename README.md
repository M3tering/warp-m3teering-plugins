# Custom Warp Contracts Plugins

This is a monorepo that includes all the M3tering custom warp plugins and examples.

## Installation

```bash
yarn add warp-m3tering-plugin-ed25519
yarn add warp-m3tering-plugin-ethers
```

## Usage

All you need to do is import the plugin as you normally do with packages installed with npm or yarn.

```js
import { WarpFactory } from "warp-contracts";
import { Ed25519Extension } from "warp-m3tering-plugin-ed25519";
import { EthersExtension } from "warp-m3tering-plugin-ethers";

const warp = WarpFactory.forMainnet().use(new FetchExtension());
```

You can cascade the plugins (use multiple plugins) like this,

```js
const let warp = WarpFactory.forMainnet()
  .use(new EthersExtension())
  .use(new Ed25519Extension());
```

Check the [example folder](./example/) for example usage.
