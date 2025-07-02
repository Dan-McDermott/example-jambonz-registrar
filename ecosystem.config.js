module.exports = {
  apps : [{
    name: 'medbizz-registrar',
    script: 'app.js',
    instance_var: 'INSTANCE_ID',
    exec_mode: 'fork',
    instances: 1,
    autorestart: true,
    watch: false,
    max_memory_restart: '1G',
    env: {
      NODE_ENV: 'production',
      LOGLEVEL: 'trace',
      HTTP_PORT: 80,
      JAMBONZ_ACCOUNT_SID: 'b4bf890a-043b-4c69-a51e-5dbc2fdcdb56',
      JAMBONZ_API_KEY: 'b95c8b44-e03d-44a5-8b68-f8da488a3ab2',
      JAMBONZ_REST_API_BASE_URL: 'https://api.jambonz.us/v1',
      WEBHOOK_SECRET: 'wh_secret_qZNgsqZ7WJN6x6JnsR4sUf',
      OUTBOUND_SIP_HOST: 'afterours.sip.jambonz.cloud'
    }
  }]
};
