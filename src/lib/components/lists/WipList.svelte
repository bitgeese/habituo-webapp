<script>
  import BaseHabitList from './BaseHabitList.svelte';

  export let wipList = [];
  export let token;
</script>

<BaseHabitList 
  list={wipList} 
  token={token} 
  title="Habits In Progress" 
  statusAdd="wip"
/>
