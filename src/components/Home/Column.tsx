import { useState } from 'react'
import Task from '@/components/Home/Task';
import {
    StageType,
    Task as TaskType
} from '@/redux/initialStates/tasks';
import {
    ColumnContainer,
    ColumnTaskContainer,
    ColumnTitle,
    ColumnWrapper
} from '@/styles/components/Home/Column.style';
import DynamicForm from '@/components/DynamicForm';
import {
    buttonsBeforeSubmit,
    buttonsToSubmit,
    handleSubmit,
    inputs
} from '@/utils/forms/addForm';
import { Container } from '../Container';

type ColumnProps = {
    title: string
    tasks: TaskType[]
    onDrop: (e: React.DragEvent, column: StageType) => void
    onDragOver: (e: React.DragEvent) => void
    onDragStart: (e: React.DragEvent, task: TaskType) => void
    stage: StageType
};

const Column: React.FC<ColumnProps> = ({
    title,
    tasks,
    stage,
    onDrop,
    onDragOver,
    onDragStart,
}) => {

    const [showInput, setShowInput] = useState(false);

    const filterTasks = tasks.filter((task) => task.stage === stage);

    const handleDrop = (e: React.DragEvent) => {
        onDrop(e, stage);
    };

    const handleDragOver = (e: React.DragEvent) => {
        onDragOver(e);
    };

    return (
        <ColumnWrapper
            onDrop={handleDrop}
            onDragOver={handleDragOver}
        >
            <ColumnContainer>
                <ColumnTitle>{title}</ColumnTitle>
                <ColumnTaskContainer>
                    {filterTasks.map((task, index) => (
                        <Task
                            key={index}
                            task={task}
                            onDragStart={(e) => onDragStart(e, task)}
                        />
                    ))}
                </ColumnTaskContainer>
            </ColumnContainer>
            <Container margin='30px 0 0'>
                <DynamicForm
                    stage={stage}
                    buttonCancelLabel='Cancelar acción'
                    inputs={inputs}
                    submits={[handleSubmit]}
                    buttonsBeforeSubmit={buttonsBeforeSubmit}
                    buttonsToSubmit={buttonsToSubmit}
                    showInput={showInput}
                    setShowInput={setShowInput}
                />
            </Container>
        </ColumnWrapper>
    );
};

export default Column;