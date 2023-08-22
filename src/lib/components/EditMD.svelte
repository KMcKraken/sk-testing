<script>
    import SvelteMarkdown from "svelte-markdown";
    export let value = "# Hello, world!"; // Initial value
    let editing = false; // State variable to toggle between edit/view mode
</script>

{#if editing}
    <textarea
        bind:value
        on:keydown={(e) => {
            if (e.key === "Enter") editing = false;
        }}
    />
{:else}
    <div
        on:dblclick={() => {
            editing = true;
        }}
    >
        <SvelteMarkdown source={value} />
    </div>
{/if}
