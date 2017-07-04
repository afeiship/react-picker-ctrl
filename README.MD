# react-picker-ctrl
> React picker columns controller.


## properties:
```javascript

  static propTypes = {
    className:PropTypes.string,
    toolbar: PropTypes.object
  };

  static defaultProps = {
    toolbar: {
      items: ITEMS_OK_CANCEL,
      onClick:noop
    }
  };
  
```

## usage:
```jsx

// install: npm install afeiship/react-picker-ctrl --save
// import : import ReactPickerCtrl from 'react-picker-ctrl'

class App extends React.Component{
  state = {
    items:[
      [1990,1991,1992,1993,1994,1995,1996],
      [1,2,3,4,5,6,7,8,9,10,11,12],
      [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20],
    ],
    value: [ 1990,3,18 ]
  };

  constructor(props){
    super(props);
    window.demo = this;
    window.refs = this.refs;
    window.rc = this.refs.rc;
  }


  componentWillMount() {
    ReactPickerCtrl.createInstance();
  }


  _click1 = e =>{
    ReactPickerCtrl.show({
      toolbar: null,
      placeholder:'请选择日期',
      items: this.state.items,
      value: this.state.value,
      onChange: (e)=>{
        console.log(e);
        this.setState({value: e.target.value})
      }
    });
  };

  _click2 = e => {
    ReactPickerCtrl.hide();
  };

  render(){
    return (
      <div className="hello-react-picker-ctrl">
        <button onClick={this._click1}>Show Ctrl</button>
        <button onClick={this._click2}>Hide Ctrl</button>
      </div>
    );
  }
}

```



## resource:
+ http://www.cnblogs.com/Kummy/p/4966937.html
+ https://github.com/steven5538/vue-button
+ https://yarnpkg.com/en/docs/install

