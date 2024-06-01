import React from 'react';

const ActiveSprint: React.FC = () => {
    const tasks = [
        { id: 'A-1234', title: 'Задача 1', status: 'To Do', assignee: 'User1' },
        { id: 'B-5678', title: 'Задача 2', status: 'In Progress', assignee: 'User2' },
        // Добавь больше задач по необходимости
    ];

    const statuses = ['To Do', 'In Progress', 'Done'];

    return (
        <div>
            <h1>Активный спринт</h1>
            <div className="kanban-board">
                {statuses.map(status => (
                    <div key={status} className="kanban-column">
                        <h2>{status}</h2>
                        <ul>
                            {tasks.filter(task => task.status === status).map(task => (
                                <li key={task.id}>
                                    <span>{task.title}</span>
                                    <span>{task.assignee}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ActiveSprint;
