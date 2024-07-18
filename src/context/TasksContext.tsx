import { ReactNode, createContext, useContext, useState } from "react";

import { Alert } from "react-native";

import { Task } from "../models/task";

interface ITasksContext {
  tasks: Task[];
  addTask: (title: string) => void;
  removeTask: (id: Task['id']) => void;
  toggleTask: (id: Task['id']) => void;
}

const TasksContext = createContext<ITasksContext>({} as ITasksContext);

interface ITaskProviderProps {
  children: ReactNode;
}

export function TasksProvider({ children }: ITaskProviderProps) {
  const [tasks, setTasks] = useState<Task[]>([
    Task.create('Task 1'),
    Task.create('Task 2').toggle(),
    Task.create('Task 3'),
  ]);

  function addTask(title: string) {
    const titleFormatted = title.trim();

    if (tasks.some(task => task.title === titleFormatted)) {
      return Alert.alert('Tarefa já existe', 'Você não pode cadastrar uma tarefa com o mesmo nome.');
    }

    setTasks([...tasks, Task.create(title)]);
  }

  function removeTask(id: Task['id']) {
    const taskToRemove = tasks.find(task => task.id === id);

    Alert.alert('Remover tarefa', `Tem certeza que deseja remover essa tarefa?`, [
      {
        text: 'Cancel',
        style: 'cancel',
      },
      {
        text: 'Remove',
        style: 'destructive',
        onPress: () => {
          setTasks(tasks.filter(task => task.id !== id));
        },
      },
    ]);
  }

  function toggleTask(id: Task['id']) {
    setTasks(tasks.map(task => task.id === id ? task.toggle() : task));
  }

  return (
    <TasksContext.Provider value={{ tasks, addTask, removeTask, toggleTask }}>
      {children}
    </TasksContext.Provider>
  );
}

export function useTasks() {
  const context = useContext(TasksContext);

  if (!context) {
    throw new Error('useTasks must be used within a TasksProvider');
  }

  return context;
}
