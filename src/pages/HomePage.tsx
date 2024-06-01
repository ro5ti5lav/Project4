import React, { useState } from 'react';
import { useTasks } from '../components/TaskContext';
import { useParticipants } from '../components/ParticipantContext';
import '../styles/HomePage.scss';

const HomePage: React.FC = () => {
    const { tasks } = useTasks();
    const { participants } = useParticipants();
    const [selectedParticipant, setSelectedParticipant] = useState<string>('all');

    const filteredTasks = tasks.filter(task =>
        selectedParticipant === 'all' ? true : task.assignee === selectedParticipant
    );

    return (
        <div className="home-page">
            <h1>Список Задач</h1>

            <div className="participant-filter">
                <label htmlFor="participant-select">Выбрать участника:</label>
                <select
                    id="participant-select"
                    value={selectedParticipant}
                    onChange={(e) => setSelectedParticipant(e.target.value)}
                >
                    <option value="all">Вся команда</option>
                    {participants.map(participant => (
                        <option key={participant.id} value={participant.name}>
                            {participant.name}
                        </option>
                    ))}
                </select>
            </div>

            <h2>Список задач</h2>
            <ul className="task-list">
                {filteredTasks.map(task => (
                    <li key={task.id} className="task-item">
                        <h3>{task.title}</h3>
                        <p>{task.subtitle}</p>
                        <p><strong>Автор:</strong> {task.author}</p>
                        <p><strong>Исполнитель:</strong> {task.assignee}</p>
                        <p><strong>Время выполнения:</strong> {task.time}</p>
                        <p>{task.description}</p>
                        <p><strong>ID:</strong> {task.id}</p>
                        <p><strong>Статус:</strong> {task.status}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default HomePage;
