<script>
    import { onMount, onDestroy } from "svelte";
    import { afterUpdate } from "svelte";

    export let text = "Click to edit";
    let inputValue = text;
    let isEditing = false;
    let isInputFocused = false;

    let documentAvailable = false;

    function startEditing() {
        isEditing = true;
        inputValue = text;
    }

    function stopEditing(event) {
        if (event.key === "Enter") {
            text = event.target.value;
            isEditing = false;
            event.target.value = "";
        }
    }

    function resetText() {
        if (!isInputFocused) {
            isEditing = false;
            inputValue = text;
        }
    }

    function handleInputFocus() {
        isInputFocused = true;
    }

    function handleInputBlur() {
        isInputFocused = false;
    }

    onMount(() => {
        documentAvailable = true;
    });

    onDestroy(() => {
        documentAvailable = false;
    });

    afterUpdate(() => {
        if (documentAvailable) {
            document.addEventListener("click", resetText);
        }
    });
</script>

{#if !isEditing}
    <p on:dblclick={startEditing}>{text}</p>
{:else}
    <input
        type="text"
        class="input"
        value={inputValue}
        on:keydown={stopEditing}
        on:focus={handleInputFocus}
        on:blur={handleInputBlur}
    />
{/if}

<style lang="scss">

    @import '$styles/params';

    

</style>