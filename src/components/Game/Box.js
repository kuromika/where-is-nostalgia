import AlertBox from "../AlertBox"
import Dropdown from "../Dropdown"

const Box = (props) => {

    switch (props.userState) {

        case 'Dropdown':
            return <Dropdown
                style={props.style}
                options={props.options}
                update={props.update}
            />
        case 'Correct':
            return <AlertBox
                class='correct'
                text='correct'
                style={props.style}
            />
        case 'Incorrect':
            return <AlertBox 
                class='incorrect'
                text='wrong'
                style={props.style}
            />
        default:
            return null
    }
}

export default Box;