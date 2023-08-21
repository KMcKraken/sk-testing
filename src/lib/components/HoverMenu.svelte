<script>
    import { onDestroy } from "svelte";

    let isVisible = false;
    let isClicked = false;
    let content = "This is a tooltip";

    function handleClick() {

        isClicked = !isClicked;
        isVisible = isClicked;

        if (isClicked) {
            document.addEventListener("click", handleDocumentClick);
        } else {
            document.removeEventListener("click", handleDocumentClick);
        }
    }

    function handleDocumentClick(e) {
        if (!e.target.closest(".tooltip")) {
            isVisible = false;
            isClicked = false;
            document.removeEventListener("click", handleDocumentClick);
        }
    }

    onDestroy(() => {
        document.removeEventListener("click", handleDocumentClick);
    });
</script>

<div class="container" on:click={handleClick}>
    <div>
        <slot name="main" />
        {#if isVisible}
            <div class="tooltip">
                <slot name="tooltip" />
            </div>
        {/if}
    </div>
</div>

<style lang="scss">
    @import "$styles/params";

    .tooltip {
        position: absolute;
        background: $text-main;
        padding: 0.4rem 0.8rem;
        color: $bg-1;
        border-radius: 0.4rem;
    }
</style>
