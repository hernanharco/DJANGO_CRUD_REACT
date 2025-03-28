
import axios from 'axios'

const tasksApi = axios.create({
    //En esta parte tuvimos un error ya que se debe escribir bien el baseURL tener encuenta las mayusculas
    baseURL: "http://localhost:8000/tasks/api/v1/tasks/"
})

//Consultar
export const getAllTasks = () => tasksApi.get('/')

//Consultar por id
export const getTask = (id) => tasksApi.get(`/${id}/`)

//Agregar
export const createTask = (task) => {
    return tasksApi.post('/', task)
}

//Eliminar
export const deleteTask = (id) => tasksApi.delete(`/${id}/`)

//Actualizar
export const updateTask = (id, task) => tasksApi.put(`/${id}/`, task)