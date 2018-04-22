pragma solidity ^0.4.21;

contract DobroeDelo {
    address poluchatel;
    address philantrop;
    address volunteer;
    bytes request_desc;
    bytes offer_desc;
    bytes feedback_pol;
    bytes feedback_phi;
    bytes feedback_vol;
    enum StatusDela {REQUEST, OFFER, ACCEPT, DELIVER, FEEDBACK}
    StatusDela status;
    constructor(bytes desc) public {
        poluchatel = msg.sender;
        status = StatusDela.REQUEST;
        request_desc = desc;
    }
    function offer(bytes desc) public {
        require(status == StatusDela.REQUEST && volunteer == 0);
        volunteer = msg.sender;
        offer_desc = desc;
        status = StatusDela.OFFER;
    }
    function accept() public {
        status = StatusDela.ACCEPT;
    }
    function deliver() public {
        status = StatusDela.DELIVER;
    }
    function feedback(bytes desc) public {
        if (poluchatel == msg.sender)
            feedback_pol = desc;
        if (philantrop == msg.sender)
            feedback_phi = desc;
        if (volunteer == msg.sender)
            feedback_vol = desc;
        status = StatusDela.FEEDBACK;
    }
}