const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const http = require('http');
const socketio = require('socket.io');
const cors = require('cors');

const app = express();
const server = http.createServer(app);
const io = socketio(server, { cors: { origin: '*' } });

app.use(express.json());
app.use(cors());

const UserSchema = new mongoose.Schema({
  username: String,
  password: String,
});

const MessageSchema = new mongoose.Schema({
  username: String,
  message: String,
  timestamp: { type: Date, default: Date.now },
});

const User = mongoose.model('User', UserSchema);
const Message = mongoose.model('Message', MessageSchema);

mongoose.connect('mongodb://localhost:27017/chat-app', { useNewUrlParser: true, useUnifiedTopology: true });

const demoUsername = 'demo';
const demoPassword = 'password';

app.post('/api/login', async (req, res) => {
  const { username, password } = req.body;
  if (username === demoUsername && password === demoPassword) {
    const token = jwt.sign({ username }, 'secret', { expiresIn: '1h' });
    return res.json({ success: true, token });
  }

  const user = await User.findOne({ username });
  if (!user) {
    return res.json({ success: false });
  }

  const isMatch = await bcrypt.compare(password, user.password);
  if (isMatch) {
    const token = jwt.sign({ username }, 'secret', { expiresIn: '1h' });
    return res.json({ success: true, token });
  }

  res.json({ success: false });
});

io.on('connection', (socket) => {
  console.log('New connection');

  socket.on('sendMessage', ({ username, message }) => {
    const msg = new Message({ username, message });
    msg.save();
    io.emit('message', { username, message });
  });

  socket.on('disconnect', () => {
    console.log('User disconnected');
  });
});

server.listen(5000, () => {
  console.log('Server is running on port 5000');
});
