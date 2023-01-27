import ImageSlider from "./components/image-slider/ImageSlider";
import Suggestions from "./components/suggestions";
import DragAndDrop from "./components/drag-nd-drop/DragAndDrop";
import DragAndDropWithDnD from "./components/drag-nd-drop--dnd/DragAndDropWithDnD";
import Profiles from "./components/skeleton-loading/Profiles";
import DragAndDropFileWithDropzone from "./components/drag-nd-drop-file--dropzone/DragAndDropFileWithDropzone";
import InfinityScroll from "./components/infinity-scroll/App";
import InfinityScrollWithReactInfiniteScroll from "./components/infinity-scroll--reactinfinitescroll/App";
import CustomHook from "./components/custom-hook/CustomHook";
import GuidedTourWithReactJoyride from "./components/guided-tour--reactjoyride/GuidedTourWithReactJoyride";
import LazyLoadingWithReactLazyLoadImageComp from "./components/lazy-loading--reactlazyloading/LazyLoadingWithReactLazyLoadImageComp";
import HighlightTextWithReactHighlightWords from "./components/highlight-text--reacthighlightwords/HighlightTextWithReactHighlightWords";
import HighlightText from "./components/highlight-text/HighlightText";
import ConnectionType from "./components/connection-type/ConnectionType";
import MultiLanguageWithI18Next from "./components/multi-language--i18next/MultiLanguageWithI18Next";
import AutoComplete from "./components/auto-complete/AutoComplete";
import SearchFilter from "./components/search-filter/SearchFilter";
import ImageZoomWithReactZoomPanPinch from "./components/image-zoom--reactzoompanpinch/ImageZoomWithReactZoomPanPinch";
import PlayAndPauseGifWithReactGifPlayer from "./components/play-nd-pause-gif--reactgifplayer/PlayAndPauseGifWithReactGifPlayer";
import ParallaxTiltWithReactParallaxTilt from "./components/parallax-tilt--reactparallaxtilt/ParallaxTiltWithReactParallaxTilt";
import DatePickerWithRcDatePicker from "./components/date-picker--rcdatepicker/DatePickerWithRcDatePicker";
import ContextMenu from "./components/context-menu/ContextMenu";
import RizingImage from "./components/rizing-image/RizingImage";
import EmailJS from "./components/email-js/EmailJS";
import CustomCursor from "./components/custom-cursor/CustomCursor";
import ScrollIndicatorBar from "./components/scroll-indicator-bar/ScrollIndicatorBar";
import CustomMentionEditor from "./components/editor-mention--draftjs/EditorMention";
import DarkMode from "./components/dark-mode/DarkMode";
import LazyLoading from "./components/lazy-loading/LazyLoading";
import CloseWhenClickOutside from "./components/close-when-click-outside/CloseWhenClickOutside";
import EventBus from "./components/event-bus/EventBus";
import DropZone from "./components/drop-zone/DropZone";
import MindNode from "./components/mind-node--reactflow/node.components";
import WorkWithCanvasWithFabricjs from "./components/work-with-canvas--fabricjs/work-with-canvas";

import DetectImagesLoaded from "./components/detect-images-loaded";
import Imine from "./components/imine--imne--zustand";
import InfinityScrollObserver from "./components/infinity-scroll-observe";
import VirtualizedScrollWithReactWindow from "./components/virtualized-scroll--reactwindow";
import UploadFileToGGDrive from "./components/upload-file-to-gg-drive";

import { SliderData } from "./data/slider-data";
import Insert from "./components/insert-link-to-text-area";

