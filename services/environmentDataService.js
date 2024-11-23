const environmentData = [
    {
      id: 1,
      location: "Mall Road, Lahore",
      airQualityIndex: 180,
      pollutant: "PM2.5",
      status: "Unhealthy",
      lastUpdated: "5 minutes ago",
    },
    {
      id: 2,
      location: "Liberty Market, Lahore",
      airQualityIndex: 135,
      pollutant: "PM10",
      status: "Moderate",
      lastUpdated: "8 minutes ago",
    },
    {
      id: 3,
      location: "Gulberg, Lahore",
      airQualityIndex: 95,
      pollutant: "Ozone (O3)",
      status: "Good",
      lastUpdated: "15 minutes ago",
    },
    {
      id: 4,
      location: "Johar Town, Lahore",
      airQualityIndex: 160,
      pollutant: "NO2",
      status: "Unhealthy for Sensitive Groups",
      lastUpdated: "20 minutes ago",
    },
    {
      id: 5,
      location: "DHA Phase 5, Lahore",
      airQualityIndex: 80,
      pollutant: "SO2",
      status: "Good",
      lastUpdated: "30 minutes ago",
    },
  ];
  
  // Mock API to get all environment data
  const getAllEnvironmentData = async () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(environmentData);
      }, 1000); 
    });
  };
  
  const getEnvironmentDataByLocation = async (location) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const data = environmentData.find((item) => item.location === location);
        if (data) {
          resolve(data);
        } else {
          reject(new Error("Environment data not found for the specified location"));
        }
      }, 1000); 
    });
  };
  
  export default {
    getAllEnvironmentData,
    getEnvironmentDataByLocation,
  };
  