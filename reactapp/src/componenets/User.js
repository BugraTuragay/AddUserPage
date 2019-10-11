import React, { Component } from 'react'
import PropTypes from 'prop-types'
import UserConsumer from "../context";
import axios from "axios";
import {Link} from "react-router-dom";


class User extends Component {
    state =  {
        isVisible : false
    }
    static defaultProps = {

        name : "Bilgi yok",
        salary : "Bilgi yok",
        department : "Bilgi yok"
        
      }

      /*constructor(props){
          super(props)
          this.onClickEvent = this.onClickEvent.bind(this);
      } */

      onClickEvent = (e) =>{
          this.setState({

            isVisible : !this.state.isVisible
          })

        /*this.state = {        //warning
            isVisible : true
        }*/
       
        //console.log(number);
        // console.log(this);
      }
      /*constructor(props){
        super(props);

        this.state = {
           isVisible : false
        }

      } */
      onDeleteUser = async (dispatch,e) => {
         const {id} = this.props;
         
        //Delete Request

        await axios.delete(`http://localhost:3004/users/${id}`);
        //Consumer Dispatch

        dispatch({type : "DELETE_USER",payload : id});
      }

      /* componentWillUnmount(){
          console.log("comp will unmount");
      } 
      */
    render() {

        //Destructing
        const {id,name,salary,department} = this.props;
        const {isVisible} = this.state;

        return (
        <UserConsumer>
            {
                value => {
                    const {dispatch} = value;

                     return(
                        <div className = "cold-md-8 mb-4">
                            <div className = "card" style = {isVisible ? {backgroundColor : "#a3cfdd"} : null}>
                                <div className = "card-header d-flex justify-content-between">
                                    <h4 className = "d-inline" onClick = {this.onClickEvent}>{name}</h4>

                                    <i onClick = {this.onDeleteUser.bind(this,dispatch)} className = "fas fa-user-times" style = {{cursor : "pointer"}}></i>
    
                                </div>
                                {
                                    isVisible ?
                                    <div className = "card-body" style = {isVisible ? {backgroundColor : "#daebf1"} : null}>
                                    <p className = "card-text">Department : {department}</p>
                                    <p className = "card-text">Salary : {salary}</p>
                                    <Link to = {`edit/${id}`} className = "btn btn-dark btn-block">Update User</Link>

                                </div> : null
                                }
                            
                            </div>

                        </div>


                    ) 
                }
            }

        </UserConsumer>
        )

       
    }
}


User.propTypes = {
    name : PropTypes.string.isRequired,
    salary : PropTypes.string.isRequired,
    department : PropTypes.string.isRequired,
    id : PropTypes.number.isRequired

}

export default User;