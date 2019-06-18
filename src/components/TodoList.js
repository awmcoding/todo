import React from 'react'
import TodoForm from "./TodoForm";
import Todo from "./Todo";

class TodoList extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            todos: [],
            todoToShow: 'all',
            isChecked: false
        }
        this.addTodo = this.addTodo.bind(this)
    }

    addTodo = (todo) => {
        this.setState({
            todos: [todo, ...this.state.todos]
        })
    }

    toggleComplete = (id) => {
        this.setState({
            todos: this.state.todos.map(todo => {
                if(todo.id === id){
                    return{
                        ...todo,
                        complete: !todo.complete,
                    }
                }else{
                    return todo
                }
            }),
        })
    }

    updateTodoToShow = (s) => {
        this.setState({
            todoToShow: s,
        })
    }

    handleDeleteTodo = (id) => {
        this.setState({
            todos: this.state.todos.filter(todo => todo.id !== id)
        })
    }

    toggleChange = (id) => {

        // this.setState({
        //     isChecked: !this.state.isChecked,
        // });
    }

    render() {
        let todos = []
        if(this.state.todoToShow === 'all'){
            todos = this.state.todos
        }else if(this.state.todoToShow === 'pending'){
            todos = this.state.todos.filter(todo => !todo.complete)
        }else if(this.state.todoToShow === 'complete'){
            todos = this.state.todos.filter(todo => todo.complete)
        }

        return(
            <div>
                <TodoForm onSubmit={this.addTodo} />
                <h3>To Do List</h3>
                {todos.map(todo => (
                    <Todo
                        key={todo.id}
                        toggleComplete={() => this.toggleComplete(todo.id)}
                        onDelete = {() => this.handleDeleteTodo(todo.id)}
                        handleCheck = {() => this.toggleChange(todo.id)}
                        todo={todo} />
                ))}

                <div className="buttons">
                    <button className="btn" onClick={() => this.updateTodoToShow("all")}>all ( {this.state.todos.length})</button>
                    <button className="btn" onClick={() => this.updateTodoToShow("pending")}>pending ( {this.state.todos.filter(todo => !todo.complete ).length})</button>
                    <button className="btn" onClick={() => this.updateTodoToShow("complete")}>completed ( {this.state.todos.filter(todo => todo.complete ).length})</button>
                </div>
            </div>
        )
    }
}

export default TodoList;

