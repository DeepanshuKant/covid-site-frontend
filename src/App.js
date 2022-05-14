
import './App.css';
import Global from './components/GlobalCases/Global';
import Graph from './components/Graph/Graph';
import Search from './components/Search/Search';

import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { getAllGlobal } from './redux/reducer/global/global.action'
// import Graph from './components/Graph/Graph';
function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllGlobal());
  }, [])
  return (
    <>
      <Global />
      <Search />
      <Graph />
    </>
  );
}

export default App;
