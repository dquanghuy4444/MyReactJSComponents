import React , { useEffect, useState } from 'react';
import { Controlled as CodeMirror } from "react-codemirror2";
import "codemirror/theme/dracula.css";
import"codemirror/mode/xml/xml";
import "codemirror/mode/markdown/markdown";
import './CustomHook.css';
import { Code } from '@material-ui/icons';

let hBeautify = require("js-beautify").html;

const customhooks = [
    {
        id:1,
        name:"useInput",
        htmlEl : `
        const useInput = (initialValue, validator) => {
            const [value, setValue] = useState(initialValue);
            const onChange = (event) => {
                const {
                    target: { value }
                } = event;
                let willUpdate = true;
                if (typeof validator === "function") {
                    willUpdate = validator(value);
                }
                if (willUpdate) {
                    setValue(value);
                }
            };
            return { value, onChange };
        };
        
        function App() {
            const maxLen = (value) => value.length < 10;
            const name = useInput("your name", maxLen);
            return (
            <div className="App">
                <h1>Hello</h1>
                  <input placeholder="Name" {...name} />
            </div>
          );
        }`
    },
    {
        id:2,
        name:"useTabs",
        htmlEl : `
        const useTabs = (initialTab, allTabs) => {
            if (!allTabs || !Array.isArray(allTabs)) {
                return;
            }
            const [currentIndex, setCurrentIndex] = useState(initialTab);
            return {
                currnetItem: allTabs[currentIndex],
                changeItem: setCurrentIndex
            };
        };
        
        const content = [
            {
                tab: "Section 1",
                content: "I'm the content of the Section 1"
            },
            {
                tab: "Section 2",
                content: "I'm the content of the Section 2"
            }
        ];
        
        function App() {
            const { currnetItem, changeItem } = useTabs(0, content);
            return (
                <div className="App">
                    <h1>Hello</h1>
                    {content.map((section, index) => (
                        <button key={index} onClick={() => changeItem(index)}>
                            {section.tab}
                        </button>
                    ))}
                    <div>{currnetItem.content}</div>
                </div>
            );
        }
        `
    },
    {
        id:3,
        name:"useTitle",
        htmlEl : `
        const useTitle = (initialTitle) => {
            const [title, setTitle] = useState(initialTitle);
            const updateTitle = () => {
                const htmlTitle = document.querySelector("title");
                htmlTitle.innerText = title;
            };
            useEffect(updateTitle, [title]);
            return setTitle;
        };
        
        function App() {
            const titleUpdater = useTitle("Loading...");
            setTimeout(() => titleUpdater("home"), 5000);
            return (
                <div className="App">
                    <h1>Hello</h1>
                </div>
            );
        }
        `
    },
    {
        id:4,
        name:"useClick",
        htmlEl : `
        const useClick = (onClick) => {
            if (typeof onclick !== "function") {
                return;
            }
            const element = useRef();
            useEffect(() => {
                if (element.current) {
                    element.current.addEventListener("click", onClick);
                }
                return () => {
                    if (element.current) {
                        element.current.removeEventListener("click", onClick);
                    }
                };
            }, []);
            return element;
        };
        
        function App() {
            const onClick = () => console.log("hello");
            const title = useClick(onClick);
            return (
                <div className="App">
                    <h1 ref={title}>Hello</h1>
                </div>
            );
        }
        `
    },
    {
        id:5,
        name:"useHover",
        htmlEl : `
        const useHover = (onHover) => {
            if (typeof onHover !== "function") {
                return;
            }
            const element = useRef();
            useEffect(() => {
                if (element.current) {
                    element.current.addEventListener("mouseenter", onHover);
                }
                return () => {
                    if (element.current) {
                        element.current.removeEventListener("mouseenter", onHover);
                    }
                };
            }, []);
            return element;
        };
        
        function App() {
            const onHover = () => console.log("hello");
            const title = useHover(onHover);
            return (
                <div className="App">
                    <h1 ref={title}>Hello</h1>
                </div>
            );
        }
        `
    },
    {
        id:6,
        name:"useConfirm",
        htmlEl : `
        const useConfirm = (message = "", onConfirm, onCancel) => {
            if (!onConfirm || typeof onConfirm !== "function") {
                return;
            }
            if (onCancel && typeof onCancel !== "function") {
                return;
            }
            const confirmAction = () => {
                if (confirm(message)) {
                    onConfirm();
                } else {
                    onCancel();
                }
            };
            return confirmAction;
        };
        
        function App() {
            const deleteWorld = () => console.log("Deleting the world...");
            const abort = () => console.log("Aborted");
            const confirmDelete = useConfirm("Are you sure", deleteWorld, abort);
            return (
                <div className="App">
                    <h1>Hello</h1>
                    <button onClick={confirmDelete}>Delete the world</button>
                </div>
            );
        }
        `
    },
    {
        id:7,
        name:"usePreventLeave",
        htmlEl : `
        const usePreventLeave = () => {
            const listener = (event) => {
                event.preventDefault();
                event.returnValue = "";
            };
            const enablePrevent = () => window.addEventListener("beforeunload", listener);
            const disaPrevent = () =>
                window.removeEventListener("beforeunload", listener);
            return { enablePrevent, disaPrevent };
        };
        
        function App() {
            const { enablePrevent, disaPrevent } = usePreventLeave();
            return (
                <div className="App">
                    <h1>Hello</h1>
                    <button onClick={enablePrevent}>Protect</button>
                    <button onClick={disaPrevent}>Unprotect</button>
                </div>
            );
        }
        `
    },
    {
        id:8,
        name:"useBeforeLeave",
        htmlEl : `
        const useBeforeLeave = (onBefore) => {
            if (typeof onBefore !== "function") {
                return;
            }
            const handle = (event) => {
                const { clientY } = event;
                if (clientY <= 0) {
                    onBefore();
                }
            };
            useEffect(() => {
                document.addEventListener("mouseleave", handle);
                return () => document.removeEventListener("mouseleave", handle);
            }, []);
        };
        
        function App() {
            const begForLife = () => console.log("Pls dont leave");
            useBeforeLeave(begForLife);
            return (
                <div className="App">
                    <h1>Hello</h1>
                </div>
            );
        }
        `
    },
    {
        id:9,
        name:"useFadeIn",
        htmlEl : `
        const useFadeIn = (duration = 1, delay = 0) => {
            if (typeof duration !== "number" || typeof delay !== "number") {
                return;
            }
            const element = useRef();
            useEffect(() => {
                if (element.current) {
                    const { current } = element;
                    current.style.transition = \`opacity \${duration}s ease-in-out \${delay}s\`;
                    current.style.opacity = 1;
                }
            }, []);
            return { ref: element, style: { opacity: 0 } };
        };
        
        function App() {
            const fadeInH1 = useFadeIn(1, 2);
            const fadeInP = useFadeIn(2, 3);
            return (
                <div className="App">
                    <h1 {...fadeInH1}>Hello</h1>
                    <p {...fadeInP}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
                        voluptatem debitis accusantium veritatis! Amet, minus consequatur eius
                        ut dolorum expedita consectetur corrupti animi incidunt nihil iste illo,
                        iure, voluptatem voluptates.
                </p>
                </div>
            );
        }
        `
    },
    {
        id:10,
        name:"useNetwork",
        htmlEl : `
        const useNetwork = (onChange) => {
            const [status, setStatus] = useState(navigator.onLine);
            const handleChange = (event) => {
                if (typeof onChange === "function") {
                    onChange(navigator.onLine);
                }
                setStatus(navigator.onLine);
            };
            useEffect(() => {
                window.addEventListener("online", handleChange);
                window.addEventListener("offline", handleChange);
                return () => {
                    window.removeEventListener("online", handleChange);
                    window.removeEventListener("offline", handleChange);
                };
            }, []);
            return status;
        };
        
        function App() {
            const handleNetworkChange = (online) => {
                console.log(online ? "We just went online" : "We are offline");
            };
            const onLine = useNetwork(handleNetworkChange);
            return (
                <div className="App">
                    <h1>Hello</h1>
                    <h1>{onLine ? "Online" : "Offline"}</h1>
                </div>
            );
        }
        `
    },
    {
        id:11,
        name:"useScroll",
        htmlEl : `
        const useScroll = () => {
            const [status, setStatus] = useState({ x: 0, y: 0 });
            const onScroll = () => {
                setStatus({ x: window.scrollX, y: window.scrollY });
            };
            useEffect(() => {
                window.addEventListener("scroll", onScroll);
                return () => window.removeEventListener("scroll", onScroll);
            }, []);
            return status;
        };
        
        function App() {
            const { y } = useScroll();
            return (
                <div className="App" style={{ height: "1000vh" }}>
                    <h1 style={{ position: "fixed", color: y > 1000 ? "blue" : "red" }}>
                        Hello
                </h1>
                </div>
            );
        }
        `
    },
    {
        id:12,
        name:"useFullscreen",
        htmlEl : `
        const useFullscreen = (callback) => {
            const element = useRef();
            const runCb = (isFull) => {
                if (callback && typeof callback === "function") {
                    callback(isFull);
                }
            };
            const triggerFull = () => {
                if (element.current) {
                    if (element.current.requestFullscreen) {
                        element.current.requestFullscreen();
                    } else if (element.current.mozRequestFullscreen) {
                        element.current.mozRequestFullscreen();
                    } else if (element.current.webkitRequestFullscreen) {
                        element.current.webkitRequestFullscreen();
                    } else if (element.current.msRequestFullscreen) {
                        element.current.msRequestFullscreen();
                    }
                    runCb(true);
                }
            };
            const exitFull = () => {
                if (document.exitFullscreen) {
                    document.exitFullscreen();
                } else if (document.mozCancelFullScreen) {
                    document.mozCancelFullScreen();
                } else if (document.webkitExitFullscreen) {
                    document.webkitExitFullscreen();
                } else if (document.msExitFullscreen) {
                    document.msExitFullscreen();
                }
                runCb(false);
            };
            return { element, triggerFull, exitFull };
        };
        
        function App() {
            const onFullS = (isFull) => {
                console.log(isFull ? "We are full" : "We are small");
            };
            const { element, triggerFull, exitFull } = useFullscreen(onFullS);
            return (
                <div className="App">
                    <h1>Hello</h1>
                    <div ref={element}>
                        <img
                            src="https://mblogthumb-phinf.pstatic.net/MjAxODAyMDZfMTk0/MDAxNTE3OTA5NDQ3MjYy._A5goNQD2IUU1ZVepodSGGYRkzsj6Qzvo-7N40S-OzMg.ITZqPfqEABCTd4tuLxQrMXY-nRU40sD2tMpDZRkA_34g.JPEG.xbeebee/%EC%9B%B0%EC%8B%9C%EC%BD%94%EA%B8%B0.jpg?type=w800"
                            alt="img"
                        />
                        <button onClick={exitFull}>Exit Fullscreen</button>
                    </div>
                    <button onClick={triggerFull}>Make Fullscreen</button>
                </div>
            );
        }
        `
    },
    {
        id:13,
        name:"useNotification",
        htmlEl : `
        const useNotification = (title, options) => {
            if (!("Notification" in window)) {
                return;
            }
            const fireNotif = () => {
                if (Notification.permission !== "granted") {
                    Notification.requestPermission().then((permission) => {
                        if (permission === "granted") {
                            new Notification(title, options);
                        } else {
                            return;
                        }
                    });
                } else {
                    new Notification(title, options);
                }
            };
            return fireNotif;
        };
        
        function App() {
            const triggerNotif = useNotification("Can I steal your kimchi?", {
                body: "I love kimchi dont you"
            });
            return (
                <div className="App">
                    <h1>Hello</h1>
                    <button onClick={triggerNotif}>Hello</button>
                </div>
            );
        }
        `
    },
    {
        id:14,
        name:"useAxios",
        htmlEl : `
        const useAxios = (options, axiosInstance = defaultAxios) => {
            const [state, setSate] = useState({
                loading: true,
                error: null,
                data: null
            });
            const [trigger, setTrigger] = useState(0);
            if (!options.url) {
                return;
            }
            const refetch = () => {
                setSate({
                    ...state,
                    loading: true
                });
                setTrigger(Date.now());
            };
            useEffect(() => {
                axiosInstance(options)
                    .then((data) => {
                        setSate({
                            ...state,
                            loading: false,
                            data
                        });
                    })
                    .catch((error) => {
                        setSate({
                            ...state,
                            loading: false,
                            error
                        });
                    });
            }, [trigger]);
            return { ...state, refetch };
        };
        
        function App() {
            const { loading, data, refetch } = useAxios({
                url:
                    "https://cors-anywhere.herokuapp.com/https://yts.am/api/v2/list_movies.json"
            });
            console.log(loading, data, JSON.stringify(data), refetch);
            return (
                <div className="App">
                    <h1>{data && data.status}</h1>
                    <h1>{loading && "Loading"}</h1>
                    <button onClick={refetch}>Refetch</button>
                </div>
            );
        }
        `
    },
    {
        id:15,
        name:"useWindowSize",
        htmlEl : `
        import { useLayoutEffect, useState } from "react";

        // resize screen
        export function useWindowSize() {
            const [size, setSize] = useState({
            width:0,
            height:0,
            });
            useLayoutEffect(() => {
            function updateSize() {
                setSize({
                width: window.innerWidth, 
                height: window.innerHeight
                });
            }
            window.addEventListener('resize', updateSize);
            updateSize();
            return () => window.removeEventListener('resize', updateSize);
            }, []);
            return size;
        }
        `
    },
    {
        id:16,
        name:"useEventListener",
        htmlEl : `
        import { useRef, useEffect, RefObject } from 'react';

        function useEventListener<T extends HTMLElement = HTMLDivElement>(
            eventName: string,
            handler: (event: Event) => void,
            element?: RefObject<T>,
        ) {
            // Create a ref that stores handler
            const savedHandler = useRef<(event: Event) => void>()
            useEffect(() => {
                // Define the listening target
                const targetElement: T | Window = element?.current || window
                if (!(targetElement && targetElement.addEventListener)) {
                    return
                }
                // Update savaed handler if necessary
                if (savedHandler.current !== handler) {
                    savedHandler.current = handler
                }
                // Create event listener that calls handler function stored in ref
                const eventListener = (event: Event) => {
                    // eslint-disable-next-line no-extra-boolean-cast
                    if (!!savedHandler?.current) {
                        savedHandler.current(event)
                    }
                }
                targetElement.addEventListener(eventName, eventListener)
                // Remove event listener on cleanup
                return () => {
                    targetElement.removeEventListener(eventName, eventListener)
                }
            }, [eventName, element, handler])
        }
        export default useEventListener
        `
    },
    {
        id:17,
        name:"useQuery",
        htmlEl : `
        import { useState, useEffect, useCallback } from 'react'
        import axios, { AxiosResponse } from 'axios'
        
        export default function useQuery<T>(url: string) {
          const [data, setData] = useState<T>()
          const [error, setError] = useState<string>()
          const [loading, setLoading] = useState(false)
        
          const handleError = (error: any) => {
            setError(error.response?.data.err)
            setLoading(false)
          }
        
          // this function is calling useCallback to stop an infinite loop since it is in the dependency array of useEffect
          const runQuery = useCallback(() => {
            const handleSuccess = (res: AxiosResponse<T>) => {
              setData(res.data)
              setLoading(false)
            }
        
            setLoading(true)
            axios.get<T>(url).then(handleSuccess).catch(handleError)
          }, [url])
        
          useEffect(() => {
            runQuery()
          }, [runQuery])
        
          return { data, loading, error, refetch: runQuery }
        }

        import { Fragment } from 'react'
import useQuery from './useQuery'

// type data from https://jsonplaceholder.typicode.com/posts
type Post = {
  userId: number
  id: number
  title: string
  body: string
}

export default function Posts() {
  const { data: posts, loading, error } = useQuery<Post[]>('https://jsonplaceholder.typicode.com/posts')

  if (error) {
    return <p>Error: {error}</p>
  } else if (loading) {
    return <p>Loading...</p>
  }

  return (
    <>
      {posts.map(({ title, body }, index) => (
        <Fragment key={index}>
          <h1>{title}</h1>
          <p>{body}</p>
        </Fragment>
      ))}
    </>
  )
}
        `
    },

]

