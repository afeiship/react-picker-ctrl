import './dev.scss';
import ReactPickerCtrl from './main';

/*===example start===*/

// install: npm install afeiship/react-picker-ctrl --save
// import : import ReactPickerCtrl from 'react-picker-ctrl'

class App extends React.Component{
  state = {
    items:[
      [1990,1991,1992,1993,1994,1995,1996],
      [1,2,3,4,5,6,7,8,9,10,11,12],
      [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20],
    ],
    items1:[
      [1990],
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
        this.setState({
          value: e.target.value
        });
      }
    });
  };

  _click2 = e => {
    ReactPickerCtrl.hide();
  };

  _click3 = e => {
    this.setState({items: this.state.items1})
  };

  render(){
    return (
      <div className="hello-react-picker-ctrl">
        <button onClick={this._click1}>Show Ctrl</button>
        <button onClick={this._click2}>Hide Ctrl</button>
        <button onClick={this._click3}>Update items</button>
      </div>
    );
  }
}
/*===example end===*/

ReactDOM.render(
    <App />,
    document.getElementById('app')
);
