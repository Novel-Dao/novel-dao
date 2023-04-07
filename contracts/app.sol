// SPDX-License-Identifier: MIT
pragma solidity 0.8.19;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

contract ZhkmcToken is ERC721 {
    uint256 public NTFNumber;

    constructor() ERC721("ZhkmcToken", "Zhkmc") {}

    function safeMint(address to) internal virtual {

        _safeMint(to,NTFNumber);
        ++NTFNumber;
    }

}

contract app is ZhkmcToken{
    address public owner; // 仲裁者

    ZhkmcToken public NFT; // 小说NFT,即版权，作者每发布一个作品，自己就会拥有这个作品的NFT，即版权

    struct novel{
        string name; // 小说的名字
        address author; // 作者地址
        string[] chaptersUrl; // 小说的章节，用来存url
        address[] subscribeReader; // 读者，用于存放订阅了的读者
        bool isComplete; // 是否完结
        string[] comment; // 评论功能
        uint256 updateTime; // 最后更新时间
        uint256 price;
    }

    // 收藏情况
    struct collection{
        address authorAddress;
        uint256 id;
    }

    // 读者订阅情况
    struct _subscribeList{
        address authorAddress;
        uint256 id;
    }

    // 用于仲裁
    struct arbitration{
        uint256 allPeople; // 买书的总人数
        uint256 agreePeople; // 同意仲裁的人数
        bool success;
        uint256 getArbitrationNum; //只有一定数量的人才可以得到补偿
    }

    mapping(address => novel[]) public writer; //作家=>作品
    mapping(address => address[]) public fans; // 作家的粉丝团
    mapping(address => mapping(address => uint256)) public rewardCount; // 打赏到一定金额，可以成为粉丝
    mapping(address => bool) public onlyOnce_fan; // 用于辅助 beAFan 函数
    mapping(address => _subscribeList[]) public subscribeList; // 读者订阅书籍列表
    mapping(address => bool) public onlyOnce_comment; // 用于辅助 beAFan 函数
    mapping(address => collection[]) public collections; // 读者的书架
    mapping(address => mapping(uint256 => arbitration)) public arbitrate; // 用于仲裁
    mapping(address => uint256) public deposit; // 作者的押金

    constructor() public{
        NFT = new ZhkmcToken();
        owner = msg.sender;
    }

    modifier onlyOwner() {
        require(msg.sender == owner,'you are not the owner');
        _;
    }

    // 修改owner
    function setOwner(address _address) public onlyOwner(){
        owner = _address;
    }

    // 读者订阅作品
    // 因为比赛是公益性的，因此订阅不需要我们平台的token,只是发送原生的ETH
    function subscribe(address _address, uint256 _id) public{
        _subscribeList memory sl;
        sl.authorAddress = _address;
        sl.id = _id;

        writer[_address][_id].subscribeReader.push(msg.sender);
        payable(_address).transfer(writer[_address][_id].price);
        subscribeList[msg.sender].push(sl);

    }

    // 加入书架
    function addToBookshelf(address _address, uint256 _id) public{
        collection memory _collection;
        _collection.authorAddress = _address;
        _collection.id = _id;

        collections[msg.sender].push(_collection);
    }

    // 评论
    // 只能评论一次
    function comment(address _address, uint256 _id,string memory _comment) public{
        require(onlyOnce_comment[msg.sender] == false,'you have commented before');
        require(subscribeList[_address][_id].authorAddress == _address,'not subscribe');
        require(subscribeList[_address][_id].id == _id,'not subscribe');

        writer[_address][_id].comment.push(_comment);
        onlyOnce_comment[msg.sender] == true;
    }

    // 作者创建新小说,mint一个NFT
    // NFT即版权，可以转让
    function createANovel(string memory _name) public payable{
        novel memory _novel;
        _novel.name = _name;
        _novel.author = msg.sender;
        writer[msg.sender].push(_novel);

        Mint(msg.sender);

    }
    function Mint(address to) internal   {
        safeMint(to);
    }

    // 作者上传小说
    function submitNovels(uint256 _id,string memory _url, address _address) public payable{
        require(writer[msg.sender][_id].isComplete == false,"the novel has completed");
        writer[msg.sender][_id].chaptersUrl.push(_url);
        writer[msg.sender][_id].updateTime = block.timestamp;

        // 质押
        payable(address(this)).transfer(writer[_address][_id].price * 1000); // 质押书价格的1000倍
        deposit[msg.sender] += msg.value;
    }

    // 作者完结作品
    function completeANovel(uint256 _id) public{
        writer[msg.sender][_id].isComplete = true;
    }

    // 打赏作者
    function reward(address payable _address) public payable {
        _address.transfer(msg.value);
        rewardCount[msg.sender][_address] += msg.value;
    }

    // 成为粉丝
    function beAFan(address _address) public {
        if(rewardCount[msg.sender][_address] >= 50000){
            fans[_address].push(msg.sender);
            onlyOnce_fan[msg.sender] = true;
        }
    }

    // 读者查看自己的订阅情况
    function getSubscribeList() view public returns(_subscribeList[] memory){
        return subscribeList[msg.sender];
    }

    // 订阅了，30天不更新，则投票发起仲裁
    function InitiateArbitration(address _address, uint256 _id) public{
        // 超过30天
        require(block.timestamp >= writer[msg.sender][_id].updateTime + 30 days,'not more than 30 days');
        // 未完结
        require(writer[msg.sender][_id].isComplete == false,'the novel is not completed');        

        arbitrate[_address][_id].allPeople = writer[_address][_id].subscribeReader.length; //设置总裁总人数
        ++arbitrate[_address][_id].agreePeople; // 调用了这个方法，即代表同意发起仲裁
    }

    // DAO组织来进行仲裁，惩罚作者
    // 2/3 的作者同意仲裁，才可以成功
    // 只有DAO组织才可以调用这个方法，现在DAO是owner
    function executeArbitration(address _address,uint256 _id) public onlyOwner(){
        require(arbitrate[_address][_id].agreePeople > (arbitrate[_address][_id].allPeople / 3) *2,'arbitration false');
        deposit[_address] = 0; // 惩罚作者：作者质押的钱归零
        arbitrate[_address][_id].success = true; //仲裁成功
    }

    // 质押成功，可以得到一些补偿,但是只有前1000个人可以得到补偿
    // 因此这个补偿机制是不完善的，无法顾及所有人
    function getCompensate(address _address, uint256 _id, uint256 _bookNum,uint256 _bookID) public {
        require(arbitrate[_address][_id].success == true); // 仲裁成功
         // 只有读者可以取钱
        require(subscribeList[msg.sender][_bookNum].authorAddress == _address);
        require(subscribeList[msg.sender][_bookNum].id == _id); 
        // 只有一定数量的人才可以得到仲裁补偿，1000个人，因为作者是质押了书钱的1000倍
        require(arbitrate[_address][_id].getArbitrationNum < 1000); 
        

        payable(msg.sender).transfer(writer[_address][_bookID].price);
        ++arbitrate[_address][_id].getArbitrationNum;
    }


    // 作者取回质押的钱
    // 暂时不写
}
