import { config as dotenvConfig } from 'dotenv'
import { resolve } from 'path'

dotenvConfig({ path: resolve(__dirname, './.env') })

import { HardhatUserConfig } from 'hardhat/config'
import { NetworkUserConfig } from 'hardhat/types'
import './scripts/tasks/deploy/deploy-full'
import './scripts/tasks/deploy/upgrade-proxy'
import './scripts/tasks/deploy/prepare-upgrade'
import './scripts/tasks/deploy/initial-setups'
import './scripts/utils/wallet'
import './scripts/tasks/protocol/mint-platform-id'
import './scripts/tasks/protocol/whitelist-platform-address'
import './scripts/tasks/protocol/update-platform-whitelist-status'
import './scripts/tasks/protocol/mint-talentlayer-id'
import './scripts/tasks/protocol/add-arbitrator'
import './scripts/tasks/protocol/remove-arbitrator'
import './scripts/tasks/protocol/update-min-arbitration-fee-timeout'
import './scripts/tasks/protocol/transfer-ownership'
import './scripts/tasks/protocol/grant-role'
import './scripts/tasks/user/create-service'
import './scripts/tasks/protocol/update-token-address-to-whitelist'
import './scripts/tasks/protocol/add-trusted-forwarder'
import './scripts/tasks/protocol/remove-trusted-forwarder'
import './scripts/tasks/protocol/set-profile-whitelist'
import './scripts/tasks/protocol/update-profile-minting-status'
import './scripts/tasks/protocol/update-short-handles-price'
import './scripts/tasks/protocol/update-min-service-completion-percentage'
import './scripts/tasks/protocol/set-is-service-contract'
import './scripts/tasks/platform/update-signer'
import './scripts/tasks/platform/mint-for-address'
import 'solidity-coverage'
import '@nomicfoundation/hardhat-toolbox'
import '@openzeppelin/hardhat-upgrades'
import '@openzeppelin/hardhat-defender'
import 'hardhat-contract-sizer'
import { Network } from './networkConfig'

const mnemonic: string | undefined = process.env.MNEMONIC
if (!mnemonic) {
  throw new Error('Please set your MNEMONIC in a .env file')
}

const infuraApiKey: string | undefined = process.env.INFURA_API_KEY
if (!infuraApiKey) {
  throw new Error('Please set your INFURA_API_KEY in a .env file')
}

function getChainConfig(chain: Network): NetworkUserConfig {
  let jsonRpcUrl: string
  switch (chain) {
    case Network.AVALANCHE:
      jsonRpcUrl = 'https://avalanche-mainnet.infura.io/v3/' + infuraApiKey
      break
    case Network.FUJI:
      jsonRpcUrl = 'https://avalanche-fuji.infura.io/v3/' + infuraApiKey
      break
    case Network.POLYGON:
      jsonRpcUrl = 'https://polygon-rpc.com/'
      break
    case Network.MUMBAI:
      // jsonRpcUrl = process.env.MUMBAI_RPC || 'https://polygon-mumbai-bor.publicnode.com'
      jsonRpcUrl = process.env.MUMBAI_RPC || 'https://polygon-mumbai-bor.publicnode.com'
      // jsonRpcUrl = process.env.MUMBAI_RPC || 'https://endpoints.omniatech.io/v1/matic/mumbai/public'
      // jsonRpcUrl = process.env.MUMBAI_RPC || 'https://rpc-mumbai.maticvigil.com/'
      break
    case Network.GNOSIS:
      jsonRpcUrl = 'https://gnosis.drpc.org'
      break
    default:
      jsonRpcUrl = 'https://mainnet.infura.io/v3/' + infuraApiKey
  }

  return {
    accounts: {
      count: 10,
      mnemonic,
      path: "m/44'/60'/0'/0",
    },
    chainId: chain,
    url: jsonRpcUrl,
    gasMultiplier: 3,
  }
}

