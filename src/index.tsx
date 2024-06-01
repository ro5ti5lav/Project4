
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './styles/main.scss';
import { SprintProvider } from './components/SprintContext';
import { TaskProvider } from './components/TaskContext';
import { ParticipantProvider } from './components/ParticipantContext';

ReactDOM.render(
  <React.StrictMode>
    <SprintProvider>
      <TaskProvider>
        <ParticipantProvider>
          <App />
        </ParticipantProvider>
      </TaskProvider>
    </SprintProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
