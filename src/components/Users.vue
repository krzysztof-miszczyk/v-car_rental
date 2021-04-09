<template>
  
</template>

<script>
import Task from './Task'
export default {
  name: 'Tasks',
  props: {
    tasks: Array,
  },
  components: {
    Task,
  },
  emits: ['delete-task', 'toggle-reminder'],

 methods: {

    }
}
 </script>