import { defineStore } from "pinia";
import { polygon } from "@wagmi/core/chains";
import { Client, configureChains, createClient } from "@wagmi/core";
import {
  EthereumClient,
  w3mConnectors,
  w3mProvider,
} from "@web3modal/ethereum";
import { Web3Modal } from "@web3modal/html";

export const useEthereumStore = defineStore("ethereumClient", {
  state: () => ({
    chains: [polygon],
    projectId: import.meta.env.VITE_WALLETCONNECT_PROJECTID,
    ethereumClient: <EthereumClient>{},
  }),
  getters: {},
  actions: {
    initClient() {
      const { provider } = configureChains(this.chains, [
        w3mProvider({ projectId: this.projectId }),
      ]);
      const wagmiClient = createClient({
        autoConnect: true,
        connectors: w3mConnectors({
          projectId: this.projectId,
          version: 1,
          chains: this.chains,
        }),
        provider,
      });
      const ethereumClient = new EthereumClient(wagmiClient, this.chains);
      const web3modal = new Web3Modal(
        { projectId: this.projectId },
        ethereumClient
      );
      web3modal.setDefaultChain(polygon);
      web3modal.setTheme({
        themeMode: "light",
      });
      this.ethereumClient = ethereumClient;
      return ethereumClient;
    },
  },
});
