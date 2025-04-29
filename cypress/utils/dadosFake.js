import { faker } from '@faker-js/faker';

export function gerarUsuario() {
  const nome = faker.person.firstName();
  const email = faker.internet.email(nome);
  const sobrenome = faker.person.lastName();

  return {
    nome,
    email,
    sobrenome,
  };
}