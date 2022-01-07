import axios from 'axios';
import pkg from 'web3-utils';
import {
  artAddress,
  bidingAddress,
  getContractArt,
  getContractBiding,
  getContractNft,
  getContractNftStaking,
  nftStakingAddress,
} from './smart-contracts.js';
import {
  maxUint256,
  parseIpfs,
  uploadIpfsText,
  zeroAddr,
  _doThis,
} from './utils.js';
import demo from "../Images/1.png";
// import one from "../../Images/1.png";

const { isAddress, toWei } = pkg;

// >>>>>>>>>>>>>>>>>>>>>>>>>>>> WRITE CONTRACT
export const approveBidingContract = async (setLoading, nftContract) => {
  if (!isAddress(nftContract)) {
    // alert('Invalid NFT Address');
    return;
  }
  setLoading(true);
  _doThis(async (account, web3) => {
    const nft = getContractNft({ web3, address: nftContract });
    const method = nft.methods.setApprovalForAll(bidingAddress, true);
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

export const approveStakingContract = async (setLoading, nftContract) => {
  if (!isAddress(nftContract)) {
    // alert('Invalid NFT Address');
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

export const listToSell = async (
  setLoading,
  nftContract,
  tokenId,
  price,
) => {
  if (!isAddress(nftContract)) {
    // alert('Invalid NFT Address');
    return;
  }
  if (price === null || price === undefined) {
    return;
  }

  price = toWei(price);

  setLoading(true);
  _doThis(async (account, web3) => {
    const nftBiding = getContractBiding({ web3 });

    const method = nftBiding.methods.createSale(
      nftContract,
      tokenId,
      zeroAddr,
      price, // buyNowPrice_, https://github.com/muneebzubairkhan/nft-auction
      zeroAddr,
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
      let msg;
      try {
        msg = JSON.parse(e.message.split('\n').splice(1).join('\n')).message;
      } catch (eii) {
      }

      if (!msg) {
        msg = 'Insufficient funds or some data error, ' + e.message;
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
    // alert('Invalid NFT Address');
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
    // alert('Invalid NFT Address');
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

export const buyNft = async (setLoading, nftContract, tokenId) => {
  if (!isAddress(nftContract)) {
    // alert('Invalid NFT Address');
    return;
  }

  setLoading(true);
  _doThis(async (account, web3) => {
    const nftBiding = getContractBiding({ web3 });

    const method = nftBiding.methods.makeBid(
      nftContract,
      tokenId,
      '0x0000000000000000000000000000000000000000',
      0,
    );
    const buyNowPrice = (await getAuction(nftContract, tokenId)).buyNowPrice;

    let options = {
      from: account,
      gas: '0',
      value: buyNowPrice,
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


export const stakeNft = async (setLoading, nftContract, tokenId) => {
  if (!isAddress(nftContract)) {
    // alert('Invalid NFT Address');
    return;
  }

  setLoading(true);
  _doThis(async (account, web3) => {
    const contract = getContractNftStaking({ web3 });
    const pid = await contract.methods.getPidOfToken(nftContract).call();
    console.log(`pid: ${pid}`);
    if (pid === maxUint256) {
      alert('Staking not available for this Nft collection');
      return;
    }
    const method = contract.methods.deposit(pid, tokenId);
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
    // alert('Invalid NFT Address');
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
    // alert('Invalid NFT Address');
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

export const uploadNft = async (setLoading, image, ipfs, name, link) => {
  console.log('link ', link);
  console.log('name ', name);
  setLoading(true);

  const imgHash = await uploadIpfsText(ipfs, image);
  console.log(`imgHash: ${imgHash}`);
  const metadata = JSON.stringify({ image: `ipfs://${imgHash}/`, name, external_link: link }, null, 4);
  console.log(`metadata: ${metadata}`);
  const metadataHash = await uploadIpfsText(ipfs, metadata);
  console.log(`metadataHash: ${metadataHash}`);

  console.log(`hash: ${imgHash}`);
  _doThis(async (account, web3) => {
    const contract = getContractArt({ web3 });

    const method = contract.methods.mint(metadataHash);
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
      await method.send(options).on("confirmation", (i, a) => {
        if (i === 0) {
          setLoading(false);
          if (
            window.confirm(`Welcome to the Azimuth! Go check out your Nfts`)
          ) {
            window.location.href = `${window.location.origin}/detail/${artAddress}/${a.events.Transfer.returnValues.tokenId}`;
          }
        }
      });
    } catch (e) {
      setLoading(false);
      alert(e.message);
    }
  });
};

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/**/
// >>>>>>>>>>>>>>>>>>>>>>>>>>> READ CONTRACT
export const getNftImageUrl = async (nftContract, tokenId) => {
  if (!isAddress(nftContract)) {
    //alert('Invalid NFT Address');
    return;
  }
  const nft = getContractNft({ address: nftContract });
  const tokenURI = await nft.methods.tokenURI(tokenId).call();
  const url = parseIpfs(tokenURI);
  console.log('url metadata', url);
  const metadata = (await axios.get(url)).data;
  console.log('metadata ', metadata);
  const urlImage = parseIpfs(metadata.image);
  return urlImage;
};


export const getNftImage = async (nftContract, tokenId) => {
  const url = await getNftImageUrl(nftContract, tokenId);
  console.log('url image', url);
  try {
    const imgObj = await fetch(url);
    console.log('imgObj ', imgObj);
    const img = URL.createObjectURL(await imgObj.blob());
    return img;
  } catch (error) {
    console.log('error ', error.message, url);
    return demo;
  }
};

export const getNftCollectionName = async nftContract => {
  if (!isAddress(nftContract)) {
    //alert('Invalid NFT Address');
    return;
  }
  const nft = getContractNft({ address: nftContract });
  const name = await nft.methods.name().call();
  return name;
};

export const getIsApprovedForAll = async nftContract => {
  if (!isAddress(nftContract)) {
    // alert('Invalid NFT Address');
    return;
  }
  return _doThis(
    async account =>
      await getContractNft({ address: nftContract })
        .methods.isApprovedForAll(account, bidingAddress)
        .call(),
  );
};

export const getIsApprovedForAllStaking = async nftContract => {
  if (!isAddress(nftContract)) {
    // alert('Invalid NFT Address');
    return;
  }
  return _doThis(
    async account =>
      await getContractNft({ address: nftContract })
        .methods.isApprovedForAll(account, nftStakingAddress)
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
/*
items

0: "1"
1: "0x00cfa114386922f33b666FCC31655660B27Da652"
2: "1"
3: "0xc18E78C0F67A09ee43007579018b2Db091116B4C"
4: "0x0000000000000000000000000000000000000000"
5: "100000000000000000"
6: false
itemId: "1"
nftContract: "0x00cfa114386922f33b666FCC31655660B27Da652"
owner: "0x0000000000000000000000000000000000000000"
price: "100000000000000000"
seller: "0xc18E78C0F67A09ee43007579018b2Db091116B4C"
sold: false
tokenId: "1"  
*/

export const getNftOwner = async (nftContract, tokenId) => {
  const nft = getContractNft({ address: nftContract });
  const res = await nft.methods.ownerOf(tokenId).call();
  // console.log(`res: ${res}`);
  return res;
};

// get reward 
export const getNftStakeReward = async (nftContract) => {
  const contract = getContractNftStaking({});
  const pid = await contract.methods.getPidOfToken(nftContract).call();

  if (pid === maxUint256) {
    // alert('Staking not available for this Nft collection');
    return null;
  }
  
  const reward = await _doThis(
    async account =>
      await contract.methods.pendingRewardToken(pid, account).call(),
  );
  // console.log({reward});
  return reward;
}


export const getUserAddr = async () => {
  return await _doThis(async (account) => account);
};

/* bidIncreasePercentage uint32, auctionBidPeriod uint32, auctionEnd uint64, minPrice uint128, buyNowPrice uint128, nftHighestBid uint128, nftHighestBidder address, nftSeller address, whitelistedBuyer address, nftRecipient address, ERC20Token address */
export const getAuction = async (nftContract, tokenId) => {
  const contract = getContractBiding({ });
  const res = await contract.methods.nftContractAuctions(nftContract, tokenId).call();
  console.log('res ', res);
  return res;
}

// extra
export const createNftAuction = async (
  setLoading,
  nftContract,
  tokenId,
  minPrice,
) => {
  if (!isAddress(nftContract)) {
    // alert('Invalid NFT Address');
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