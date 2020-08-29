import React from "react"
import { post } from "axios"
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions"
import DialogTitle from "@material-ui/core/DialogTitle"
import DialogContent from "@material-ui/core/DialogContent"
import TextFiled from "@material-ui/core/TextField"
import Button from "@material-ui/core/Button"
import { withStyles } from "@material-ui/core/styles"


const styles = theme => ({
    hidden: {
        display: 'none'
    }

})


class CustomerUpdate extends React.Component {
    

    constructor(props) {
        super(props);
        this.state = {
            file: this.props.file, //byte형태의 데이터로 이루어진 진짜 file
            name: this.props.name,
            birth: this.props.birth,
            gender: this.props.gender,
            location: this.props.location,
            job: this.props.job,
            fileName: this.props.fileName, //파일명
            open: false
        }
        let nextState = {};
       
    }

    handleClickOpen = () => {
        this.setState({
            open: true
        })
    }
    handleClickClose = () => {
        this.setState({

            open:false
        
        })
        
    }

    handleFormSubmit = (e) => {
        e.preventDefault() //데이터가 서버가 전달됨에 있어서 오류가 발생하지 않도록
        // console.log(this.state.file, 
        //     this.state.name,
        //     this.state.birth,
        //     this.state.gender,
        //     this.state.location,
        //     this.state.job,
        //     this.state.fileName) //파일명)
        this.updateCustomer(this.props.id)
        .then((res) => {
            this.props.stateRefresh();
        })
        
    }

    handleFileChange = (e) => {
        this.setState({
            file: e.target.files[0], //한개의 파일만 업로드 하기 위해서
            fileName: e.target.value
        })
    }

    handleValueChange = (e) => {
        let nextState = {};
        nextState[e.target.name] = e.target.value
        this.setState(nextState);
    }

    updateCustomer = (id) => {
        const url = '/api/edit/' + id;
        let formData = new FormData();
        formData.append('image', this.state.file)
        formData.append('name', this.state.name)
        formData.append('birth', this.state.birth)
        formData.append('gender', this.state.gender)
        formData.append('location', this.state.location)
        formData.append('job', this.state.job)

        const config = {
            headers: {
                //전달하고자 하는 데이터에 파일이 포함되어있을 때
                'content-type' : 'multipart/form-data'
            }
        }

        //axios의 post 라이브러리
        return post(url, formData, config);
    }
    





    render() {
        const { classes } = this.props;
        return (
            <div>
                <Button variant = "contained"  color="third" onClick={this.handleClickOpen}>
                    수정
                </Button>
                <Dialog open={this.state.open} onClose ={this.handleClickClose}>
                    <DialogTitle>고객 수정</DialogTitle>
                    <DialogContent>
                        프로필 이미지 : <input 
                                                type = "file" 
                                                accept="image/*" 
                                                name= "file"
                                                file = {this.state.file} 
                                                value = {this.state.fileName} 
                                                onChange = {this.handleFileChange}/>
                        <br></br>
                        이름 : <input type = "text" name="name" value = {this.state.name} onChange = {this.handleValueChange}></input>
                        <br></br>
                        생년월일 : <input type = "date" name="birth" value = {this.state.birth} onChange = {this.handleValueChange}></input>
                        <br></br>
                        성별 : <select name ="gender" value = {this.state.gender} onChange = {this.handleValueChange}>
                            <option value="" selected disabled hidden >선택</option>
                            <option value = "남성">남성</option>
                            <option value = "여성">여성</option>
                        </select>
                        <br></br>
                        지역 : <select type = "text" name="location" value = {this.state.location} onChange = {this.handleValueChange}>
                            <option value="" selected disabled hidden >선택</option>
                            <option value = "서울">서울</option>
                            <option value = "경기">경기</option>
                            <option value = "강원">강원</option>
                            <option value = "충북">충북</option>
                            <option value = "충남">충남</option>
                            <option value = "전북">전북</option>
                            <option value = "전남">전남</option>
                            <option value = "경북">경북</option>
                            <option value = "경남">경남</option>
                        </select>
                        <br></br>
                        직업 : <input type = "text" name="job" value = {this.state.job} onChange = {this.handleValueChange}></input>
                        <br></br>

                    </DialogContent>
                    <DialogActions>
                        <Button variant = "contained"  color="primary" onClick={this.handleFormSubmit}>수정</Button>
                        <Button variant = "contained"  color="primary" onClick={this.handleClickClose}>취소</Button>
                    </DialogActions>

                </Dialog>
            </div>
        )
    }



}


export default withStyles(styles)(CustomerUpdate);