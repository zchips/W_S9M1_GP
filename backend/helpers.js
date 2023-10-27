let todos
let id = 1
let getId = () => id++

const resetTodos = () => {
  id = 1
  todos = [
    { id: getId(), name: 'laundry', complete: false },
    { id: getId(), name: 'dishes', complete: false },
    { id: getId(), name: 'groceries', complete: false },
  ]
}

resetTodos()

const getAll = () => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(todos)
    }, 5)
  })
}

const create = ({ name }) => {
  todos.push({ id: getId(), name, complete: false })
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(todos)
    }, 5)
  })
}

const toggleDone = id => {
  todos = todos.map(todo => {
    return todo.id == id
      ? { ...todo, complete: !todo.complete }
      : todo
  })
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(todos)
    }, 5)
  })
}

const remove = id => {
  todos = todos.filter(todo => {
    return todo.id != id
  })
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(todos)
    }, 5)
  })
}

module.exports = {
  getAll,
  create,
  toggleDone,
  remove,
  resetTodos,
}
