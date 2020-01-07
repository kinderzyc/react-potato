import React from 'react';
import { Button } from 'antd';


const App: React.FC = () => {
  return (
    <div className="App">
          <Button type="primary">Primary</Button>
          <Button>Default</Button>
          <Button type="dashed">Dashed</Button>
          <Button type="danger">Danger</Button>
    </div>
  );
}

export default App;
