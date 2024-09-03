let taskLists = [
  {
    id: "1",
    title: "Estudos",
    tasks: [{ id: "1", title: "Estudar Node", completed: false }],
  },
  { id: "2", title: "Tarefas de casa", tasks: [] },
  { id: "3", title: "Coisas do trabalho", tasks: [] },
];

module.exports = {
  // Retorna toda o array
  getAllTaskLists: () => {
    return taskLists;
  },

  //Retorna determinado item do array com base  no seu array
  getTaskListById: (id) => {
    return taskLists.find((list) => list.id === id);
  },

  // Cria uma lista com um ID, TITLE e Tipos de tarefa (Pode iniciar vazia)
  createList: (title) => {
    const newList = {
      id: Math.floor(Math.random() * 99999999).toString(),
      title: title,
      tasks: [],
    };
    return newList;
  },

  // Salva lista depois da verificação
  saveList: (taskList) => {
    if (taskList.title === "")
      throw new Error("Título da lista não pode ficar vazio.");
    taskLists.push(taskList);
  },

  // Deleta lista
  deleteList: (listId) => {
    const listIndex = taskLists.findIndex((list) => list.id === listId);
    // O número que você passa como o segundo argumento no método splice
    // indica a quantidade de elementos que você deseja remover a partir
    // do índice especificado.
    // array.splice(início, quantidade);
    // início: Índice do array onde a remoção deve começar.
    // quantidade: Número de elementos que você deseja remover a partir do índice de início.
    taskLists.splice(listIndex, 1);
  },

  // Cria uma tarefa com um ID, TITLE e iniciando em incompleto(FALSE)
  addTask: (listId, taskTitle) => {
    const newTask = {
      id: Math.floor(Math.random() * 99999999).toString(),
      title: taskTitle,
      completed: false,
    };
    taskLists.find((list) => list.id === listId).tasks.push(newTask);
  },

  // Recebe como parametro o ID da lista e o ID da tarefa
  // localiza a lista e a tarefa e muda sua flag
  completeTask: (listId, taskId) => {
    const taskList = taskLists.find((list) => list.id === listId);
    const task = taskList.tasks.find((task) => task.id === taskId);
    task.completed = true;
  },

  // Recebe como parametro o ID da lista e o ID da tarefa
  // localiza a lista e a tarefa e muda sua flag
  undoTask: (listId, taskId) => {
    const taskList = taskLists.find((list) => list.id === listId);
    const task = taskList.tasks.find((task) => task.id === taskId);
    task.completed = false;
  },
};
