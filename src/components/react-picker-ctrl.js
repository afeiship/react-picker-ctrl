import './style.scss';

import React,{PureComponent} from 'react';

import PropTypes from 'prop-types';
import classNames from 'classnames';
import noop from 'noop';
import objectAssign from 'object-assign';
import ReactPickerColumns from 'react-picker-columns';
import ReactPopup from 'react-popup';
import appendToDocument from 'react-append-to-document';
import {ITEMS_DONE,ITEMS_OK_CANCEL} from './const';

export default class extends PureComponent{
  /*===properties start===*/
  static propTypes = {
    className:PropTypes.string,
    toolbar: PropTypes.object,
    items: PropTypes.array,
    value: PropTypes.array,
  };

  static defaultProps = {
    items:[],
    value:[],
    toolbar: {
      items: ITEMS_OK_CANCEL,
      onClick:noop
    }
  };
  /*===properties end===*/


  static _instance = null;
  static newInstance(inProps){
    return appendToDocument(this, inProps,{
      className:'react-picker-container'
    });
  };

  static createInstance(inProps){
    this._instance = this._instance || this.newInstance(inProps);
    return this._instance;
  };

  static update(inProps){
    return this._instance.component.update(inProps);
  }

  static show(inProps){
    return this._instance.component.show(inProps);
  };

  static hide(){
    return this._instance.component.hide();
  };

  static destroy(){
    if(this._instance){
      this._instance.destroy();
      this._instance = null;
    }
  };

  constructor(props) {
    super(props);
    this.state = {
      items: props.items,
      value: props.value,
      onDropClick: noop,
      onChange: noop
    };
    this._initialValue = null;
  }

  update(inProps){
    let { value, ...props} = inProps;
    let newState = objectAssign({...this.props}, inProps );
    newState.value =  value.slice(0);
    this._initialValue = value.slice(0);
    return new Promise((resolve)=>{
      this.setState(newState,()=>{
        resolve(newState);
      });
    });
  }

  show(inProps){
    const { popup } = this.refs;
    return new Promise((resolve)=>{
      this.update(inProps).then((newState)=>{
        popup.show().then(()=>{
          resolve(newState);
        });
      })
    });
  }

  hide(){
    const { popup } = this.refs;
    return new Promise((resolve,reject)=>{
      popup.hide().then(resolve);
    });
  }

  get toolbarItems(){
    const {toolbar} = this.props;
    return toolbar.items.map((item,index)=>{
      return (
        <div key={index}
          data-role={item.role}
          onClick={this._onToolbarClick.bind(this,item)}
          href="javascript:;"
          className="react-picker-ctrl-toolbar-item">{item.text}</div>
      );
    })
  }

  reset(){
    this.setState({ value: this._initialValue },()=>{
      this.doChange(this._initialValue);
    });
  }

  componentWillReceiveProps(nextProps) {
    const { items,value,placeholder } = nextProps;
    if(items !== this.state.items || value!==this.state.value || placeholder!== this.state.placeholder){
      this.setState({items,value,placeholder});
    }
  }

  doChange(inValue){
    const value = inValue;
    const { onChange } = this.state;
    this.setState({ value },()=>{
      onChange({ target: { value } });
    });
  }

  _onToolbarClick = e => {
    switch(e.action){
      case 'ok':
        break;
      case 'cancel':
        this.reset();
        break;
    }
    this.hide();
  };

  _onDropClick = e =>{
    const {onDropClick} = this.state;
    this.reset();
    onDropClick(e);
  };

  _onChange = e => {
    const { value } = e.target;
    this.doChange(value);
  };

  render(){
    const {className,toolbar,items,...props} = this.props;
    const { value, onChange,placeholder} = this.state;
    return (
      <ReactPopup
        {...props}
        ref='popup'
        backdropStyle={{position:'fixed',opacity:'0.01'}}
        onDropClick={this._onDropClick}
        className={classNames('react-picker-ctrl',className)}>
        <header className="react-picker-ctrl-toolbar">
            {placeholder && <span className="react-picker-ctrl-toolbar-placeholder">{placeholder}</span>}
            <div className="react-picker-ctrl-toolbar-inner">{this.toolbarItems}</div>
          </header>
        <ReactPickerColumns
          items={this.state.items}
          onChange={this._onChange}
          value={value} />
      </ReactPopup>
    );
  }
}
