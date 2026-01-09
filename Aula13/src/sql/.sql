-- USUÁRIOS
CREATE TABLE usuarios (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    email VARCHAR(150) NOT NULL UNIQUE,
    senha_hash TEXT NOT NULL,
    perfil Varchar(50) check (perfil in ('Admin', 'Seller')) default 'Seller'
);

-- CLIENTES
CREATE TABLE clientes (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    documento VARCHAR(30) NOT NULL UNIQUE,
    email VARCHAR(150) UNIQUE,
    telefone VARCHAR(20)
);

-- VEÍCULOS
CREATE TABLE veiculos (
    id SERIAL PRIMARY KEY,
    marca VARCHAR(50) NOT NULL,
    modelo VARCHAR(50) NOT NULL,
    ano INT NOT NULL CHECK (
        ano >= 1900 AND ano <= EXTRACT(YEAR FROM CURRENT_DATE)
    ),
    preco NUMERIC(10,2) NOT NULL CHECK (preco > 0),
    status Varchar(100) NOT NULL DEFAULT 'Disponivel' check (status in ('Vendido', 'Disponivel', 'Reservado'))
);

-- VENDAS
CREATE TABLE vendas (
    id SERIAL PRIMARY KEY,
    veiculo_id INT NOT NULL,
    cliente_id INT NOT NULL,
    vendedor_id INT NOT NULL,
    valor_final NUMERIC(10,2) NOT NULL CHECK (valor_final > 0),
    data_venda TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    forma_pagamento VARCHAR(50) NOT NULL,
    status status_venda NOT NULL,
    observacoes TEXT,

    CONSTRAINT fk_venda_veiculo
        FOREIGN KEY (veiculo_id)
        REFERENCES veiculos (id)
        ON DELETE RESTRICT,

    CONSTRAINT fk_venda_cliente
        FOREIGN KEY (cliente_id)
        REFERENCES clientes (id)
        ON DELETE RESTRICT,

    CONSTRAINT fk_venda_vendedor
        FOREIGN KEY (vendedor_id)
        REFERENCES usuarios (id)
        ON DELETE RESTRICT
);