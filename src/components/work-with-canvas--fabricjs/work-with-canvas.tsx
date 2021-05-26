import React, {
  memo,
  useRef,
  useState,
  useCallback,
  useLayoutEffect,
  useEffect,
} from "react";

import { fabric } from "fabric";
import { v4 as uuidv4 } from "uuid";

// eslint-disable-next-line import/order

import isFileImage from "../../utils/is-file-image";
import buildFileSelector from "../../utils/build-file-selector";

// const { Option } = Select;

const FontFaceObserver = require("fontfaceobserver");

function Customily() {
  const fonts = [
    {
      family: "Pacifico",
      src: "https://fonts.gstatic.com/s/pacifico/v17/FwZY7-Qmy14u9lezJ-6H6Mk.woff2",
    },
    {
      family: "VT323",
      src: "https://fonts.gstatic.com/s/vt323/v12/pxiKyp0ihIEF2isfFJU.woff2",
    },
    {
      family: "Odibee Sans",
      src: "https://fonts.gstatic.com/s/odibeesans/v4/neIPzCSooYAho6WvjeToRbk1cJA.woff2",
    },
    {
      family: "School Bell",
      src: "https://dzt-upload.s3.amazonaws.com/92zQtBZWOrcgoe-fgnJIZxUa6w.woff2",
    },
  ];

  const canvasRef = useRef(null);

  const [canvas, setCanvas] = useState<any>(null);
  const [activeObject, setActiveObject] = useState<any>(null);
  const [fontFamilys, setFontFamilys] = useState<string[]>([]);

  const addFontFamily = (font: any) => {
    setFontFamilys((prev: string[]) => {
      prev.push(font.family);
      return prev;
    });

    const newStyle = document.createElement("style");

    newStyle.appendChild(
      document.createTextNode(`
    @font-face {
      font-family: ${font.family};
      font-style: normal;
      font-weight: 400;
      font-display: swap;
      src: url(${font.src}) format('woff2');
      unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
    }
  `)
    );
    document.head.appendChild(newStyle);
  };

  const loadFontFamily = (fontFamily: string) => {
    const font = fonts.find((item: any) => item.family === fontFamily);
    if (!font) {
      return;
    }

    addFontFamily(font);

    const myfont = new FontFaceObserver(fontFamily);
    myfont
      .load()
      .then(() => {
        // when font is loaded, use it.
        canvas.getActiveObject().set("fontFamily", fontFamily);
        canvas.requestRenderAll();
        setActiveObject({
          ...canvas.getActiveObject(),
          fontFamily,
        });
      })
      .catch((e: any) => {
        console.log(e);
      });
  };

  const handleChangeFont = (e: any) => {
    const value = e.target.value;
    const hasFontFamily = fontFamilys.some((item: string) => item === value);

    if (value !== "Times New Roman" && !hasFontFamily) {
      loadFontFamily(value);
      return;
    }

    const temp = canvas.getActiveObject();
    if (temp) {
      temp.set("fontFamily", value);
      canvas.requestRenderAll();
      setActiveObject({
        ...temp,
        fontFamily: value,
      });
    }
  };

  const addText = () => {
    const textbox = new fabric.Textbox("Lorum ipsum dolor sit amet", {
      left: 50,
      top: 50,
      width: 150,
      fontSize: 20,
    });
    textbox.visible = true;
    Object.assign(textbox, { locked: false });
    Object.assign(textbox, { id: uuidv4() });
    Object.assign(textbox, { fontFamily: fonts[0].family });
    Object.assign(textbox, { isImage: false });

    setActiveObject({ ...textbox });
    canvas.add(textbox).setActiveObject(textbox);
    
    const value = fonts[0].family

    const hasFontFamily = fontFamilys.some((item: string) => item === value);

    if (value !== "Times New Roman" && !hasFontFamily) {
      loadFontFamily(value);
      return;
    }

    const temp = canvas.getActiveObject();
    if (temp) {
      temp.set("fontFamily", value);
      canvas.requestRenderAll();
      setActiveObject({
        ...temp,
        fontFamily: value,
      });
    }
  };

  useEffect(() => {
    if (!canvas) {
      return;
    }
    addFontFamily(fonts[0]);
  }, [canvas]);

  useEffect(() => {
    if (!canvas) {
      return;
    }

    addText();
  }, [canvas]);

  const initCanvas: any = useCallback((el: any) => {
    const canvasOptions = {
      preserveObjectStacking: true,
      selection: false,
      defaultCursor: "default",
      backgroundColor: "#ffffff",
      imageSmoothingEnabled: false,
    };

    const c = new fabric.Canvas(el, canvasOptions);

    // initAligningGuidelines(c)
    c.renderAll();
    setCanvas(c);
  }, []);

  useLayoutEffect(() => {
    initCanvas(canvasRef.current, {
      width: 100,
      height: 100,
    });
  }, [canvasRef, initCanvas]);

  const updateActiveObject = useCallback(
    (e: any) => {
      if (!e) {
        setActiveObject(null);
        return;
      }

      setActiveObject({ ...canvas.getActiveObject() });
      canvas.renderAll();
    },
    [canvas, setActiveObject]
  );

  function preventCanvas(e: any) {
    const obj = e.target;
    // if object is too big ignore
    if (
      obj.currentHeight > obj.canvas.height ||
      obj.currentWidth > obj.canvas.width
    ) {
      return;
    }
    obj.setCoords();
    // top-left  corner
    if (obj.getBoundingRect().top < 0 || obj.getBoundingRect().left < 0) {
      obj.top = Math.max(obj.top, obj.top - obj.getBoundingRect().top);
      obj.left = Math.max(obj.left, obj.left - obj.getBoundingRect().left);
    }
    // bot-right corner
    if (
      obj.getBoundingRect().top + obj.getBoundingRect().height >
        obj.canvas.height ||
      obj.getBoundingRect().left + obj.getBoundingRect().width >
        obj.canvas.width
    ) {
      obj.top = Math.min(
        obj.top,
        obj.canvas.height -
          obj.getBoundingRect().height +
          obj.top -
          obj.getBoundingRect().top
      );
      obj.left = Math.min(
        obj.left,
        obj.canvas.width -
          obj.getBoundingRect().width +
          obj.left -
          obj.getBoundingRect().left
      );
    }
  }

  useEffect(() => {
    if (!canvas) {
      return;
    }

    canvas.on("selection:created", updateActiveObject);
    canvas.on("selection:updated", updateActiveObject);
    canvas.on("selection:cleared", updateActiveObject);
    canvas.on("object:moving", preventCanvas);

    // eslint-disable-next-line consistent-return
    return () => {
      canvas.off("selection:created");
      canvas.off("selection:cleared");
      canvas.off("selection:updated");
      canvas.off("object:moving");
    };
  }, [canvas, updateActiveObject]);

  const showAllOptions = () => {
    return fonts.map((font: any, index: number) => {
      return (
        // eslint-disable-next-line react/no-array-index-key
        <option value={font.family} key={index}>
          {font.family}
        </option>
      );
    });
  };

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const toggleLockTextCanvas = (id: string) => {
    const activeObj = canvas.getObjects().find((obj: any) => obj.id === id);

    if (activeObj) {
      const isLocked: boolean = !activeObj.locked;

      activeObj.setControlsVisibility({
        mt: !isLocked,
        mb: !isLocked,
        ml: !isLocked,
        mr: !isLocked,
        bl: !isLocked,
        br: !isLocked,
        tl: !isLocked,
        tr: !isLocked,
        mtr: !isLocked,
      });
      // eslint-disable-next-line no-param-reassign
      activeObj.editable = !isLocked;
      // eslint-disable-next-line no-param-reassign
      activeObj.lockMovementX = isLocked;
      // eslint-disable-next-line no-param-reassign
      activeObj.lockMovementY = isLocked;
      // eslint-disable-next-line no-param-reassign
      activeObj.lockMovementY = isLocked;
      // eslint-disable-next-line no-param-reassign
      activeObj.locked = isLocked;

      canvas.renderAll();

      canvas.setActiveObject(activeObj);
      setActiveObject({ ...canvas.getActiveObject() });
    }
  };

  const toggleVisibleTextCanvas = (id: string) => {
    canvas.getObjects().forEach((o: any) => {
      if (o.id === id) {
        canvas.discardActiveObject();

        // eslint-disable-next-line no-param-reassign
        o.visible = !o.visible;

        canvas.renderAll();

        if (o.visible) {
          canvas.setActiveObject(o);
        }
        setActiveObject({ ...canvas.getActiveObject() });
      }
    });
  };

  const showAllInforCanvas = () => {
    if (!canvas || canvas.getObjects().length === 0) {
      return <></>;
    }

    const objects = canvas.getObjects();
    return objects.map((item: any) => {
      return (
        <div className="d-flex">
          <button onClick={ () => { toggleVisibleTextCanvas(item.id) } }>
            { item.visible ? "Hidden" : "Visible "}
          </button>
          <button onClick={ () => { toggleLockTextCanvas(item.id) } }>
            { item.locked ? "Unlock" : "lock "}
          </button>
          <div>
            { item.isImage ? "Image" : "Text "}
          </div>
          <div>
            ID : { item.id }
          </div>
        </div>
      );
    });
  };

  const deleteCanvas = () => {
    canvas.remove(canvas.getActiveObject());
    setActiveObject(null);
  };

  const handleAddImage = (fileList: File[]) => {
    const listIsImage = fileList.every((file: File) => isFileImage(file));
    if (listIsImage) {
      fileList.forEach((file: File) => {
        const reader = new FileReader();
        reader.onload = (e: any) => {
          const data = e.target.result;
          fabric.Image.fromURL(data, (img) => {
            const oImg = img
              .set({
                left: 0,
                top: 0,
                angle: 0,
                width: img.width,
                height: img.height,
              })
              .scale(0.3);
            oImg.visible = true;
            Object.assign(oImg, { locked: false });
            Object.assign(oImg, { id: uuidv4() });
            Object.assign(oImg, { isImage: true });

            canvas.add(oImg).setActiveObject(oImg);
            setActiveObject({ ...canvas.getActiveObject() });
          });
        };
        reader.readAsDataURL(file);
      });
    }
  };

  const fileSelector = buildFileSelector(undefined, undefined, handleAddImage);

  const addImage = (e: any) => {
    e.preventDefault();
    fileSelector.click();
  };

  return (
    <div className="intro">
      <canvas
        ref={canvasRef}
        id="fabric-canvas"
        width={500}
        height={500}
        style={{ border: "1px solid red" }}
      />

      <div className="intro__right">
        {showAllInforCanvas()}

        <div className="options">
          {activeObject && !activeObject.isImage && (
            <select
              value={activeObject.fontFamily}
              style={{ width: 120 }}
              onChange={handleChangeFont}
            >
              {showAllOptions()}
            </select>
          )}

          <button onClick={addText}>
            Add text
          </button>

          <button onClick={addImage}>
            Upload Image
          </button>

          {activeObject && (
            <button onClick={deleteCanvas}>
              Delete
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default memo(Customily);
