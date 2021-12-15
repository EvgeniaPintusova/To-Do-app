export default function TodoService() {
  const _apiBase = "https://jsonplaceholder.typicode.com";

  this.getResource = async (url = "") => {
    const res = await fetch(`${_apiBase}${url}`);

    if (!res.ok) {
      throw new Error(`Could not fetch ${url}` + `, received ${res.status}`);
    }
    return await res.json();
  };

  this.getTodos = async (url = "/todos") => {
    return await this.getResource(url);
  };
}
