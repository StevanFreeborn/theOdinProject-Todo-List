export function createTodo({ title, description, dueDate, priority, }) {
    const _title = title;
    const _description = description;
    const _dueDate = dueDate;
    const _priority = priority;
    return {
        get title() {
            return _title;
        },
        get description() {
            return _description;
        },
        get dueDate() {
            return _dueDate;
        },
        get priority() {
            return _priority;
        },
    };
}
