import './App.css';
import Header from './Components/Header';
import Main from './Components/Main';


// How to call Actions : Ye useDispatch hook ki help se jo react-redux me hota hai
// action ka kaam react se data leke reducer ko call karna 

// React action ko kaise pata chalt hai ki kounse reducer me data send karna hai ...the
// answer is wo return statement ki type se pata chalta hai 

function App() {
  return (
    <div className="m-5 ">
    <Header />
    <Main   />   
    </div>
  );
}

export default App;

