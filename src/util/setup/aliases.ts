import { join, resolve } from 'path';
import * as moduleAlias from 'module-alias';

const path = resolve(__dirname, '../..');

moduleAlias.addAliases({
    '@src': join(path),
    '@config': join(path, 'config'),
    '@modules': join(path, 'modules'),
});
