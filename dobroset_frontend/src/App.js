import React, { Component } from 'react';
import './App.css';
import { ListGroup, ListGroupItem } from 'reactstrap';
import { Container, Row, Col } from 'reactstrap';
import {Link} from 'react-router-dom';
import { Web3Provider } from 'react-web3';



class App extends Component {
  componentDidMount(context){
    // const web3Context = context.web3;
    // console.log(web3Context);
    // var abi = [...]
    // var bytecode = '0x...'
    // var c = web3.eth.contract(abi)
    // var h = c.new({data:bytecode})
    // var t = web3.eth.getTra..
    // var i = c.at(t.contractAddress)
;    //  var waiter = (callback) => {
    //    if (web3.eth.accounts.length > 0) callback()
    //    else setTimeout(() => waiter(callback), 1000)
    //  }
  }
  render() {
    return (
      <div className="App">
        <Web3Provider>
      <Container>
        <Row>
          <Col md="4">
     
<ListGroup>
       
        <ListGroupItem> <Link to={{pathname: '/createvolonteer'}}> Создать Волонтера </Link></ListGroupItem>
        <ListGroupItem> <Link to={{pathname: '/createpoluchatel'}}> Создать благо получателя </Link></ListGroupItem>
        <ListGroupItem> <Link to={{pathname: '/createrequest'}}> Создать доброе дело </Link></ListGroupItem>
        <ListGroupItem > <Link to={{pathname: '/requests'}}>Реестр добрых дел </Link></ListGroupItem>
      </ListGroup>
      </Col>
      <Col md="auto">
     
        {this.props.children}
       </Col>
       </Row>
        </Container>
        </Web3Provider>
      </div>
    );
  }
}

export default App;
