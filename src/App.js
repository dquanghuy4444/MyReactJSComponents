import './App.css';
import ImageSlider from './components/ImageSlider/ImageSlider';
import { SliderData } from './data/SliderData';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Suggestions from './components/Suggestions/Suggestions';
import DragAndDrop from './components/DragAndDrop/DragAndDrop';
import DragAndDropWithDnD from './components/DragAndDrop-DnD/DragAndDropWithDnD';
import Profiles from './components/SkeletonLoading/Profiles';
import DragAndDropFileWithDropzone from './components/DragAndDropFile-Dropzone/DragAndDropFileWithDropzone';
import InfinityScroll from './components/InfinityScroll/App';
import InfinityScrollWithReactInfiniteScroll from './components/InfinityScroll-ReactInfiniteScroll/App';
import CustomHook from './components/CustomHook/CustomHook';
import GuidedTourWithReactJoyride from './components/GuidedTour-ReactJoyride/GuidedTourWithReactJoyride';
import GeneratePdfFromImageWithJspdf from './components/GeneratePdfFromImage-Jspdf/GeneratePdfFromImageWithJspdf';
import LazyLoadingWithReactLazyLoadImageComp from './components/LazyLoading-ReactLazyLoadImageComp/LazyLoadingWithReactLazyLoadImageComp';
import HighlightTextWithReactHighlightWords from './components/HighlightText-ReactHighlightWords/HighlightTextWithReactHighlightWords';
import HighlightText from './components/HighlightText/HighlightText';
import ConnectionType from './components/ConnectionType/ConnectionType';
import MultiLanguageWithI18Next from './components/MultiLanguage-I18Next/MultiLanguageWithI18Next';
import AutoComplete from './components/AutoComplete/AutoComplete';
import SearchFilter from './components/SearchFilter/SearchFilter';
import ImageZoomWithReactZoomPanPinch from './components/ImageZoom-ReactZoomPanPinch/ImageZoomWithReactZoomPanPinch';
import PlayAndPauseGifWithReactGifPlayer from './components/PlayAndPauseGif-ReactGifPlayer/PlayAndPauseGifWithReactGifPlayer';
import ParallaxTiltWithReactParallaxTilt from './components/ParallaxTilt-ReactParallaxTilt/ParallaxTiltWithReactParallaxTilt';
import DatePickerWithRcDatePicker from './components/DatePicker-RcDatePicker/DatePickerWithRcDatePicker';


const links =[
  {
    to:"/",
    text:"Image Slider",
    comp:<ImageSlider slides={ SliderData }></ImageSlider>
  },
  {
    to:"/customhooks",
    text:"Custom Hooks",
    comp:<CustomHook></CustomHook>
  },
  {
    to:"/suggest",
    text:"Input suggestions",
    comp:<Suggestions></Suggestions>
  },
  {
    to:"/autocomplete",
    text:"Auto Complete",
    comp:<AutoComplete></AutoComplete>
  },
  {
    to:"/searchfilter",
    text:"Search Filter",
    comp:<SearchFilter></SearchFilter>
  },
  {
    to:"/draganddrop",
    text:"Drag And Drop",
    comp:<DragAndDrop></DragAndDrop>
  },
  {
    to:"/draganddropwithdnd",
    text:"Drag And Drop (react-beautiful-dnd)",
    comp:<DragAndDropWithDnD></DragAndDropWithDnD>
  },
  {
    to:"/skeletonloading",
    text:"Skeleton Loading",
    comp:<Profiles></Profiles>
  },
  {
    to:"/draganddropfilewithdropzone",
    text:"Drag And Drop File (react-dropzone)",
    comp:<DragAndDropFileWithDropzone></DragAndDropFileWithDropzone>
  },
  {
    to:"/infinityscroll",
    text:"Infinity Scroll",
    comp:<InfinityScroll></InfinityScroll>
  },
  {
    to:"/infinityscrollwithreactinfinitescroll",
    text:"Infinity Scroll (react-infinite-scroll-component)",
    comp:<InfinityScrollWithReactInfiniteScroll></InfinityScrollWithReactInfiniteScroll>
  },
  {
    to:"/guidedtourwithreactjoyride",
    text:"Guided Tour (react-joyride)",
    comp: <GuidedTourWithReactJoyride></GuidedTourWithReactJoyride>
  },
  {
    to:"/highlighttext",
    text:"Highlight Text ",
    comp: <HighlightText></HighlightText>
  },
  {
    to:"/highlighttextwithreacthighlightwords",
    text:"Highlight Text (react-highlight-words)",
    comp: <HighlightTextWithReactHighlightWords></HighlightTextWithReactHighlightWords>
  },
  {
    to:"/lazyloadingwithreactlazyloadimagecomp",
    text:"Lazy Loading (react-lazy-loading-component)",
    comp: <LazyLoadingWithReactLazyLoadImageComp></LazyLoadingWithReactLazyLoadImageComp>
  },
  {
    to:"/connectiontype",
    text:"Connection Type",
    comp: <ConnectionType></ConnectionType>
  },
  {
    to:"/generatepdfromImagewithjspdf",
    text:"Generate Pdf From Image (Jspdf)",
    comp: <GeneratePdfFromImageWithJspdf></GeneratePdfFromImageWithJspdf>
  },
  {
    to:"/multilanguagewithi18n",
    text:"Multi Language (i18next)",
    comp: <MultiLanguageWithI18Next></MultiLanguageWithI18Next>
  },
  {
    to:"/imagezoomwithreactzoompanpinch",
    text:"Image Zoom (react-zoom-pan-pinch)",
    comp: <ImageZoomWithReactZoomPanPinch></ImageZoomWithReactZoomPanPinch>
  },
  {
    to:"/playandpausegifwithreactgifplayer",
    text:"Play and pause gif (react-gif-player)",
    comp: <PlayAndPauseGifWithReactGifPlayer></PlayAndPauseGifWithReactGifPlayer>
  },
  {
    to:"/parallaxtiltwithreactparallaxtilt",
    text:"Parallax Tilt (react-parallax-tilt)",
    comp: <ParallaxTiltWithReactParallaxTilt></ParallaxTiltWithReactParallaxTilt>
  },
  {
    to:"/datepickerwithrcdatepicker",
    text:"Date Picker (rc-datepicker)",
    comp: <DatePickerWithRcDatePicker></DatePickerWithRcDatePicker>
  },
]

function App() {
  return (
    <Router>
      <div className="App">

          <div className="navbar">
            <nav>
              <ul>
                {
                  links.map(link =>(
                    <Link to={ link.to }>
                      <li>
                        { link.text }
                      </li>
                    </Link>

                  ))
                }
              </ul>
            </nav>
          </div>
          <div className="container">
            <Switch>
              <Route path="/" exact>
                <ImageSlider slides={ SliderData }></ImageSlider>
              </Route>
              {
                  links.map(link =>(
                    <Route path={ link.to } exact>
                      {
                        link.comp
                      }
                    </Route>
                  ))
                }
            </Switch>
          </div>
      </div>
    </Router>
  );
}

export default App;
