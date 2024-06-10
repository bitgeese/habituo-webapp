<script>
  import WipList from "$lib/components/lists/WipList.svelte";
  /** @type {import('./$types').PageData} */
  export let data;
  let wipList = data.wipList ?? [];
</script>


<WipList {wipList}/>