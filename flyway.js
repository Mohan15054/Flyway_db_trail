const { ConnectionString } = require('connection-string');
require('dotenv').config();

const cs = new ConnectionString(
  process.env.POSTGRES_URL
);

// console.log(process.env.POSTGRES_URL);
const {
  user: USERNAME,
  password: PASSWORD,
  HOST = cs.host,
  DATABASE = cs.path && cs.path[0],
  SCHEMA = 'public',
  SCHEMAS = 'public',
} = cs;

console.log(cs);

module.exports = {
  flywayArgs: {
    url: `jdbc:postgresql://${HOST}/${DATABASE}`,
    schemas: SCHEMAS || SCHEMA,
    defaultSchema: SCHEMA,
    locations: `filesystem:sql`,
    user: USERNAME,
    password: PASSWORD,
    table: 'flyway_schema_history',
    sqlMigrationSuffixes: '.sql',
  },
  // Use to configure environment variables used by flyway
  env: {
    JAVA_ARGS: '-Djava.util.logging.config.file=./conf/logging.properties',
  },
//   version: '6.3.2', // optional, empty or missing will download the latest
  mavinPlugins: [
    {
      // optional, use to add any plugins (ie. logging)
      groupId: 'org.slf4j',
      artifactId: 'slf4j-api',
      version: '1.7.25',
      // This can be a specifc url to download that may be different then the auto generated url.
      downloadUrl:
        'https://repo1.maven.org/maven2/org/slf4j/slf4j-api/1.7.25/slf4j-api-1.7.25.jar',
    },
    {
      groupId: 'org.slf4j',
      artifactId: 'slf4j-jdk14',
      version: '1.7.25',
    },
  ],
  downloads: {
    storageDirectory: `${__dirname}/tmp`, // optional, the specific directory to store the flyway downloaded files. The directory must be writable by the node app process' user.
    expirationTimeInMs: -1, // optional, -1 will never check for updates, defaults to 1 day.
  },
};
