class ApiService {
  private static instance: ApiService;
  private baseUrl: string;
  private constructor() {
    this.baseUrl = "dalskjd";
  }
  public static getInstance(): ApiService {
    if (!ApiService.instance) {
      ApiService.instance = new ApiService();
    }
    return ApiService.instance;
  }
  public async get(endpoint: string, data: any) {
    try {
      const result = await fetch(`${this.baseUrl}/${endpoint}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      return result.json();
    } catch (error) {
      console.log(error, "Error while");
    }
  }
  public async post(endpoint: string, data: any) {
    try {
      const result = await fetch(`${this.baseUrl}/${endpoint}`);
      return result.json();
    } catch (error) {
      console.log(error, "Error while");
    }
  }
}

const resacac = () => {
  
const fetchData = async () => {
  const api = Apiservice.getInstance();
  const data = await api.get("dashboard-metrics");
  console.log(data);
};
  return <></>;
};
