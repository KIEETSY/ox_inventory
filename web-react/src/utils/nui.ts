export const isEnvBrowser = (): boolean => !(window as any).GetParentResourceName;

const resourceName = (window as any).GetParentResourceName
  ? (window as any).GetParentResourceName()
  : 'ox_inventory';

export async function fetchNui<T = any>(
  eventName: string,
  data?: any
): Promise<T> {
  if (isEnvBrowser()) return undefined as any;

  try {
    const resp = await fetch(`https://${resourceName}/${eventName}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=UTF-8',
      },
      body: JSON.stringify(data),
    });

    return await resp.json();
  } catch (error) {
    console.error(`Failed to fetch NUI callback ${eventName}:`, error);
    throw error;
  }
}

export function useNuiEvent<T = any>(
  action: string,
  handler: (data: T) => void
) {
  const handleMessage = (event: MessageEvent<{ action: string; data: T }>) => {
    const { action: eventAction, data } = event.data;
    if (eventAction === action) {
      handler(data);
    }
  };

  window.addEventListener('message', handleMessage);
  return () => window.removeEventListener('message', handleMessage);
}
