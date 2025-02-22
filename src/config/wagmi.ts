import {
    sepolia
  } from 'wagmi/chains';
import { getDefaultConfig } from '@rainbow-me/rainbowkit';

const config = getDefaultConfig({
  appName: 'Minting Net',
  projectId: '97853750b79441db416dfb36d060956e',
  chains: [sepolia],
  ssr: true
});

export default config;