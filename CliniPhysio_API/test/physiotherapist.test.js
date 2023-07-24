const physiotherapistModel = require("../src/models/physiotherapistModel")


describe("GET model test", () => {
    const physiotherapist = new physiotherapistModel({
        "name": "Natalia de Paiva",
        "telephone": 54545454,
        "email": "nati123@gmail.com",
        "crefito": "12345-F",
        "cpf": 11111111111,
        "specialty": "FISIOTERAPIA RESPIRATÓRIA",
        "patients": [],
    });

    it("Deve chamar o Schema e retornar o nome correto do fisioterapeuta", () => {
        expect(physiotherapist.name).toBe("Natalia de Paiva");
    });

    it("Deve chamar o Schema e retornar o telefone correto do fisioterapeuta", () => {
        expect(physiotherapist.telephone).toBe(54545454);
    });

    it("Deve chamar o Schema e retornar o email correto do fisioterapeuta", () => {
        expect(physiotherapist.email).toBe("nati123@gmail.com");
    });

    it("Deve chamar o Schema e retornar o crefito correto do fisioterapeuta", () => {
        expect(physiotherapist.crefito).toBe("12345-F");
    });

    it("Deve chamar o Schema e retornar o cpf correto do fisioterapeuta", () => {
        expect(physiotherapist.cpf).toBe(11111111111);
    });

    it("Deve chamar o Schema e retornar a especialidade do fisioterapeuta", () => {
        expect(physiotherapist.specialty).toBe("FISIOTERAPIA RESPIRATÓRIA");
    });

    it("Deve chamar o Schema e retornar os pacientes do fisioterapeuta", () => {
        expect(physiotherapist.patients).toEqual([]);
    });
});


describe("POST model test", () => {

    it("Deve salvar no banco de dados o novo fisioterapeuta", () => {
        const physiotherapist = new physiotherapistModel({
            "name": "Natalia de Paiva",
            "telephone": 54545454,
            "email": "nati123@gmail.com",
            "crefito": "12345-F",
            "cpf": 11111111111,
            "specialty": "FISIOTERAPIA RESPIRATÓRIA",
            "patients": [],
        })
        physiotherapist.save().then((dados) => {
            expect(dados.name).toBe("Natalia de Paiva")
        });
    })
})

describe("UPDATE model test", () => {
    it("Deve editar o nome do fisioterapeuta", () => {
        const physiotherapist = new physiotherapistModel({
            "name": "Natalia de Paiva",
            "telephone": 54545454,
            "email": "nati123@gmail.com",
            "crefito": "12345-F",
            "cpf": 11111111111,
            "specialty": "FISIOTERAPIA RESPIRATÓRIA",
            "patients": [],
        });
        physiotherapist.name = "Natalia de Paiva"
        physiotherapist.save().then((dados) => {
            expect(dados.name).toBe("Natalia de Paiva")
        })
    });
})


describe("DELETE model test", () => {
    it("Deve remover no banco de dados o fisioterapeuta", () => {
        const physiotherapist = new physiotherapistModel({
            "name": "Natalia de Paiva",
            "telephone": 54545454,
            "email": "nati123@gmail.com",
            "crefito": "12345-F",
            "cpf": 11111111111,
            "specialty": "FISIOTERAPIA RESPIRATÓRIA",
            "patients": [],
        });
        physiotherapist.save().then((dados) => {
        physiotherapist.delete().then((novosDados) => {
                expect(dados.name).toBe(null);
            })
        });
    })
})