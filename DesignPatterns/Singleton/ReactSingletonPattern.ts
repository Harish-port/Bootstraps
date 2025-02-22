// In react project implementation for APIservice
class ApiService {
  // A static variable means it belongs to the class itself (not an instance).
  private static instance: ApiService;
  //   A private access modifier ensures it can only be accessed within the class.
  // It is private, so it cannot be accessed outside the class.
  private baseUrl: string;
  //   private constructor() ensures:
  // This class cannot be instantiated using new ApiService().
  // Only the class itself can create an instance internally.
  private constructor() {
    this.baseUrl = "https://example.com";
  }
  public static getInstance(): ApiService {
    if (!ApiService.instance) {
      ApiService.instance = new ApiService();
    }
    return ApiService.instance;
  }
  public async get(endpoint: string) {
    try {
      const response = await fetch(`${this.baseUrl}/${endpoint}`);
      return response.json();
    } catch (error) {
      console.error("API fetch error:", error);
    }
  }
  public async post(endpoint: string, data: any) {
    try {
      const response = await fetch(`${this.baseUrl}/${endpoint}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      return response.json();
    } catch (error) {
      console.error("API fetch error:", error);
    }
  }
}
export default ApiService;
// Ensures that the class is instantiated only once and reused everywhere.

// How to use in react component?

// import Apiservice from "./ApiService";

// const fetchData = async () => {
//   const api = Apiservice.getInstance();
//   const data = await api.get("dashboard-metrics");
//   console.log(data);
// };

    
// finally 
// Why This Singleton Pattern?
// ✔ Prevents multiple instances of ApiService.
// ✔ Saves memory by avoiding duplicate objects.
// ✔ Ensures consistency across API calls.
// ✔ Centralizes API logic, making maintenance easier.