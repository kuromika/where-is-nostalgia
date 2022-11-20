import OptionButton from './OptionButton';

const Dropdown = (props) => {

    return (
        <div className="dropdown" style={props.style}>
            {props.options.map((option, index) =>
                <OptionButton
                    name={option}
                    key={index}
                    update={props.update}
                />)
            }
        </div>
    )
}

export default Dropdown;