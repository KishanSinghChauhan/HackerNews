import React, { Component } from 'react';
// import {connect } from 'react-redux';
// import {addTodo} from '../redux/todo/todo-actions';
// import './styles/todoInput_styles.scss'
class TodoInput extends Component {
    constructor(props) {
        super(props);
        this.state = {
            comment: ''
        };
    }
    
    handleInputChange = (event) => {
        const target = event.target;
        const value =  target.value;
        const name = target.name;
    
        this.setState({
          [name]: value
        });
    }

    handleSubmit = (event) => {
        event.preventDefault()        
        // const { todo } =  this.state
        // this.props.addTodo({ Todo:todo})
        this.setState({
            comment:''
        })
    }

    render(){
       
        return (
            <>
                <div className="row row-content todo-input">
                    <div className="col-12">
                        <form onSubmit={this.handleSubmit}>
                            <textarea id="comment" name="comment" row="20" style={{height:'100px',width:'80%'}}
                                placeholder=" + Add to List..."
                                value={this.state.comment}
                                onChange={this.handleInputChange} 
                                required
                                />
                        
                            <button className="form-btn" type="submit" color="success">
                                Post Comment
                            </button>
                        </form>
                    </div>
               </div>
            </>
        );
    }
}

// const mapDispatchToProps = dispatch =>({
//     addTodo: todo => dispatch(addTodo(todo))
// })
export default TodoInput;
