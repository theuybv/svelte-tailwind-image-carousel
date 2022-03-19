var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var stdin_exports = {};
__export(stdin_exports, {
  default: () => Routes
});
module.exports = __toCommonJS(stdin_exports);
var import_index_13c0de55 = require("../../chunks/index-13c0de55.js");
var import_faker = require("@faker-js/faker");
var AspectRatio = /* @__PURE__ */ ((AspectRatio2) => {
  AspectRatio2[AspectRatio2["16/9"] = 1.7777777777777777] = "16/9";
  AspectRatio2[AspectRatio2["9/16"] = 0.5625] = "9/16";
  AspectRatio2[AspectRatio2["3/2"] = 1.5] = "3/2";
  AspectRatio2[AspectRatio2["3/4"] = 0.75] = "3/4";
  AspectRatio2[AspectRatio2["4/3"] = 1.3333333333333333] = "4/3";
  AspectRatio2[AspectRatio2["1/1"] = 1] = "1/1";
  return AspectRatio2;
})(AspectRatio || {});
const tailWindCSSAspectRatios = {
  "16/9": "aspect-[16/9]",
  "9/16": "aspect-[9/6]",
  "3/2": "aspect-[3/2]",
  "3/4": "aspect-[3/4]",
  "4/3": "aspect-[4/3]",
  "1/1": "aspect-[1/1]"
};
const ImageThumb = (0, import_index_13c0de55.c)(($$result, $$props, $$bindings, slots) => {
  let { width, src, alt, ref = void 0, ratio: ratio2 = "4/3" } = $$props;
  if ($$props.width === void 0 && $$bindings.width && width !== void 0)
    $$bindings.width(width);
  if ($$props.src === void 0 && $$bindings.src && src !== void 0)
    $$bindings.src(src);
  if ($$props.alt === void 0 && $$bindings.alt && alt !== void 0)
    $$bindings.alt(alt);
  if ($$props.ref === void 0 && $$bindings.ref && ref !== void 0)
    $$bindings.ref(ref);
  if ($$props.ratio === void 0 && $$bindings.ratio && ratio2 !== void 0)
    $$bindings.ratio(ratio2);
  return `<div${(0, import_index_13c0de55.a)("class", `grid ${tailWindCSSAspectRatios[ratio2]}`, 0)}${(0, import_index_13c0de55.a)("style", `min-width: ${width}px;`, 0)}${(0, import_index_13c0de55.a)("this", ref, 0)}><button><img width="${"100%"}" height="${"100%"}"${(0, import_index_13c0de55.a)("src", src, 0)}${(0, import_index_13c0de55.a)("alt", alt, 0)}${(0, import_index_13c0de55.a)("class", `${tailWindCSSAspectRatios[ratio2]} object-cover bg-black`, 0)}></button></div>`;
});
const ImageCarousel = (0, import_index_13c0de55.c)(($$result, $$props, $$bindings, slots) => {
  let currentImage;
  let imageContainerWidth;
  let thumbWidth;
  let { images = [], imageAspectRatio = "3/2", thumbnailAspectRatio = "4/3", thumbsPerView = 6, imageMaxHeight = 400 } = $$props;
  let _imageContainer;
  let _imageContainerWidth;
  let _thumbsContainer;
  let _thumbsContainerHeight;
  let _imageThumbs = [];
  if ($$props.images === void 0 && $$bindings.images && images !== void 0)
    $$bindings.images(images);
  if ($$props.imageAspectRatio === void 0 && $$bindings.imageAspectRatio && imageAspectRatio !== void 0)
    $$bindings.imageAspectRatio(imageAspectRatio);
  if ($$props.thumbnailAspectRatio === void 0 && $$bindings.thumbnailAspectRatio && thumbnailAspectRatio !== void 0)
    $$bindings.thumbnailAspectRatio(thumbnailAspectRatio);
  if ($$props.thumbsPerView === void 0 && $$bindings.thumbsPerView && thumbsPerView !== void 0)
    $$bindings.thumbsPerView(thumbsPerView);
  if ($$props.imageMaxHeight === void 0 && $$bindings.imageMaxHeight && imageMaxHeight !== void 0)
    $$bindings.imageMaxHeight(imageMaxHeight);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    currentImage = images[0];
    imageContainerWidth = _imageContainerWidth;
    thumbWidth = imageContainerWidth / thumbsPerView - 6.7;
    $$rendered = `
<section class="${"flex flex-col gap-2"}"><div${(0, import_index_13c0de55.a)("style", `max-height: ${imageMaxHeight}px`, 0)}${(0, import_index_13c0de55.a)("class", `${tailWindCSSAspectRatios[imageAspectRatio]}`, 0)}${(0, import_index_13c0de55.a)("this", _imageContainer, 0)}><img width="${"100%"}" height="${"100%"}"${(0, import_index_13c0de55.a)("src", currentImage.imageSrc, 0)}${(0, import_index_13c0de55.a)("alt", currentImage.alt, 0)}${(0, import_index_13c0de55.a)("class", `${tailWindCSSAspectRatios[imageAspectRatio]} object-contain bg-black`, 0)}></div>
    <div class="${"relative"}"><nav class="${"px-2"}"><button${(0, import_index_13c0de55.a)("style", `top: ${_thumbsContainerHeight / 2 - 16}px`, 0)} type="${"button"}" class="${[
      (0, import_index_13c0de55.e)(`absolute -left-0 top-[${_thumbsContainerHeight / 2}] bg-white p-1 opacity-75`),
      "hidden"
    ].join(" ").trim()}"><svg xmlns="${"http://www.w3.org/2000/svg"}" class="${"h-6 w-6"}" fill="${"none"}" viewBox="${"0 0 24 24"}" stroke="${"currentColor"}" stroke-width="${"2"}"><path stroke-linecap="${"round"}" stroke-linejoin="${"round"}" d="${"M15 19l-7-7 7-7"}"></path></svg></button>
            <button${(0, import_index_13c0de55.a)("style", `top: ${_thumbsContainerHeight / 2 - 16}px`, 0)} type="${"button"}" class="${[
      (0, import_index_13c0de55.e)(`absolute right-0 bg-white p-1 opacity-75`),
      "hidden"
    ].join(" ").trim()}"><svg xmlns="${"http://www.w3.org/2000/svg"}" class="${"h-6 w-6"}" fill="${"none"}" viewBox="${"0 0 24 24"}" stroke="${"currentColor"}" stroke-width="${"2"}"><path stroke-linecap="${"round"}" stroke-linejoin="${"round"}" d="${"M9 5l7 7-7 7"}"></path></svg></button></nav>
        <section${(0, import_index_13c0de55.a)("style", `max-width: ${imageContainerWidth}px;`, 0)} class="${"flex flex-row gap-x-2 overflow-hidden "}"${(0, import_index_13c0de55.a)("this", _thumbsContainer, 0)}>${(0, import_index_13c0de55.b)(images, ({ imageSrc, thumbSrc, alt }, index) => {
      return `${(0, import_index_13c0de55.v)(ImageThumb, "ImageThumb").$$render($$result, {
        width: thumbWidth,
        src: thumbSrc,
        alt,
        ratio: thumbnailAspectRatio,
        ref: _imageThumbs[index]
      }, {
        ref: ($$value) => {
          _imageThumbs[index] = $$value;
          $$settled = false;
        }
      }, {})}`;
    })}</section></div></section>`;
  } while (!$$settled);
  return $$rendered;
});
var Circle_svelte_svelte_type_style_lang = "";
var Circle2_svelte_svelte_type_style_lang = "";
var Circle3_svelte_svelte_type_style_lang = "";
const css = {
  code: ".wrapper.svelte-1vf8im1{width:var(--size);height:var(--size);display:flex;justify-content:center;align-items:center;line-height:0;box-sizing:border-box}.inner.svelte-1vf8im1{transform:scale(calc(var(--floatSize) / 52))}.ball-container.svelte-1vf8im1{animation:svelte-1vf8im1-ballTwo var(--duration) infinite;width:44px;height:44px;flex-shrink:0;position:relative}.single-ball.svelte-1vf8im1{width:44px;height:44px;position:absolute}.ball.svelte-1vf8im1{width:20px;height:20px;border-radius:50%;position:absolute;animation:svelte-1vf8im1-ballOne var(--duration) infinite ease}.ball-top-left.svelte-1vf8im1{background-color:var(--ballTopLeftColor);top:0;left:0}.ball-top-right.svelte-1vf8im1{background-color:var(--ballTopRightColor);top:0;left:24px}.ball-bottom-left.svelte-1vf8im1{background-color:var(--ballBottomLeftColor);top:24px;left:0}.ball-bottom-right.svelte-1vf8im1{background-color:var(--ballBottomRightColor);top:24px;left:24px}@keyframes svelte-1vf8im1-ballOne{0%{position:absolute}50%{top:12px;left:12px;position:absolute;opacity:0.5}100%{position:absolute}}@keyframes svelte-1vf8im1-ballTwo{0%{transform:rotate(0deg) scale(1)}50%{transform:rotate(360deg) scale(1.3)}100%{transform:rotate(720deg) scale(1)}}",
  map: null
};
const Circle3 = (0, import_index_13c0de55.c)(($$result, $$props, $$bindings, slots) => {
  let { size = "60" } = $$props;
  let { unit = "px" } = $$props;
  let { ballTopLeft = "#FF3E00" } = $$props;
  let { ballTopRight = "#F8B334" } = $$props;
  let { ballBottomLeft = "#40B3FF" } = $$props;
  let { ballBottomRight = "#676778" } = $$props;
  let { duration = "1.5s" } = $$props;
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.unit === void 0 && $$bindings.unit && unit !== void 0)
    $$bindings.unit(unit);
  if ($$props.ballTopLeft === void 0 && $$bindings.ballTopLeft && ballTopLeft !== void 0)
    $$bindings.ballTopLeft(ballTopLeft);
  if ($$props.ballTopRight === void 0 && $$bindings.ballTopRight && ballTopRight !== void 0)
    $$bindings.ballTopRight(ballTopRight);
  if ($$props.ballBottomLeft === void 0 && $$bindings.ballBottomLeft && ballBottomLeft !== void 0)
    $$bindings.ballBottomLeft(ballBottomLeft);
  if ($$props.ballBottomRight === void 0 && $$bindings.ballBottomRight && ballBottomRight !== void 0)
    $$bindings.ballBottomRight(ballBottomRight);
  if ($$props.duration === void 0 && $$bindings.duration && duration !== void 0)
    $$bindings.duration(duration);
  $$result.css.add(css);
  return `<div class="${"wrapper svelte-1vf8im1"}" style="${"--size: " + (0, import_index_13c0de55.e)(size) + (0, import_index_13c0de55.e)(unit) + "; --floatSize: " + (0, import_index_13c0de55.e)(size) + "; --ballTopLeftColor: " + (0, import_index_13c0de55.e)(ballTopLeft) + "; --ballTopRightColor: " + (0, import_index_13c0de55.e)(ballTopRight) + "; --ballBottomLeftColor: " + (0, import_index_13c0de55.e)(ballBottomLeft) + "; --ballBottomRightColor: " + (0, import_index_13c0de55.e)(ballBottomRight) + "; --duration: " + (0, import_index_13c0de55.e)(duration) + ";"}"><div class="${"inner svelte-1vf8im1"}"><div class="${"ball-container svelte-1vf8im1"}"><div class="${"single-ball svelte-1vf8im1"}"><div class="${"ball ball-top-left svelte-1vf8im1"}">\xA0</div></div>
      <div class="${"contener_mixte"}"><div class="${"ball ball-top-right svelte-1vf8im1"}">\xA0</div></div>
      <div class="${"contener_mixte"}"><div class="${"ball ball-bottom-left svelte-1vf8im1"}">\xA0</div></div>
      <div class="${"contener_mixte"}"><div class="${"ball ball-bottom-right svelte-1vf8im1"}">\xA0</div></div></div></div></div>`;
});
var DoubleBounce_svelte_svelte_type_style_lang = "";
var GoogleSpin_svelte_svelte_type_style_lang = "";
var ScaleOut_svelte_svelte_type_style_lang = "";
var SpinLine_svelte_svelte_type_style_lang = "";
var Stretch_svelte_svelte_type_style_lang = "";
var BarLoader_svelte_svelte_type_style_lang = "";
var Jumper_svelte_svelte_type_style_lang = "";
var RingLoader_svelte_svelte_type_style_lang = "";
var SyncLoader_svelte_svelte_type_style_lang = "";
var Rainbow_svelte_svelte_type_style_lang = "";
var Wave_svelte_svelte_type_style_lang = "";
var Firework_svelte_svelte_type_style_lang = "";
var Pulse_svelte_svelte_type_style_lang = "";
var Jellyfish_svelte_svelte_type_style_lang = "";
var Chasing_svelte_svelte_type_style_lang = "";
var Shadow_svelte_svelte_type_style_lang = "";
var Square_svelte_svelte_type_style_lang = "";
var Moon_svelte_svelte_type_style_lang = "";
var Plane_svelte_svelte_type_style_lang = "";
var Diamonds_svelte_svelte_type_style_lang = "";
var Clock_svelte_svelte_type_style_lang = "";
const imagesCount = 10;
const ratio = "3/2";
const Routes = (0, import_index_13c0de55.c)(($$result, $$props, $$bindings, slots) => {
  let isLoading;
  let demoImages = [];
  AspectRatio[ratio];
  const demoCarousels = [
    {
      sourceImageAspectRatio: ratio,
      carouselImageAspectRatio: "3/2",
      thumbnailAspectRatio: "4/3",
      thumbsPerView: 6,
      imageMaxHeight: 600,
      imagesCount
    },
    {
      sourceImageAspectRatio: ratio,
      carouselImageAspectRatio: "4/3",
      thumbnailAspectRatio: "1/1",
      thumbsPerView: 4,
      imageMaxHeight: 400,
      imagesCount
    },
    {
      sourceImageAspectRatio: ratio,
      carouselImageAspectRatio: "1/1",
      thumbnailAspectRatio: "3/2",
      thumbsPerView: 2,
      imageMaxHeight: 200,
      imagesCount
    }
  ];
  isLoading = demoImages.length <= 0;
  return `${isLoading ? `<div class="${"flex flex-col justify-center items-center w-[100vw] h-[100vh] gap-1"}"><h1 class="${"text-1xl"}">please wait...</h1>
        ${(0, import_index_13c0de55.v)(Circle3, "Loader").$$render($$result, {
    size: "60",
    color: "#FF3E00",
    unit: "px",
    duration: "1s"
  }, {}, {})}</div>` : `<div class="${"container mx-auto px-4 sm:px-0 pt-4 pb-10"}"><h1 class="${"text-4xl mb-10 text-center"}">Slideshow Carousel with Svelte</h1>
        <div class="${"flex flex-col gap-6"}">${(0, import_index_13c0de55.b)(demoCarousels, (carousel, index) => {
    return `<div class="${"flex flex-row gap-4 items-center"}">${(0, import_index_13c0de55.v)(ImageCarousel, "ImageCarousel").$$render($$result, Object.assign({ images: demoImages }, carousel), {}, {})}
                    <pre><code class="${"text-base"}">${(0, import_index_13c0de55.e)(JSON.stringify(carousel, null, 2))}</code></pre>
                </div>`;
  })}</div></div>`}`;
});
