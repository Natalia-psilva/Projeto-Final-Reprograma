const patientsModel = require("../src/models/patientsModel");

describe("GET model test", () => {
    const patient = new patientsModel({
        "name": "Aroldo da Silva Santos",
        "yearsOld": 72,
        "gender": "masculino",
        "telephone": "54545454",
        "email": "Aroldinho123@gmail.com",
        "clinicalDiagnosis": "DPOC",
        "medicalHistory": "Paciente com quadro de DPOC, GOLD 3, fumante há 50 anos(150 anos-maço)",
        "medicines": [
            "antihipertensivo"
        ],
        "allergies": [],
        "physiotherapyDiagnosis": "Paciente dispneico, intolerante ao exercício e atividade física moderadas e déficit mucociliar prejudicada.",
        "physiotherapist": "64bae06610ac0cccb323e282",
    });
    it("Deve chamar o Schema e retornar o nome correto do paciente", () => {
        expect(patient.name).toBe("Aroldo da Silva Santos");
    });

    it("Deve chamar o Schema e retornar a idade correta do paciente", () => {
        expect(patient.yearsOld).toBe(72); 
    });

    it("Deve chamar o Schema e retornar o genero correto do paciente", () => { 
        expect(patient.gender).toBe("masculino");
    });

    it("Deve chamar o Schema e retornar o telefone correto do paciente", () => { 
        expect(patient.telephone).toBe("54545454");
    });

    it("Deve chamar o Schema e retornar o email correto do paciente", () => { // Corrected the test name to "correto"
        expect(patient.email).toBe("Aroldinho123@gmail.com");
    });

    it("Deve chamar o Schema e retornar o diagnóstico clínico correto do paciente", () => { // Corrected the test name to "correto"
        expect(patient.clinicalDiagnosis).toBe("DPOC");
    });

    it("Deve chamar o Schema e retornar o histórico médico correto do paciente", () => { // Corrected the test name to "correto"
        expect(patient.medicalHistory).toBe("Paciente com quadro de DPOC, GOLD 3, fumante há 50 anos(150 anos-maço)");
    });

    it("Deve chamar o Schema e retornar os medicamentos corretos do paciente", () => { // Corrected the test name to "corretos"
        expect(patient.medicines).toEqual(["antihipertensivo"]); // Use "toEqual" for arrays
    });

    it("Deve chamar o Schema e retornar as alergias corretas do paciente", () => { // Corrected the test name to "corretas"
        expect(patient.allergies).toEqual([]); // Use "toEqual" for arrays
    });

    it("Deve chamar o Schema e retornar o diagnóstico fisioterapêutico correto do paciente", () => { // Corrected the test name to "correto"
        expect(patient.physiotherapyDiagnosis).toBe("Paciente dispneico, intolerante ao exercício e atividade física moderadas e déficit mucociliar prejudicada.");
    });

    it("Deve chamar o Schema e retornar o fisioterapeuta correto do paciente", () => { 
        expect(JSON.stringify(patient.physiotherapist).substring(1, ((JSON.stringify(patient.physiotherapist)).length - 1))).toBe("64bae06610ac0cccb323e282");
    });
});

describe("POST model test", () => {

    it("Deve salvar no ba de dados a novo paciente", () => {
        const patient = new patientsModel({
            "name": "Aroldo da Silva Santos",
            "yearsOld": 72,
            "gender": "masculino",
            "telephone": "54545454",
            "email": "Aroldinho123@gmail.com",
            "clinicalDiagnosis": "DPOC",
            "medicalHistory": "Paciente com quadro de DPOC, GOLD 3, fumante há 50 anos(150 anos-maço)",
            "medicines": [
                "antihipertensivo"
            ],
            "allergies": [],
            "physiotherapyDiagnosis": "Paciente dispneico, intolerante ao exercício e atividade física moderadas e déficit mucociliar prejudicada.",
            "physiotherapist": "64bae06610ac0cccb323e282",

        })
        patient.save().then((dados) => {
            expect(dados.name).toBe("Aroldo da Silva Santos");
        });

    })
})




describe("UPDATE model test", () => {
    it("Deve editar o nome e salvar no banco de dados o novo paciente", () => {
        const patient = new patientsModel({
            "name": "Aroldo da Silva Santos",
            "yearsOld": 72,
            "gender": "masculino",
            "telephone": "54545454",
            "email": "Aroldinho123@gmail.com",
            "clinicalDiagnosis": "DPOC",
            "medicalHistory": "Paciente com quadro de DPOC, GOLD 3, fumante há 50 anos(150 anos-maço)",
            "medicines": [
                "antihipertensivo"
            ],
            "allergies": [],
            "physiotherapyDiagnosis": "Paciente dispneico, intolerante ao exercício e atividade física moderadas e déficit mucociliar prejudicada.",
            "physiotherapist": "64bae06610ac0cccb323e282",

        });
        patient.name = "Aroldo da Silva Santos"
        patient.save().then((dados) => {
            expect(dados.name).toBe("Aroldo da Silva Santos");
        })
    });
})

describe("DELETE model test", () => {
    it("Deve remover do banco de dados o paciente", () => {
        const patient = new patientsModel({
            "name": "Aroldo da Silva Santos",
            "yearsOld": 72,
            "gender": "masculino",
            "telephone": "54545454",
            "email": "Aroldinho123@gmail.com",
            "clinicalDiagnosis": "DPOC",
            "medicalHistory": "Paciente com quadro de DPOC, GOLD 3, fumante há 50 anos(150 anos-maço)",
            "medicines": [
                "antihipertensivo"
            ],
            "allergies": [],
            "physiotherapyDiagnosis": "Paciente dispneico, intolerante ao exercício e atividade física moderadas e déficit mucociliar prejudicada.",
            "physiotherapist": "64bae06610ac0cccb323e282",

        });
        patient.save().then((dados) => {
            patient.delete().then((novosDados) => {
                expect(dados.name).toBe(null);
            })
        })
    })
})