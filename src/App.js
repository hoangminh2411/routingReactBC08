
import './App.css';

// Cấu hình routing
import {BrowserRouter,Route,Router} from 'react-router-dom'
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import Header from './components/HomePage/Header';
import UseStateDemo from './pages/Hooks/UseStateDemo/UseStateDemo';
import UserEffectDemo from './pages/Hooks/UserEffectDemo/UserEffectDemo';
import ReduxHookDemo from './pages/Hooks/ReduxHookDemo/ReduxHookDemo';
import AxiosDemoRFC from './pages/AxioxDemo/AxiosDemoRFC';
import AxiosDemo from './pages/AxioxDemo/AxiosDemo';
import ApiMiddleWare from './pages/AxioxDemo/ApiMiddleWare';
import Detail from './pages/Detail/Detail';
import Profile from './pages/Profile/Profile';
import HOC from './pages/HOC/HOC';
import { HomeTemplate } from './pages/templates/HomeTemplate';
import AntDemo from './pages/AntDemo/AntDemo';
import {Switch} from 'react-router-dom'
import { AdminTemplate } from './pages/templates/AdminTemplate';
import {UserTemplate} from './pages/templates/UserTemplate';


// Thư viện giúp chuyển hướng trang ở các file không phải là component
import {createBrowserHistory} from 'history'
import ApiMiddleWare_mobile from './pages/AxioxDemo/ApiMiddleWare_mobile';
import AddFilm from './pages/Admin/AddFilms/AddFilm';
import Films from './pages/Admin/Films/Films';
export const history = createBrowserHistory();


function App() {
  return (
    
    <Router history={history}>
      {/* <Header/> */}
     
      {/* <HomeTemplate exact path="/home" element={Home}/> */}
      <Switch>
      {/*BrowserRouter cung cấp props {history,localtion,match} */}
          
        <HomeTemplate exact path="/home" component={Home} />
        <HomeTemplate exact path="/about" component={About} />
        <UserTemplate exact path="/login" component={Login} />
        <UserTemplate exact path="/register" component={Register} />
        <HomeTemplate exact path="/usestate" component={UseStateDemo} />
        <HomeTemplate exact path="/useeffect" component={UserEffectDemo} />
        <HomeTemplate exact path="/reduxhook" component={ReduxHookDemo} />
        <HomeTemplate exact path="/ajaxrfc" component={AxiosDemoRFC} />
        <HomeTemplate exact path="/ajaxrcc" component={AxiosDemo} />
        <HomeTemplate exact path="/apimiddleware" component={ApiMiddleWare} mobileComponent={ApiMiddleWare_mobile} />
        <HomeTemplate exact path="/detail/:id" component={Detail} />
        <HomeTemplate exact path="/profile" component={Profile} />
        <HomeTemplate exact path="/hoc" component={HOC} />

        <AdminTemplate exact path="/admin/antd" component={AntDemo} />
        <AdminTemplate exact path="/admin/films" component={Films} />
        <AdminTemplate exact path="/admin/addfilms" component={AddFilm} />

        <HomeTemplate exact path="/" component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
