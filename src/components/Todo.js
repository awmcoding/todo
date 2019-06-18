import React from 'react'

class Todo extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            isChecked: false
        }
    }


    render(){

        return(
            <div className="todo-list">
                <p style={{
                    textDecoration: this.props.todo.complete ? "line-through" : ""
                }}
                   onClick={this.props.toggleComplete}>
                    <label>
                        <input type="checkbox"
                               onChange={this.props.handleCheck}
                               defaultChecked={this.state.isChecked}
                        />
                    </label>
                    {this.props.todo.text}
                </p>
                <button className="delete" onClick={this.props.onDelete}>x</button>
            </div>
        )
    }
}

export default Todo;
