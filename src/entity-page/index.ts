import {
  apply,
  applyTemplates,
  chain,
  move,
  mergeWith,
  Rule,
  SchematicContext,
  Tree,
  url,
} from '@angular-devkit/schematics';

import { strings } from '@angular-devkit/core';

function generateFiles(schema: any): Rule {
  const path = schema.viewPath + '/';

  return (tree: Tree, context: SchematicContext) => {
      const templateSource = apply(url('./files'), [
          applyTemplates({
              ...strings,
              ...schema,
          }),
          move(path),
      ]);

      return chain([mergeWith(templateSource)])(tree, context);
  };
}

export default function (schema: any): Rule {
  return (tree: Tree, context: SchematicContext) => {
      return chain([generateFiles(schema)])(tree, context);
  };
}
