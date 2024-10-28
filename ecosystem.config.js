module.exports = {
  apps : [{
    script: './src/app.js',
    watch: '.'
  }],

  deploy : {
    production : {
      user : 'root',
      host : '118.31.167.102',
      ref  : 'origin/main',
      repo : 'https://github.com/paopt/cicd-node-demo',
      path : '/var/www/cicd-node',
      'pre-deploy-local': '',
      'post-deploy' : 'npm run start',
      'pre-setup': ''
    }
  }
};
