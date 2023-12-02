
import './App.css';
import ApiTester from './ApiTester';
import ConnectionProvider from './context/ConnectionContext';
import UserGlobalData from './context/UserContext';
import UserDisplay from './UserDisplay';
import LogoutButton from './LogoutButton';

function App() {
  return (
    <div className="App">
      {/* -- User Global Data provides the data */}
      <UserGlobalData>
        {/* add Provider and the initial value */}
        <ConnectionProvider>        
          <ApiTester />
          <UserDisplay/>
          <LogoutButton/>
        </ConnectionProvider>
      </UserGlobalData>
    </div>
  );
}

export default App;
