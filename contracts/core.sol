// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract core{

    // 作者的作品
    struct writerComposition{
        string url;
        string name;
        address author;
    }

    // 作者的声望值
    struct reputation{
        uint256 writerBooksNum; //一共发布了多少本书
        uint256 fans; // 拥有的粉丝数量
        address[] fansAddress; // 粉丝的地址
    }

    // 打赏记录
    struct awardInfo{
        uint256 money; // 打赏金额
        uint256 time; // 打赏时间
        address awardAddress; // 打赏自
    }

    struct subscribelist{
        string url;
        string name;
    }

    mapping(address => mapping(uint256 => writerComposition)) public writer; // 作者发布的书籍
    mapping(address => mapping(address => uint256)) public fanDopositQuantity; // 用来统计成为粉丝的打赏额度
    mapping(address => awardInfo[]) public awardRecord; // 打赏记录
    mapping(address => reputation) public writerReputation; // 作者的声望
    mapping(address => address[]) public badge; // 用来记录读者是谁的粉丝情况
    mapping(address => subscribelist[]) public subscribeList; // 用于记录读者的订阅书籍

    // 作者端
    // 只要上传一部作品，就是作者
    // 本次黑客松任何人都可以成为读者，公益性。后期的话采用质押的方式
    function submitANovel(string memory _name,string memory _url,address _author) public payable{
        uint256 num = writerReputation[msg.sender].writerBooksNum;
        writer[msg.sender][num].name = _name;
        writer[msg.sender][num].url = _url;
        writer[msg.sender][num].author = _author;

        ++writerReputation[msg.sender].writerBooksNum;
    }

    // 读者订阅，目前免费
    function subscribe(address _writerAddress, uint256 _id) public{
        subscribelist memory sl;
        sl.name = writer[_writerAddress][_id].name;
        sl.url = writer[_writerAddress][_id].url;
        subscribeList[msg.sender].push(sl);
    }

    // 读者查看自己订阅的情况
    function getSubscribe() view public returns(subscribelist[] memory){
        return subscribeList[msg.sender];
    }

    // 打赏作者
    function Reward(address _writerAddress) public payable{
        fanDopositQuantity[msg.sender][_writerAddress] += msg.value;

        awardInfo memory awardInfo_;
        awardInfo_.money = msg.value;
        awardInfo_.time = block.timestamp;
        awardInfo_.awardAddress = msg.sender;
        awardRecord[_writerAddress].push(awardInfo_);

        payable(_writerAddress).transfer(msg.value);
    }

    // 成为粉丝: 打赏到达一定额度才可以
    function beAFan(address _writerAddress) public{
        uint256 count = fanDopositQuantity[msg.sender][_writerAddress];
        if(count >= 500000){
            ++writerReputation[_writerAddress].fans;
            badge[msg.sender].push(_writerAddress);
        }
    }

}
