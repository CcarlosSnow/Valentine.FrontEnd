import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { RegisterSecondStepModel, ParametroModel, UbigeoModel } from '../../app/models';
import { ParametroService, SolicitudCreditoService, UbigeoService } from '../../app/services';
import { FormStatusConstants, ParametroConstants } from '../../app/shared/constants';

@Component({
    selector: 'app-registerSecondStep-add',
    templateUrl: './registerSecondStep-add.component.html',
    styleUrls: ['./registerSecondStep-add.component.css'],
})

export class RegisterSecondStepAddComponent implements OnInit, OnDestroy {
    paisCombo: UbigeoModel[] = [];
    departamentoCombo: UbigeoModel[] = [];
    provinciaCombo: UbigeoModel[] = [];
    distritoCombo: UbigeoModel[] = [];
    estadoCivilCombo: ParametroModel[] = [];
    tipoDocumentoCombo: ParametroModel[] = [];
    rubroActividadtipoDocumentoCombo: ParametroModel[] = [];
    tipoActividadCombo: ParametroModel[] = [];
    rubroActividadCombo: ParametroModel[] = [];
    tipoCuentaCombo: ParametroModel[] = [];
    nombreBancoCombo: ParametroModel[] = [];
    registerSecondStepModel: RegisterSecondStepModel = new RegisterSecondStepModel();
    id: number;

    registerSecondStepForm = new FormGroup({
        direccionSolicitante: new FormControl(null, [Validators.required]),
        codigoPostalSolicitante: new FormControl(null, [Validators.required]),
        pais: new FormControl(null, [Validators.required]),
        departamento: new FormControl(null, [Validators.required]),
        provincia: new FormControl(null, [Validators.required]),
        distrito: new FormControl(null, [Validators.required]),
        montoSolicitado: new FormControl(null, [Validators.required]),
        plazoPrestamo: new FormControl(null, [Validators.required]),
        seguroDesgravamen: new FormControl(null, [Validators.required]),
        estadoCivil: new FormControl(null, [Validators.required]),
        detalleMotivo: new FormControl(null, [Validators.required]),
        apellidoPaternoConyuge: new FormControl(null, [Validators.required]),
        apellidoMaternoConyuge: new FormControl(null, [Validators.required]),
        nombresConyuge: new FormControl(null, [Validators.required]),
        tipoDocumentoConyuge: new FormControl(null, [Validators.required]),
        numeroDocConyuge: new FormControl(null, [Validators.required]),
        tipoActividad: new FormControl(null, [Validators.required]),
        rubroActividad: new FormControl(null, [Validators.required]),
        lugarTrabajo: new FormControl(null, [Validators.required]),
        tipoCuenta: new FormControl(null, [Validators.required]),
        banco: new FormControl(null, [Validators.required]),
        cuentaInterbancaria: new FormControl(null, [Validators.required]),
        esPEP: new FormControl(),
        cargoPEP: new FormControl(null, [Validators.required]),
    });

    constructor(
        private parametroService: ParametroService,
        private solicitudCreditoService: SolicitudCreditoService,
        private route: ActivatedRoute,
        private router: Router,
        private ubigeoService: UbigeoService
    ) {

        this.route.params.subscribe(params => {
            const id = params.Id;
            if (id) {
                this.id = id;
                console.log(id);
            }
        });

        this.ubigeoService.getByPadreID(0).subscribe(
            (result: UbigeoModel[]) => {
                this.paisCombo = result;
            },
            error => console.error(error));

        this.parametroService.getByPadreID(ParametroConstants.ESTADOCIVIL).subscribe(
            (result: ParametroModel[]) => {
                this.estadoCivilCombo = result;
            },
            error => console.error(error));

        this.parametroService.getByPadreID(ParametroConstants.TIPODOCUMENTO).subscribe(
            (result: ParametroModel[]) => {
                this.tipoDocumentoCombo = result;
            },
            error => console.error(error));

        this.parametroService.getByPadreID(ParametroConstants.TIPOACTIVIDAD).subscribe(
            (result: ParametroModel[]) => {
                this.tipoActividadCombo = result;
            },
            error => console.error(error));

        this.parametroService.getByPadreID(ParametroConstants.RUBROACTIVIDAD).subscribe(
            (result: ParametroModel[]) => {
                this.rubroActividadCombo = result;
            },
            error => console.error(error));

        this.parametroService.getByPadreID(ParametroConstants.TIPOCUENTA).subscribe(
            (result: ParametroModel[]) => {
                this.tipoCuentaCombo = result;
            },
            error => console.error(error));

        this.parametroService.getByPadreID(ParametroConstants.BANCOS).subscribe(
            (result: ParametroModel[]) => {
                this.nombreBancoCombo = result;
            },
            error => console.error(error));
    }

    ngOnInit(): void {
        // any
    }

    ngOnDestroy(): void {
        // any
    }

    paisChange(id: any): void {
        console.log('id', id);
        this.ubigeoService.getByPadreID(id).subscribe(
            (result: UbigeoModel[]) => {
                console.log(result);
                this.departamentoCombo = result;
            },
            error => console.error(error));
    }

    departamentoChange(id: number): void {
        this.ubigeoService.getByPadreID(id).subscribe(
            (result: UbigeoModel[]) => {
                this.provinciaCombo = result;
            },
            error => console.error(error));
    }

    provinciaChange(id: number): void {
        this.ubigeoService.getByPadreID(id).subscribe(
            (result: UbigeoModel[]) => {
                this.distritoCombo = result;
            },
            error => console.error(error));
    }

    registerSecondStep(): void {
        this.registerSecondStepModel.setAll(this.registerSecondStepForm.value);
        this.solicitudCreditoService.registerSecondStep(this.id, this.registerSecondStepModel).subscribe(
            (registerSecondStepModelResult: RegisterSecondStepModel) => {
                this.router.navigate(['/successAll']);
            }, error => console.error(error)
        );
    }
}
