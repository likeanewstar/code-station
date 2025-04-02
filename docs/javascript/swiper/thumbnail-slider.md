---
sidebar_position: 1
title: Preview Next Slide Thumbnails
description: Swiper.js를 사용하여 섬네일이 있는 슬라이더를 구현하는 방법을 알아봅니다.
---

# Preview Next Slide Thumbnails

## Overview

이 가이드에서는 Swiper.js를 사용하여 메인 슬라이더와 섬네일 슬라이더가 연동된 갤러리를 만드는 방법을 설명합니다.

## Getting Started

먼저 Swiper를 설치해야 합니다:

```html
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css"
/>
<script src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js"></script>
```

## HTML Structure

```html
<div class="swiper main-swiper">
  <div class="swiper-wrapper">
    <div class="swiper-slide">슬라이드 1</div>
    <div class="swiper-slide">슬라이드 2</div>
    <div class="swiper-slide">슬라이드 3</div>
  </div>
</div>

<div class="swiper thumb-swiper">
  <div class="swiper-wrapper">
    <div class="swiper-slide">섬네일 1</div>
    <div class="swiper-slide">섬네일 2</div>
    <div class="swiper-slide">섬네일 3</div>
  </div>
</div>
```

## JavaScript Code

```javascript {1,3-4} title="example.js"ㄴ
const thumbSwiper = new Swiper('.thumb-swiper', {
  spaceBetween: 10,
  slidesPerView: 4,
  freeMode: true,
  watchSlidesProgress: true,
})

const mainSwiper = new Swiper('.main-swiper', {
  spaceBetween: 10,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  thumbs: {
    swiper: thumbSwiper,
  },
})
```

## CSS Styles

```css
.main-swiper {
  width: 100%;
  height: 300px;
}

.thumb-swiper {
  width: 100%;
  height: 100px;
  margin-top: 10px;
}

.swiper-slide {
  background: #f1f1f1;
  display: flex;
  justify-content: center;
  align-items: center;
}
```

## Result

위 코드를 실행하면 메인 슬라이더와 하단의 섬네일 슬라이더가 연동되어 동작하는 갤러리가 완성됩니다.

## Demo

아래에서 실제 동작하는 예제를 확인할 수 있습니다:

<iframe 
  height="600" 
  style={{width: '100%'}} 
  scrolling="no" 
  title="Swiper Thumbnail Gallery" 
  src="https://codepen.io/newstar_/embed/wBvQBZE?default-tab=result" 
  frameborder="no" 
  loading="lazy" 
  allowtransparency="true" 
  allowfullscreen="true"
>
  See the Pen <a href="https://codepen.io/newstar_/pen/wBvQBZE">Swiper Thumbnail Gallery</a> by newstar 
  (<a href="https://codepen.io/newstar_">@newstar_</a>) on <a href="https://codepen.io">CodePen</a>.
</iframe>
