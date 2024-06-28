<script>
  import BaseHabitList from './BaseHabitList.svelte';

  export let dailyRoutine = [];
  export let token;
</script>

<BaseHabitList 
  list={dailyRoutine} 
  token={token} 
  title="Daily Routine" 
  statusAdd="core" 
  showDate={true}
/>
