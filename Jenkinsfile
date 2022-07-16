pipeline {
  agent any

  tools {nodejs "Node JS"}

  stages {    
    stage('Cloning Git') {
      steps {
        git branch: 'main',
        url: 'https://github.com/dlyaswanth/Fastify-Swagger.git'
      }
    }        
    stage('Install dependencies') {
      steps {
        sh 'npm i --force'
      }
    }     
    stage('Test') {
      steps {
         sh 'npm start'
      }
    }             
  }
}