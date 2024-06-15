<script>
  import WipList from "$lib/components/lists/WipList.svelte";
  /** @type {import('./$types').PageData} */
  export let data;
  let wipList = data.wipList ?? [];
  let token = data.token ?? [];

</script>


<WipList {wipList} {token}/>