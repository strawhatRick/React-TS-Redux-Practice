import React from 'react';
import { Textfield } from './components/Textfield';
//react functional component
const App: React.FC = () => {
  return (
    <>
    <div>Yoo</div>
    <Textfield text='Hey' obj={{firstName: 'Rik', lastName: 'MookerG'}} 
    handleChange={e => {e.preventDefault()}}
    />
    </>
  )
}
export default App;
