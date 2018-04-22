import React, { Component } from 'react';

import { Button, Form, FormGroup, Label,Input} from 'reactstrap';


class Createpoluchatel extends Component {
  render() {
    return (

<div >
<Form>
        <FormGroup>
          <Label for="createpoluchatel">Создать благополучателя</Label>
          <Input type="text" name="email" id="createpoluchatel" placeholder="Введите благополучателя" />
          <Button> Отправить</Button>
        </FormGroup>
        </Form>
      </div>
    );
  }
}

export default Createpoluchatel;