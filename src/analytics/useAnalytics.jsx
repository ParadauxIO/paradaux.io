import { v4 as uuidv4 } from 'uuid';
import { useEffect } from 'react';
import { useStore } from '@nanostores/react';
import { sessionIdAtom } from './store/sessionAtom';

// Used to generate new session tokens
const sessionTokenGenerator = () => {
  let id = uuidv4()
  let now = new Date();
  let expires = new Date(now.getTime() + 15 * 60000);
  let token = { id, expires }
  sessionIdAtom.set(JSON.stringify(token));
  return token
}

// Used to determine if a session token has expired
const hasSessionTokenExpired = (token) => {
  return new Date() >= new Date(token.expires);
}

const isValidTokenString = (tokenStr) => {
  try {
    const token = JSON.parse(tokenStr);
    return !hasSessionTokenExpired(token);
  } catch (error) {
    return false
  }
}

export default function useAnalytics(page) {
  useEffect(() => {
    let sessionIdValue = sessionIdAtom.get();


    // Invalid or expired session ID.
    if (!isValidTokenString(sessionIdValue)) {
      console.log("[Analytics] Regenerating session token")
      sessionTokenGenerator();

      // Start event
      console.log("[Analytics] Sending start event.")
      sendEvent("session_start", {
        event_type: "start",
        id: JSON.parse(sessionIdValue).id,
        event_message: {
          initial_page: page.href,
          origin: page.origin,
          path: page.path
        }
      })

      return;
    }

    // Not the first visited page
    console.log("[Analytics] Sending view event")
    sendEvent("session_start", {
      event_type: "view",
      id: JSON.parse(sessionIdValue).id,
      event_message: {
        initial_page: page.href,
        origin: page.origin,
        path: page.path
      }
    })
  }, [])

  async function sendEvent(type, message, value) {
    const mode = import.meta.env.MODE;
    let url, key;
    if (mode == 'development') {
      url = import.meta.env.PUBLIC_DEV_SUPABASE_URL + "/functions/v1/analytics";
      key = import.meta.env.PUBLIC_DEV_SUPABASE_KEY;
    } else {
      // For some reason the URL schema changes between public/private.
      const ref = import.meta.env.PUBLIC_PROD_SUPABASE_REF;
      url = `https://${ref}.functions.supabase.co/analytics`
      key = import.meta.env.PUBLIC_PROD_SUPABASE_KEY;
    }

    const requestOptions = {
      method: 'POST',
      headers: {
        "Authorization": "Bearer " + key,
        "Content-Type": "application/json"
      },
      body: JSON.stringify(message),
      redirect: 'follow'
    };

    fetch(`${url}`, requestOptions)
      .then(response => response.text())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));

  }


  return {

  }
}