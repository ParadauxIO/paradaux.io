import { v4 as uuidv4 } from 'uuid';
import config from "./analytics.json"

export default function useAnalytics(props) {
    // console.log(props)
    // console.log(uuidv4())
    // sendEvent()

    // async function sendEvent() {
    //     var myHeaders = new Headers();
    //     myHeaders.append("Authorization", "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inlsa3RmdXFka2Z5YmRxdW1pa3FpIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY4NDQzMTQzMiwiZXhwIjoyMDAwMDA3NDMyfQ.n1uv2HY4VpKblgzbJl15ITIwh2Y45ABb18M_A1i2mtc");
    //     myHeaders.append("Content-Type", "application/json");

    //     var raw = JSON.stringify({
    //         "name": "Rían"
    //     });

    //     var requestOptions = {
    //         method: 'POST',
    //         headers: myHeaders,
    //         body: raw,
    //         redirect: 'follow'
    //     };

    //     fetch("https://ylktfuqdkfybdqumikqi.functions.supabase.co/analytics", requestOptions)
    //         .then(response => response.text())
    //         .then(result => console.log(result))
    //         .catch(error => console.log('error', error));
    // }


    return {

    }
}