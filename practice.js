const http = require('http');
const fs = require('fs');
const express = require('express');

const app = express();

// route configuration
app.get('/', (req, res) => {
  res.sendFile('index.html', { root: __dirname });
})

app.get('/about', (req, res) => {
  res.sendFile('about.html', { root: __dirname });
})

app.get('/contact-me', (req, res) => {
  res.sendFile('contact-me.html', { root: __dirname });
})

app.get('/contact', (req, res) => {
  res.redirect('/contact-me');
})

app.use((req, res) => {
  res.status(404).sendFile('404.html', { root: __dirname })
})

// starting server
app.listen('3000', () => {
  console.log('listening for requests')
})


/* OLD CODE */ 

// const server = http.createServer((req, res) => {
//   console.log(req.url);
//   res.setHeader('Content-Type', 'text/html')

//   path = '';
//   switch (req.url) {
//     case '/':
//       path += 'index.html';
//       res.statusCode = 200;
//       break;

//     case '/about':
//       path += 'about.html';
//       res.statusCode = 200;
//       break;
    
//     case '/contact-me':
//       path += 'contact-me.html';
//       res.statusCode = 200;
//       break;

//     case '/contact':
//       res.statusCode = 301;
//       res.setHeader('Location', '/contact-me')
//       res.end();
//       break;
    
//     default:
//       path += '404.html';
//       res.statusCode = 404
//       break;
//   }

//   fs.readFile(path, (err, data) => {
//     if (err){
//       console.log(err)
//       res.end()
//     } else {
//       res.write(data, () => {
//         console.log("write completed")
//       })
//       res.end()
//     }
//   })
// })
