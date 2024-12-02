export const getPollutionData = async () => {
    try {
      const response = await fetch('https://your-api-endpoint.com/pollution-data');
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching pollution data:', error);
      return null;
    }
  };
  