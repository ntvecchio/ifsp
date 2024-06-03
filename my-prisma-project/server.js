const express = require('express');
const bodyParser = require('body-parser');
const { PrismaClient } = require('@prisma/client');
const path = require('path');
const prisma = new PrismaClient();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse request body
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Middleware to serve static files
app.use(express.static(path.join(__dirname, 'my-prisma-project/public')));

// Serve the registration HTML file
app.get('/registro', (_req, res) => {
    const filePath = path.join(__dirname, 'my-prisma-project/public/registro.html');
    res.sendFile(filePath);
});

// Handle the form submission
app.post('/public/registro', async (req, res) => {
    const { nome, usuario, email, senha, telefone, nascimento, sexo } = req.body;

    try {
        // Verifica se o usuário já existe
        const existingUser = await prisma.usuario.findUnique({
            where: {
                usuario: usuario,
            },
        });

        if (existingUser) {
            return res.status(400).json({ error: 'Nome de usuário já está em uso' });
        }

        const newUser = await prisma.usuario.create({
            data: {
                nome_completo: nome,
                usuario,
                email,
                senha,
                telefone,
                nascimento: new Date(nascimento),
                sexo,
                tipo: 'Cliente' // Assuming all new users are of type 'Cliente'
            },
        });
        res.status(201).json({ message: 'User registered successfully!', user: newUser });
        res.redirect('/login');
    } catch (error) {
        console.error('User registration failed:', error);
        res.status(500).json({ error: 'User registration failed', details: error.message });
    }
});

app.get('/login', (_req, res) => {
    const filePath = path.join(__dirname, 'my-prisma-project/public/Login.html');
    res.sendFile(filePath);
});

app.post('/public/login', async (req, res) => {
    const { email, senha } = req.body;

    // Verifique se o usuário existe no banco de dados e se as credenciais estão corretas
    const user = await prisma.usuario.findUnique({
        where: { email, senha },
    });

    if (user) {
        // As credenciais estão corretas, redirecione o usuário para a página principal
        res.redirect('public/Pag1');
    } else {
        // As credenciais estão incorretas, exiba uma mensagem de erro na página de login
        res.send('Credenciais inválidas. Por favor, tente novamente.');
    }
});

app.get('/Pag1', (_req, res) => {
    const filePath = path.join(__dirname, 'my-prisma-project/public/Pag1.html');
    res.sendFile(filePath);
});


app.post('/finalize-purchase', async (req, res) => {
    const { checkin, checkout, valorReserva } = req.body;
    // Substitua isso pelo ID do usuário autenticado em uma aplicação real
    const usuarioId = 1; // Id do usuário autenticado

    try {
        const newOrder = await prisma.pedido.create({
            data: {
                usuario_id: usuarioId,
                evento_id: 1, // Substitua pelo ID do evento apropriado
                pedido_data: new Date(),
                pedido_valor_pago: parseFloat(valorReserva.replace('Valor da reserva: R$ ', '').replace(',', '.')),
                ingresso_codigo: 'ABC123', // Gere um código de ingresso único
                ingresso_tipo: 'Inteira', // Substitua pelo tipo real de ingresso
                NomeEvento: 'Evento Teste' // Substitua pelo nome do evento real
            }
        });

        res.json({ message: 'Pedido criado com sucesso!', orderId: newOrder.id });
    } catch (error) {
        console.error('Erro ao criar pedido:', error);
        res.status(500).json({ error: 'Erro ao criar pedido', message: error.message });
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:3000`);
});
