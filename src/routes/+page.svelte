<script>
    import { page } from '$app/stores';
  
    /** @type {import('./$types').PageData} */
    export let data;
  
    let habits = data.habits ?? [{name: "Drink glass of water"}];
  </script>
  
    Hello, {data.user ? data.user.username : 'Guest'}

    <ul>
        {#each habits as habit}
          <li class="mb-2">
            <div class="flex justify-between items-center">
              <span>{habit.name}</span>
            </div>
          </li>
        {:else}
          <li>No habits found.</li>
        {/each}
      </ul>
  
      

  