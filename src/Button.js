import './Button.css';

export function Button(props) {
    const {
        text,
        smallText,
    } = props;

    return (
        <button
            className='Button'
            {...props}
        >
            <strong>{text}</strong>
            <> </>
            <small>{smallText}</small>
        </button>
    );
}
