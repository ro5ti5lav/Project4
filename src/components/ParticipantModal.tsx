import React, { useState } from 'react';
import Modal from 'react-modal';
import '../styles/SprintModal.scss';

interface ParticipantModalProps {
    isOpen: boolean;
    onClose: () => void;
    onParticipantCreate: (participant: Participant) => void;
}

interface Participant {
    id: string;
    name: string;
    position: string;
    department: string;
}

// Установите элемент для модальных окон
Modal.setAppElement('#root');

const ParticipantModal: React.FC<ParticipantModalProps> = ({ isOpen, onClose, onParticipantCreate }) => {
    const [name, setName] = useState('');
    const [position, setPosition] = useState('');
    const [department, setDepartment] = useState('');

    const handleSubmit = () => {
        const newParticipant: Participant = {
            id: `PAR-${Math.floor(Math.random() * 10000)}`,
            name,
            position,
            department,
        };

        onParticipantCreate(newParticipant);
        onClose();
    };

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onClose}
            contentLabel="Добавить участника"
            className="ReactModal__Content"
            overlayClassName="ReactModal__Overlay"
        >
            <h2>Добавить участника</h2>
            <div>
                <label>ФИО</label>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
            </div>
            <div>
                <label>Должность</label>
                <input type="text" value={position} onChange={(e) => setPosition(e.target.value)} />
            </div>
            <div>
                <label>Подразделение</label>
                <input type="text" value={department} onChange={(e) => setDepartment(e.target.value)} />
            </div>
            <button onClick={handleSubmit}>Создать участника</button>
            <button onClick={onClose}>Отмена</button>
        </Modal>
    );
};

export default ParticipantModal;
