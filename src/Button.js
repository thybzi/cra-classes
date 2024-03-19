import classes from './Button.module.css';

export function Button(props) {
    const {
        text,
        smallText,
    } = props;

    return (
        <button
            className={classes.Button}
            {...props}
        >
            <strong>{text}</strong>
            <> </>
            <small>{smallText}</small>
        </button>
    );
}
