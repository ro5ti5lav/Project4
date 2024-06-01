import React, { useState } from 'react';
import { useParticipants } from './ParticipantContext';
import { generateTaskId } from '../utils/generateTaskId';
import '../styles/TaskForm.scss';

interface TaskFormProps {
    onTaskCreate: (task: Task) => void;
}

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

const TaskForm: React.FC<TaskFormProps> = ({ onTaskCreate }) => {
    const [title, setTitle] = useState('');
    const [subtitle, setSubtitle] = useState('');
    const [author, setAuthor] = useState('');
    const [assignee, setAssignee] = useState('');
    const [time, setTime] = useState('');
    const [description, setDescription] = useState('');
    const { participants } = useParticipants();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const newTask: Task = {
            id: generateTaskId(),
            title,
            subtitle,
            author,
            assignee,
            time,
            description,
            status: 'To Do',
        };

        onTaskCreate(newTask);

        // Очистка полей формы после отправки
        setTitle('');
        setSubtitle('');
        setAuthor('');
        setAssignee('');
        setTime('');
        setDescription('');
    };

    return (
        <div className="task-form">
            <h2>Создать новую задачу</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Заголовок</label>
                    <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Подзаголовок</label>
                    <input
                        type="text"
                        value={subtitle}
                        onChange={(e) => setSubtitle(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Автор</label>
                    <input
                        type="text"
                        value={author}
                        onChange={(e) => setAuthor(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Исполнитель</label>
                    <select
                        value={assignee}
                        onChange={(e) => setAssignee(e.target.value)}
                        required
                    >
                        <option value="" disabled>Выберите исполнителя</option>
                        {participants.map(participant => (
                            <option key={participant.id} value={participant.name}>
                                {participant.name}
                            </option>
                        ))}
                    </select>
                </div>
                <div>
                    <label>Время выполнения</label>
                    <input
                        type="text"
                        value={time}
                        onChange={(e) => setTime(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Описание</label>
                    <textarea
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Создать задачу</button>
            </form>
        </div>
    );
};

export default TaskForm;