function CustomHook() { 

    const [customhook , setCustomhook] = useState({});
    const [id , setId] = useState(1);

    useEffect(() =>{
        setCustomhook(customhooks.find(ch => ch.id === id));
    },[id])

    let code123 =`
    const useInput = (initialValue, validator) => {
        const [value, setValue] = useState(initialValue);
        const onChange = (event) => {
            const {
                target: { value }
            } = event;
            let willUpdate = true;
            if (typeof validator === "function") {
                willUpdate = validator(value);
            }
            if (willUpdate) {
                setValue(value);
            }
        };
        return { value, onChange };
    };

    function App() {
        const maxLen = (value) => value.length < 10;
        const name = useInput("your name", maxLen);
        return (
        <div className="App">
            <h1>Hello</h1>
                <input placeholder="Name" {...name} />
        </div>
        );
    }`;

    const autoFormatSelection = () => {
        // console.log(code);
        let formatedHTML = hBeautify(code123, { indent_size: 2 });
        return formatedHTML;
      };

    let options = {
        height: "150px",
        lineNumbers: true,
        tabSize: 2,
        theme: "dracula",
        extraKeys: { "Shift-Tab": autoFormatSelection },
        // theme: 'monokai',
        keyMap: 'sublime',
        mode: 'javascript',
      };

    return (
        <div className="customhooks-container">
            <div className="customhooks-navbar">
                <nav>
                    <ul>
                        { 
                            customhooks.map(ch => <li onClick={() => setId(ch.id) }>{ ch.name }</li> )
                        }  
                    </ul>
                </nav>
            </div>

            <div>
                {
                    customhook.name
                }
                <br></br>
                <textarea value={ customhook.htmlEl }>
                </textarea>
            </div>

            <CodeMirror
            value={code123}
            options={options}
            />
        </div>
    );
}

export default CustomHook;


