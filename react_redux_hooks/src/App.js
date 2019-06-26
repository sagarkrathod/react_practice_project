import React, {useEffect,useState} from 'react';
import { Provider, useDispatch } from 'react-redux';
import { store } from './redux';
import Counter from './components/Counter'
import Employee from './components/Employee'
import AddEmployee from './components/AddEmployee'
import Posts from './components/Posts';
import Songs from './components/Songs'
import uuid from 'uuid/v4';

const App = () => {
  const [todoData,setTodoData] = useState({});
  const [count, setCount] = useState(0);
  
  const SongsContext = React.createContext({
    song:[
      {'name':'song1',id:uuid()},
      {'name':'song2',id:uuid()},
      {'name':'song3',id:uuid()},
      {'name':'song4',id:uuid()},
    ]
  });

  useEffect( async () => {
    const getPostData = await fetch('https://jsonplaceholder.typicode.com/posts');
    const res = await getPostData.json();
    store.dispatch({
      type:'ADD_POST',
      payload:res,
    })
  });
  // useEffect( () => {
  //   fetch('https://jsonplaceholder.typicode.com/posts')
  //   .then(res => res.json())
  //   .then(data =>{
  //     //const final = data.splice(0,3);
  //     //setTodoData(data);
  //     store.dispatch({
  //       type:"ADD_POST",
  //       payload:data
  //     })
  //   })
  // },[])
  
  return (
    <div className="App">
      <Provider store={store}>
        <SongsContext.provider>
          <Songs/>
        </SongsContext.provider>  
        <Counter/>
        <Employee/>
        <AddEmployee/>
        <Posts/>
      </Provider>
      
    </div>
  );
}

export default App;
