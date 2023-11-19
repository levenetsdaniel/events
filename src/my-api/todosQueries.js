export const getTodos = () =>
    fetch('https://api.github.com/repos/TanStack/query').then(
        (res) => res.json(),
    )

