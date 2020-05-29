import React, { Component } from 'react';
import {connect } from 'react-redux';
import {addComment} from '../redux/comment/comment-actions'
import { selectCurrentUser } from '../redux/user/user-selectors';
import { createStructuredSelector } from 'reselect';
import './styles/commentInput.scss'

class TodoInput extends Component {
    constructor(props) {
        super(props);
        this.state = {
            comment: '',
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
        const { comment } =  this.state
        this.props.addComment({commentName:comment,author: this.props.currentUser.displayName})
        this.setState({
            comment:'',
        })
    }

    render(){
       
        return (
            <div className="comment-input">
            {this.props.currentUser ? (
                <div className="row row-content todo-input">
                    <div className="col-12 text">
                        <form onSubmit={this.handleSubmit}>
                            <textarea id="comment" name="comment" row="20" className="text-input"
                                placeholder=" Type a Comment"
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
            ) : null
            }
              
            </div>
        );
    }
}
const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
  });

const mapDispatchToProps = dispatch =>({
    addComment: comment => dispatch(addComment(comment))
})
export default connect(mapStateToProps,mapDispatchToProps)(TodoInput);
