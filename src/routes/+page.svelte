<script>

    import SvelteMarkdown from 'svelte-markdown';

    import EditText from "$comp/EditText.svelte";

    import { onMount } from 'svelte';
    import PocketBase from 'pocketbase';

    const pb = new PocketBase('http://127.0.0.1:8090');

    let items = [];

    onMount(async () => {
        const data = await pb.collection('Test_Field').getFullList();
        console.log(data);
        items = data;
    });

</script>

<div class="container">

{#each items as item}
    <div class="card">
        <EditText
            text="{item.name}"
            charId="{item.id}"
            fieldId="name"
        />
        <p class="race">{item.race}</p>
        <EditText
            text="{item.desc}"
            charId="{item.id}"
            fieldId="desc"
        />
        <EditText
            text="{item.asp_1}"
            charId="{item.id}"
            fieldId="asp_1"
        />
        <EditText
            text="{item.asp_2}"
            charId="{item.id}"
            fieldId="asp_2"
        />
        <EditText
            text="{item.asp_3}"
            charId="{item.id}"
            fieldId="asp_3"
        />
    </div>
{/each}

</div>

<style lang="scss">

    @import '$styles/params';

    .container {
        width: 100%;
        height: 100%;
        display: flex;
        gap: 1rem;
        padding: 1rem;
    }

    .card {
        padding: 1rem;
        width: 100%;
        max-width: 350px;
        height: fit-content;
        display: flex;
        flex-direction: column;
        gap: .4rem;
        border: 1px solid $bg-2;
        border-radius: .4rem;

    }

</style>