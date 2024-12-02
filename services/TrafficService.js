export const getTrafficData = async () => {
    try {
      const response = await fetch('https://your-api-endpoint.com/traffic-data');
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching traffic data:', error);
      return null;
    }
  };
  