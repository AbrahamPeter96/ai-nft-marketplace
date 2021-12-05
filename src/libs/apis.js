import {
  getContractMarketplace,
  getContractNft,
  marketplaceAddress,
} from './smart-contracts.js';
import { parseIpfs, _doThis } from './utils.js';
import pkg from 'web3-utils';
import axios from 'axios';
const { isAddress, toWei } = pkg;

export const sellNft = async (setLoading, nftContract, tokenId, price) => {
  if (price === null || price === undefined) {
    return;
  }
  price = toWei(price);

  console.log(`price: ${price}`);
  console.log(`tokenId: ${tokenId}`);
  console.log(`nftContract: ${nftContract}`);
  setLoading(true);
  _doThis(async (account, web3) => {
    if (!isAddress(nftContract)) {
      alert('Invalid NFT Address');
      return;
    }

    const nftmarketPlace = getContractMarketplace({ web3 });
    const listingPrice = await nftmarketPlace.methods.getListingPrice().call();

    const createMarketItem = nftmarketPlace.methods.createMarketItem(
      nftContract,
      tokenId,
      price,
    );
    console.log(`listingPrice: ${listingPrice}`);
    let options = {
      from: account,
      gas: '0',
      value: listingPrice,
    };
    try {
      const estimateGas = Math.trunc(
        await createMarketItem.estimateGas(options),
      );
      options = {
        ...options,
        gas: '' + estimateGas,
      };
    } catch (e) {
      let msg = JSON.parse(e.message.split('\n').splice(1).join('\n')).message;

      if (!msg) {
        msg = 'Insufficient funds or some data error';
      } else {
        msg = msg.split('reverted:')[1];
      }
      alert(msg);
      return;
    }

    try {
      await createMarketItem.send(options).on('confirmation', i => {
        //here
        if (i === 0) {
          setLoading(false);
          alert('done');
          // if (
          //   window.confirm(
          //     `Welcome to the Cheeky Lion Club King! Go check out your Lions on opensea.io`,
          //   )
          // ) {
          //   window.location.href = `https://opensea.io/${account}`;
          // }
        }
      });
    } catch (e) {
      setLoading(false);
      alert(e.message);
    }
  });
};

export const getNftImageUrl = async (nftContract, tokenId) => {
  const nft = getContractNft({ address: nftContract });
  const tokenURI = await nft.methods.tokenURI(tokenId).call();
  const url = parseIpfs(tokenURI);
  const metadata = (await axios.get(url)).data;
  return parseIpfs(metadata.image);
};

export const getNftCollectionName = async (
  nftContract = '0x18f87c05325AE47bfe75c039198b3Dc1CB2ED23D',
) => {
  const nft = getContractNft({ address: nftContract });
  const name = await nft.methods.name().call();
  return name;
};

export const approveMarketplaceContract = async (setLoading, nftContract) => {
  console.log(`nftContract: ${nftContract}`);
  console.log(`marketplaceAddress: ${marketplaceAddress}`);
  setLoading(true);
  _doThis(async (account, web3) => {
    const nft = getContractNft({ web3, address: nftContract });
    const method = nft.methods.setApprovalForAll(marketplaceAddress, true);
    let options = {
      from: account,
      gas: '0',
    };
    try {
      const estimateGas = Math.trunc(await method.estimateGas(options));
      options = {
        ...options,
        gas: '' + estimateGas,
      };
    } catch (e) {
      let msg = e.message.split('\n')[0].split('reverted:')[1];

      if (!msg) msg = 'Insufficient funds or some data error';

      alert(msg);
      return;
    }

    try {
      await method.send(options).on('confirmation', i => {
        if (i === 0) {
          setLoading(false);
          alert('done');
        }
      });
    } catch (e) {
      setLoading(false);
      alert(e.message);
    }
  });
};

// console.log(
//   await getNftCollectionName('0x16951a59f9d62a2ff70fbe7fccfc0dfb1d61acc4'),
// );
