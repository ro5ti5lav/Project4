import React, { useState } from 'react';
import { useSprints } from '../components/SprintContext';
import { useParticipants } from '../components/ParticipantContext';
import SprintModal from '../components/SprintModal';
import TaskForm from '../components/TaskForm';
import ParticipantModal from '../components/ParticipantModal'; // Импортируем ParticipantModal
import { useTasks } from '../components/TaskContext';
import '../styles/AdminPage.scss'

// Определяем интерфейсы Sprint и Participant, если они не импортированы из других файлов
interface Sprint {
    id: string;
    name: string;
    goal: string;
    duration: number;
    startDate: string;
    endDate: string;
    participants: string[];
}

interface Participant {
    id: string;
    name: string;
    position: string;
    department: string;
}

const AdminPage: React.FC = () => {
    const { addSprint } = useSprints();
    const { addParticipant } = useParticipants();
    const [isSprintModalOpen, setSprintModalOpen] = useState(false);
    const [isParticipantModalOpen, setParticipantModalOpen] = useState(false);
    const { addTask } = useTasks();
    const handleSprintCreate = (sprint: Sprint) => {
        addSprint(sprint);
        setSprintModalOpen(false);
    };

    const handleParticipantCreate = (participant: Participant) => {
        addParticipant(participant);
        setParticipantModalOpen(false);
    };

    return (
        <div className="admin-page">
            <h1>Администрирование</h1>

            <button onClick={() => setSprintModalOpen(true)}>Добавить спринт</button>
            <button onClick={() => setParticipantModalOpen(true)}>Добавить участника</button>

            <SprintModal
                isOpen={isSprintModalOpen}
                onClose={() => setSprintModalOpen(false)}
                onSprintCreate={handleSprintCreate}
            />

            <ParticipantModal
                isOpen={isParticipantModalOpen}
                onClose={() => setParticipantModalOpen(false)}
                onParticipantCreate={handleParticipantCreate}
            />
            <TaskForm onTaskCreate={addTask} />

        </div>
    );
};

export default AdminPage;
