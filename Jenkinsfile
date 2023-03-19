pipeline {
  agent any

  tools {nodejs "Node JS"}

  environment {
    DB_USER = 'sample'
    DB_PASSWORD = 'sample'
    host = 'localhost'
    DB_PORT = 5432
    DB_DATABASE = 'sample'
  }

  stages {    
    stage('Cloning') {
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
    stage('Build') {
      steps {
          sh 'docker build -t node_swagger .'
          sh 'docker run --name swagger_local -dp 3000:3000 node_swagger'
          sh 'docker ps'
      }
    }
  }

  post {
    success {
      echo 'Build Success'
    }
    failure {
      echo 'Build Failued'
    }
  }
}