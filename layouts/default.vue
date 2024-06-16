<template>
  <div>
    <Header />
    <NuxtPage />
    <Footer />
  </div>
</template>
<style>
html,
body {
  font-family: "Noto Sans JP", sans-serif;
  color: #424242;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  scroll-behavior: smooth;
  line-break: strict;
}

.heading {
  font-feature-settings: palt, 1;
  font-kerning: normal;
}

p {
  font-size: 16px;
  font-weight: 400;
  font-feature-settings: palt, 0;
  font-kerning: none;
  line-height: 24px;
  text-align: justify;
}
</style>
