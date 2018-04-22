import React, { Component } from 'react';

import { Button, Form, FormGroup, Label,Input} from 'reactstrap';


class Createvolonteer extends Component {
  render() {
    return (

<div >
<Form>
        <FormGroup>
          <Label for="createvolonteer">Создать Волонтера</Label>
          <Input type="text" name="email" id="createvolonteer" placeholder="Введите волонтера" />
          <Button> Отправить</Button>
        </FormGroup>
        </Form>
      </div>
    );
  }
}

export default Createvolonteer;