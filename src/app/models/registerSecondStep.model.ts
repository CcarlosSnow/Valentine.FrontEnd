import { BaseModel } from "./base.model";

export class RegisterSecondStepModel extends BaseModel {
    direccionSolicitante: string;
    codigoPostalSolicitante: string;
    pais: number;
    departamento: number;
    provincia: number;
    distrito: number;
    montoSolicitado: number;
    plazoPrestamo: number;
    seguroDesgravamen: string;
    estadoCivil: number;
    apellidoPaternoConyuge: string;
    apellidoMaternoConyuge: string;
    nombresConyuge: string;
    tipoDocumentoConyuge: number;
    numeroDocConyuge: string;
    tipoActividad: number;
    rubroActividad: number;
    lugarTrabajo: string;
    tipoCuenta: number;
    banco: number;
    cuentanumbererbancaria: string;
    esPEP: boolean;
    cargoPEP: string;
}