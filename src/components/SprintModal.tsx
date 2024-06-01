import React, { useState } from 'react';
import Modal from 'react-modal';
import '../styles/SprintModal.scss';

interface SprintModalProps {
    isOpen: boolean;
    onClose: () => void;
    onSprintCreate: (sprint: Sprint) => void;
}

interface Sprint {
    id: string;
    name: string;
    goal: string;
    duration: number;
    startDate: string;
    endDate: string;
    participants: string[];
}

// Установите элемент для модальных окон
Modal.setAppElement('#root');

const SprintModal: React.FC<SprintModalProps> = ({ isOpen, onClose, onSprintCreate }) => {
    const [name, setName] = useState('');
    const [goal, setGoal] = useState('');
    const [duration, setDuration] = useState(0);
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [participants, setParticipants] = useState<string[]>([]);

    const handleSubmit = () => {
        const newSprint: Sprint = {
            id: `SPR-${Math.floor(Math.random() * 10000)}`,
            name,
            goal,
            duration,
            startDate,
            endDate,
            participants,
        };

        onSprintCreate(newSprint);
        onClose();
    };

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onClose}
            contentLabel="Добавить спринт"
            className="ReactModal__Content"
            overlayClassName="ReactModal__Overlay"
        >
            <h2>Добавить спринт</h2>
            <div>
                <label>Имя спринта</label>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
            </div>
            <div>
                <label>Цель спринта</label>
                <input type="text" value={goal} onChange={(e) => setGoal(e.target.value)} />
            </div>
            <div>
                <label>Длительность</label>
                <input type="number" value={duration} onChange={(e) => setDuration(Number(e.target.value))} />
            </div>
            <div>
                <label>Дата начала</label>
                <input type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)} />
            </div>
            <div>
                <label>Дата окончания</label>
                <input type="date" value={endDate} onChange={(e) => setEndDate(e.target.value)} />
            </div>
            <div>
                <label>Участники</label>
                <input type="text" value={participants.join(', ')} onChange={(e) => setParticipants(e.target.value.split(', '))} />
            </div>
            <button onClick={handleSubmit}>Создать спринт</button>
            <button onClick={onClose}>Отмена</button>
        </Modal>
    );
};

export default SprintModal;
