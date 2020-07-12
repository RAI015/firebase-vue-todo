<template>
  <div>
    <h1>Todoリスト</h1>
    <todo-link />
    <todo-form @handleParentAddTodo="handleParentAddTodo" />
    <todo-list :todos="todos"
      @handleParentDeleteTodo="handleParentDeleteTodo"
      @handleParentCompleteTodo="handleParentCompleteTodo" />
  </div>
</template>

<script>
import TodoForm from '@/components/TodoForm';
import TodoList from '@/components/TodoList';
import TodoLink from '@/components/TodoLink';

export default {
  name: 'Todo',
  components: {
    TodoForm,
    TodoList,
    TodoLink,
  },
  data() {
    return {
      todos: [],
    };
  },
  methods: {
    handleParentAddTodo(value) {
      if (value) {
        this.todos.unshift({ text: value, complete: false });
      }
    },
    handleParentDeleteTodo(index) {
      this.todos.splice(index, 1);
    },
    handleParentCompleteTodo(index) {
      this.todos[index].complete = !this.todos[index].complete;
    },
  },
};
</script>

<style scoped>
</style>
