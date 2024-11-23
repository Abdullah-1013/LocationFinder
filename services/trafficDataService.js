const trafficData = [
    {
      id: 1,
      location: "Shahrah-e-Faisal, Karachi",
      congestionLevel: "High",
      accidentReported: false,
      lastUpdated: "10 minutes ago",
    },
    {
      id: 2,
      location: "I.I. Chundrigar Road, Karachi",
      congestionLevel: "Moderate",
      accidentReported: true,
      lastUpdated: "5 minutes ago",
    },
    {
      id: 3,
      location: "University Road, Karachi",
      congestionLevel: "Low",
      accidentReported: false,
      lastUpdated: "15 minutes ago",
    },
  ];
  
  // Mock API to fetch all traffic data
  const getAllTrafficData = async () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(trafficData);
      }, 1000); // Simulates an API delay of 1 second
    });
  };
  
  // Mock API to fetch traffic data for a specific location
  const getTrafficByLocation = async (location) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const trafficInfo = trafficData.find(
          (data) => data.location === location
        );
        if (trafficInfo) {
          resolve(trafficInfo);
        } else {
          reject(new Error("Traffic data not found for the specified location"));
        }
      }, 1000); // Simulates an API delay of 1 second
    });
  };
  
  export default {
    getAllTrafficData,
    getTrafficByLocation,
  };
  