import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

ReactDOM.render(<App />, document.getElementById('root'));

// Hot Module Replacement: 브라우저 내 애플리케이션을 재실행하는 도구
// 아래의 코드를 추가하면 코드를 수정해도 브라우저 페이지가 새로고침 되지 않고 어플리케이션이 재실행된다.
if(module.hot){
    module.hot.accept();
}