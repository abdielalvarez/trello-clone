import React from 'react';
import { TrelloBoardContainer }
  from '@/styles/components/Home/TrelloBoardContainer.style'
import Column from './Column';
import { StageType, Task, TaskWithId } from '@/redux/initialStates/tasks';
import { updateAction } from '@/redux/actions/tasksActions';
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch } from '@/redux/store';
import { COLUMNS, UPDATE_ERROR } from '@/utils/constants';
import { selectTasks, selectUser } from '@/redux/initialStates/selectors';
import { showToastAction } from '@/redux/actions/toastActions';

const TrelloBoard = () => {
  const tasks = useSelector(selectTasks);
  const user = useSelector(selectUser);

  const dispatch = useDispatch<AppDispatch>()

  const handleDragStart = (e: React.DragEvent, task: Task) => {
    e.dataTransfer.setData('task', JSON.stringify(task));
  };

  const handleDrop = async (e: React.DragEvent, column: StageType) => {
    e.preventDefault();
    try {
      const task = JSON.parse(e.dataTransfer.getData('task')) as TaskWithId;
      const updatedTask = {
        ...task,
        stage: column
      }
      await dispatch(updateAction(Boolean(user?.token), updatedTask, task))
    } catch (error) {
      dispatch(showToastAction(UPDATE_ERROR));
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };

  return (
    <TrelloBoardContainer>
      {COLUMNS.map((column, index) => (
        <Column
          key={index}
          stage={column.stage}
          title={column.title}
          tasks={tasks}
          onDrop={handleDrop}
          onDragOver={handleDragOver}
          onDragStart={handleDragStart}
        />
      ))}
    </TrelloBoardContainer>
  );
};

export default TrelloBoard;
