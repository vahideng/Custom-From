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
  changeHandler = (event, itemId) => {
    const orderForm = { ...this.state.orderForm };
    const updatedFormElements = { ...orderForm[itemId] };
    updatedFormElements.value = event.target.value;
    orderForm[itemId] = updatedFormElements;
    this.setState({ orderForm });
  };

  checkValidity(value, rules) {
    let isvalid = true;
    if (rules.required) {
      isvalid = value.trim() !== '' && isvalid;
    }
    if (rules.required) {
      isvalid = value.length >= rules.minLength && isvalid;
    }
    return isvalid;
  }

  submitHandler =(event)=> {
    event.preventDefault();
    let orderForm = {};
    
      for (let key in this.state.orderForm) {
      orderForm[key]= this.state.orderForm[key].value;
      console.log(orderForm);
      
    }
    

    
  }

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
