import React, {Component} from 'react';
import Navbar from './components/layout/navbar'
import Footer from './components/layout/footer'
import SortingPlayground from './components/sortingPlayground'
import './App.css';

class App extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     //default item count = 6
  //     listCount : 6,
  //     sortingList: [],
  //     sorted : false,
  //     isDisabled: false
  //   };
  // }

  state = {
      //default item count = 6
      listCount : 6,
      sortingList: [],
      sorted : false,
      isDisabled: false
  }

  componentDidMount() {
    console.log("componentDidMount()")
    for(var i = 0; i < this.state.listCount; i++){
      let randNum = Math.floor((Math.random() * 100) + 1);
      let arrItem = [randNum, '#'+Math.random().toString(16).substr(-6)];
      this.setState(prevState => ({
        sortingList: [...prevState.sortingList, arrItem]
      }));
      }
  }

  generateList = () => {
    console.log('generateList()');
    this.setState({ sortingList : [] });
    for(var i = 0; i < this.state.listCount; i++){
      let randNum = Math.floor((Math.random() * 100) + 1);
      let arrItem = [randNum, '#'+Math.random().toString(16).substr(-6)];
      this.setState(prevState => ({
        sortingList: [...prevState.sortingList, arrItem] 
      }));
    }
    this.setState({ sorted : false });
    this.setState({ isDisabled : false});
  }


  itemCountChange = (e) => {
    let newCount = e.target.value;
    //let newCountStyle = e.target.style;
    if(newCount <= 8 && newCount >= 2) {
      this.setState({ listCount: newCount });
      this.setState({ isDisabled : false });
      this.setState({ sorted : false });
      this.setState({ sortingList : [] });
      for(var i = 0; i < newCount; i++){
        let randNum = Math.floor((Math.random() * 100) + 1);
        let arrItem = [randNum, '#'+Math.random().toString(16).substr(-6)];
        this.setState(prevState => ({
          sortingList: [...prevState.sortingList, arrItem] 
        }));
      }
    }
  }

  bubbleSort = () => {
    if(this.state.sorted === true) return;
    let newList = this.state.sortingList;
    let end = newList.length - 1;
    let swap;
    do {
      swap = false;
        for(let i = 0; i < end; i++) {
            if(newList[i][0] > newList[i + 1][0]) {
                let num = newList[i][0];
                let color = newList[i][1];
                newList[i][0] = newList[i + 1][0];
                newList[i][1] = newList[i + 1][1];
                newList[i + 1][0] = num;
                newList[i + 1][1] = color;
                swap = true;
            }
        }
        end--; 
    } while(swap); 
    this.setState({ sortingList : newList });
    this.setState({ sorted : true });
    this.setState({ isDisabled : true });
}

isDisabled = () => {
  return this.state.isDisabled;
}

  render() {
    return (
      <div className="App">
        <Navbar />
        <button style={startButton} onClick={this.bubbleSort} disabled={this.isDisabled()}>Start Sort</button>
        <button style={newButton} onClick={this.generateList}>Generate New List</button>

        <div className="App-background">
          
            <SortingPlayground items={this.state.sortingList}/>

            <input 
              type="number" 
              name="countField" 
              style={countInput} 
              defaultValue={this.state.listCount} 
              min="2" 
              max="8"
              onChange={this.itemCountChange}>
                
            </input>
        </div>

        <Footer />
      </div>
    )
  }
};

const startButton = {
  position : 'absolute',
  top: '80vh',
  right: '5vh',
  fontSize: '26px',
  cursor: 'pointer',
}
const newButton = {
  position : 'absolute',
  top: '80vh',
  right: '30vh',
  fontSize: '26px',
  cursor: 'pointer',
}
const countInput = {
  position : 'absolute',
  top: '70vh',
  right: '5vh',
  fontSize: '26px',
  width: '2em'
}

export default App;
