# ESTUTURA DE DADOS 

## Usuários 

1. id
2. name 
3. nickname
4. email

## Tarefas 

1. id
2. title
3. description
4. deadline
5. status: 'to_do' || 'doing' || 'done'
6. assignees


# CRIAÇÃO DE TABELAS - mySQL

~~~SQL
CREATE TABLE to_do_list_users (
    id VARCHAR(64) PRIMARY KEY,
    name VARCHAR (64) NOT NULL,
    nickname VARCHAR(64) NOT NULL,
    email VARCHAR(64) NOT NULL
);

CREATE TABLE to_do_list_tasks (
    id VARCHAR(64) PRIMARY KEY,
    title VARCHAR(64) NOT NULL,
    description VARCHAR(1024) DEFAULT "No description provided",
    deadline DATE,
    status ENUM("TO_DO", "DOING", "DONE") DEFAULT "TO_DO",
    author_id VARCHAR(64),
    FOREIGN KEY (author_id) REFERENCES to_do_list_users(id)
);

CREATE TABLE to_do_list_assignees (
    task_id VARCHAR(64),
    assignee_id VARCHAR(64),
    PRIMARY KEY (task_id, assignee_id),
    FOREIGN KEY (task_id) REFERENCES to_do_list_tasks(id),
    FOREIGN KEY (assignee_id) REFERENCES to_do_list_users(id)
);
~~~

# ENDPOINTS 

## Criar usuário 

1. Método: PUT
2. Path: /user
3. Body: 
    name (req)
    nickname (req)
    email (req)

## Pegar usuário pelo id

1. Método: GET
2. Path: /users/:id
3. Body de Resposta - retorna um erro se não encontrado: 
    id 
    nickname

## Editar usuário 
1. Método: POST
2. Path: /users/edit/id:
3. Body: (não pode ser vazio, opcional)
        name 
        nickname
        email

## Criar tarefa
1. Método: PUT
2. Path: /task
3. Body: 
        title
        description
        deadline (formmato DD/MM/YYYY)
        authorId

## Buscar tarefa
1. Método: GET
2. Path: /task/:id
3. Body: 
        id
        title
        description
        deadline (formmato DD/MM/YYYY)
        authorId
        authorNickname




