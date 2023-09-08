<script>
    
    import { onMount } from 'svelte';
    /*
    import PocketBase from 'pocketbase';

    const pb = new PocketBase('http://127.0.0.1:8090');

    let items = [];

    onMount(async () => {
        const data = await pb.collection('Test_Field').getFullList();
        console.log(data);
        items = data;
    });
    */

    
    onMount(() => {
        {
            const tooltip = document.querySelector('.manual-tooltip');
            const toggle = document.querySelector('.manual-toggle');

            toggle.addEventListener('click', () => (tooltip.open = !tooltip.open));
        }
    }) 


</script>

<div class="container">

    <sl-tooltip
        trigger="manual"
        placement="bottom"
        class="manual-tooltip"
    >
        <div class="content" slot="content">
            Suck a fat one, yooooo
        </div>

        <sl-button class="manual-toggle">Toggle Manually</sl-button>
    </sl-tooltip>

</div>  

<style lang="scss">

    @import '$styles/params';

    .container {
        width: 100%;
        height: 100%;
        padding: 1rem;
        display: flex;
        gap: 1rem;
        padding: 1rem;
    }

    #text {
        display: inline-block;
        width: 30vh;
        height: fit-content;
    }

    #text ~ sl-popup .box {
        width: 100%;
        height: fit-content;
        background: var(--sl-color-primary-600);
        border-radius: var(--sl-border-radius-medium);
    }

    .card-header [slot='header'] {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

</style>