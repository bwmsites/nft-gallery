import {
    ArgumentMetadata,
    Injectable,
    PipeTransform,
    BadRequestException,
} from '@nestjs/common';
import { ObjectSchema } from 'joi';

@Injectable()
export class CustomValidatorPipe implements PipeTransform {
    constructor(private schema: ObjectSchema) {}

    transform(value: any, _metadata: ArgumentMetadata) {
        const { error } = this.schema.validate(value);
        console.log('Validation ERROR: ', value);

        if (error) {
            throw new BadRequestException(
                'Some required params are not found or have invalid values',
            );
        }

        return value;
    }
}
