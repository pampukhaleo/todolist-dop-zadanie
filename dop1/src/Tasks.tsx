import React from "react";

type PropsType = {
  data: DataType
}

type DataType = {
  title: string
  tasks: Array<TasksType>
  students: Array<string>
}

type TasksType = {
  taskId: number
  title: string
  isDone: boolean
}

export const Tasks = ({data}: PropsType) => {
  return (
    <div style={{width: '250px'}}>
      <header>{data.title}</header>
      <ul style={{padding: '0'}}>
        {data.tasks.map(task => (
          <li style={{listStyle: 'none'}}><input type="checkbox" checked={task.isDone}/>
            <span>{task.title}</span>
          </li>
        ))}
      </ul>
      <h3>Students</h3>
      <ul style={{padding: '0'}}>
        {data.students.map(student => (
          <li style={{listStyle: 'none'}}>
            {student}
          </li>
        ))}
      </ul>
    </div>
  )
}
