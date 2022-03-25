<script>
  export let message;
  let shouldSayHello = false;

  const handleClick = () => {
    shouldSayHello = !shouldSayHello;
  };
</script>

<div class="box">
  <h1 class:hello={shouldSayHello}>{message}</h1>
  <button on:click={handleClick}>Click me</button>
  <button on:click>What?</button>
</div>

<style>
  div.box {
    background-color: #ff3e00;
    color: #fff;
    padding: 1em;
    margin: 1em;
    text-align: center;
    border-radius: 5px;
  }

  .hello {
    color: black;
  }
</style>
