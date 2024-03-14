export function Menu({
    children,
}) {
    return (
        <ol>{children || <li>пусто</li>}</ol>
    );
}
