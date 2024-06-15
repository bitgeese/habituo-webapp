<script>
  import { quintOut } from "svelte/easing";
  import { crossfade } from "svelte/transition";
  import { flip } from "svelte/animate";
  import { reorderHabits } from '$lib/utils/api'; 
  import { createEventDispatcher } from "svelte";

  const [send, receive] = crossfade({
    duration: d => Math.sqrt(d * 200),

    fallback(node, params) {
      const style = getComputedStyle(node);
      const transform = style.transform === "none" ? "" : style.transform;

      return {
        duration: 600,
        easing: quintOut,
        css: t => `
          transform: ${transform} scale(${t});
          opacity: ${t}
        `
      };
    }
  });

  let isOver = false;
  const getDraggedParent = node =>
    node.dataset && node.dataset.index
      ? node.dataset
      : getDraggedParent(node.parentNode);

  const start = ev => {
    ev.dataTransfer.setData("sourceId", ev.target.dataset.id);
  };

  const over = ev => {
    ev.preventDefault();
    let dragged = getDraggedParent(ev.target);
    if (isOver !== dragged.id) isOver = JSON.parse(dragged.id);
  };

  const leave = ev => {
    let dragged = getDraggedParent(ev.target);
    if (isOver === dragged.id) isOver = false;
  };

  const drop = async ev => {
    isOver = false;
    ev.preventDefault();
    let dragged = getDraggedParent(ev.target);
    let fromId = ev.dataTransfer.getData("sourceId");
    let toId = dragged.id;

    try {
      await reorderHabits(fromId, toId, token);
      reorder({ fromId, toId });
    } catch (error) {
      console.error(error);
    }
  };

  const dispatch = createEventDispatcher();
  const reorder = ({ fromId, toId }) => {
    let newList = [...list];
    let fromIndex = newList.findIndex(item => item.id === parseInt(fromId));
    let toIndex = newList.findIndex(item => item.id === parseInt(toId));

    newList[fromIndex] = [newList[toIndex], (newList[toIndex] = newList[fromIndex])][0];

    dispatch("sort", newList);
  };

  const getKey = item => (key ? item[key] : item);

  export let list;
  export let key;
  export let token;  // Accept token
</script>

{#if list && list.length}
  <ul class="mt-2 space-y-4">
    {#each list as item, index (getKey(item))}
      <li
        data-index={index}
        data-id={item.id}
        draggable="true"
        on:dragstart={start}
        on:dragover={over}
        on:dragleave={leave}
        on:drop={drop}
        in:receive={{ key: getKey(item) }}
        out:send={{ key: getKey(item) }}
        animate:flip={{ duration: 300 }}
        class:over={getKey(item) === isOver}>
        <slot {item} {index}>
          <p>{getKey(item)}</p>
        </slot>
      </li>
    {/each}
  </ul>
{/if}
