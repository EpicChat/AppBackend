pipeline {
    agent {
        docker {
            image 'node:20.10.0-alpine3.18' 
            args '-p 3000:3000' 
        }
    }
    stages {
        stage('Build') { 
            steps {
                sh 'yarn && yarn build && yarn start:prod' 
            }
        }
    } 
}