
export async function getMemberById({params}: any) {
  const url = `http://localhost:8000/api/members/1`;

  const headers = new Headers({
    'Accept': 'application/json',
    'Authorization': 'Bearer 2|o6qlAgA2zZIhtDug2eBUoSaBOz7gIxG8wOCltIzN',
  });

  const requestOptions: RequestInit = {
    method: 'GET',
    headers: headers,
  };

  try {
    const response = await fetch(url, requestOptions);
    
    if (!response.ok) {
      throw new Error(`Erro na solicitação: ${response.status} - ${response.statusText}`);
    }

    const member = await response.json();
    
    return member;
  } catch (error) {
    console.error('Ocorreu um erro:', error);
    throw error;
  }
}