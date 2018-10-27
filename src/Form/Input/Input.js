import React from 'react';
import classes from './Input.module.css';


const input = props => {
  let input = '';
  let inputClassName= ["form-control"];
  if (props.invalid && props.touched){
    inputClassName.push(classes.Invalid)
  }
  switch (props.elementtype) {

    case 'input':
      input = (
        <div>
          <label className="text-capitalize"> {props.lable} </label>
          <input
            value={props.value}
            onChange={props.changed}
            className={inputClassName.join(' ')}
            {...props.config}
          />
        </div>
      );

      break;
    case 'textarea':
      input = (
        <div>
          <label className="text-capitalize"> {props.lable}</label>
          <textarea
            value={props.value}
            onChange={props.changed}
            className={inputClassName.join(' ')}
            {...props.config}
          />
        </div>
      );
      break;
    case 'select':
      input = (
        <select onChange={props.changed} value={props.value}>
          {props.config.options.map(option => (
            <option key={option.value} value={option.value}>
              {option.displayValue}
            </option>
          ))}
        </select>
      );
      break;
    default:
      input = <input {...props} />;
  }

  return <div>{input}</div>;
};

export default input;
