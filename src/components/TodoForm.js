import React from 'react'

class TodoForm extends React.Component {
    static defaultProps = {
        id: Date.now(),
        text: '',
        complete: false
    };


    constructor(props){
        super(props)
        this.state ={
            text: ""
        }

        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange = (event) => {
       this.setState({
           [event.target.name]: event.target.value
       })
    }


    handleSubmit = (event) => {
       event.preventDefault()
        if(this.state.text !== ""){
            this.props.onSubmit({
                id: Date.now(),
                text: this.state.text,
                complete: false
            })
        }
        this.setState({
            text: ""
        })
    }


    render() {
        return(
            <div className="add-todo">
                <h1>Create Task</h1>
                <form className="todo-form" onSubmit={this.handleSubmit}>
                    <input
                        name="text"
                        value={this.state.text}
                        onChange={this.handleChange}
                        placeholder="todo..."
                    />
                    <button className="btn">Create Task</button>
                </form>

            </div>
        )
    }
}

export default TodoForm;

