class Apiservice {
  private static instance: Apiservice;
  private baseUrl: string;
  private constructor() {
    this.baseUrl = "https://example.com";
  }
  public static getInstance(): Apiservice {
    if (!Apiservice.instance) {
      Apiservice.instance = new Apiservice();
    }
    return Apiservice.instance;
  }

  public async get(endpoint: string) {
    try {
      const response = await fetch(`${endpoint}/${this.baseUrl}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      return response.json()
    } catch (error) {
      console.error(error);
    }
  }
}

export default Apiservice;


import ApiService from "./ReactSingletonPattern";
 
const Home = () =>{
     const fetchData = () => {
        const api = Apiservice.getInstance();
        const data = api.get("dashboard-metrics");
        console.log(data);
        
     }
     useEffect(() => {
       fetchData
     }, [])
     
             return(<>
                   <h1>Hello</h2>
                </>
             )
}

export default Home;
