import "../styles/PlantProductView.css";
import { NavLink } from "react-router-dom";

export default function PlantProductView() {
  return (
    <div className="plant-product-container">
      <NavLink to="/" className="plant-product-back-link">
        <img
          src="https://icons.veryicon.com/png/o/object/material-design-icons/chevron-left-1.png"
          alt="left-chevron"
          className="chevron"
        />
        Back to Search
      </NavLink>
      <div className="plant-product-body">
        <div className="plant-image-gallery">
          <img
            src="https://s3-alpha-sig.figma.com/img/5b13/7c89/8697c2a0abc33f8b13ec862370d854cf?Expires=1738540800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=dg1v1bdr8HeovnFNpILlLh2AvO00~KB~tOAvowcjE94RcSnMTmO29WU7BvIpAF2rZUD2Ru9QkFwydv-ENNyBDlor0I0EsASKZJUTz8whtUjgGEXJVcqcbCo6W6vcKH~fvndfBxjUXMS7EkwcQmgW3gVteg2TsXfkXWV-8WczL9Sf7qg9GK7C-SWIKAkCvdkfqgZP~H4aCC~g2LvaibPXFSSeo18tXmx1r8YqPe6w0YNeDW2jXXW5bamHSzoXdEsCYxDx06LUhppOI1kJ9jzFllSN0D14-ak7hjmYALYiS3pTMOWUxUCj9HpeEW9UFu4h-i0iRSDcU6iPc8HrcWaF~Q__"
            alt="plant"
            className="plant-image"
          />
          <img
            src="https://s3-alpha-sig.figma.com/img/d8e8/7325/fc4727a55c7b7d903636feffd5c0fcdd?Expires=1738540800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=UJ-yF5EFG2O7vUwnN-AcWc-iQPiMXIkHcAXbeFehW8oNZOKE4nszANalB5cL~Kv3YseMNTMiRJuirO8a--NoH~y-g-bZ-lxBRVQ6n9-K~xrF~6YaMUoLHLBwnOIjdrvvqaO~9jXrb33JfcbaFLZTr5OInDZPx3WSR3OzK~quaB~T1f-BGlCwWLrFZ6ukO75jVIHfkIceFzLWT5MkgAE7-umHkCGjF7xnfs9v4CZVRm352juixczZcwEMQ~LUoF96bzLnOsURyLE~7qo4ePLT36BOnJWF146MDIUsgXUBQ14HjG9qQPJy8TTHkoyvzThnCnF2PJ82rSBVlGUZEmIJ4g__"
            alt="plant"
            className="plant-image"
          />
          <img
            src="https://s3-alpha-sig.figma.com/img/bdf6/8f7e/d3a843da07e40b2310fb9ea80de2110e?Expires=1738540800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=aZVfJQY~EM1qfox6exi3i0aLUR3JZvAZ2IG3RlPJMOtyJhBjKwKlK~dDj5Z44eZh4qYIQTw0MFPGRJIh0zqy~5OnylqyG-7s0XK8xYVIXMhxio4b3mfOTvNIAOxxVCFeWx0r-vB7HLsmitPlEyIcQcveBFuCFGczDoRhd8KopIZK933nxn-z9X25fwGedYctx4bxFyCTJ~6k8n4TRTBKJOahJTT49DY01agro9WM66c6BR0BHVzfDTmCINQqsjzDZ0dcd4zfdgwmIuJIAUGhLkZGqMYWXZXQpu3HrnzxFOq-vYi2xTbM4o-y1gD~uY5LoDVzQuDcdujhoKDsXw6DXg__"
            alt="plant"
            className="plant-image"
          />
          <img
            src="https://s3-alpha-sig.figma.com/img/ae1b/6969/44f276d1f519b3795c8a0de53aafa44a?Expires=1738540800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mJUIHJrFUUUzhzZ8zTuRpeIFAP6o0xi1dbjYXzct3sPvtW8yVeimJ6evTKDPHq8IbI5IYaSw0jXso0sSmDdwt0oChdyfP6u-enHQtQrMm2uoRWEGgDAT7N9mm9EW3GPVTdCkiMov1VjrRaFTi7~XSTxvKrGrFlAOII9EcTixhkfJWlRW~egyqryzWtpRAOUxwW2Hj81g8o7msMBQEuc1Ip5NuiSUtlaS2oVR2~HrJc7t996KdgmiPi9~uRF1qHGbIsYQe-y-iozSNN5gGbjH~rikUTY3w8xIWbkDZvWrYccYhRhcv1zyFCH4PCCp8EXYSyE-Rgpvx9Nr4lKh8QXpjw__"
            alt="plant"
            className="plant-image"
          />
        </div>
        <div className="plant-product-details">
          <div className="plant-info-section">
            <h1 className="plant-name">Marble Queen Pothos</h1>
            <p className="plant-price">$350</p>
            <p className="plant-description">
              Marble queen pothos is a popular houseplant that is known for its
              beautiful foliage. It is a relatively easy plant to care for,
              making it a good choice for beginners.
            </p>
          </div>
          <div>
            <div className="plant-size-section">
              <p className="plant-size-label">Size</p>
              <div className="plant-size-options">
                <button>S</button>
                <button>M</button>
                <button>L</button>
              </div>
            </div>
            <div className="plant-cart-section">
              <button className="add-to-cart-button">Add to Cart</button>
              <div className="plant-quantity-section">
                <p className="quantity-label">Quantity</p>
                <div className="quantity-controls">
                  <button>-</button>
                  <p>1</p>
                  <button>+</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
