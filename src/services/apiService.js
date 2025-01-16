import axios from "axios";

class ApiService {
  constructor() {
    // this.server = 'https://jsonserver-jet.vercel.app/api/';

    this.server = "http://localhost:5000/";
  }

  async registerUser(username, cpf, email, birthDate, password) {
    console.log(username, cpf, email, birthDate, password);
    const url = `${this.server}api/register`;
    try {
      const response = await axios.post(
        url,
        {
          username,
          cpf,
          email,
          birthDate,
          password,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      return response.data;
    } catch (error) {
      console.error("Erro ao registrar usuário:", error);
      throw error;
    }
  }

  async deletarFilme(idFilme) {
    const url = `${this.server}api/delete/filme/${idFilme}`;
    try {
      const response = await axios.delete(url, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      return response.data;
    } catch (error) {
      console.error("Erro ao deletar o filme:", error);
      throw error;
    }
  }

}

export default new ApiService();