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
  font-family: "游ゴシック体", YuGothic, "游ゴシック Medium", "Yu Gothic Medium",
    "游ゴシック", "Yu Gothic", sans-serif;
  color: #424242;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  scroll-behavior: smooth;
  line-break: strict;
}

.heading {
  font-family: "Noto Serif Japanese", serif;
  font-feature-settings: palt, 1;
  font-kerning: normal;
}

p {
  font-size: 16px;
  font-weight: medium;
  font-feature-settings: palt, 0;
  font-kerning: none;
  line-height: 32px;
  text-align: justify;
}
</style>
