import express from 'express';
import createForm from '../controllers/form.js';



const formRouter =express.Router()

formRouter.post('/form',createForm)

export default formRouter