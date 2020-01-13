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
      list, // state 프로퍼티 이름과 변수 이름이 동일하면 생략 가능
    };
  }

  // 아래와 같은 형태로 변수명 지정 가능, 계산된 프로퍼티 이름(computed property name) 
  /*
  const key = 'name';
  const user = {
    [key]: 'Robin',
  };
  */

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
          </div>
          )}
      </div>
    );
  }
}

export default App;