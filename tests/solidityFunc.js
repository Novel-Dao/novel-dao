const { ethers } = require('ethers');

// 连接钱包
async function connectWallet() {
  if (window.ethereum) {
    try {
      // 请求用户授权连接钱包
      await window.ethereum.request({ method: 'eth_requestAccounts' });
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      return signer;
    } catch (err) {
      throw new Error('用户拒绝连接钱包');
    }
  } else {
    throw new Error('未检测到钱包，请安装 MetaMask 插件');
  }
}

async function submitANovel(_name,_url,_author) {
  const signer = await connectWallet();
  const Address = '0x39038C2d61c22dD8f98070262e0b770f5d08C338'; 
  var ABI = '[{"inputs":[{"internalType":"address","name":"_writerAddress","type":"address"}],"name":"Reward","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"uint256","name":"","type":"uint256"}],"name":"awardRecord","outputs":[{"internalType":"uint256","name":"money","type":"uint256"},{"internalType":"uint256","name":"time","type":"uint256"},{"internalType":"address","name":"awardAddress","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"uint256","name":"","type":"uint256"}],"name":"badge","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_writerAddress","type":"address"}],"name":"beAFan","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"address","name":"","type":"address"}],"name":"fanDopositQuantity","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getSubscribe","outputs":[{"components":[{"internalType":"string","name":"url","type":"string"},{"internalType":"string","name":"name","type":"string"}],"internalType":"struct core.subscribelist[]","name":"","type":"tuple[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"string","name":"_name","type":"string"},{"internalType":"string","name":"_url","type":"string"},{"internalType":"address","name":"_author","type":"address"}],"name":"submitANovel","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address","name":"_writerAddress","type":"address"},{"internalType":"uint256","name":"_id","type":"uint256"}],"name":"subscribe","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"uint256","name":"","type":"uint256"}],"name":"subscribeList","outputs":[{"internalType":"string","name":"url","type":"string"},{"internalType":"string","name":"name","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"uint256","name":"","type":"uint256"}],"name":"writer","outputs":[{"internalType":"string","name":"url","type":"string"},{"internalType":"string","name":"name","type":"string"},{"internalType":"address","name":"author","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"writerReputation","outputs":[{"internalType":"uint256","name":"writerBooksNum","type":"uint256"},{"internalType":"uint256","name":"fans","type":"uint256"}],"stateMutability":"view","type":"function"}]'
  const Contract = new ethers.Contract(Address, ABI, signer);

  try {
    const tx = await Contract.submitANovel(_name,_url,_author);
    await tx.wait();
    console.log('成功');
  } catch (err) {
    console.error('失败', err);
  }
}

async function getSubscribe() {
    const signer = await connectWallet();
    const Address = '0x39038C2d61c22dD8f98070262e0b770f5d08C338'; 
    var ABI = '[{"inputs":[{"internalType":"address","name":"_writerAddress","type":"address"}],"name":"Reward","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"uint256","name":"","type":"uint256"}],"name":"awardRecord","outputs":[{"internalType":"uint256","name":"money","type":"uint256"},{"internalType":"uint256","name":"time","type":"uint256"},{"internalType":"address","name":"awardAddress","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"uint256","name":"","type":"uint256"}],"name":"badge","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_writerAddress","type":"address"}],"name":"beAFan","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"address","name":"","type":"address"}],"name":"fanDopositQuantity","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getSubscribe","outputs":[{"components":[{"internalType":"string","name":"url","type":"string"},{"internalType":"string","name":"name","type":"string"}],"internalType":"struct core.subscribelist[]","name":"","type":"tuple[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"string","name":"_name","type":"string"},{"internalType":"string","name":"_url","type":"string"},{"internalType":"address","name":"_author","type":"address"}],"name":"submitANovel","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address","name":"_writerAddress","type":"address"},{"internalType":"uint256","name":"_id","type":"uint256"}],"name":"subscribe","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"uint256","name":"","type":"uint256"}],"name":"subscribeList","outputs":[{"internalType":"string","name":"url","type":"string"},{"internalType":"string","name":"name","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"uint256","name":"","type":"uint256"}],"name":"writer","outputs":[{"internalType":"string","name":"url","type":"string"},{"internalType":"string","name":"name","type":"string"},{"internalType":"address","name":"author","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"writerReputation","outputs":[{"internalType":"uint256","name":"writerBooksNum","type":"uint256"},{"internalType":"uint256","name":"fans","type":"uint256"}],"stateMutability":"view","type":"function"}]'
    const Contract = new ethers.Contract(Address, ABI, signer);
  
    try {

      const tx = await Contract.getSubscribe();
      await tx.wait();
      console.log('成功');
    } catch (err) {
      console.error('失败', err);
    }
}

