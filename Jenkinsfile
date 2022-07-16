pipeline {
  agent any

  tools {nodejs "node"}

  stages {    
    stage('Cloning Git') {
      steps {
        git 'https://github.com/dlyaswanth/Fastify-Swagger'
      }
    }        
    stage('Install dependencies') {
      steps {
        sh 'npm i'
      }
    }     
    stage('Test') {
      steps {
         sh 'npm start'
      }
    }             
  }
}