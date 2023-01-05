import 'bootstrap/dist/css/bootstrap.min.css';
import { DataGridWidget } from './feature/DataGridWidget';
import { useDispatch } from 'react-redux';
import { store } from '../src/redux-store';
import { useEffect } from 'react';
import { fetchData } from './redux-store/actions';

function App() {
  const dispatch = useDispatch<typeof store.dispatch>();

  useEffect(() => {
    dispatch(fetchData());
  }, []);
  return <DataGridWidget />;
}

export default App;
