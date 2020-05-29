import React, { Component } from 'react';
import {connect } from 'react-redux';
import {addComment} from '../redux/comment/comment-actions'
import { selectCurrentUser } from '../redux/user/user-selectors';
import { createStructuredSelector } from 'reselect';


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
            <>
            {this.props.currentUser ? (
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
            ) : null
            }
              
            </>
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
