// Create web server
// 1. npm init -y
// 2. npm install express
// 3. npm install body-parser
// 4. npm install nodemon
// 5. npm install cors
// 6. npm install mongoose
// 7. npm install dotenv
// 8. npm install multer
// 9. npm install bcrypt
// 10. npm install jsonwebtoken
// 11. npm install express-fileupload
// 12. npm install cookie-parser
// 13. npm install express-session
// 14. npm install connect-mongo
// 15. npm install method-override
// 16. npm install morgan

// 1. import express
const express = require('express');
const app = express();

// 2. import body-parser
const bodyParser = require('body-parser');
app.use(bodyParser.json());

// 3. import cors
const cors = require('cors');
app.use(cors());

// 4. import mongoose
const mongoose = require('mongoose');

// 5. import dotenv
const dotenv = require('dotenv');
dotenv.config();

// 6. import multer
const multer = require('multer');
const path = require('path');

// 7. import bcrypt
const bcrypt = require('bcrypt');

// 8. import jsonwebtoken
const jwt = require('jsonwebtoken');

// 9. import express-fileupload
const fileUpload = require('express-fileupload');

// 10. import cookie-parser
const cookieParser = require('cookie-parser');

// 11. import express-session
const session = require('express-session');

// 12. import connect-mongo
const MongoStore = require('connect-mongo')(session);

// 13. import method-override
const methodOverride = require('method-override');

// 14. import morgan
const morgan = require('morgan');

// 15. import path
const path = require('path');

// 16. import fs
const fs = require('fs');

// 17. import models
const Post = require('./models/Post');
const User = require('./models/User');
const Comment = require('./models/Comment');

// 18. import middleware
const auth = require('./middleware/auth');

// 19. import controllers
const postController = require('./controllers/postController');
const userController = require('./controllers/userController');
const commentController = require('./controllers
