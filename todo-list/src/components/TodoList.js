import TodoItem from './TodoItem';

function TodoList({ todoList }) {
    return todoList.length ? (
        <ul>
            {todoList.map((todo) => (
                <TodoItem 
                    key={todo.id }
                    todo={ todo }/>
            ))};
        </ul>
       
    ) : (
        <p>Aucune todo pour le moment</p>
    );
    
}
export default TodoList;