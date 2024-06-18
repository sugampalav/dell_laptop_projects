import React, {Component} from "react"
// import editIcon from "./public/edit.svg"

class EditBox extends Component {
    state = {
        value:"Avengers",
        isInEditMode:false
    }
    
    changeEditMode = () =>{
        this.setState({
            isInEditMode: !this.state.isInEditMode
        })
    }

    updateValue = () => {
        this.setState({
            isInEditMode: false,
            value: this.refs.textInput.value
        })
    }

    renderEditedInput = () => {
        return(
        <div>
            <input type="text" defaultValue={this.state.value} ref="textInput"/><br/>
            <button onClick={this.updateValue}>Save</button>
        </div>
        )
    }

    renderDefaultInput = () => {
        return(
        <div onDoubleClick={this.changeEditMode}>
            {this.state.value}<button onClick={this.changeEditMode}>Edit</button>
        </div>
        )
    }

    render(){
        return(
            <div className="container">
                {this.state.isInEditMode ? this.renderEditedInput() : this.renderDefaultInput()}
            </div>
        )
    }
}

export default EditBox