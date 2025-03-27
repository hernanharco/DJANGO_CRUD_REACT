
import { useEffect } from "react"
import { getAllTasks } from "../api/tasks.api";

export function TaskList() {

    useEffect(() => { 

        async function loadTasks() {
            const res = await getAllTasks();
            console.log(res);
        }
        loadTasks();
    }, []);

    return <div>TaskList</div>
    
}

