import { Provider } from "@ethersproject/providers";
import { Signer } from "ethers";
import { EventEmitter2 } from "eventemitter2";
import { SDKOptions, SDKOptionsOutput } from "../../schema/sdk-options";
import { NetworkOrSignerOrProvider } from "../types";
/**
 * @internal
 */
export declare class RPCConnectionHandler extends EventEmitter2 {
    private provider;
    private signer;
    protected readonly options: SDKOptionsOutput;
    constructor(network: NetworkOrSignerOrProvider, options: SDKOptions);
    /**
     * The function to call whenever the network changes, such as when the users connects their wallet, disconnects their wallet, the connected chain changes, etc.
     *
     * @param network - a network, signer or provider that ethers js can interpret
     */
    updateSignerOrProvider(network: NetworkOrSignerOrProvider): void;
    /**
     *
     * @returns whether or not a signer is set, `true` if there is no signer so the class is in "read only" mode
     */
    isReadOnly(): boolean;
    /**
     * Explicitly get the active signer.
     * @returns the active signer, if there is one
     */
    getSigner(): Signer | undefined;
    /**
     * Explicitly get the active signer.
     * @returns the active provider
     */
    getProvider(): Provider;
    /**
     *
     * @returns the current signer if there is one, otherwise the active provider
     */
    getSignerOrProvider(): Signer | Provider;
    /** ********************
     * PRIVATE FUNCTIONS
     *********************/
    private getSignerAndProvider;
    private getReadOnlyProvider;
}