const accounts = {
  mnemonic,
  count: 100,
};
const config: HardhatUserConfig = {
  defaultNetwork: 'hardhat',
  etherscan: {
    apiKey: {
      mainnet: process.env.ETHERSCAN_API_KEY || '',
      xdai: process.env.GNOSIS_API_KEY || '',
      avalanche: process.env.SNOWTRACE_API_KEY || '',
      avalancheFujiTestnet: process.env.SNOWTRACE_API_KEY || '',
      polygon: process.env.POLYGONSCAN_API_KEY || '',
      polygonMumbai: process.env.POLYGONSCAN_API_KEY || '',
      scrollSepolia: process.env.SCROLL_SEPOLIA_API_KEY || '',
      gnosis: process.env.GNOSIS_API_KEY || '',
      mantleTestnet: process.env.MANTLE_API_KEY || '',
    },
    customChains: [
      {
        network: 'mantle-testnet',
        chainId: 5001,
        urls: {
          apiURL: 'https://explorer.testnet.mantle.xyz/api',
          browserURL: 'https://explorer.testnet.mantle.xyz',
        },
      },
      {
        network: 'scrollAlpha',
        chainId: 534353,
        urls: {
          apiURL: 'https://blockscout.scroll.io/api',
          browserURL: 'https://blockscout.scroll.io/',
        },
      },
      {
        network: 'scrollSepolia',
        chainId: 534351,
        urls: {
          apiURL: 'https://sepolia.scrollscan.dev/apis',
          browserURL: 'https://sepolia.scrollscan.dev/',
        },
      },
      {
        network: 'base-goerli',
        chainId: 84531,
        urls: {
          apiURL: 'https://goerli.basescan.org/api',
          browserURL: 'https://goerli.basescan.org/',
        },
      },
      {
        network: 'base-sepolia',
        chainId: 84532,
        urls: {
          apiURL: 'https://goerli.basescan.org/api',
          browserURL: 'https://goerli.basescan.org/',
        },
      },
      {
        network: 'gnosisChiado',
        chainId: 10200,
        urls: {
          apiURL: 'https://rpc.chiadochain.net/api',
          browserURL: 'https://rpc.chiadochain.net',
        },
      },
      {
        network: 'mantleTestnet',
        chainId: 5001,
        urls: {
          apiURL: 'https://explorer.testnet.mantle.xyz/api',
          browserURL: 'https://explorer.testnet.mantle.xyz',
        },
      },
      {
        network: 'celoTestnet',
        chainId: 44787 ,
        urls: {
          apiURL: 'https://alfajores.celoscan.io/api',
          browserURL: 'https://alfajores.celoscan.io',
        },
      },
    ],
  },
  gasReporter: {
    currency: 'USD',
    coinmarketcap: process.env.COINMARKETCAP_API_KEY,
    enabled: !!process.env.REPORT_GAS,
    showTimeSpent: true,
    excludeContracts: [],
    src: './contracts',
    token: 'MATIC',
    gasPriceApi: 'https://api.polygonscan.com/api?module=proxy&action=eth_gasPrice',
    // noColors: true,
    // outputFile: "./reports/LoadTest",
  },
  contractSizer: {
    alphaSort: true,
    disambiguatePaths: false,
    runOnCompile: true,
    only: ['TalentLayer', 'TalentLayerService'],
  },
  networks: {
    hardhat: {
      accounts,
      chainId: Network.LOCAL,
    },
    avalanche: getChainConfig(Network.AVALANCHE),
    fuji: getChainConfig(Network.FUJI),
    polygon: getChainConfig(Network.POLYGON),
    mumbai: getChainConfig(Network.MUMBAI),
    gnosis: getChainConfig(Network.GNOSIS),
      zkSyncTestnet: {
        url: 'https://testnet.era.zksync.dev',
        ethNetwork: 'goerli', // Can also be the RPC URL of the network (e.g. `https://goerli.infura.io/v3/<API_KEY>`)
        zksync: true,
        // verifyURL: 'https://zksync2-testnet-explorer.zksync.dev/contract_verification',
        accounts,
      },
      scrollAlpha: {
        url: 'https://alpha-rpc.scroll.io/l2',
        accounts,
      },
      scrollSepolia: {
        url: 'https://sepolia-rpc.scroll.io',
        accounts,
      },
      'base-goerli': {
        url: 'https://goerli.base.org',
        accounts,
      },
      'base-sepolia': {
        url: 'https://sepolia.base.org',
        accounts,
      },
      'gnosisChiado': {
        url: 'https://rpc.chiadochain.net',
        accounts,
      },
      'mantleTestnet': {
        url: 'https://rpc.testnet.mantle.xyz',
        accounts,
      },
      'celoTestnet': {
        url: 'https://alfajores-forno.celo-testnet.org',
        accounts,
      },
  },
  paths: {
    artifacts: './artifacts',
    cache: './cache',
    sources: './contracts',
    tests: './test',
  },
  solidity: {
    compilers: [
      {
        version: '0.8.17',
        settings: {
          optimizer: {
            enabled: true,
            runs: 200,
          },
        },
      },
    ],
  },
  mocha: {
    timeout: 1000000,
  },
  defender: {
    apiKey: process.env.DEFENDER_API_KEY || '',
    apiSecret: process.env.DEFENDER_API_SECRET || '',
  },
}

export default config
