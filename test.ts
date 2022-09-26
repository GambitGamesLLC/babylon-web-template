//Put the code you want to test when `npm run dev` is called in this file
//@ts-ignore
import * as module from "./lib/main.ts";

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