import './dev.scss';
import ReactPickerCtrl from './main';
import NxRange from 'next-range';

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
    value1: [1990,2,12],
    value: [ 1990,3,18 ]
  };

  static getDays(inYear, inMonth) {
    const monthStart = new Date(inYear, inMonth - 1, 1);
    const monthEnd = new Date(inYear, inMonth, 1);
    return (monthEnd - monthStart) / (1000 * 60 * 60 * 24)
  }


  constructor(props){
    super(props);
    window.demo = this;
    window.refs = this.refs;
    window.rc = this.refs.rc;
  }


  componentWillMount() {
    window.ss = ReactPickerCtrl.createInstance();
  }


  _click1 = e =>{
    ReactPickerCtrl.show({
      placeholder:'请选择日期',
      items: this.state.items,
      value: this.state.value,
      onShown: (e)=>{
        console.log('shown!',e);
      },
      onHidden: (e)=>{
        console.log('hidden!',e);
      },
      onDropClick:(e)=>{
        console.log('drop click');
      },
      onChange: (e)=>{
        const {value} = e.target;
        const days = App.getDays( value[0], value[1] );
        const {items} = this.state;
        items[2] = NxRange.integer(1, days+1);
        console.log(items[2].join(),value);
        this.setState({ items: items.slice(0), value });
      }
    });
  };

  update(){
    ReactPickerCtrl.update({
      items: this.state.items1,
      value:this.state.value1
    });
  }

  _click2 = e => {
    ReactPickerCtrl.hide();
  };

  _click3 = e => {
    this.update();
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
