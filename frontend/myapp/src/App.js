import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
    <aside className="sidemenu">
    
      <div
       className="side-menu-button">
      <span>+</span>
      New Chat
      </div>
    </aside>
    <section className="chatbox">
<div className="chat-input-holder">
<textarea 
rows="1"
className="chat-input-textarea">

</textarea>
</div>
    </section>
      <div className="chat-log">
 <div className="chat-message">
<div className="avatar">
Me
</div>
<div className="message">
Hello world
</div>
 </div>
      </div>
    </div>
  );
}

export default App;