async function Reward(_writerAddress) {
    const signer = await connectWallet();
    const Address = '0x39038C2d61c22dD8f98070262e0b770f5d08C338'; 
    var ABI = '[{"inputs":[{"internalType":"address","name":"_writerAddress","type":"address"}],"name":"Reward","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"uint256","name":"","type":"uint256"}],"name":"awardRecord","outputs":[{"internalType":"uint256","name":"money","type":"uint256"},{"internalType":"uint256","name":"time","type":"uint256"},{"internalType":"address","name":"awardAddress","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"uint256","name":"","type":"uint256"}],"name":"badge","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_writerAddress","type":"address"}],"name":"beAFan","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"address","name":"","type":"address"}],"name":"fanDopositQuantity","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getSubscribe","outputs":[{"components":[{"internalType":"string","name":"url","type":"string"},{"internalType":"string","name":"name","type":"string"}],"internalType":"struct core.subscribelist[]","name":"","type":"tuple[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"string","name":"_name","type":"string"},{"internalType":"string","name":"_url","type":"string"},{"internalType":"address","name":"_author","type":"address"}],"name":"submitANovel","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address","name":"_writerAddress","type":"address"},{"internalType":"uint256","name":"_id","type":"uint256"}],"name":"subscribe","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"uint256","name":"","type":"uint256"}],"name":"subscribeList","outputs":[{"internalType":"string","name":"url","type":"string"},{"internalType":"string","name":"name","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"uint256","name":"","type":"uint256"}],"name":"writer","outputs":[{"internalType":"string","name":"url","type":"string"},{"internalType":"string","name":"name","type":"string"},{"internalType":"address","name":"author","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"writerReputation","outputs":[{"internalType":"uint256","name":"writerBooksNum","type":"uint256"},{"internalType":"uint256","name":"fans","type":"uint256"}],"stateMutability":"view","type":"function"}]'
    const Contract = new ethers.Contract(Address, ABI, signer);
  
    try {

      const tx = await Contract.Reward(_writerAddress);
      await tx.wait();
      console.log('成功');
    } catch (err) {
      console.error('失败', err);
    }
}

async function beAFan(_writerAddress) {
    const signer = await connectWallet();
    const Address = '0x39038C2d61c22dD8f98070262e0b770f5d08C338'; 
    var ABI = '[{"inputs":[{"internalType":"address","name":"_writerAddress","type":"address"}],"name":"Reward","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"uint256","name":"","type":"uint256"}],"name":"awardRecord","outputs":[{"internalType":"uint256","name":"money","type":"uint256"},{"internalType":"uint256","name":"time","type":"uint256"},{"internalType":"address","name":"awardAddress","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"uint256","name":"","type":"uint256"}],"name":"badge","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_writerAddress","type":"address"}],"name":"beAFan","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"address","name":"","type":"address"}],"name":"fanDopositQuantity","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getSubscribe","outputs":[{"components":[{"internalType":"string","name":"url","type":"string"},{"internalType":"string","name":"name","type":"string"}],"internalType":"struct core.subscribelist[]","name":"","type":"tuple[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"string","name":"_name","type":"string"},{"internalType":"string","name":"_url","type":"string"},{"internalType":"address","name":"_author","type":"address"}],"name":"submitANovel","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address","name":"_writerAddress","type":"address"},{"internalType":"uint256","name":"_id","type":"uint256"}],"name":"subscribe","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"uint256","name":"","type":"uint256"}],"name":"subscribeList","outputs":[{"internalType":"string","name":"url","type":"string"},{"internalType":"string","name":"name","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"uint256","name":"","type":"uint256"}],"name":"writer","outputs":[{"internalType":"string","name":"url","type":"string"},{"internalType":"string","name":"name","type":"string"},{"internalType":"address","name":"author","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"writerReputation","outputs":[{"internalType":"uint256","name":"writerBooksNum","type":"uint256"},{"internalType":"uint256","name":"fans","type":"uint256"}],"stateMutability":"view","type":"function"}]'
    const Contract = new ethers.Contract(Address, ABI, signer);
  
    try {
      const tx = await Contract.Reward(_writerAddress);
      await tx.wait();
      console.log('成功');
    } catch (err) {
      console.error('失败', err);
    }
}


