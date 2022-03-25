<script>
  import Box from "./Box.svelte";

  let message = "Hello!";
  let people = [
    {
      name: "John",
      age: 30,
    },
    {
      name: "Jane",
      age: 20,
    },
    {
      name: "Jim",
      age: 10,
    },
  ];

  const handleClick = (person) => {
    people = people.filter((p) => p.name !== person.name);
  };

  const changeMessage = () => {
    message = "Hello World";
  };
</script>

<main>
  <Box {message} on:click|once={changeMessage} />
  {#each people as person}
    <div>
      <h1>{person.name}</h1>
      <p>{person.age}</p>
      {#if person.age > 20}
        I am so old
      {/if}
      <button on:click={() => handleClick(person)}>Delete me</button>
    </div>
  {:else}
    <p>No people</p>
  {/each}
</main>

<style>
  main {
    text-align: center;
    padding: 1em;
    max-width: 240px;
    margin: 0 auto;
  }

  h1 {
    color: #ff3e00;
    text-transform: uppercase;
    font-size: 1em;
    font-weight: 100;
  }

  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
</style>
