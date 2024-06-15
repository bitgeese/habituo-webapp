<script>
  import DailyRoutine from '$lib/components/lists/DailyRoutine.svelte';
  /** @type {import('./$types').PageData} */
  export let data;

  let dailyRoutine = data.dailyRoutine ?? [];
  let token = data.token ?? [];

  
</script>


<DailyRoutine {dailyRoutine} {token}/>
