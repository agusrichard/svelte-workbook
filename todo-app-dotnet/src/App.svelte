<script>
  let name = "";
  let age = null || "";

  $: greet =
    name && age ? `Hello, my name is ${name} and I'm ${age} years old.` : "";

  const handleInput = (e) => {
    name = e.target.value;
  };
</script>

<main>
  <h1>Hello World!!</h1>
  <p>Name: {name}</p>
  <p>Age: {age}</p>
  <p>{greet}</p>
  <input type="text" placeholder="Enter your name" on:input={handleInput} />
  <input type="number" placeholder="Enter your age" bind:value={age} />
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
    font-size: 4em;
    font-weight: 100;
  }

  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
</style>
