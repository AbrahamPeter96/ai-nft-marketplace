import Web3 from 'web3';
// import { Toast, Alert } from "react-bootstrap";
import detectEthereumProvider from '@metamask/detect-provider';
import {
  bidingAddress,
  ipfsExplorer,
  nftStakingAddress,
  requiredChainId,
  requiredChainIdName,
} from './smart-contracts.js';
import MetaMaskOnboarding from '@metamask/onboarding';

import pinataSDK from '@pinata/sdk';
import { toChecksumAddress } from "web3-utils";
import is_mobile from 'is-mobile';

const msg_mobile = 'Please use MetaMask App!';
const msg_desk = 'Please intall MetaMask Wallet extension';
const deepLink = 'https://metamask.app.link/dapp/cheekylionclub.com/';

const msg_chain = `Please switch network to ${requiredChainIdName}!`;

const PINATA_API_KEY = "bba8cceb58cf3bf02e49";
const PINATA_API_SECRET = "f8635865638103477cf33964d57a23264bb29b16e7a2bcaf2ae31fe269d27398";

export const _doThis = async (todo = null, prompt = true) => {
  const isMobile = is_mobile();

  if (prompt && !MetaMaskOnboarding.isMetaMaskInstalled()) {
    if (isMobile) {
      if (window.confirm(msg_mobile)) window.location.href = deepLink;
    } else {
      if (window.confirm(msg_desk)) new MetaMaskOnboarding().startOnboarding();
    }
  }

  const ethereum = await detectEthereumProvider();

  if (ethereum && (prompt || (await ethereum.isConnected()))) {
    ethereum.on('accountsChanged',() => window.location.reload())

    const [account] = await ethereum.request({
      method: 'eth_requestAccounts',
    });
    const chainId = await ethereum.request({
      method: 'eth_chainId',
    });

    if (chainId === requiredChainId) {
      if (todo) {
        return todo(account, new Web3(ethereum));
      }
    } else alert(msg_chain);
  }
};

export const showAddress = _address => {
  return (
    _address.substr(0, 4) +
    '****' +
    _address.substr(_address.length - 4, _address.length)
  );
};

export const parseIpfs = uriStr => {
  let url;
  try {
    const uri = new URL(uriStr);
    if (uri.protocol === "ipfs:")
      url = ipfsExplorer + uri.hostname + uri.pathname.replace("//", "");
    else if (uri.protocol === "http:" || uri.protocol === "https:")
      url = uriStr;
  } catch (e) {
    url = ipfsExplorer + uriStr;
  }
  // // console.log(`url: ${url}`);
  return url;
};

// se julien video etc
export const loadImgURL = async (
  ipfs,
  cid = 'Qmcm32sVsMYhURY3gqH7vSQ76492t5Rfxb3vsWCb35gVme',
  mime = 'image/png',
  limit = 524288,
) => {
  if (cid === '' || cid === null || cid === undefined) {
    return;
  }
  for await (const file of ipfs.get(cid)) {
    if (file.size > limit) {
      return;
    }
    const content = [];
    if (file.content) {
      for await (const chunk of file.content) {
        content.push(chunk);
      }
      return URL.createObjectURL(new Blob(content, { type: mime }));
    }
  }
};



export const uploadIpfsText = async (ipfs,text) => {
  // ipfs get connection
  
  // ipfs upload file
  const { cid } = await ipfs.add(text);
  const hash = cid + '';

  // pinata login
  const pinata = pinataSDK(PINATA_API_KEY, PINATA_API_SECRET);
  await pinata.testAuthentication();

  // pinata pin file
  await pinata.pinByHash(hash);

  return hash;
};

export const urlNft = window.location.pathname.split('/')[2];
export const urlTokenId = window.location.pathname.split('/')[3];

/*
struct MarketItem {
    0 uint itemId; <<<<<<<<<<<<<<
    1 address nftContract;
    2 uint256 tokenId; 
    3 address payable seller;
    4 address payable owner;
    5 uint256 price;
    6 bool sold;
  }
 */
export const [
  itemIdAt,
  nftContractAt,
  tokenIdAt,
  sellerAt,
  ownerAt,
  priceAt,
  soldAt,
] = [0, 1, 2, 3, 4, 5, 6];

export const zeroAddr = '0x0000000000000000000000000000000000000000';
export const maxUint256 =
  '115792089237316195423570985008687907853269984665640564039457584007913129639935';

export const displayAddr = (addr, user) => {
  let res = "";
  switch (toChecksumAddress(addr)) {
    case toChecksumAddress(user):
      res = "You";
      break;
    case toChecksumAddress(nftStakingAddress):
      res = "Staking Contract";
      break;
    case toChecksumAddress(bidingAddress):
      res = "Biding Contract";
      break;
    default:
      res = addr;
  }
  return res;
};