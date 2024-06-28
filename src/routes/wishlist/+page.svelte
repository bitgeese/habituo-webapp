<script>
  import Wishlist from "$lib/components/lists/Wishlist.svelte";
  /** @type {import('./$types').PageData} */
  export let data;

  let wishlist = data.wishlist ?? [];
  let dailyRoutine = data.dailyRoutine ?? [];
  let token = data.token ?? [];
</script>

<Wishlist {wishlist} {token} {dailyRoutine}/>