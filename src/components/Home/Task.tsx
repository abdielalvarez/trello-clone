import { useState } from 'react'
import { Task as TaskType } from '@/redux/initialStates/tasks';
import {
    TaskContainer,
    TaskText,
    TaskWrapper
} from '@/styles/components/Home/Task.style';
import React from 'react';
import DynamicForm from '@/components/DynamicForm';
import {
    buttonsBeforeSubmit,
    buttonsToSubmit,
    handleUpdate,
    inputs
} from '@/utils/forms/specificTaskForm';

type TaskProps = {
    task: TaskType;
    onDragStart: (e: React.DragEvent, task: TaskType) => void;
};

const Task: React.FC<TaskProps> = ({ task, onDragStart }) => {

    const [showInput, setShowInput] = useState(false);

    const handleTaskDragStart = (e: React.DragEvent) => {
        onDragStart(e, task);
    };

    return (
        <TaskWrapper>
            <TaskContainer draggable onDragStart={handleTaskDragStart}>
                {!showInput ?
                    <TaskText>
                        {task.name}
                    </TaskText> : null
                }
                <DynamicForm
                    buttonCancelLabel='Cancelar acción'
                    inputs={inputs}
                    submits={[handleUpdate]}
                    buttonsBeforeSubmit={buttonsBeforeSubmit}
                    buttonsToSubmit={buttonsToSubmit}
                    showInput={showInput}
                    setShowInput={setShowInput}
                    oldItem={task}
                />
            </TaskContainer>
        </TaskWrapper>
    );
};

export default Task;
