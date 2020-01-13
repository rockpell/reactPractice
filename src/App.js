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

// 화살표 함수는 중괄호를 생략하면 자동으로 return 명령이 추가된다.
class App extends Component{

  constructor(props){
    super(props);

    this.state = { 
      list: list, // list를 컴포넌트 내부 상태로 정의
    };
  }
  // 상태가 변경 될 때마다 render가 재실행된다.
  // state는 setState() 메서드를 통해서 변경해야한다.
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