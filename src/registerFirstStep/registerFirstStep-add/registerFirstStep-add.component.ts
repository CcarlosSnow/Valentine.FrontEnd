import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { RegisterFirstStepModel, ParametroModel } from '../../app/models';
import { ClipsService, ParametroService, SolicitudCreditoService } from '../../app/services';
import { FormStatusConstants, ParametroConstants } from '../../app/shared/constants';


@Component({
    selector: 'app-registerFirstStep-add',
    templateUrl: './registerFirstStep-add.component.html',
    styleUrls: ['./registerFirstStep-add.component.css'],
})

export class RegisterFirstStepAddComponent implements OnInit, OnDestroy {
    tipoDocumentoCombo: ParametroModel[] = [];
    sexoCombo: ParametroModel[] = [];
    gradoInstruccionCombo: ParametroModel[] = [];
    destinoCreditoCombo: ParametroModel[] = [];
    registerFirstStepModel: RegisterFirstStepModel = new RegisterFirstStepModel();
    productId: number;

    registerFirstStepForm = new FormGroup({
        nombreSolicitante: new FormControl(null, [Validators.required]),
        apellidoParternoSolicitante: new FormControl(null, [Validators.required]),
        apellidoMaternoSolicitante: new FormControl(null, [Validators.required]),
        fechaNacimiento: new FormControl(null, [Validators.required]),
        tipoDocumento: new FormControl(null, [Validators.required]),
        numeroDocumento: new FormControl(null, [Validators.required]),
        digitoVerificacion: new FormControl(null, [Validators.required]),
        genero: new FormControl(null, [Validators.required]),
        correoElectronico: new FormControl(null, [Validators.required]),
        numeroCelular: new FormControl(null, [Validators.required]),
        ingresosMensuales: new FormControl(null, [Validators.required]),
        gradoInstruccion: new FormControl(null, [Validators.required]),
        destinoCredito: new FormControl(null, [Validators.required]),
    });

    constructor(
        private clipsService: ClipsService,
        private parametroService: ParametroService,
        private solicitudCreditoService: SolicitudCreditoService,
        private route: ActivatedRoute,
        private router: Router,
    ) {

        this.parametroService.getByPadreID(ParametroConstants.TIPODOCUMENTO).subscribe(
            (result: ParametroModel[]) => {
                this.tipoDocumentoCombo = result;
            },
            error => console.error(error));

        this.parametroService.getByPadreID(ParametroConstants.SEXO).subscribe(
            (result: ParametroModel[]) => {
                this.sexoCombo = result;
            },
            error => console.error(error));

        this.parametroService.getByPadreID(ParametroConstants.GRADOINSTRUCCION).subscribe(
            (result: ParametroModel[]) => {
                this.gradoInstruccionCombo = result;
            },
            error => console.error(error));

        this.parametroService.getByPadreID(ParametroConstants.DESTINOCREDITO).subscribe(
            (result: ParametroModel[]) => {
                this.destinoCreditoCombo = result;
            },
            error => console.error(error));
    }

    ngOnInit(): void {
        // any
    }

    ngOnDestroy(): void {
        // any
    }

    registerFirstStep(): void {
        this.clipsService.getResultEvaluation().subscribe(
            (result: string) => {
                console.log(result);
                if (result == 'rechazada') {
                    this.router.navigate(['/notSuccessClips']);
                }
                else {
                    this.registerFirstStepModel.setAll(this.registerFirstStepForm.value);
                    this.solicitudCreditoService.registerFirstStep(this.registerFirstStepModel).subscribe(
                        (registerFirstStepModelResult: RegisterFirstStepModel) => {
                            this.router.navigate([`/registerSecondStep/${registerFirstStepModelResult.codigoSolCredito}`]);
                        }, error => console.error(error)
                    );
                }
            }, error => console.error(error)
        );
    }
}
