import * as ed25519 from "@stablelib/ed25519";
import { WarpPlugin, WarpPluginType } from "warp-contracts";

export class Ed25519Extension implements WarpPlugin<any, void> {
  process(input: any): void {
    input.ed25519 = ed25519;
  }

  type(): WarpPluginType {
    return "smartweave-extension-ed25519";
  }
}
