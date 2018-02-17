import { BaseModel } from "./base.model";

export class RegisterFirstStepModel extends BaseModel
{
    codigoSolCredito: number;
    nombreSolicitante: string;
    apellidoParternoSolicitante: string;
    apellidoMaternoSolicitante: string;
    fechaNacimiento: string;
    tipoDocumento: number;
    numeroDocumento: string;
    digitoVerificacion: string;
    genero: number;
    correoElectronico: string;
    numeroCelular: string;
    ingresosMensuales: number;
    gradoInstruccion: number;
    destinoCredito: number;

    constructor() {
        super();
    }
}