
import './App.css';
import ApiTester from './ApiTester';
import { ConnectionContext, defaultConnectionData } from './context/ConnectionContext';
import UserGlobalData from './context/UserContext';
import UserDisplay from './context/UserDisplay';

function App() {
  return (
    <div className="App">
      {/* -- User Global Data provides the data */}
      <UserGlobalData>
        {/* add Provider and the initial value */}
        <ConnectionContext.Provider value={defaultConnectionData}>        
          <ApiTester />
          <UserDisplay/>
        </ConnectionContext.Provider>
      </UserGlobalData>
    </div>
  );
}

export default App;
