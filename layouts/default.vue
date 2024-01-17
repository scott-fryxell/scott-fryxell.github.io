<template lang="html">
  <main>
    <header>
      <h1><NuxtLink to="/">Scott Fryxell</NuxtLink></h1>
      <nav>
        <NuxtLink to="/resume">Resume</NuxtLink>
      </nav>
    </header>
    <Nuxt />
    <footer />
  </main>
</template>
<style lang="stylus">
  @page
    size: A4
    margin-top: 2cm
    margin-bottom: 2cm
    margin-left: 2cm
    margin-right: 2cm
  @media print
    html
      color: var(--black-background) !important
    a
      color: var(--black-background) !important
      text-decoration: none !important
      border: 0 !important
      font-weight: 300 !important
      font-style: normal !important
    p
      line-height: 1.5
      max-width: inherit
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
        @print
          margin: 0
          padding-left: 2rem
      & > nav
        align-self: center
        @print
          display:none
        & > a
          margin-right: 1rem
    & > footer
      padding: 1em
</style>
