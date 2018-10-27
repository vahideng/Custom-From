import React, { Component } from 'react';
import Input from '../Form/Input/Input';
import classes from './Form.module.css';
export default class Form extends Component {
  state = {
    orderForm: {
      name: {
        elementType: 'input',
        config: {
          placeholder: 'Your Name',
          type: 'text'
        },
        validation: {
          required: true
        },
        valid: false,
        value: ''
      },

      address: {
        elementType: 'textarea',
        config: {
          placeholder: 'Your address',
          type: 'text'
        },
        validation: {
          required: true
        },
        valid: false,
        value: ''
      },
      email: {
        elementType: 'input',
        config: {
          placeholder: 'Email',
          type: 'email'
        },
        validation: {
          required: true,
          minLength: 6
        },
        valid: false,
        value: ''
      },
      delivery: {
        elementType: 'select',
        config: {
          options: [
            { value: 'fastest', displayValue: 'Fastest' },
            { value: 'chepest', displayValue: 'Cheapest' }
          ],
          type: 'text'
        },
        value: ''
      }
    }
  };

  checkValidity(value, rules) {
    let isvalid = true;
    if (rules.required) {
      isvalid = value.trim() !== '' && isvalid;
    }
    if (rules.minLength) {
      isvalid = value.length >= rules.minLength && isvalid;
    }
    return isvalid;
  }
  changeHandler = (event, itemId) => {
    const orderForm = { ...this.state.orderForm };
    const updatedFormElements = { ...orderForm[itemId] };
    updatedFormElements.value = event.target.value;
    updatedFormElements.valid = this.checkValidity(
      updatedFormElements.value,
      updatedFormElements.validation
    );
    console.log(updatedFormElements);
    
    orderForm[itemId] = updatedFormElements;
    this.setState({ orderForm });
  };

  submitHandler = event => {
    event.preventDefault();
    // let orderForm = {};
    // for (let key in this.state.orderForm) {
    //   orderForm[key] = this.state.orderForm[key].value; //storong data into new object jss old
    //   console.log(orderForm);
    // }
    let orderForm = {}; //storong data into new object ES6 jss
    Object.keys(this.state.orderForm).map(item => {
      orderForm[item] = this.state.orderForm[item].value;

      console.log(orderForm);
    });
  };

  render() {
    let form = [];
    for (let key in this.state.orderForm) {
      form.push({
        id: key,
        config: this.state.orderForm[key]
      });
    }
    return (
      <form onSubmit={this.submitHandler} className={classes.Form}>
        {form.map(item => {
          return (
            <div key={item.id} className="form-group">
              <Input
                value={item.config.value}
                elementtype={item.config.elementType}
                lable={item.id}
                config={item.config.config}
                changed={event => this.changeHandler(event, item.id)}
              />
            </div>
          );
        })}
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    );
  }
}
