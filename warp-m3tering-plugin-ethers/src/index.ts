import { ethers } from "ethers";
import { WarpPlugin, WarpPluginType } from "warp-contracts";

export class EthersExtension implements WarpPlugin<any, void> {
  process(input: any): void {
    input.ethers = ethers;
  }

  type(): WarpPluginType {
    return "smartweave-extension-ethers";
  }
}
