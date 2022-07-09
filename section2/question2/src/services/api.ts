import config from "../config";

const api = {
  get: async (endpoint: string): Promise<any> => {
    const response = await fetch(`${config.apiBaseURL}${endpoint}`);
    const jsonData = await response.json();
    if (!response.ok) {
      return {
        error: { code: response.status, message: response.statusText },
      };
    }
    return jsonData;
  },
};
export default api;
