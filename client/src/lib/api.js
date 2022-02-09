import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:4000',
    timeout: 10000,
});

export const getNodes = async () => {
    const nodes = await api.get('/nodes');
    return nodes.data;
}

export const addNode = async (node) => {
    const createdNode = await api.post('/add', node);
    return createdNode.data;
}
