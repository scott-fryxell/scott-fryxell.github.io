<template lang="html">
  <main>
    <header>
      <link rel="stylesheet" href="https://realness.online/css/app~d0ae3f07.f59223d8.css" preload="true">
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
    h1
      padding: 1rem
      text-transform: capitalize
      & > a
        color: inherit
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
