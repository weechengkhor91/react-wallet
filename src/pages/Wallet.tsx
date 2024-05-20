
import React from 'react'
import { createWeb3Modal } from '@web3modal/wagmi/react'
import { defaultWagmiConfig } from '@web3modal/wagmi/react/config'

import { WagmiProvider } from 'wagmi'
import { arbitrum, mainnet } from 'wagmi/chains'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'



type MyProps = {
  children: React.ReactNode
}
// 0. Setup queryClient
const queryClient = new QueryClient()

// 1. Your WalletConnect Cloud project ID
const projectId = 'f1978c6b50742571f64ad2e81737636a'

// 2. Create wagmiConfig
const metadata = {
  name: 'react-wallet',
  description: 'Web3Modal Example',
  url: 'https://web3modal.com', // origin must match your domain & subdomain
  icons: ['https://avatars.githubusercontent.com/u/37784886']
}

const chains = [mainnet, arbitrum] as const
const config = defaultWagmiConfig({
  chains,
  projectId,
  metadata,

})

// 3. Create modal
createWeb3Modal({
  wagmiConfig: config,
  projectId,
  enableAnalytics: true, // Optional - defaults to your Cloud configuration
  enableOnramp: true, // Optional - false as default,
  //...wagmiOptions, // Optional - Override createConfig parameters
  themeMode: 'light',
  themeVariables: {
    '--w3m-accent': '#3b82f6',
    '--w3m-color-mix': '#fff',
    '--w3m-color-mix-strength': 40
  }
})

export default function Web3ModalProvider({ children }:MyProps) {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </WagmiProvider>
  )
}
    