import React from "react"
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
import Button from "@material-ui/core/Button"



class CustomerDelete extends React.Component {

    handleValueDelete = () => {
        confirmAlert({
          title: '삭제 확인',
          message: '정말 삭제 하시겠습니까?',
          buttons: [
            {
              label: '예',
              onClick: () => {
                this.deleteCustomer(this.props.id)
                alert('삭제 되었습니다.')}
            },
            {
              label: '아니요',
              onClick: () => alert('취소 되었습니다')
            }
          ]
        });
      };
  

    deleteCustomer(id) {
        const url = 'api/customers/' + id;
        fetch(url, {
            method : 'DELETE'
        });
        this.props.stateRefresh();
    }
    handleValueUpdate = (e) => {

    }

    render () {
        return (
            <div>
               <Button variant = "contained"  color="secondary" onClick= {this.handleValueDelete}>삭제</Button>
            </div>
        )
        
    }
}

export default CustomerDelete