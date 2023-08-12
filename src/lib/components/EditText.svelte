<script>
    import { onMount, onDestroy } from "svelte";
    import { afterUpdate } from "svelte";
    import PocketBase from "pocketbase";

    export let text = "Click to edit";
    export let charId = "";
    export let fieldId = "";

    let inputValue = text;
    let isEditing = false;
    let isInputFocused = false;

    let documentAvailable = false;
    const pb = new PocketBase("http://127.0.0.1:8090");

    function startEditing() {
        isEditing = true;
        inputValue = text;
    }

    async function stopEditing(event) {
        if (event.key === "Enter") {
        text = event.target.value;
        isEditing = false;
        event.target.value = "";

        // Update the data on PocketBase
        const collection = pb.collection("Test_Field");
        const items = await collection.getFullList();
        const item = items.find((item) => item.id === charId);
            if (item) {
                item[fieldId] = text;
                await collection.update(charId, { [fieldId]: text });
            }
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
{:else if isEditing}
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
  @import "$styles/params";

  input,
  textarea {
    background: transparent;
    outline: none;
    border: none;
    font-size: 1rem;
    font-family: inherit;
    color: $primary;
    border-bottom: 1px solid $primary;
  }

  input {
    width: fit-content;
    height: fit-content;
  }
</style>