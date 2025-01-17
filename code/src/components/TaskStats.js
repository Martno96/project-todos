import React from "react"
import { Box, AppBar } from "@material-ui/core"
import { positions, sizing } from "@material-ui/system"
import { useSelector } from "react-redux"



const TaskStats = () => {
  const tasks = useSelector((store) => store.todolist.tasks) //Redux won"t recognize "todoList" (camelCase) for some reason :/
  const completedTasks = tasks.filter(task => task.isComplete)
  return (
      <AppBar
        position="fixed"
        style={{top: "auto", bottom: 0}}
      >
        <Box
          height={100}
        >
          <h4 className="stats">
            Completed
            <br />
            <span className="completed">
              {` ${completedTasks.length}`}
            </span>
            {` / ${tasks.length}`}
          </h4>
        </Box>
      </AppBar>
  )
}

export default TaskStats