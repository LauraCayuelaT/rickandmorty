const app = require('../src/app');
const session = require('supertest');
const agent = session(app);


describe('GET /rickandmorty/character/:id',()=>{
    it('Responde con status: 200',async ()=>{
        const response = await agent.get('/rickandmorty/character/1')
        expect(response.statusCode).toEqual(200);
    })
    it('Responde un objeto con las propiedades: "id", "name", "species", "gender", "status", "origin" e "image"', async()=>{
        const response = await agent.get('/rickandmorty/character/1')
        expect(response.body).toHaveProperty("id", "name", "species", "gender", "status", "origin" , "image")
    })
    it("Si hay un error responde con status: 500",async ()=>{
        const response = await agent.get('/rickandmorty/character/10000');
        expect(response.statusCode).toEqual(500);
    })
})

describe("GET /rickandmorty/login",()=>{
    it("La información de login es correcta",async()=>{
        const response = await agent.get(`/rickandmorty/login?email=lauracayuela91@gmail.com&password=lala123`);
        expect(response.body).toEqual({access:true})
    })
    it("La información de login es incorrecta",async()=>{
        const response = await agent.get(`/rickandmorty/login?email=lauracayuela@gmail.com&password=la123`);
        expect(response.body).toEqual({access:false})
    })

})

describe("POST /rickandmorty/fav",()=>{
    it("La respuesta debe ser un arreglo", async()=>{
        const response = await agent.post('/rickandmorty/fav');
        expect(Array.isArray(response.body)).toBeTruthy();
        
    })
    it("Debe retornar el arreglo con el elemento previo incluido",async()=>{
        const response = await agent.post('/rickandmorty/fav');
        expect(response.body.length).toBeGreaterThan(1);
    })
})

describe("DELETE /rickandmorty/fav/:id",()=>{
    it("Debe devolver el arreglo con los elementos previos",async()=>{
        const post = await agent.post('/rickandmorty/fav')
        const response = await agent.delete('/rickandmorty/fav/10000');
        expect(response.body).toEqual(post.body)
    })
    it("Debe eliminar el id correcto",async()=>{
        const response = await agent.delete('/rickandmorty/fav/10');
        expect(response.body).not.toHaveProperty("id",10)

    })
})