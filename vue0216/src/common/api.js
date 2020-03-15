// import { post } from './http';
import { post } from './http';

const login = (p) => { return post('login/login', p); };

export default login;
