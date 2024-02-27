//kanban application
import { InputForm } from './components/InputForm';
import { Card } from './components/Card';
import './App.scss';

const tasks = ['ToDo', 'In Progress', 'Done'];
export const App = () => {

  return (
    <div className="App">
      <InputForm />
      <section className="tackBoard">
        {tasks.map((taskTitle, index) =>
        (<Card key={index} taskTitle={taskTitle} />)
        )}
      </section>
    </div>
  );
}
