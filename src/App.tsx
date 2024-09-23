import './App.css';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import HomeScreen from './screens/HomeScreen';
import CustomTitleBar from './components/CustomTitleBar';

function App() {
  return (
    <Provider store={store}>
      <CustomTitleBar />
      <HomeScreen />
    </Provider>
  );
}

export default App;
