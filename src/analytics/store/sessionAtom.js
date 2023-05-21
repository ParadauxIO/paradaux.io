import { persistentAtom } from '@nanostores/persistent';

export const sessionIdAtom = persistentAtom('session_id', '{"id": "00000000-0000-0000-0000-000000000000"}')