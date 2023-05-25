import './Select.scss';
import Select from 'react-select';

const SelectSubject = ({options, onChange}) => {

    const optionStyles = {
        option: (styles, {isSelected}) => {
            return {
                ...styles,
                backgroundColor: isSelected ? '#b5b5b5' : '$colorWhite',
                color: isSelected ? '$colorTextDarkGrey' : '$colorTextDarkGrey',
            }
        }
    }

    return(
        <Select styles={optionStyles}
            className="react-select-container"
            classNamePrefix="react-select"
            options={options}
            onChange={onChange}
            placeholder="Select a subject"
        />
    )
}

export default SelectSubject;


