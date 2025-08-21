class HttpRequest {
  static async get(url: string, headers: Record<string, string> = {}): Promise<any> {
    try {
      const response = await fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          ...headers,
        },
      });
      return response.json();
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error("Error fetching data:", error);
    }
  }

  static async post(url: string, data: any, headers: Record<string, string> = {}): Promise<any> {
    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          ...headers,
        },
        body: JSON.stringify(data),
      });
      return response.json();
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error("Error posting data:", error);
    }
  }

  static async put(url: string, data: any, headers: Record<string, string> = {}): Promise<any> {
    try {
      const response = await fetch(url, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          ...headers,
        },
        body: JSON.stringify(data),
      });
      return response.json();
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error("Error putting data:", error);
    }
  }

  static async delete(url: string, headers: Record<string, string> = {}): Promise<any> {
    try {
      const response = await fetch(url, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          ...headers,
        },
      });
      return response.json();
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error("Error deleting data:", error);
    }
  }
}

export default HttpRequest;
