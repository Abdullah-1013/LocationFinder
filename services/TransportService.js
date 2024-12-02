export const getBusData = async () => {
    try {
      const response = await fetch('https://your-api-endpoint.com/bus-data');
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching bus data:', error);
      return [];
    }
  };
  