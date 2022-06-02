<template lang="html">
  <main>
    <header>
      <h1><NuxtLink to="/">Scott Fryxell</NuxtLink></h1>
      <nav>
        <NuxtLink to="/resume">Work</NuxtLink>
        <a hidden href="https://cash.app/$ScottFryxell">$</a>
      </nav>
    </header>
    <Nuxt />
    <footer />
  </main>
</template>
<style lang="stylus">
[outline],
[outline] *
  outline: 0.15vmin dashed grey
main
  margin: auto
  flex-direction: column
  h1, h2, h3, a
    background: -webkit-linear-gradient(60deg, blue , red)
    background-clip: text
    -webkit-background-clip: text
    -webkit-text-fill-color: hsl(0deg 0% 0% / 0%)


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
