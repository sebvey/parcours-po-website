import pkg from '../../package.json';

/** Version du site (MAJOR égal à celui du cours). Source : package.json. */
export const siteVersion: string = pkg.version;

/** Version du cours sur laquelle le site est aligné. Source : package.json, parcoursPo.coursVersion. */
export const coursVersion: string = pkg.parcoursPo.coursVersion;
