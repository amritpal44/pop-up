import { useEffect, useRef, useState } from 'react';
import './App.css';
import Popup from './component/Popup';
import popups from "./content/popupData";
import coursePopupMap from "./content/coursePopupMap.json"

function App() {

  const [isShown, setIsShown] = useState(true);
  const [popup, setPopup] = useState({});
  const [popupKey, setPopupKey] = useState("");
  const timeoutRef = useRef(null);

  const slug = "uxresearch";
  const email = "abc@gmail.com";

  useEffect( () => {
    if(popups[coursePopupMap[slug]]){
      setPopup(popups[coursePopupMap[slug]]);
    }
  }, [])

  const popupKeys = Object.keys(popups);

  // const fetchLatestPopup = async() => {
  //   try {
  //     const response = await fetch(
  //       `http://localhost:4000/getLatestPopupShown?email=${email}`,
  //       {
  //         method: "GET",
  //         headers: {
  //           "Content-type": "application/json; charset=UTF-8",
  //         },
  //       }
  //     )
  //     const result = await response.json();

  //     //if no popup is found we show 1st popup
  //     if(!result.popupDetails || Object.keys(result.popupDetails).length === 0){
  //       setPopup( popups[popupKeys[0]] );
  //       setPopupKey(popupKeys[0]);
  //       setIsShown(true);
  //       return;
  //     }

  //     const { title, date } = result.popupDetails;

  //     if(popups[title]){
  //       const popupDate = new Date(date);
  //       const currentDate = new Date();

  //       const latestPopupIndex = popupKeys.indexOf(title);
  //       //if last popup shown before three days we show the next popup
  //       if( ((currentDate - popupDate)/(1000*3600*24)) > 3 ){

  //         if(latestPopupIndex + 1 < popupKeys.length){
  //           setPopup( popups[popupKeys[latestPopupIndex+1]] );
  //           setPopupKey(popupKeys[latestPopupIndex + 1]);
  //           setIsShown(true);
  //         }
  //         else{
  //           //no popup shown
  //         }
  //       }
  //       else{
  //         //no popup shown
  //       }
  //     }
  //     else{
  //       //the title donot exists, show 1st popup: popups[popupKeys[0]]
  //       setPopup( popups[popupKeys[0]] );
  //       setPopupKey(popupKeys[0]);
  //       setIsShown(true);
  //     }

  //   } catch (error) {
  //     console.error("error in fetching latest popup: ", error);
  //   }
  // }

  // const updateShownPopup = async(action) => {
  //   try {
  //     const response = await fetch(
  //       'http://localhost:4000/addPopupDetails',
  //       {
  //         method: 'POST',
  //         headers: {
  //           'Content-Type': 'application/json',
  //         },
  //         body: JSON.stringify({
  //           email,
  //           title: popupKey, // Find popup title
  //           action: action, // "opened" or "closed"
  //         }),
  //       }
  //     );

  //     const result = await response.json();

  //     if (!result?.success) {
  //       console.error("Error in updating popup: ");
  //     }

  //     setIsShown(false);
  //   } catch (error) {
  //     console.error("Error in updating popup: ", error);
  //   }
  // }

  // useEffect( () => {

  //   timeoutRef.current = setTimeout(() => {
  //     fetchLatestPopup();      
  //   }, 1000);
  //   //adjust delay as required later

  //   return () => {
  //     if(timeoutRef.current){
  //       clearTimeout(timeoutRef.current);
  //     }
  //   }
  // }, [])

  
  const closePopup = () => {
    //updateShownPopup('closed');
    setIsShown(false);
  };

  const onKeyDown = (event) => {
    if (event.keyCode === 27) {
      closePopup();
    }
  };

  return (
    <div className="h-screen relative" >

      {
        isShown && (
          <Popup
            closePopup = {closePopup}
            onKeyDown = {onKeyDown}
            popup = {popup}
            // updateShownPopup = {updateShownPopup}
          />
        )
      }      
      
    </div>
  );
}

export default App;
