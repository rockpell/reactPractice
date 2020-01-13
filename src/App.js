import React, {Component} from 'react';
import './App.css';

const list = [
  {
    title: 'React',
    url: 'https://reactjs.org/',
    author: 'Jordan Walke',
    points: 4,
    objectID: 0,
  },
  {
    title: 'Redux',
    url: 'https://github.com/reactjs/redux',
    author: 'Dan Abramovm, Andrew Clark',
    num_comments: 2,
    points: 5,
    objectID: 1,
  },
];

class App extends Component{

  constructor(props){
    super(props);

    this.state = { 
      list,
    };

    this.onDismiss = this.onDismiss.bind(this);
  }

  onDismiss(id){
    const isNotId = item => item.objectID != id;
    const updatedList = this.state.list.filter(isNotId); // 조건과 일치하지 않는 엘리먼트를 배열에서 제외한다.(false인)
    
    this.setState({list: updatedList});
  }

  render(){
    return ( 
      <div className="App">
        {this.state.list.map(item =>
          <div key={item.objectID}>
            <sapn>
              <a href={item.url}>{item.title}</a>
            </sapn>
            <span>{item.author}</span>
            <span>{item.num_comments}</span>
            <sapn>{item.points}</sapn>
            <sapn>
              <button
                onClick={() => this.onDismiss(item.objectID)}
                type="button"  
              >
                dismiss
              </button>
            </sapn>
          </div>
          )}
      </div>
    );
  }
}

export default App;