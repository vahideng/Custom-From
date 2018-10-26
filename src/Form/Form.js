import React, { Component } from 'react';

export default class Form extends Component {
  state = {
    orderForm: {
      name: {
        elementType: 'input',
        config: {
          placeholder: 'Your Name',
          type: 'text'
        },
        value: ''
      },

      address: {
        elementType: 'textarea',
        config: {
          placeholder: 'Your address',
          type: 'text'
        },
        value: ''
      },
      email: {
        elementType: 'input',
        config: {
          placeholder: 'Your address',
          type: 'email'
        },
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

  render() {
    return (
      <div>
        <form>
          <input type="text" placeholder="yourname" />
        </form>
      </div>
    );
  }
}
