<template lang="html">
  <main>
    <header>
      <h1><a href="/">Scott Fryxell</a></h1>
      <nav>
        <a href="/resume">Work</a>
        <a href="https://cash.app/$ScottFryxell">$</a>
      </nav>
    </header>
    <Nuxt/>
    <footer/>
  </main>
</template>
<style lang="stylus">
  [outline],
  [outline] *
    outline: 0.15vmin dashed grey
  main
    margin: auto
    flex-direction: column
    & > header
      display: flex
      & > h1
        padding: 1rem
      & > nav
        align-self: center
        & > a
          margin-right: 1rem
    & > footer
      padding: 1em

</style>
