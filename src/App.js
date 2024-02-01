import logo from './logo.svg';
import './App.css';
import { useState } from 'react';


const user = {
  name: 'Hedy Lamar',
  imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
  imageSize: 90,
};

const products = [
  { title: 'Cabbage', id: 1 },
  { title: 'Garlic', id: 2 },
  { title: 'Apple', id: 3 },
];

//components are the building blocks of everthing in react
//a component can be anything, from as little as a button, to an entire page
// a component is defined by a function that returns a markdown eg html or as in this case, jsx

function MyButton({ count, onClick }) {  //neat function arguements
    
  return(
    <button onClick={onClick}>
      Clicked {count} times
    </button>
  );
}

function MyButton2() {
  let [count, setCount] = useState(0);

  function handleClick(){
    setCount(count + 1);
  }
  return (
  <button onClick={handleClick}>
    Clicked {count} times
  </button>
  )
}

function DisplayProducts() {
  const listItems = products.map(product => <li key={product.id}>
                                              {product.title}
                                            </li>)

  return(
    <ul>
      {listItems}
    </ul>
  )
}

function UserDeets() {
  return (
    <div>
      <h1>{user.name}</h1>

      <img
        className='avatar'
        src={user.imageUrl}
        alt={'Photo of' + user.name}
        style={{
          width: user.imageSize,
          height: user.imageSize
        }}
      />
    </div>
  )
}

function AdminPanel() {
  return (
    <h1>Admin Panel</h1>
  )
}

function LoginPanel() {
  return (
    <h1>Login Panel</h1>
  )
}


function App() {
  let content;
  let isLoggedIn = false;

  if (isLoggedIn) {
    content = <AdminPanel/>;
  } else {
    content = <LoginPanel/>;
  }

  const [count, setCount] = useState(0);

  function handleClick(){
    setCount(count + 1);
  }

  return (
    <div className="App">
        
        <h1>Wellcome to react app</h1>

        {/* 
          components can consist of other components 
          when defining the function names for components, let it start with a capital letter : )
        */}
        <p>Buttons That update together</p>
        <MyButton count={count} onClick={handleClick}/>
        <MyButton count={count} onClick={handleClick}/>


        {/* Too add css styling, just use the same technique as in html, using the class attribute */}
        
        <div>
          <img src={logo} alt='React Logo' className='App-logo'/>
        </div>

        <p>Buttons that don't update together</p>
        <MyButton2/>
        <MyButton2/>

        <UserDeets/>

        {content}

        <DisplayProducts/>
    </div>

  );
}

export default App;
