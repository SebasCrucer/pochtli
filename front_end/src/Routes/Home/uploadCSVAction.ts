import { ActionFunction, redirect } from "react-router-dom";
import { getSessionDataFromGlobal } from "../../Utils/getSessionDataFromGlobal";
import { API_URL } from "../../../config";



export const newDataAction: ActionFunction = async ({ request }) => {
    const windowSession = await getSessionDataFromGlobal()
    const formData = await request.formData();
    formData.append('session_id', windowSession || '');
    formData.append('lang', 'es');


    await fetch(API_URL + "/newData",
        {
            method: 'POST',
            body: formData,
        })
    return redirect('../');
}