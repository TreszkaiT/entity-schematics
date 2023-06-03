import {
  chain,
  Rule,
  schematic,
  SchematicContext,
  Tree,
} from "@angular-devkit/schematics";

import { EntitySchema } from "./schemas";

export default function (schema: EntitySchema): Rule {

  return (_tree: Tree, context: SchematicContext) => {
    const moduleSchematics: Rule[] = [];

    ['api', 'data', 'store', 'form', 'util', 'collection', 'admin', 'page'].forEach((moduleName) => {
      if (schema.modules.includes(moduleName)) {
        moduleSchematics.push(schematic(`entity-${moduleName}`, schema));
      }
    });

    context.logger.info(moduleSchematics.length.toString());

    return chain(moduleSchematics);
  };
 
}
