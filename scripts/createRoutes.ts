import capitalize from 'capitalize';
import fs from 'fs-extra';
import glob from 'glob';
import path from 'path';

const generatePath = path.join(__dirname, '..', 'src', '__generated__');
const pagesPath = path.join(__dirname, '..', 'src', 'pages');
const globPattern = path.join(pagesPath, '**', '*.tsx');
const paths = glob
  .sync(globPattern)
  .map(s => s.replace(pagesPath, '').replace(/\.tsx$/, ''))
  .reduce<Record<string, string>>(
    (acc, s) => ({
      ...acc,
      [capitalize.words(s.replace(/^\//, '')).replace('-', '')]: s.replace(/index$/, ''),
    }),
    {},
  );

if (!fs.pathExists(generatePath)) {
  fs.mkdirpSync(generatePath);
}

fs.writeFileSync(path.join(generatePath, 'Routes.tsx'), createRoutesCode(JSON.stringify(paths, null, 2)));

function createRoutesCode(json: string): string {
  return `/* eslint-disable */
/* cSpell:disable */

export const Routes = ${json}
`;
}
