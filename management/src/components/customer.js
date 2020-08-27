import React from 'react';
import TableRow from "@material-ui/core/TableRow"
import TableCell from "@material-ui/core/TableCell"


class Customer extends React.Component {
    render() { //props 컴포넌트를 계층적으로 구성 // JSX를 사용해서 반환
        return (
            <TableRow>
                <TableCell>{this.props.id}</TableCell>
                <TableCell><img src = {this.props.avatar} alt="profile"></img></TableCell>
                <TableCell>{this.props.name}</TableCell>
                <TableCell>{this.props.birthday}</TableCell>
                <TableCell>{this.props.location}</TableCell>
                <TableCell>{this.props.gender}</TableCell>
                <TableCell>{this.props.job}</TableCell>
            </TableRow>
        )

    }
}

// class CustomerProfile extends React.Component {
//     render() {
//         return (
//             <div>
//                 <img src = {this.props.avatar} alt="profile"></img>
//                 <h2>{this.props.name}({this.props.id})</h2>
//             </div>

//         )
//     }
// }

// class CustomerInfo extends React.Component{
//     render(){
//         return (
//             <div>
//                 <p>{this.props.birthday}</p>
//                 <p>{this.props.loaction}</p>
//                 <p>{this.props.gender}</p>
//                 <p>{this.props.job}</p>
//             </div>
//         )
//     }
// }


export default Customer;
