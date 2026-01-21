## Parte E — Cenários de teste (roteiro no Insomnia)

Use a coleção `insomnia-collection.json` e o ambiente que já possui `token_cliente`.

1) Criar usuário cliente
- Cadastre um usuário com `perfil='cliente'` e os dados necessários para criar também o registro em `clientes`.

2) Login como cliente
- Faça login e salve o token como `token_cliente`.

3) Buscar dados do cliente logado
- Chame o endpoint de “meu perfil completo” e valide que ele retorna também o `cliente_id` associado.

4) Comprar um veículo
- Liste veículos e selecione um com status `DISPONIVEL`.
- Abra uma venda para si (sem informar `cliente_id` manualmente, se esse for o seu design).
- Registre um pagamento.
- Conclua a venda.

5) Regras de segurança
- Tente criar venda informando `cliente_id` de outra pessoa (deve falhar).
- Tente ver venda de outro cliente (deve falhar).

---

## Entregáveis
- Alterações necessárias em `sql/001_schema.sql` (e qualquer ajuste de seed, se aplicável).
- Alterações/novos arquivos em `src/modulos/` seguindo o padrão do projeto.
- Ajustes em middlewares (se necessário) para suportar perfis.
- Atualização (ou complementação) da coleção do Insomnia com:
  - requests para conta cliente
  - requests de compra no modo cliente

---

## Critérios de aceite (o professor vai validar)
- CRUD completo do usuário cliente funciona end-to-end.
- Existe vínculo confiável entre o usuário cliente e o registro em `clientes`.
- Usuário cliente consegue executar o fluxo de compra até a conclusão.
- Regras do estoque/vendas continuam válidas (não vende veículo duas vezes; não compra veículo indisponível; constraints/validações coerentes).
- Rotas respeitam autenticação e o perfil do usuário (cliente não acessa dados de outros clientes).
