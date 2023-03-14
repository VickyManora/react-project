import Home from './routes/home/home.component'
import Navigation from './routes/navigation/navigation.component'
import Directory from './components/directory/directory.component';
import {Routes, Route} from 'react-router-dom'
import SignIn from './routes/sign-in/sign-in.component';

const Shop =()=>{
  return (
    <div>
      <h1>HI shop</h1>
    </div>
  )
}

const  App= ()=> {
  return(
  <Routes>
    <Route path='/' element={<Navigation/>}>
     {/* <Route path=''  element={<Home/>}></Route>  */}
     <Route index element={<Home/>}/>
     <Route path='shop' element={<Shop/>}/>
     <Route path='sign-in' element={<SignIn/>}/>
    </Route>
  </Routes>
  )
}

export default App;
