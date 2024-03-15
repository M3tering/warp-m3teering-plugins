import { ethers } from "ethers";
import { WarpPlugin, WarpPluginType } from "warp-contracts";

export class EthersExtension implements WarpPlugin<any, void> {
  process(input: any): void {
    input.ethers.Interface = ethers.Interface;
    input.ethers.JsonRpcProvider = ethers.JsonRpcProvider;
  }

  type(): WarpPluginType {
    return "smartweave-extension-ethers";
  }
}
