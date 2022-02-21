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
  main
    margin: auto
    flex-direction: column
    h2
      padding: 1rem
      text-transform: capitalize
      & > a
        // color: inherit
        @media (prefers-color-scheme: dark)
          color: rgba(208, 208, 201, 0.9)
    & > header
      display: flex
      & > h1
        padding: 1rem
      & > nav
        align-self: center
        & > a
          margin-right: 1rem
    & > footer
      padding:1em
</style>
