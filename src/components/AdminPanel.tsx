import React, { useState } from 'react';
import TaskForm from './TaskForm';

interface Task {
    id: string;
    title: string;
    subtitle: string;
    author: string;
    assignee: string;
    time: string;
    description: string;
    status: string;
}

const AdminPanel: React.FC = () => {
    const [tasks, setTasks] = useState<Task[]>([]);

    const handleTaskCreate = (newTask: Task) => {
        setTasks([...tasks, newTask]);
    };

    return (
        <div>
            <h1>Панель администратора</h1>
            <TaskForm onTaskCreate={handleTaskCreate} />
            <div>
                <h2>Список задач</h2>
                <ul>
                    {tasks.map(task => (
                        <li key={task.id}>
                            {task.title} - {task.subtitle} - {task.author} - {task.assignee} - {task.time} - {task.description}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default AdminPanel;