const pages: any[] = [
  {
    to: "/",
    text: "Image Slider",
    comp: <ImageSlider slides={SliderData}></ImageSlider>,
  },
  {
    to: "/infinity-scroll-observer",
    text: "Infinity Scroll Observer",
    comp: <InfinityScrollObserver></InfinityScrollObserver>,
  },
  {
    to: "/imine",
    text: "Imine (immer + zustand)",
    comp: <Imine></Imine>,
  },
  {
    to: "/detect-images-loaded",
    text: "Detect Images Loaded",
    comp: <DetectImagesLoaded></DetectImagesLoaded>,
  },
  {
    to: "/virtualized-scroll-reactwindow",
    text: "Virtualized Scroll (react-window)",
    comp: <VirtualizedScrollWithReactWindow></VirtualizedScrollWithReactWindow>,
  },
  {
    to: "/customhooks",
    text: "Custom Hooks",
    comp: <CustomHook></CustomHook>,
  },
  {
    to: "/suggest",
    text: "Input suggestions",
    comp: <Suggestions></Suggestions>,
  },
  {
    to: "/autocomplete",
    text: "Auto Complete",
    comp: <AutoComplete></AutoComplete>,
  },
  {
    to: "/searchfilter",
    text: "Search Filter",
    comp: <SearchFilter></SearchFilter>,
  },
  {
    to: "/draganddrop",
    text: "Drag And Drop",
    comp: <DragAndDrop></DragAndDrop>,
  },
  {
    to: "/draganddropwithdnd",
    text: "Drag And Drop (react-beautiful-dnd)",
    comp: <DragAndDropWithDnD></DragAndDropWithDnD>,
  },
  {
    to: "/skeletonloading",
    text: "Skeleton Loading",
    comp: <Profiles></Profiles>,
  },
  {
    to: "/draganddropfilewithdropzone",
    text: "Drag And Drop File (react-dropzone)",
    comp: <DragAndDropFileWithDropzone></DragAndDropFileWithDropzone>,
  },
  {
    to: "/infinityscroll",
    text: "Infinity Scroll",
    comp: <InfinityScroll></InfinityScroll>,
  },
  {
    to: "/infinityscrollwithreactinfinitescroll",
    text: "Infinity Scroll (react-infinite-scroll-component)",
    comp: (
      <InfinityScrollWithReactInfiniteScroll></InfinityScrollWithReactInfiniteScroll>
    ),
  },
  {
    to: "/guidedtourwithreactjoyride",
    text: "Guided Tour (react-joyride)",
    comp: <GuidedTourWithReactJoyride></GuidedTourWithReactJoyride>,
  },
  {
    to: "/highlighttext",
    text: "Highlight Text ",
    comp: <HighlightText></HighlightText>,
  },
  {
    to: "/highlighttextwithreacthighlightwords",
    text: "Highlight Text (react-highlight-words)",
    comp: (
      <HighlightTextWithReactHighlightWords></HighlightTextWithReactHighlightWords>
    ),
  },
  {
    to: "/lazyloadingwithreactlazyloadimagecomp",
    text: "Lazy Loading (react-lazy-loading-component)",
    comp: (
      <LazyLoadingWithReactLazyLoadImageComp></LazyLoadingWithReactLazyLoadImageComp>
    ),
  },
  {
    to: "/connectiontype",
    text: "Connection Type",
    comp: <ConnectionType></ConnectionType>,
  },
  {
    to: "/multilanguagewithi18n",
    text: "Multi Language (i18next)",
    comp: <MultiLanguageWithI18Next></MultiLanguageWithI18Next>,
  },
  {
    to: "/imagezoomwithreactzoompanpinch",
    text: "Image Zoom (react-zoom-pan-pinch)",
    comp: <ImageZoomWithReactZoomPanPinch></ImageZoomWithReactZoomPanPinch>,
  },
  {
    to: "/playandpausegifwithreactgifplayer",
    text: "Play and pause gif (react-gif-player)",
    comp: (
      <PlayAndPauseGifWithReactGifPlayer></PlayAndPauseGifWithReactGifPlayer>
    ),
  },
  {
    to: "/parallaxtiltwithreactparallaxtilt",
    text: "Parallax Tilt (react-parallax-tilt)",
    comp: (
      <ParallaxTiltWithReactParallaxTilt></ParallaxTiltWithReactParallaxTilt>
    ),
  },
  {
    to: "/datepickerwithrcdatepicker",
    text: "Date Picker (rc-datepicker)",
    comp: <DatePickerWithRcDatePicker></DatePickerWithRcDatePicker>,
  },
  {
    to: "/contextmenu",
    text: "Custom right click ( Context menu )",
    comp: <ContextMenu></ContextMenu>,
  },
  {
    to: "/rizingimage",
    text: "Rizing image",
    comp: <RizingImage></RizingImage>,
  },
  {
    to: "/emailjs",
    text: "EmailJS",
    comp: <EmailJS></EmailJS>,
  },
  {
    to: "/customcursor",
    text: "Custom Cursor",
    comp: <CustomCursor></CustomCursor>,
  },
  {
    to: "/scrollindicatorbar",
    text: "Scroll Indicator Bar",
    comp: <ScrollIndicatorBar></ScrollIndicatorBar>,
  },
  {
    to: "/editormention",
    text: "Editor Mention (draft-js)",
    comp: <CustomMentionEditor></CustomMentionEditor>,
  },
  {
    to: "/darkmode",
    text: "Dark Mode",
    comp: <DarkMode></DarkMode>,
  },
  {
    to: "/lazyloading",
    text: "Lazy Loading",
    comp: <LazyLoading></LazyLoading>,
  },
  {
    to: "/closewhenclickoutside",
    text: "Close When Click Outside",
    comp: <CloseWhenClickOutside></CloseWhenClickOutside>,
  },
  {
    to: "/eventbus",
    text: "Event Bus",
    comp: <EventBus></EventBus>,
  },
  {
    to: "/dropzone",
    text: "Drop Zone",
    comp: <DropZone></DropZone>,
  },
  {
    to: "/insertlinktotextarea",
    text: "Insert link to Text Area",
    comp: <Insert></Insert>,
  },
  {
    to: "/mindnode",
    text: "Mind Node (React-Flow-Renderer)",
    comp: <MindNode></MindNode>,
  },
  {
    to: "/uploadbyggdriver",
    text: "Upload File By Google Driver",
    comp: <UploadFileToGGDrive></UploadFileToGGDrive>,
  },
  {
    to: "/workwithcanvaswithfabricjs",
    text: "Work With Canvas (Fabricjs)",
    comp: <WorkWithCanvasWithFabricjs></WorkWithCanvasWithFabricjs>,
  },
];

export { pages };
