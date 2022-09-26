//Put the code you want to test when `npm run dev` is called in this file
//@ts-ignore
import * as module from "./lib/main.ts";

//Import the Babylonjs Core package
import * as BABYLON from "@babylonjs/core";

//Add Babylon namespace to the global window
(window as any).BABYLON = {...BABYLON};

//Show the Babylonjs inspector, requires that the BABYLON namespace has been added to the Window object
/*
//Requires you already have a Babylonjs scene created
scene.debugLayer.show({
    embedMode: true,
    enableClose: true,
    enablePopup: false,
    //@ts-ignore
    globalRoot: document.getElementById("app"),
    handleResize: true,
    overlay: true,
    showExplorer: true,
    showInspector: true
});
*/

async function Run()
{
    try 
    {
        module.Message("test successfull");
    } 
    catch (error) 
    {
        console.error(error);
    }
}

Run();