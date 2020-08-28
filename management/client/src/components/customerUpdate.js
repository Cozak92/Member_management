import React from "react"


class CustomerUpdate extends React.Component {


    modify = 0;    
   


    onClickHandler = () => {
        if(this.state.modify === 0){
            return (
                
            )
        }
        else{

        }

    }


    render() {
        return (
            <button onClic = {this.onClickHandler}>수정</button>
        )
    }



}


export default CustomerUpdate;