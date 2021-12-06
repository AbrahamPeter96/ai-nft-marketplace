import axios from 'axios';
import pkg from 'web3-utils';
import {
  getContractArt,
  getContractBiding,
  getContractMarketplace,
  getContractNft,
  getContractNftStaking,
  marketplaceAddress,
  nftStakingAddress
} from './smart-contracts.js';
import { maxUint256, parseIpfs, priceAt, uploadIpfsText, zeroAddr, _doThis } from './utils.js';
const { isAddress, toWei } = pkg;

// >>>>>>>>>>>>>>>>>>>>>>>>>>>> WRITE CONTRACT
export const sellNft = async (setLoading, nftContract, tokenId, price) => {
  if (!isAddress(nftContract)) {
    alert('Invalid NFT Address');
    return;
  }
  if (price === null || price === undefined) {
    return;
  }
  price = toWei(price);

  setLoading(true);
  _doThis(async (account, web3) => {
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
        }
      });
    } catch (e) {
      setLoading(false);
      alert(e.message);
    }
  });
};

export const approveMarketplaceContract = async (setLoading, nftContract) => {
  if (!isAddress(nftContract)) {
    alert('Invalid NFT Address');
    return;
  }
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
// its itemId not tokenId
export const buyNft = async (setLoading, nftContract, itemId) => {
  if (!isAddress(nftContract)) {
    alert('Invalid NFT Address');
    return;
  }
  if (itemId === null || itemId === undefined) {
    return;
  }

  const price = (await getNftItemsForSale())[itemId][priceAt];

  setLoading(true);
  _doThis(async (account, web3) => {
    const nftmarketPlace = getContractMarketplace({ web3 });

    const createMarketItem = nftmarketPlace.methods.createMarketSale(
      nftContract,
      itemId,
    );

    let options = {
      from: account,
      gas: '0',
      value: price,
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

export const createNftAuction = async (
  setLoading,
  nftContract,
  tokenId,
  minPrice,
) => {
  if (!isAddress(nftContract)) {
    alert('Invalid NFT Address');
    return;
  }

  if (minPrice === null || minPrice === undefined) {
    return;
  }

  minPrice = toWei(minPrice);

  setLoading(true);
  _doThis(async (account, web3) => {
    const nftBiding = getContractBiding({ web3 });

    const method = nftBiding.methods.createDefaultNftAuction(
      nftContract,
      tokenId,
      zeroAddr,
      minPrice,
      0, // buyNowPrice_, https://github.com/muneebzubairkhan/nft-auction
      [account], // feeRecipients_
      [10000], // _feePercentages 100.00%
    );
    let options = {
      from: account,
      gas: '0',
      value: 0,
    };
    try {
      const estimateGas = Math.trunc(await method.estimateGas(options));
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
      await method.send(options).on('confirmation', i => {
        //here
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

export const takeHighestBid = async (setLoading, nftContract, tokenId) => {
  if (!isAddress(nftContract)) {
    alert('Invalid NFT Address');
    return;
  }

  setLoading(true);
  _doThis(async (account, web3) => {
    const nftBiding = getContractBiding({ web3 });

    const method = nftBiding.methods.takeHighestBid(nftContract, tokenId);
    let options = {
      from: account,
      gas: '0',
      value: 0,
    };
    try {
      const estimateGas = Math.trunc(await method.estimateGas(options));
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
      await method.send(options).on('confirmation', i => {
        //here
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

export const makeBid = async (setLoading, nftContract, tokenId, bidPrice) => {
  if (!isAddress(nftContract)) {
    alert('Invalid NFT Address');
    return;
  }

  if (bidPrice === null || bidPrice === undefined) {
    return;
  }
  bidPrice = toWei(bidPrice);

  setLoading(true);
  _doThis(async (account, web3) => {
    const nftBiding = getContractBiding({ web3 });

    const method = nftBiding.methods.makeBid(
      nftContract,
      tokenId,
      '0x0000000000000000000000000000000000000000',
      0,
    );
    let options = {
      from: account,
      gas: '0',
      value: bidPrice,
    };
    try {
      const estimateGas = Math.trunc(await method.estimateGas(options));
      options = {
        ...options,
        gas: '' + estimateGas,
      };
    } catch (e) {
      console.log(`e.message: ${e.message}`);
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
      await method.send(options).on('confirmation', i => {
        //here
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

export const approveStakingContract = async (setLoading, nftContract) => {
  if (!isAddress(nftContract)) {
    alert('Invalid NFT Address');
    return;
  }
  setLoading(true);
  _doThis(async (account, web3) => {
    const nft = getContractNft({ web3, address: nftContract });
    const method = nft.methods.setApprovalForAll(nftStakingAddress, true);
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

export const stakeNft = async (setLoading, nftContract, tokenId) => {
  if (!isAddress(nftContract)) {
    alert('Invalid NFT Address');
    return;
  }

  setLoading(true);
  _doThis(async (account, web3) => {
    const nftBiding = getContractNftStaking({ web3 });
    const pid = await nftBiding.methods.getPidOfToken(nftContract).call();
    console.log(`pid: ${pid}`);
    if (pid === maxUint256) {
      alert('Staking not available for this Nft collection');
      return;
    }
    const method = nftBiding.methods.deposit(pid, tokenId);
    let options = {
      from: account,
      gas: '0',
      value: 0,
    };
    try {
      const estimateGas = Math.trunc(await method.estimateGas(options));
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
      await method.send(options).on('confirmation', i => {
        //here
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

export const unstakeNft = async (setLoading, nftContract, tokenId) => {
  if (!isAddress(nftContract)) {
    alert('Invalid NFT Address');
    return;
  }

  setLoading(true);
  _doThis(async (account, web3) => {
    const nftBiding = getContractNftStaking({ web3 });
    const pid = await nftBiding.methods.getPidOfToken(nftContract).call();
    console.log(`pid: ${pid}`);
    if (pid === maxUint256) {
      alert('Staking not available for this Nft collection');
      return;
    }
    const method = nftBiding.methods.withdraw(pid, tokenId);
    let options = {
      from: account,
      gas: '0',
      value: 0,
    };
    try {
      const estimateGas = Math.trunc(await method.estimateGas(options));
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
      await method.send(options).on('confirmation', i => {
        //here
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
export const harvestNft = async (setLoading, nftContract) => {
  if (!isAddress(nftContract)) {
    alert('Invalid NFT Address');
    return;
  }

  setLoading(true);
  _doThis(async (account, web3) => {
    const nftBiding = getContractNftStaking({ web3 });
    const pid = await nftBiding.methods.getPidOfToken(nftContract).call();
    if (pid === maxUint256) {
      alert('Staking not available for this Nft collection');
      return;
    }
    const method = nftBiding.methods.harvest(pid);
    let options = {
      from: account,
      gas: '0',
      value: 0,
    };
    try {
      const estimateGas = Math.trunc(await method.estimateGas(options));
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
      await method.send(options).on('confirmation', i => {
        //here
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
export const uploadNft = async (setLoading, image) => {
  
  console.log(`: ${11111111111111}`);
  setLoading(true);
  _doThis(async (account, web3) => {
    const contract = getContractArt({ web3 });

    const hash = await uploadIpfsText(image);
    console.log(`hash: ${hash}`);

    const method = contract.methods.mint(`ipfs://${hash}/`);
    let options = {
      from: account,
      gas: '0',
      value: 0,
    };
    try {
      const estimateGas = Math.trunc(await method.estimateGas(options));
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
      await method.send(options).on('confirmation', i => {
        //here
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

 
// >>>>>>>>>>>>>>>>>>>>>>>>>>> READ CONTRACT
export const getNftImageUrl = async (nftContract, tokenId) => {
  if (!isAddress(nftContract)) {
    alert('Invalid NFT Address');
    return;
  }
  const nft = getContractNft({ address: nftContract });
  const tokenURI = await nft.methods.tokenURI(tokenId).call();
  const url = parseIpfs(tokenURI);
  const metadata = (await axios.get(url)).data;
  return parseIpfs(metadata.image);
};

export const getNftCollectionName = async nftContract => {
  if (!isAddress(nftContract)) {
    alert('Invalid NFT Address');
    return;
  }
  const nft = getContractNft({ address: nftContract });
  const name = await nft.methods.name().call();
  return name;
};

export const getIsApprovedForAll = async nftContract => {
  if (!isAddress(nftContract)) {
    alert('Invalid NFT Address');
    return;
  }
  return _doThis(
    async account =>
      await getContractNft({ address: nftContract })
        .methods.isApprovedForAll(account, marketplaceAddress)
        .call(),
  );
};

/*
struct MarketItem {
    uint itemId;
    address nftContract;
    uint256 tokenId;
    address payable seller;
    address payable owner;
    uint256 price;
    bool sold;
  }
 */

// screen: items for sale
export const getNftItemsForSale = async () => {
  const nft = getContractMarketplace({});
  const items = await nft.methods.fetchMarketItems().call();
  return items;
};
