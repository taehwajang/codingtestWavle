import './App.css';
import Topic from "./component/Topic"
import SecondTopic from './component/SecondTopic';
import Menu from './component/Menu'

function App() {
  return (
    <div className="all">
      <div className="mypage">마이페이지</div>
      <Menu />
      <Topic title="싱글 직장인 와인 파티" age="20대 후반~30대 초반" datedetail="2월 10일 토요일 오후 5시"/>
      <SecondTopic title="싱글 직장인 와인 파티" age="20대 후반~30대 초반" datedetail="2월 10일 토요일 오후 5시"/>
      
      <button class="moreBtn">더보기</button>
    </div>
    
  );
}

export default App;
